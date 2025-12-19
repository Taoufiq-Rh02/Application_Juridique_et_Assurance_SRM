import { useEffect, useState } from "react";
import LogoutButton from '../../../components/LogoutButton.jsx';

import customerImg01 from '../../../assets/imgs/customer01.jpg';
import customerImg02 from '../../../assets/imgs/customer02.jpg';
import { NavLink } from 'react-router-dom';

import { superAdminAPI } from "../../../apis/superAdminAPI";

export default function ProfilsPanel() {

  const [profiles, setProfiles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const limit = 10;


  // 
  const fetchProfiles = async (currentPage = 1) => {
    try {
      setLoading(true);
      console.log("start get from back");
      
      const response = await superAdminAPI.getProfiles(currentPage, limit);

      console.log("response :",response);
      setProfiles(response.data.data);
      setPage(response.data.page);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Erreur chargement profils", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfiles(page);
  }, [page]);

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };
  // 


  return (
    <div>
      <div>
        <div className='container'>
          <center><h1>Profils Panel</h1></center>
          {/* <LogoutButton /> */}
        </div>
        

        <div className="container text-center">
          {/* <div className="row">
            <div className="col-sm-8">col-sm-8</div>
            <div className="col-sm-4">col-sm-4</div>
          </div> */}
          <div className="row mb-2">
            {/* <div className="col-sm">
            </div> */}
            <div className="col">
              <h2 className="float-start">Liste Profils</h2>
            </div>
            <div className="col">
              <NavLink
                to="/profilAdd"
                className="btn btn-outline-success float-end"
              >
                {/* <span className="icon_dash">
                  <ion-icon name="people-outline" />
                </span> */}
                <span className="title">Add Profils</span>
              </NavLink>
            </div>
          </div>
        </div>

          
        
        <div className='container'> 
          {/* **** */}
          {loading ? (
            <p className="text-center">Chargement...</p>
          ) : (
            <>
              <div className="table-responsive">
                <table className="table table-bordered table-hover">
                  <thead className="table-dark">
                    <tr>
                      <th>#</th>
                      <th>ID</th>
                      <th>Nom</th>
                      <th>Email</th>
                      <th>Rôle</th>
                      <th>Téléphone</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {profiles.length > 0 ? (
                      profiles.map((p, index) => (
                        <tr key={p.id}>
                          <td>{(page - 1) * limit + index + 1}</td>
                          <td>{p.id}</td>
                          <td>{p.name}</td>
                          <td>{p.email}</td>
                          <td>
                            <span className="badge bg-info text-dark">
                              {p.role}
                            </span>
                          </td>
                          <td>{p.phone || "-"}</td>
                          {/* <td>{p.is_active}</td> */}
                          <td>
                            {p.is_active === 1 ? (
                              <span className="badge bg-success">Active</span>
                            ) : (
                              <span className="badge bg-danger">Inactive</span>
                            )}
                          </td>
                          <td>
                            <NavLink
                              to={`/profil/edit/${p.id}`}
                              className="btn btn-outline-primary btn-sm"
                            >
                              Edit
                            </NavLink>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7" className="text-center">
                          Aucun profil trouvé
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              {/* PAGINATION */}
              <div className="d-flex justify-content-between align-items-center mt-3">
                <button
                  className="btn btn-outline-primary"
                  onClick={handlePrev}
                  disabled={page === 1}
                >
                  ⬅ Précédent
                </button>

                <span>
                  Page <strong>{page}</strong> / {totalPages}
                </span>

                <button
                  className="btn btn-outline-primary"
                  onClick={handleNext}
                  disabled={page === totalPages}
                >
                  Suivant ➡
                </button>
              </div>
            </>
          )}
          {/* **** */}
        </div>


        {/* --***************************************-- */}
        <hr />
      </div>
        
    </div>
  )
}
