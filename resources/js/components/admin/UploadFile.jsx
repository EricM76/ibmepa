import React, { useRef, useState } from "react";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import { ProgressBar } from "primereact/progressbar";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";
import { useFormik } from "formik";
import PropTypes from "prop-types";

export default function UploadFile({ handlerUpdateFile, setVisible, user }) {
    const toast = useRef(null);
    const [totalSize, setTotalSize] = useState(0);
    const fileUploadRef = useRef(null);

    const formik = useFormik({
        initialValues: {
            photo: null,
        },
        onSubmit: (values) => {
            let data = new FormData();
            for (const key in values) {
                data.append(key, values[key]);
            }
            data.append('type','imagen')
            handlerUpdateFile(data, user);
            setVisible(false);
        },
    });

    const onTemplateSelect = (e) => {
        formik.setFieldValue("photo", e.files[0]);

        let _totalSize = totalSize;
        let files = e.files;

        Object.keys(files).forEach((key) => {
            _totalSize += files[key].size || 0;
        });

        setTotalSize(_totalSize);
    };

    const onTemplateUpload = (e) => {
        let _totalSize = 0;

        e.files.forEach((file) => {
            _totalSize += file.size || 0;
        });

        setTotalSize(_totalSize);

        formik.submitForm();
    };

    const onTemplateRemove = (file, callback) => {
        setTotalSize(totalSize - file.size);
        callback();
    };

    const onTemplateClear = () => {
        setTotalSize(0);
    };

    const headerTemplate = (options) => {
        const { className, chooseButton, uploadButton, cancelButton } = options;
        const value = totalSize / 10000;
        const formatedValue =
            fileUploadRef && fileUploadRef.current
                ? fileUploadRef.current.formatSize(totalSize)
                : "0 B";

        return (
            <div
                className={className}
                style={{
                    backgroundColor: "transparent",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                {chooseButton}
                {uploadButton}
                {cancelButton}
                <div className="flex align-items-center gap-3 ml-auto">
                    <span>{formatedValue} / 1 MB</span>
                    <ProgressBar
                        value={value}
                        showValue={false}
                        style={{ width: "10rem", height: "12px" }}
                    ></ProgressBar>
                </div>
            </div>
        );
    };

    const itemTemplate = (file, props) => {
        return (
            <div className="d-flex justify-content-end gap-2 position-relative">
                <img alt={file.name} role="presentation" src={file.objectURL} />
                <Button
                    type="button"
                    icon="pi pi-times"
                    className="p-button-rounded p-button-danger position-absolute bottom-0 end-0"
                    onClick={() => onTemplateRemove(file, props.onRemove)}
                />
            </div>
        );
    };

    const emptyTemplate = () => {
        return (
            <div className="flex align-items-center flex-column">
                <span
                    style={{
                        fontSize: "1.2em",
                        color: "var(--text-color-secondary)",
                    }}
                    className="my-0"
                >
                    Arrastre y suelte la imagen
                </span>
            </div>
        );
    };

    const chooseOptions = {
        icon: "pi pi-fw pi-images",
        iconOnly: true,
        className: "custom-choose-btn p-button-rounded ",
    };
    const uploadOptions = {
        icon: "pi pi-fw pi-cloud-upload",
        iconOnly: true,
        className: "custom-upload-btn p-button-success p-button-rounded ",
    };
    const cancelOptions = {
        icon: "pi pi-fw pi-times",
        iconOnly: true,
        className: "custom-cancel-btn p-button-danger p-button-rounded ",
    };

    return (
        <div>
            <Toast ref={toast}></Toast>

            <Tooltip
                target=".custom-choose-btn"
                content="Elegir"
                position="bottom"
            />
            <Tooltip
                target=".custom-upload-btn"
                content="Subir"
                position="bottom"
            />
            <Tooltip
                target=".custom-cancel-btn"
                content="Limpiar"
                position="bottom"
            />

            <FileUpload
                ref={fileUploadRef}
                name="photo"
                url="/api/upload/1"
                accept="image/*"
                mode="advanced"
                maxFileSize={10000000}
                onUpload={onTemplateUpload}
                onSelect={onTemplateSelect}
                onError={onTemplateClear}
                onClear={onTemplateClear}
                headerTemplate={headerTemplate}
                itemTemplate={itemTemplate}
                emptyTemplate={emptyTemplate}
                chooseOptions={chooseOptions}
                uploadOptions={uploadOptions}
                cancelOptions={cancelOptions}
            />
        </div>
    );
}

UploadFile.propTypes = {
    handlerUpdateFile: PropTypes.func,
    setVisible: PropTypes.func,
    onRemove: PropTypes.func,
    user: PropTypes.object,
};
