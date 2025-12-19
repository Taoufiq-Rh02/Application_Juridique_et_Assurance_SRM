import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage.jsx";
import ProtectedRoute from "./router/ProtectedRoute";
import superAdminRoutes from "./roles/superadmin.routes";
import juristeRoutes from "./roles/juriste.routes";
import { AuthProvider, useAuth } from "./context/AuthContext";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RoleBasedRoutes() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <Routes>
      {user.role === "Administrateur" &&
        superAdminRoutes.map((r, i) => (
          <Route
            key={i}
            path={r.path}
            element={
              <ProtectedRoute role="Administrateur">
                {r.element}
              </ProtectedRoute>
            }
          />
        ))
      }

      {user.role === "Juriste" &&
        juristeRoutes.map((r, i) => (
          <Route
            key={i}
            path={r.path}
            element={
              <ProtectedRoute role="Juriste">
                {r.element}
              </ProtectedRoute>
            }
          />
        ))
      }

      <Route path="*" element={<div>Unauthorized</div>} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>

        {/* ✅ TOAST CONTAINER (GLOBAL) */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        />
        <Routes>
          <Route path="/" element={<LoginPage />} />

          {/* NESTED ROUTES BASED ON ROLE */}
          <Route path="/*" element={<RoleBasedRoutes />} />

          {/* 403 */}
          <Route path="/unauthorized" element={<div>403 Unauthorized</div>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
