import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function DefaultRoute() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  // Eğer kullanıcı giriş yapmışsa, login/register sayfalarına erişimi engelle
  if (isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
