import { db } from '../../config/db.js';
import bcrypt from 'bcryptjs';
const SALT_ROUNDS = 10;


// exports.createAdmin = (req, res) => {
export const createProfile_V1 = (req, res) => {
    console.log("** Staaar **");
    console.log("** 8 **");
    console.log("** ************* **");
    console.log("** createAdmin **");
    console.log("** ************* **");
    const Admin = req.body;
    console.log("Admin :",Admin);
    console.log("** ************* **");
    return res.status(500).json({
        success: true,
        message: "Admin ajouté avec succès V2",
    });

};


export const createProfile = async (req, res) => {
    console.log("---- CREATE PROFILE ----");

    try {
        // const user = req.body.form;  // 🔥 Extract data correctly

        const user = req.body;  // 🔥 Extract data correctly

        console.log("User:", user);

        if (!user.name || !user.email || !user.password || !user.role) {
            console.log("**** Missing required fields ****");
            return res.status(400).json({
                success: false,
                message: "Missing required fields",
            });
        }

        // Hash password
        const salt = bcrypt.genSaltSync(10);
        // const hashedPassword = bcrypt.hashSync(user.password, 10);
        const hashedPassword = bcrypt.hashSync(user.password, salt);

        // 🔍 1) CHECK IF EMAIL EXISTS
        const [existing] = await db.execute(
            "SELECT id FROM users WHERE email = ?",
            [user.email]
        );

        if (existing.length > 0) {
            console.log("**** Cet email existe déjà ****");
            return res.status(400).json({
                success: false,
                message: "Cet email existe déjà",
            });
        }

        // 🟢 2) INSERT NEW USER
        const insertQuery = `
            INSERT INTO users (name, email, role_id, phone, password, is_active)
            VALUES (
                ?, 
                ?, 
                (SELECT id FROM Role WHERE name = ? LIMIT 1),
                ?, 
                ?,
                ?
            )
        `;

        const [result] = await db.execute(insertQuery, [
            user.name,
            user.email,
            user.role,  
            user.phone || null,
            hashedPassword,
            user.status,
        ]);

        // 🟢 SUCCESS
        console.log("**** Profil ajouté avec succès ****");
        return res.status(201).json({
            success: true,
            message: "Profil ajouté avec succès BCk",
            data: {
                id: result.insertId,
                name: user.name,
                email: user.email,
                role: user.role,
                status: user.status,
            }
        });

    } catch (error) {
        console.error("❌ Error createProfile:", error);
        console.log("**** Erreur serveur ****");
        return res.status(500).json({
            success: false,
            message: "Erreur serveur",
        });
    }
};


export const getAllProfiles = async (req, res) => {
    console.log("---- GET ALL PROFILES ----");

    try {
        // Pagination params
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        console.log("page:", page);
        console.log("limit:", limit);
        console.log("offset:", offset);

        // 🔢 1) COUNT TOTAL USERS
        // const countQuery = `
        //     SELECT COUNT(*) AS total
        //     FROM users u
        //     JOIN Role r ON u.role_id = r.id
        // `;

        const countQuery = `
            SELECT COUNT(*) AS total
            FROM users u
            JOIN Role r ON u.role_id = r.id
            WHERE u.is_deleted = 0
        `;

        const [[countResult]] = await db.execute(countQuery);
        const total = countResult.total;
        const totalPages = Math.ceil(total / limit);

        // 📄 2) FETCH PAGINATED DATA
        // const dataQuery = `
        //     SELECT 
        //         u.id,
        //         u.name,
        //         u.email,
        //         u.phone,
        //         u.is_active,
        //         r.name AS role
        //     FROM users u
        //     JOIN Role r ON u.role_id = r.id
        //     ORDER BY u.id DESC
        //     LIMIT ? OFFSET ?
        // `;


        const dataQuery = `
            SELECT 
                u.id,
                u.name,
                u.email,
                u.phone,
                u.is_active,
                r.name AS role
            FROM users u
            JOIN Role r ON u.role_id = r.id
            WHERE u.is_deleted = 0
            ORDER BY u.id DESC
            LIMIT ? OFFSET ?
        `;

        const [rows] = await db.execute(dataQuery, [limit, offset]);

        // ✅ RESPONSE
        return res.status(200).json({
            success: true,
            data: rows,
            page,
            totalPages,
            total
        });

    } catch (error) {
        console.error("❌ Error getAllProfiles:", error);
        return res.status(500).json({
            success: false,
            message: "Erreur serveur"
        });
    }
};


export const getProfileById = async (req, res) => {
  try {
    const { id } = req.params;

    const [rows] = await db.execute(`
      SELECT 
        u.id,
        u.name,
        u.email,
        u.phone,
        u.is_active AS status,
        r.name AS role
      FROM users u
      JOIN Role r ON u.role_id = r.id
      WHERE u.id = ?
    `, [id]);

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Profil introuvable"
      });
    }

    res.json({
      success: true,
      data: rows[0]
    });

  } catch (error) {
    console.error("getProfileById error:", error);
    res.status(500).json({
      success: false,
      message: "Erreur serveur"
    });
  }
};



export const updateProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, role, password } = req.body;

    // Check email conflict
    const [existing] = await db.execute(
      "SELECT id FROM users WHERE email = ? AND id != ?",
      [email, id]
    );

    if (existing.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Email déjà utilisé"
      });
    }

    let passwordQuery = "";
    let params = [name, email, phone, role, id];

    if (password && password.trim() !== "") {
      const hashed = bcrypt.hashSync(password, 10);
      passwordQuery = ", password = ?";
      params.splice(4, 0, hashed); // insert before id
    }

    const query = `
      UPDATE users
      SET 
        name = ?,
        email = ?,
        phone = ?,
        role_id = (SELECT id FROM Role WHERE name = ? LIMIT 1)
        ${passwordQuery}
      WHERE id = ?
    `;

    await db.execute(query, params);

    res.json({
      success: true,
      message: "Profil mis à jour avec succès V2"
    });

  } catch (error) {
    console.error("updateProfile error:", error);
    res.status(500).json({
      success: false,
      message: "Erreur serveur"
    });
  }
};


export const deleteProfile = async (req, res) => {
    // Soft Delete instead of hard delete
    try {
        const { id } = req.params;

        const [result] = await db.execute(
        "UPDATE users SET is_deleted = 1, is_active = 0 WHERE id = ?",
        [id]
        );

        if (result.affectedRows === 0) {
        return res.status(404).json({
            success: false,
            message: "Profil introuvable",
        });
        }

        return res.json({
        success: true,
        message: "Profil supprimé avec succès",
        });

    } catch (error) {
        console.error("Delete profile error:", error);
        return res.status(500).json({
        success: false,
        message: "Erreur serveur",
        });
    }
};
