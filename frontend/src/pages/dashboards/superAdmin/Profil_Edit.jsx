import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { superAdminAPI } from "../../../apis/superAdminAPI";
import { toast } from "react-toastify";
import BackBtn from "../../../components/BackBtn";

export default function Profil_Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Juriste",
    password: "",
    status:""
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const res = await superAdminAPI.getProfileById(id);
        setForm(res.data.data);
      } catch {
        toast.error("Impossible de charger le profil");
      } finally {
        setLoading(false);
      }
    };
    loadProfile();
  }, [id]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await superAdminAPI.updateProfile(id, form);
      toast.success("Profil mis à jour");
    //   navigate(-1);
    } catch (err) {
      toast.error(err.response?.data?.message || "Erreur");
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Voulez-vous vraiment supprimer ce profil ?")) return;

    try {
        await superAdminAPI.deleteProfile(id);
        toast.success("Profil supprimé");
        navigate(-1);
    } catch (err) {
        toast.error(err.response?.data?.message || "Erreur suppression");
    }
    };


  if (loading) return <p>Chargement...</p>;

  return (
    <div className="container">
        <BackBtn />
        <h2>Modifier Profil</h2>

        <form onSubmit={handleSubmit} className="row g-3 mt-4">
            <div className="col-md-6">
                <label htmlFor="name" className="form-label">Name</label>
                <input 
                    className="form-control" name="name" value={form.name} onChange={handleChange} required />
            </div>
            <div className="col-md-6">
                <label htmlFor="email" className="form-label">Email</label>
                <input className="form-control" name="email" value={form.email} onChange={handleChange} required />
            </div>
            <div className="col-md-6">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input className="form-control" name="phone" value={form.phone} onChange={handleChange} />
            </div>
            <div className="col-md-6">
                <label htmlFor="password" className="form-label">Password (optionnel)</label>
                <input
                    className="form-control"
                    name="password"
                    type="password"
                    placeholder="Nouveau mot de passe (optionnel)"
                    value={form.password || ""}
                    onChange={handleChange}
                />
            </div>
            <div className="col-md-6">
                <label htmlFor="Role" className="form-label">Role :</label>
                <select className="form-select" name="role" value={form.role} onChange={handleChange}>
                    <option value="Juriste">Juriste</option>
                    <option value="Administrateur">Administrateur</option>
                </select>
            </div>
            <div className="col-md-6">
                <label htmlFor="status" className="form-label">Status :</label>
                <select className="form-select" name="status" value={form.status} onChange={handleChange}>
                    <option value="1">Active</option>
                    <option value="0">Désactivé</option>
                </select>
            </div>


            {/* <input className="form-control" name="name" value={form.name} onChange={handleChange} required /> */}
            {/* <input className="form-control" name="email" value={form.email} onChange={handleChange} required /> */}
            {/* <input className="form-control" name="phone" value={form.phone} onChange={handleChange} /> */}

            {/* <select className="form-select" name="role" value={form.role} onChange={handleChange}>
            <option value="Juriste">Juriste</option>
            <option value="Administrateur">Administrateur</option>
            </select> */}

            {/* <input
            className="form-control"
            name="password"
            type="password"
            placeholder="Nouveau mot de passe (optionnel)"
            value={form.password || ""}
            onChange={handleChange}
            /> */}

            <div className="container text-center mt-4">
                <div className="row">
                    <div className="col-sm-6  mt-2">
                        <div className="d-grid gap-2">
                            <button className="btn btn-success">Enregistrer</button>
                        </div>
                    </div>
                    <div className="col-sm-6  mt-2">
                        <div className="d-grid gap-2">
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={handleDelete}
                            >
                                Supprimer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex gap-2">
                    
                    
                    {/* <button type="button" className="btn btn-secondary" onClick={() => navigate(-1)}>
                        Retour
                    </button> */}
            </div>
        </form>
    </div>
  );
}
