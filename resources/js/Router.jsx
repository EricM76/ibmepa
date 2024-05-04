import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthLayout } from "./layouts/AuthLayout";
import { Home } from "./pages/home";
import { AboutPage } from "./pages/AboutPage";
import { AuthProvider } from "./context/AuthProvider";
import { CoursesPage } from "./pages/CoursesPage";
import { NotFound } from "./pages/NotFound";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { AdminLayout } from "./layouts/AdminLayout";
import { Admin } from "./pages/Admin";
import TableUsers from "./components/admin/TableUsers";
import { PublicRoutes } from "./routers/PublicRoutes";
import { AdminRoutes } from "./routers/AdminRoutes";
export default function Router() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/*" element={<PublicRoutes />} />
                    <Route path="admin" element={<AdminLayout />}>
                        <Route index  element={<Admin />} />
                        <Route path="users" element={<TableUsers />} />
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}
