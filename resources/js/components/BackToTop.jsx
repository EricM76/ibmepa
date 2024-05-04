import React, { useEffect, useRef } from 'react'

export const BackToTop = () => {
  const backToTop = useRef(null);
  useEffect(() => {
    backToTop.current.click()
    backToTop.current.style.display = "none"
   
  }, []);
  return (
    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top" ref={backToTop}><i className="bi bi-arrow-up"></i></a>
  )
}
