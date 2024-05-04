import React from "react";
import PropTypes from "prop-types";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { useFormik } from "formik";
import { useEffect } from "react";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { InputSwitch } from "primereact/inputswitch";

export const FormUser = ({
    formVisible: visible,
    setFormVisible: setVisible,
    user,
    roles,
    handlerAdd,
    handlerUpdate,
}) => {


    const initialValues = {
        name: "",
        surname: "",
        email: "",
        role_id: null,
        designation: "",
        bio: "",
        visible: false,
    };

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            let data = new FormData();
            for (const key in values) {
                data.append(key, values[key]);
            }

            if(user){
                data.append('_method','PATCH')
                handlerUpdate(data);
            }else{
                handlerAdd(data);
                formik.handleReset()
            }
        },
    });

    useEffect(() => {
        const fields = [
            "name",
            "surname",
            "email",
            "role_id",
            "dni",
            "designation",
            "bio",
            "visible",
        ];
        user
            ? fields.forEach((field) => {
                  formik.setFieldValue(
                      field,
                      field === "visible"
                          ? user[field]
                              ? true
                              : false
                          : user[field],
                      false
                  );
              })
            : formik.setValues(initialValues);
    }, [user]);

    return (
        <Dialog
            header={`${user ? "Editar usuario" : "Nuevo usuario"}`}
            visible={visible}
            onHide={() => setVisible(false)}
            style={{ width: "75vw" }}
            breakpoints={{ "960px": "75vw", "641px": "100vw" }}
        >
            <form className="row" onSubmit={formik.handleSubmit}>
                <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <label htmlFor="name" className="form-label">
                        Nombre(s)
                    </label>
                    <InputText
                        id="name"
                        name="name"
                        className="w-100"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <label htmlFor="surname" className="form-label">
                        Apellido(s)
                    </label>
                    <InputText
                        id="surname"
                        name="surname"
                        className="w-100"
                        value={formik.values.surname}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <InputText
                        id="email"
                        name="email"
                        className="w-100"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <label htmlFor="role" className="form-label">
                        Rol
                    </label>
                    <Dropdown
                        id="role"
                        name="role_id"
                        value={formik.values.role_id}
                        className="w-100"
                        onChange={formik.handleChange}
                        valueTemplate={
                            formik.values.role_id &&
                            roles.find(
                                (role) => role.id === formik.values.role_id
                            ).name
                        }
                        placeholder="Seleccione..."
                        options={roles.map((rol) => rol.id)}
                        itemTemplate={(option) => (
                            <p>
                                {roles.find((role) => role.id === option).name}
                            </p>
                        )}
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <label htmlFor="dni" className="form-label">
                        DNI
                    </label>
                    <InputText
                        id="dni"
                        name="dni"
                        className="w-100"
                        value={formik.values.dni}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <label htmlFor="designation" className="form-label">
                        Designación
                    </label>
                    <InputText
                        id="designation"
                        name="designation"
                        className="w-100"
                        value={formik.values.designation}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="col-12 col-lg-4 mb-3">
                <div className="d-flex justify-content-center gap-2 mt-lg-5">
                                <label htmlFor="visible" className="form-label">
                                    Visible
                                </label>
                                <InputSwitch
                                    id="visible"
                                    name="visible"
                                    checked={formik.values.visible}
                                    onChange={formik.handleChange}
                                />
                            </div>
                </div>
                <div className="col-12 col-lg-8 mb-3">
                    <div>
                        <label htmlFor="bio" className="form-label">
                            Biografía
                        </label>
                        <InputTextarea
                            id="bio"
                            name="bio"
                            className="w-100"
                            autoResize
                            value={formik.values.bio}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="d-flex justify-content-between">
                            <div></div>
                          
                        
                        <div className="d-flex align-items-center justify-content-end mt-5">
                            <Button
                                label="Cancelar"
                                severity="secondary"
                                type="button"
                                className="mx-2"
                                onClick={() => setVisible(false)}
                            />
                            <Button
                                label={user ? "Actualizar" : "Guardar"}
                                severity={user ? "success" : "primary"}
                                type="submit"
                                className="mx-2"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </Dialog>
    );
};

FormUser.propTypes = {
    formVisible: PropTypes.bool,
    setFormVisible: PropTypes.func,
    user: PropTypes.object,
    roles: PropTypes.array,
    handlerUpdate : PropTypes.func,
    handlerAdd : PropTypes.func
};
