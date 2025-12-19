import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { superAdminAPI } from "../../../apis/superAdminAPI";
import { toast } from 'react-toastify';

export default function Profil_Add() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Juriste"); // default role
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("  ");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [form, setForm] = useState({
    name: '',
    email: '',
    role: 'Juriste',
    phone: '', // ⚠️ NE PAS pré-remplir avec le hash
    password: '',
    status: ''
  });

  const navigate = useNavigate();


  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {

      // const response = await superAdminAPI.createProfil(form); 
      // if (response.data.success) {
      //   toast.success("Admin ajouté avec succès !");

      //   // setForm({
      //   //   username: '',
      //   //   prenom: '',
      //   //   email: '',
      //   //   password: '',
      //   //   division_service: '',
      //   //   id_admin_create: user.role === 'admin-editor' ? user.id : ''
      //   // });
      //   // fetchUserAndEncadrants();

      //   setSuccess("Profil created successfully!");
      //   setName("");
      //   setEmail("");
      //   setRole("Juriste");
      //   setPhone("");
      //   setPassword("");
      // }

      const token = localStorage.getItem("token");


      const response = await superAdminAPI.createProfil(form);

      // // Call backend API to create new user
      // const response = await axios.post(
      //   "http://localhost:5000/api/profile", 
      //   {
      //     // name,
      //     // email,
      //     // role,
      //     // phone,
      //     // password
      //     form
      //   },
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   }
      // );

      console.log("-----S data -----");
      console.log(response.data);
      console.log("-----E data -----");
      
      if (response.data.success) {
        setSuccess(response.data.message || "Profil created successfully!");
        // alert(response.data.message || "Profil created successfully!");
        toast.success(response.data.message || "Profil created successfully!");
        setName("");
        setEmail("");
        setRole("Juriste");
        setPhone("");
        setPassword("");
      }
      
      

      // Optionally redirect to profile list
      // navigate("/profils");
    } catch (err) {
      // setError(err.response?.data?.message || "Failed to create profil");
      const errorMessage =
        err.response?.data?.message || "Failed to create profil";

      setError(errorMessage);
      alert(errorMessage);
      console.log("ERROR :",errorMessage);
      
      toast.error(errorMessage);
    }
  };

  return (
    <div className="container">
      <button
      className="btn btn-secondary mt-4"
      onClick={() => navigate(-1)}
    >
      ← Back
    </button>
      {/* <h1>S_Test</h1> */}
      <form className="row g-3 mt-4"  onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="inputName" className="form-label">Name</label>
          <input 
            type="text"
            name="name" 
            className="form-control" 
            id="inputName"
            placeholder="Enter name"
            // value={name}
            // onChange={(e) => setName(e.target.value)}

            value={form.name}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail" className="form-label">Email</label>
          <input 
            type="email" 
            name="email" 
            className="form-control" 
            id="inputEmail"
            placeholder="Enter email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}

            value={form.email}
            onChange={handleChange}
            required
          />
        </div>


        
        <div className="col-md-6">
          <label htmlFor="inputPhone" className="form-label">Phone</label>
          <input 
            type="text"
            name="phone"  
            className="form-control" 
            id="inputPhone" 
            // onChange={(e) => setPhone(e.target.value)}


            value={form.phone}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword" className="form-label">Password</label>
          <input 
            type="password" 
            name="password" 
            className="form-control" 
            id="inputPassword" 
            // onChange={(e) => setPassword(e.target.value)}

            value={form.password}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="Role" className="form-label">Role :</label>
          <select 
            id="role" 
            name="role" 
            className="form-select" 
            // value={role} 
            // onChange={(e) => setRole(e.target.value)}

            value={form.role}
            onChange={handleChange}
          >
            <option value="Juriste">Juriste</option>
            <option value="Administrateur">Administrateur</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="status" className="form-label">Status :</label>
          <select 
            id="status" 
            name="status" 
            className="form-select"
            value={form.status}
            onChange={handleChange}
          >
            <option value="1">Active</option>
            <option value="0">Désactivé</option>
          </select>
        </div>


        

        {/* <div 
          // className="col-12"
          className="col-md-6"
        >
          <button type="submit" className="btn btn-primary">Sign in</button>
        </div> */}

        {/* *************** */}
        <div className="d-grid gap-2 col-6 mx-auto">
          <button 
            className="btn btn-outline-success" 
            type="submit"
          >Ajouter</button>
        </div>


      </form>
      {/* <h1>E_Test</h1> */}
    </div>
    
  );
}
