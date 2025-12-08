import MainLayoutDashboard from "../layouts/MainLayoutDashboard";
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
  {
    path: "/Profils",
    element: <div>Page Profils</div>
  },
  {
    path: "/encadrants",
    element: <div>Encadrants Page</div>
  }
];

export default superAdminRoutes;
