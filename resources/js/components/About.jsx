import React from 'react'
import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{minHeight: "400px"}}>
                    <div className="position-relative h-100">
                        <img className="img-fluid position-absolute w-100 h-100" src="img/leer-biblia-1.png" alt="" style={{objectFit: "cover"}}/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <h6 className="section-title bg-white text-start text-primary pe-3">Nosotros</h6>
                    <h1 className="mb-4">Bienvenidos a IBMEPA</h1>
                    <p className="mb-4">Nuestro modelo de enseñanza está orientado en capacitar a todo creyente que desee profundizar su conocimiento en la Palabra de Dios, a fin estar preparado para ejercer el liderazgo en su congregación.</p>
                    <p className="mb-4 fst-italic text-center">"Procura con diligencia presentarte a Dios aprobado, como obrero que no tiene de qué avergonzarse, que usa bien la palabra de verdad."</p>
                    <p className='text-end fw-bold'> 2° a Timoteo 2:15 </p>
                    <div className="row gy-2 gx-4 mb-4">
                    <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Enseñanza 100% bíblica</p>
                        </div>
                   
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Material online las 24h</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Grupos de estudio</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Tutores comprometidos</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Seguimiento personalizado</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Certificación nacional</p>
                        </div>
                    </div>
                    <Link className="btn btn-primary py-3 px-5 mt-2" to={'/informacion'}>Más información</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
