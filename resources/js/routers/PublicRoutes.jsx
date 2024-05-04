import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout";
import { Home } from "../pages/home";
import { AboutPage } from "../pages/AboutPage";
import { CoursesPage } from "../pages/CoursesPage";
import { Contact } from "../pages/Contact";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";

export const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="nosotros" element={<AboutPage />} />
            <Route path="materias" element={<CoursesPage />} />
            <Route path="contacto" element={<Contact />} />
            <Route path="ingresar" element={<Login />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
