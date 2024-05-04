import React, {useEffect} from 'react'
import { Spinner } from '../components/Spinner'
import { Navbar } from '../components/Navbar'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { BackToTop } from '../components/BackToTop'
import { Categories } from '../components/Categories'
import { Courses } from '../components/Courses'
import { Organization } from '../components/Organization'
import WOW from 'wow.js'


export const CoursesPage = () => {
    useEffect(() => {
        new WOW({
            live: false,
          }).init();
       
    }, []);
  return (
    <>
    <Navbar/>
    <Header
        title={"Materias"}
    />
    <Categories/>
    <Courses/>
    <Organization/>
    <Footer/>
    <BackToTop/>
    </>
  )
}
