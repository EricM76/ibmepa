import React from 'react'

export const Categories = () => {
  return (
    <div className="container-xxl py-5 category">
    <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Materias</h6>
            <h1 className="mb-5">Propuesta Pedagógica</h1>
        </div>
        <div className="row g-3">
            <div className="col-lg-7 col-md-6">
                <div className="row g-3">
                    <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                        <a className="position-relative d-block overflow-hidden" href="">
                            <img className="img-fluid" src="img/vida_abundante.png" alt=""/>
                            <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: "1px"}}>
                                <h5 className="m-0">Vida Abundante</h5>
                                <small className="text-primary">12 Lecciones</small>
                                {/* https://www.gotquestions.org/Espanol/teologia-practica.html */}
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                        <a className="position-relative d-block overflow-hidden" href="">
                            <img className="img-fluid" src="img/liderazgo.jpg" alt=""/>
                            <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: "1px"}}>
                                <h5 className="m-0">Liderazgo y Ministerio</h5>
                                <small className="text-primary">10 Recursos</small>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                        <a className="position-relative d-block overflow-hidden" href="">
                            <img className="img-fluid" src="img/pastoral_familiar.jpg" alt=""/>
                            <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: "1px"}}>
                                <h5 className="m-0">Pastoral Familiar</h5>
                                <small className="text-primary">10 Recursos</small>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{minHeight: "350px"}}>
                <a className="position-relative d-block h-100 overflow-hidden" href="">
                    <img className="img-fluid position-absolute w-100 h-100" src="img/teologia_practica.jpeg" alt="" style={{objectFit: "cover"}}/>
                    <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin:  "1px"}}>
                        <h5 className="m-0">Teología Práctica</h5>
                        <small className="text-primary">9 materias</small>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>
  )
}
