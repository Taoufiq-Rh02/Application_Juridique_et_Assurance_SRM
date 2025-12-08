import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import SuperAdminSidebar from '../components/Sidebar/SuperAdminSidebar';
import JuristeSidebar from '../components/Sidebar/JuristeSidebar'; // create this for Juriste
import Topbar from '../components/Topbar';

export default function MainLayoutDashboard({ children }) {
  const { user } = useAuth();
  const [sidebarActive, setSidebarActive] = useState(false);

  if (!user) return null; // or redirect to login page

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // or use removeToken() from utils/auth
    window.location.href = '/';
  };

  // Dynamically select sidebar component based on role
  let SidebarComponent = null;
  if (user.role === 'Administrateur') SidebarComponent = SuperAdminSidebar;
  else if (user.role === 'Juriste') SidebarComponent = JuristeSidebar;
  // add more roles here as needed

  return (
    <div className="container_dash">
      {SidebarComponent && <SidebarComponent active={sidebarActive} onLogout={handleLogout} />}
      
      <div className={`main_dash ${sidebarActive ? "active" : ""}`}>
        <Topbar toggleSidebar={toggleSidebar} />
        <div className="content_dash">{children}</div>
      </div>
    </div>
  );
}
