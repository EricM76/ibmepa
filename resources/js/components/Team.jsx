import React, { useEffect, useState } from 'react'
import { Teacher } from './Teacher'
import { UseFetch } from '../hooks/UseFetch';

export const Team = () => {
    /* const teachers = [
      
        {
            name : "Pr. Norberto Herrera",
            designation : "Asesor de contenido",
            photo : "pr_herrera_norberto.png"
        },
        {
            name : "Pr. Alberto Cárdenas",
            designation : "Decano",
            photo : "pr_cardenas_alberto.png"
        },
        {
            name : "Pr. Roberto Moyes",
            designation : "Asesor de contenido",
            photo : "pr_roberto_moyes.png"
        },
    ] */

    const [state, setState] = useState({
        loading : true,
        teachers : []
    });

    const {loading, teachers} = state

    useEffect(() => {
        const decanos = UseFetch('/users?role=2')
        const editores = UseFetch('/users?role=3')
        Promise.all([decanos,editores])
            .then(([decanos, editores]) => {
                const {ok,data : editores_data} = editores;
                const {data : decanos_data} = decanos;
                ok && setState({
                    loading : false,
                    teachers : [...decanos_data, ...editores_data]
                })
            })
            .catch(() => console.error)
    }, []);

  return (
    <div className="container-xxl py-5">
    <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Equipo Académico</h6>
            <h1 className="mb-5">Expertiz Pastoral</h1>
        </div>
        <div className="row g-4 justify-content-center">
            {
                teachers.map(teacher => <Teacher {...teacher}/>)
            }
        
        </div>
    </div>
</div>
  )
}
