import React from "react";
import { Outlet } from "react-router-dom";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import NavbarAdmin from "../components/admin/NavbarAdmin";
import SidebarAdmin from "../components/admin/SiderBarAdmin";

export const AdminLayout = () => {
    return (
        <>
            <NavbarAdmin />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-3">
                        <SidebarAdmin />
                    </div>
                    <div className="col-12 col-md-9">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};
