import { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import DefaultRoute from "./DefaultRoute";

const LoginPage = lazy(() => import("../pages/LoginPage/index"));
const RegisterPage = lazy(() => import("../pages/RegistrationPage/index"));

export default function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route element={<DefaultRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
