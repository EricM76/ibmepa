import React, {useEffect} from 'react'
import { Navbar } from '../components/Navbar'
import { Link } from 'react-router-dom'
import WOW from 'wow.js'

export const NotFound = () => {
    useEffect(() => {
        new WOW({
            live: false,
          }).init();
       
    }, []);
  return (
    <>
    <Navbar/>
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container text-center">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                    <h1 className="display-1">404</h1>
                    <h1 className="mb-4">Página no encontrada</h1>
                    <p className="mb-4">¡Lo sentimos, la página que estás buscando no existe en nuestro sitio web!</p>
                    <Link className="btn btn-primary rounded-pill py-3 px-5" to={"/"}>Volver al Inicio</Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
