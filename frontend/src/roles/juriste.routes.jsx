import MainLayoutDashboard from "../layouts/MainLayoutDashboard";
import JuristeDashboard from "../pages/dashboards/juriste/JuristeDashboard";

const juristeRoutes = [
  {
    path: "/dashboard/juriste",
    element: (
        <MainLayoutDashboard>
            <JuristeDashboard />
        </MainLayoutDashboard>)
  }
];

export default juristeRoutes;
