import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import { Link } from "react-router-dom";
import $ from 'jquery';
window.$ = $;

export const Carousel = () => {
    return (
        <div className="container-fluid p-0 mb-5">

                <OwlCarousel items={1} className="owl-theme" loop center autoPlay>

                    <div className="item position-relative" style={{width:"100%"}}>
                        <img
                            className="img-fluid"
                            src="img/carousel-1.jpg"
                            alt=""
                            style={{height:"100vh",objectFit:"cover"}}
                        />
                        <div
                            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                            style={{ background: "rgba(24, 29, 56, .7)" }}
                        >
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-sm-10 col-lg-9">
                                        <h5 className="text-primary text-uppercase mb-3 animated slideInDown">
                                            Instituto Bíblico Metodista Pentecostal Argentino
                                        </h5>
                                        <h1 className="display-3 text-white animated slideInDown">
                                            Educación Bíblica de Excelencia
                                        </h1>
                                        <p className="fs-5 text-white mb-4 pb-2">
                                        Doctrinas cristianas evangélicas que todo creyente debe conocer.
                                        </p>
                                        <Link
                                            to={"/quienes-somos"}
                                            className="btn btn-outline-light py-md-3 px-md-5 me-3 animated slideInLeft"
                                        >
                                            Quienes somos
                                        </Link>
                                        <Link
                                            to={"/registro"}
                                            className="btn btn-primary py-md-3 px-md-5 animated slideInRight"
                                        >
                                            Regístrese
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item position-relative" style={{width:"100%"}}>
                        <img
                            className="img-fluid"
                            src="img/carousel-2.jpg"
                            alt=""
                            style={{height:"100vh",objectFit:"cover"}}
                        />
                        <div
                            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                            style={{ background: "rgba(24, 29, 56, .7)" }}
                        >
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-sm-10 col-lg-8">
                                        <h5 className="text-primary text-uppercase mb-3 animated slideInDown">
                                            Instituto Bíblico Metodista Pentecostal Argentino
                                        </h5>
                                        <h1 className="display-3 text-white animated slideInDown">
                                            Sea parte de nuestra comunidad
                                        </h1>
                                        <p className="fs-5 text-white mb-4 pb-2">
                                            Participe del grupo de estudio más cercano a su domicilio.
                                        </p>
                                        <Link
                                            to={"/quienes-somos"}
                                            className="btn btn-outline-light py-md-3 px-md-5 me-3 animated slideInLeft"
                                        >
                                            Peñas de estudio
                                        </Link>
                                        <Link
                                            to={"/registro"}
                                            className="btn btn-primary py-md-3 px-md-5 animated slideInRight"
                                        >
                                            Regístrese
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </OwlCarousel>
        </div>
    );
};
