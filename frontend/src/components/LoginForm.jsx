import { useState } from "react";
import { loginUser } from "../apis/authApi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth(); // use context login

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token, user } = await loginUser(email, password);
      login(token); // update context immediately

      // Redirect based on role
      if (user.role === "Administrateur") navigate("/dashboard/superadmin");
      else if (user.role === "Juriste") navigate("/dashboard/juriste");
      else navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container">

    
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input 
          type="email" 
          className="form-control" 
          id="exampleInputEmail1" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          // aria-describedby="emailHelp"
          placeholder="Email@exemple.com" 
        />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input 
          type="password" 
          className="form-control" 
          id="exampleInputPassword1"
          
          
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button 
          className="btn btn-outline-success" 
          type="submit"
        >Login</button>
      </div>
      <div className="mb-3">
        {error && <p>{error}</p>}
      </div>
      


      {/* <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button> */}
      {/* {error && <p>{error}</p>} */}
    </form>
    </div>
  );
};

export default LoginForm;
