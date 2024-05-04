import React from "react";
import PropTypes from "prop-types";
import { Dialog } from "primereact/dialog";
import UploadFile from "./UploadFile";

export const FormUploadPhoto = ({
    formUploadVisible: visible,
    setFormUploadVisible: setVisible,
    user,
    handlerUpdateFile
}) => {


    return (
        <Dialog
            header="Subir Foto"
            visible={visible}
            onHide={() => setVisible(false)}
            breakpoints={{ 
               
                '768px' : '75vw',
                '320px': '95vw',
            }}
        >
            <UploadFile handlerUpdateFile={handlerUpdateFile} setVisible={setVisible} user={user}/>
              
        </Dialog>
    );
};

FormUploadPhoto.propTypes = {
    formUploadVisible: PropTypes.bool,
    setFormUploadVisible: PropTypes.func,
    user: PropTypes.object,
    handlerUpdateFile : PropTypes.func
};
