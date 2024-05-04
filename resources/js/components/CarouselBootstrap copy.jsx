import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import $ from "jquery";
window.$ = $;

export const CarouselBootstrap = () => {
    return (
        <div className="container-fluid p-0 mb-5">
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                  
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div
                            className="item position-relative"
                            style={{ width: "100%" }}
                        >
                            <img
                                className="d-block w-100"
                                src="img/carousel-1.jpg"
                                alt=""
                                style={{ height: "100vh", objectFit: "cover" }}
                            />
                            <div
                                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                                style={{ background: "rgba(24, 29, 56, .7)" }}
                            >
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-sm-10 col-lg-9">
                                            <h5 className="text-primary text-uppercase mb-3 animated slideInDown">
                                                Instituto Bíblico Metodista
                                                Pentecostal Argentino
                                            </h5>
                                            <h1 className="display-3 text-white animated slideInDown">
                                                Educación Bíblica de Excelencia
                                            </h1>
                                            <p className="fs-5 text-white mb-4 pb-2">
                                                Doctrinas cristianas evangélicas
                                                que todo creyente debe conocer.
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
                    </div>
                    <div className="carousel-item">
                        <div
                            className="item position-relative"
                            style={{ width: "100%" }}
                        >
                            <img
                                className="d-block w-100"
                                src="img/carousel-2.jpg"
                                alt=""
                                style={{ height: "100vh", objectFit: "cover" }}
                            />
                            <div
                                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                                style={{ background: "rgba(24, 29, 56, .7)" }}
                            >
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-sm-10 col-lg-8">
                                            <h5 className="text-primary text-uppercase mb-3 animated slideInDown">
                                                Instituto Bíblico Metodista
                                                Pentecostal Argentino
                                            </h5>
                                            <h1 className="display-3 text-white animated slideInDown">
                                                Sea parte de nuestra comunidad
                                            </h1>
                                            <p className="fs-5 text-white mb-4 pb-2">
                                                Participe del grupo de estudio
                                                más cercano a su domicilio.
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
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};
