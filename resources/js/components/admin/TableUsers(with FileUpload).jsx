import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { UseFetch } from "../../hooks/UseFetch";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { FormUser } from "./FormUser";
import { Tag } from "primereact/tag";
import { Avatar } from "primereact/avatar";
import { FormUploadPhoto } from "./FormUploadPhoto";
import { Toast } from "primereact/toast";

export default function TableUsers() {
    const [state, setState] = useState({
        ok: true,
        users: [],
    });
    const { users } = state;

    const [roles, setRoles] = useState([]);
    const [user, setUser] = useState(null);
    const [formVisible, setFormVisible] = useState(false);
    const [formUploadVisible, setFormUploadVisible] = useState(false);

    const toast = useRef(null);

    const getRolSeverity = (role) => {
        switch (role.id) {
            case 1:
                return "danger";

            case 2:
                return "warning";

            case 3:
                return "success";
            case 4:
                return "primary";
            case 5:
                return "info";
            default:
                return null;
        }
    };

    useEffect(() => {
        UseFetch("/roles")
            .then(({ ok, data }) => {
                ok && setRoles(data);
            })
            .catch(() => console.error);

        UseFetch("/users")
            .then(({ ok, data }) => {
                ok &&
                    setState({
                        loading: false,
                        users: data,
                    });
            })
            .catch(() => console.error);
    }, []);

    /* ACTIONS */

    const addUser = () => {
        setUser(null);
        setFormVisible(true);
    };

    const editUser = (rowData) => {
        setUser(rowData);
        setFormVisible(true);
    };

    const uploadFile = (rowData) => {
        setUser(rowData);
        setFormUploadVisible(true);
    };

    const handlerAdd = (formdata) => {
        console.log(formdata);
        UseFetch("/users", "POST", formdata)
            .then(({ ok, message }) => {
                ok && console.log(message);
            })
            .catch(() => console.error);
    };

    const handlerUpdate = (formdata) => {
        UseFetch(`/users/${user.id}`, "PATCH", formdata)
            .then(({ ok, message, data }) => {
                if (ok) {
                    console.log(message);
                    console.log(data);
                }
            })
            .catch(() => console.error);
    };

    const handlerUpdateFile = (formdata, user) => {
        console.log(formdata.getAll('photo'));
        UseFetch(`/upload/${user.id}`, "POST", formdata)
            .then(({ ok, message, data }) => {
                console.log(data);

                if (ok) {
                    toast.current.show({
                        severity: "success",
                        summary: "Aviso",
                        detail: message,
                        life: 3000,
                    });
                    return message;
                }
            })
            .catch((error) => {
                console.error;
                return error.message;
            });
    };

    /* TEMPLATES */

    const leftToolbarTemplate = () => {
        return (
            <div className="flex flex-wrap gap-2">
                <Button
                    label="Nuevo"
                    icon="pi pi-plus"
                    severity="primary"
                    onClick={addUser}
                />
                <Button label="Eliminar" icon="pi pi-trash" severity="danger" />
            </div>
        );
    };

    const rolBodyTemplate = (rowData) => {
        return (
            <Tag
                value={rowData.role.name}
                severity={getRolSeverity(rowData.role)}
            ></Tag>
        );
    };

    const userBodyTemplate = (user) => {
        return (
            <div className="d-flex gap-2 align-items-center">
                <div className="position-relative">
                    <Avatar
                        image={`/img/${
                            user.photo ? user.photo : "default.png"
                        }`}
                        size="large"
                        shape="circle"
                    />
                    <Tag
                        className="position-absolute top-50 start-50"
                        style={{cursor: 'pointer'}}
                        icon="pi pi-pencil"
                        rounded
                        severity="primary"
                        onClick={uploadFile}
                    />
                </div>
                <p>
                    {user.name} {user.surname}
                </p>
            </div>
        );
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <>
                <Button
                    icon="pi pi-pencil"
                    rounded
                    className="me-2"
                    severity="success"
                    onClick={() => editUser(rowData)}
                />
                <Button
                    icon="pi pi-trash"
                    rounded
                    severity="danger"
                   /*  onClick={() => confirmDeleteProduct(rowData)} */
                />
            </>
        );
    };

    return (
        <>
            <Toast ref={toast}></Toast>
            <Toolbar className="mb-2" start={leftToolbarTemplate} />
            <FormUser
                formVisible={formVisible}
                setFormVisible={setFormVisible}
                user={user}
                roles={roles}
                handlerAdd={handlerAdd}
                handlerUpdate={handlerUpdate}
                handlerUpdateFile={handlerUpdateFile}
            />

            <FormUploadPhoto
                formUploadVisible={formUploadVisible}
                setFormUploadVisible={setFormUploadVisible}
                user={user}
                handlerUpdateFile={handlerUpdateFile}
            />
            <div className="card">
                <DataTable
                    value={users}
                    paginator
                    rows={5}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    tableStyle={{ minWidth: "50rem" }}
                    editMode="row"
                    dataKey="id"
                >
                    <Column header="Usuario" body={userBodyTemplate}></Column>

                    <Column
                        field="role_id"
                        header="Jerarquía"
                        style={{ width: "25%" }}
                        body={rolBodyTemplate}
                    ></Column>
                    <Column
                        header="Acciones"
                        body={actionBodyTemplate}
                        style={{ width: "30%" }}
                    ></Column>
                </DataTable>
            </div>
        </>
    );
}
