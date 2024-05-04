import React, {useEffect} from 'react'
import { Spinner } from '../components/Spinner'
import { Navbar } from '../components/Navbar'
import { Header } from '../components/Header'
import { Services } from '../components/Services'
import {About} from '../components/About'
import { Team } from '../components/Team'
import { Footer } from '../components/Footer'
import { BackToTop } from '../components/BackToTop'
import WOW from 'wow.js'


export const AboutPage = () => {
  useEffect(() => {
    new WOW({
        live: false,
      }).init();
   
}, []);
  return (
    <>
    <Navbar/>
    <Header
      title={"Nosotros"}
    />
    <Services/>
    <About/>
    <Team/>
    <Footer/>
    <BackToTop/>
    </>
  )
}
