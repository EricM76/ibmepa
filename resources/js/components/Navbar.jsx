import React from 'react';
import {Link, NavLink} from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
    <Link to={"/"} className="navbar-brand d-flex align-items-center px-4 px-lg-5">
        {/* <h2 className="m-0 text-primary"><i className="fa fa-book me-3"></i>eLEARNING</h2> */}
        <img src="/img/logo2.png" width={150} alt="" />
    </Link>
    <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to={"/"} className="nav-item nav-link active">Home</Link>
            <Link to={"/nosotros"} className="nav-item nav-link">Nosotros</Link>
            <Link to={"/materias"} className="nav-item nav-link">Materias</Link>
           {/*  <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                <div className="dropdown-menu fade-down m-0">
                    <a href="team.html" className="dropdown-item">Our Team</a>
                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                    <a href="404.html" className="dropdown-item">404 Page</a>
                </div>
            </div> */}
            <Link to={"/contacto"} className="nav-item nav-link">Contacto</Link>
        </div>
        <Link to={"/ingresar"} className="btn btn-primary border-0 rounded-0 py-4 px-lg-5 fs-6">INGRESAR<i className="fa fa-arrow-right ms-3"></i></Link>
    </div>
</nav>
  )
}
