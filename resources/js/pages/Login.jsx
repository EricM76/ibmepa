import React from 'react'
import { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import WOW from 'wow.js'

export const Login = () => {
    useEffect(() => {
        new WOW({
            live: false,
          }).init();
       
    }, []);
  return (
    <>
                <Navbar />
                <div className="container-xxl py-5 ">
                <div className="container">
                    <div
                        className="text-center wow fadeInUp"
                        data-wow-delay="0.1s"
                    >
                        <h6 className="section-title bg-white text-center text-primary px-3">
                           Bienvenid@s
                        </h6>
                        <h1 className="mb-5">Ingresá al sitio</h1>
                    </div>
                    <div className="row g-4">
         
                    
                        <div
                            className="col-md-12 wow fadeInUp"
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
  )
}
