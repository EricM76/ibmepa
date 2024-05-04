import React, {useEffect} from "react";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";
import WOW from 'wow.js'

export const Contact = () => {
    useEffect(() => {
        new WOW({
            live: false,
          }).init();
       
    }, []);
    return (
        <>
            <Navbar />
            <Header title={"Contacto"} />
            <div className="container-xxl py-5 ">
                <div className="container">
                    <div
                        className="text-center wow fadeInUp"
                        data-wow-delay="0.1s"
                    >
                        <h6 className="section-title bg-white text-center text-primary px-3">
                           Contáctenos
                        </h6>
                        <h1 className="mb-5">Envíenos su consulta</h1>
                    </div>
                    <div className="row g-4">
                        <div
                            className="col-md-6 wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                            <h5>Nuestras líneas de contacto</h5>
                            <hr />
                          
                            <div className="d-flex align-items-center mb-3">
                                <div
                                    className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                                    style={{width: "50px", height: "50px"}}
                                >
                                    <i className="fa fa-map-marker-alt text-white"></i>
                                </div>
                                <div className="ms-3">
                                    <h5 className="text-primary">Office</h5>
                                    <p className="mb-0">
                                        123 Street, New York, USA
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <div
                                    className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                                    style={{width: "50px", height: "50px"}}
                                >
                                    <i className="fa fa-phone-alt text-white"></i>
                                </div>
                                <div className="ms-3">
                                    <h5 className="text-primary">Mobile</h5>
                                    <p className="mb-0">+012 345 67890</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div
                                    className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                                    style={{width: "50px", height: "50px"}}
                                >
                                    <i className="fa fa-envelope-open text-white"></i>
                                </div>
                                <div className="ms-3">
                                    <h5 className="text-primary">Email</h5>
                                    <p className="mb-0">info@example.com</p>
                                </div>
                            </div>
                        </div>
                    
                        <div
                            className="col-md-6 wow fadeInUp"
                            data-wow-delay="0.5s"
                        >
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder="Your Name"
                                            />
                                            <label for="name">Su Nombre</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="Your Email"
                                            />
                                            <label for="email">
                                                Su Email
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="subject"
                                                placeholder="Subject"
                                            />
                                            <label for="subject">Asunto</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea
                                                className="form-control"
                                                placeholder="Leave a message here"
                                                id="message"
                                                style={{height: "150px",resize:"none"}}
                                            ></textarea>
                                            <label for="message">Mensaje</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button
                                            className="btn btn-primary w-100 py-3"
                                            type="submit"
                                        >
                                            Enviar mensaje
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
