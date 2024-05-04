const validate = (values) => {
    const errors = {};

    if(!values.name) errors.name  = "El nombre es requerido";   
    if(!values.surname) errors.surname = "El apellido es requerido";
    if(!values.email) errors.email = "El email es requerido";
    if(!values.dni) errors.dni = "El DNI es requerido";
    if(!values.role_id) errors.role_id = "La designación es requerida";

    return errors
}

export default  validate
