import React from 'react';
import { Link , NavLink , useLocation, useNavigate  } from 'react-router-dom';
import { removeToken } from '../../utils/auth';

// export default function SuperAdminSidebar({ active, setActive, onLogout }) {
export default function SuperAdminSidebar({ active, setActive }) {
    const location = useLocation(); // Get current path

    const navigate = useNavigate();

    const handleLogout = () => {
        removeToken();          // remove JWT token from localStorage
        navigate('/');          // redirect to login page
    };

    return (
        <nav 
            className={`navigation_dash ${active ? "active" : ""}`}
        >
            {/*  */}
            <ul className="m-0 p-0">
                <li>
                    <a href="#">
                        <span className="icon_dash">
                            <ion-icon name="home-outline" />
                        </span>
                        <span className="title">Brand Name</span>
                    </a>
                </li>
                {/* Example Link - Dashboard */}
                <li className={location.pathname === "/dashboard" ? "activeNavigation_dash" : ""}>
                    <NavLink to="/dashboard">
                        <span className="icon_dash">
                            <ion-icon name="home-outline" />
                        </span>
                        <span className="title">Dashboard</span>
                    </NavLink>
                </li>
                <li  
                    className={location.pathname.startsWith("/stagiaires") ? "activeNavigation_dash" : ""}
                >
                    <NavLink  
                        to="/Profils"
                    >
                        <span className="icon_dash">
                            <ion-icon name="people-outline" />
                        </span>
                        <span className="title">Profils</span>
                    </NavLink>
                </li>
                <li  
                    className={location.pathname.startsWith("/stagiaires") ? "activeNavigation_dash" : ""}
                >
                    <NavLink  
                        to="/stagiaires"
                    >
                        <span className="icon_dash">
                            <ion-icon name="people-outline" />
                        </span>
                        <span className="title">Stagiaires</span>
                    </NavLink>
                </li>
                <li  
                    className={location.pathname.startsWith("/division") ? "activeNavigation_dash" : ""}
                >
                    <NavLink  
                        to="/division_service"
                    >
                        <span className="icon_dash">
                            <ion-icon name="people-outline" />
                        </span>
                        <span className="title">Divisions</span>
                    </NavLink>
                </li>
                <li  className={location.pathname.startsWith("/encadrants") ? "activeNavigation_dash" : ""}>
                    <NavLink  
                        to="/encadrants"
                    >
                        <span className="icon_dash">
                            <ion-icon name="people-outline" />
                        </span>
                        <span className="title">Encadrants</span>
                    </NavLink>
                </li>
                <li  
                    className={location.pathname.startsWith("/admins") ? "activeNavigation_dash" : ""}
                >
                    <NavLink  
                        to="/admins"
                    >
                        <span className="icon_dash">
                            <ion-icon name="people-outline" />
                        </span>
                        <span className="title">Admins</span>
                    </NavLink>
                </li>
                <li  
                    onClick={handleLogout}
                >
                    <a href="#">
                        <span className="icon_dash">
                            <ion-icon name="log-out-outline" />
                        </span>
                        <span className="title">Sign Out</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}
