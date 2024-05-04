import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

export const OrganitationItem = ({title, designation, instructors = [], cards, delay}) => {
    return (
        <>
            <div className="text-center mt-5">
                <h6 className="section-title bg-white text-center text-primary px-3">
                    {title}
                </h6>
                <h1 className="mb-5">{designation}</h1>
            </div>
            <div
                className="owl-carousel  position-relative"
                style={{ display: "block" }}
            >
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="testimonials"
                    breakpoints={{
                        640: {
                            slidesPerView: cards + 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: cards + 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: cards + 3,
                            spaceBetween: 50,
                        },
                    }}
                >
                    {instructors.map(({ name, surname,photo, designation }) => {
                        return (
                            <SwiperSlide>
                                <div className="testimonial-item text-center">
                                    <img
                                        className="p-2 mx-auto mb-3"
                                        style={{height:"200px"}}
                                        src={`img/${photo}`}
                                    />
                                    <h5 className="mb-0">
                                        {name} {surname}
                                    </h5>
                                    <p>{designation}</p>
                                    <div className="testimonial-text bg-light text-center p-4">
                                        <p className="mb-0">
                                            Tempor erat elitr rebum at clita.
                                            Diam dolor diam ipsum sit diam amet
                                            diam et eos.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </>
    );
};
