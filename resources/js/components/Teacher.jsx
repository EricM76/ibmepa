import React from 'react'

export const Teacher = ({name, designation,photo}) => {
  return (
    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
    <div className="team-item bg-light">
        <div className="overflow-hidden">
            <img className="img-fluid" src={`img/${photo}`} alt=""/>
        </div>
        <div className="position-relative d-flex justify-content-center" style={{marginTop: "-23px"}}>
            <div className="bg-light d-flex justify-content-center pt-2 px-1">
                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
            </div>
        </div>
        <div className="text-center p-4">
            <h5 className="mb-0">{name}</h5>
            <small>{designation}</small>
        </div>
    </div>
</div>
  )
}
