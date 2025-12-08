import { db } from '../../config/db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log("start test login");
    // Generate password for test 
    const password2 = 'juriste123';
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password2, salt);

    console.log("hash :",hash);
    // 
    
    const [rows] = await db.query(
      `SELECT u.id, u.name, u.email, u.password, u.role_id, r.name as role_name
       FROM Users u
       JOIN Role r ON u.role_id = r.id
       WHERE u.email = ?`,
      [email]
    );

    console.log("rows :" , rows);
    

    if (rows.length === 0) return res.status(400).json({ message: "User not found" });

    const user = rows[0];

    const isMatch = await bcrypt.compare(password, user.password);

    console.log("password :" , password);
    console.log("user.password :" , user.password);

    console.log("isMatch :" , isMatch);
    
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    console.log("-----------");
    console.log("user.role_name :",user.role_name);
    console.log("-----------");
    
    const token = jwt.sign(
      { id: user.id, role_id: user.role_id, role_name: user.role_name },
      process.env.JWT_SECRET,
      { expiresIn: '8h' }
    );

    res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role_name } });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
