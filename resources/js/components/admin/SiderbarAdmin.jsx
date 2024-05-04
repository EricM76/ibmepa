
import React from 'react'; 
import { PanelMenu } from 'primereact/panelmenu';
import { Navigate, useNavigate } from 'react-router-dom';

export default function SidebarAdmin() {

    const navigate = useNavigate()
    const items = [
        {
            label:'Inicio',
            icon:'pi pi-fw pi-home',
            command : (e) => navigate('/admin'),
        },
     
        {
            label:'Usuarios',
            icon:'pi pi-fw pi-users',
            items:[
              
                {
                    label:'Nuevo',
                    icon:'pi pi-fw pi-user-plus'
                },
                {
                    icon:'pi pi-fw pi-list',
                    label:'Todos',
                    command : (e) => navigate('/admin/users'),
                },
            ]
        },
        {
            label:'Events',
            icon:'pi pi-fw pi-calendar',
            items:[
                {
                    label:'Edit',
                    icon:'pi pi-fw pi-pencil',
                    items:[
                    {
                        label:'Save',
                        icon:'pi pi-fw pi-calendar-plus'
                    },
                    {
                        label:'Delete',
                        icon:'pi pi-fw pi-calendar-minus'
                    }
                    ]
                },
                {
                    label:'Archive',
                    icon:'pi pi-fw pi-calendar-times',
                    items:[
                    {
                        label:'Remove',
                        icon:'pi pi-fw pi-calendar-minus'
                    }
                    ]
                }
            ]
        }
    ];

    return (
        <div className="">
            <PanelMenu model={items} className="w-full md:w-25rem" />
        </div>
    )
}
        
        