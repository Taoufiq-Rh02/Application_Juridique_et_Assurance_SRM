import MainLayoutDashboard from "../layouts/MainLayoutDashboard";
import ProfilsPanel from "../pages/dashboards/superAdmin/ProfilPanel";
import Profils_Add from "../pages/dashboards/superAdmin/Profil_Add";
import Profil_Edit from "../pages/dashboards/superAdmin/Profil_Edit";
import SuperAdminDashboard from "../pages/dashboards/superAdmin/SuperAdminDashboard";

const superAdminRoutes = [
  {
    path: "/dashboard/superadmin",
    element: (
        <MainLayoutDashboard>
            <SuperAdminDashboard />
        </MainLayoutDashboard>
    )
  },
  // {
  //   path: "/Profils",
  //   element: <div>Page Profils</div>
  // },
  {
    path: "/profils",
    element: (
        <MainLayoutDashboard>
            <ProfilsPanel />
        </MainLayoutDashboard>
    )
  },
  {
    path: "/profilAdd",
    element: (
        <MainLayoutDashboard>
            <Profils_Add />
        </MainLayoutDashboard>
    )
  },
  {
    path: "/profil/edit/:id",
    element: (
        <MainLayoutDashboard>
            <Profil_Edit />
        </MainLayoutDashboard>
    )
  },
  {
    path: "/encadrants",
    element: <div>Encadrants Page</div>
  }
];

export default superAdminRoutes;
