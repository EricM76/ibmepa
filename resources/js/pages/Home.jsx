import React, { useEffect } from "react";
import { Spinner } from "../components/Spinner";
import { Navbar } from "../components/Navbar";
import { Carousel } from "../components/Carousel";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { Categories } from "../components/Categories";
import { Courses } from "../components/Courses";
import { Team } from "../components/Team";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";
import WOW from 'wow.js'
import { CarouselBootstrap } from "../components/CarouselBootstrap";
import { Organization } from "../components/Organization";

export const Home = () => {

    useEffect(() => {
        new WOW({
            live: false,
          }).init();
       
    }, []);
    return (
        <>
            <Navbar />
            {/* <Carousel /> */}
            <CarouselBootstrap/>
            <Services />
            <About />
            <Categories />
            <Courses />
            <Team />
            <Organization />
            <Footer />
            <BackToTop />

        </>
    );
};
