import React from 'react';

import customerImg01 from '../assets/imgs/customer01.jpg';

export default function Topbar({ toggleSidebar }) {
  return (
    // <nav className="navbar navbar-dark bg-primary px-3">
    //   <button className="btn btn-outline-light me-2 d-md-none" onClick={toggleSidebar}>
    //     ☰ Menu
    //   </button>
    //   <span className="navbar-brand mb-0 h1">Gestion des Stagiaires</span>
    // </nav>
    <div className="topbar_dash">
        <div className="toggle_dash"  onClick={toggleSidebar}>
          <ion-icon name="menu-outline" />
        </div>
        <div className="search_dash">
          <label>
            <input type="text" placeholder="Search here" />
            {/* <ion-icon name="search-outline"></ion-icon> */}
            <i className="fa-solid fa-magnifying-glass icon_search" />
          </label>
        </div>
        <div className="user_dash">
          {/* <img src="assets/imgs/customer01.jpg" alt="" /> */}
          <img src={customerImg01} alt="" />
        </div>
    </div>
  );
}
