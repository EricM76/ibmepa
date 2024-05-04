import React, { useEffect, useRef, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { UseFetch } from "../hooks/UseFetch";
import { OrganitationItem } from "./OrganitationItem";

export const Organization = () => {
    const [state, setState] = useState({
        loading: true,
        teachers: [],
        tutors: [],
    });

    const { loading, teachers, tutors } = state;

    useEffect(() => {
        const teachers_data = UseFetch("/users?role=4");
        const tutors_data = UseFetch("/users?role=5");

        Promise.all([teachers_data, tutors_data]).then(
            ([teachers_data, tutors_data]) => {
                const { ok, data: teachers } = teachers_data;
                const { data: tutors } = tutors_data;
                console.log(tutors);
                setState({
                    loading: false,
                    teachers: teachers,
                    tutors: tutors,
                });
            }
        );
    }, []);

    return (
        <>
            {!loading && (
                <OrganitationItem
                    title={"Diagrama de Zonas"}
                    designation={"Profesores"}
                    instructors={teachers}
                    cards={1}
                    delay={2500}
                />
            )}
            {!loading && (
                <OrganitationItem
                    title={"Grupos de Estudio"}
                    designation={"Tutores"}
                    instructors={tutors}
                    cards={2}
                    delay={1500}
                />
            )}
        </>
    );
};
