import React, { useState } from "react";

export const CargaFallidaScreen = ({
    proyectName,
    taskName,
    date,
    hours,
    description,
}) => {
    return (
        <>
            <div className="content">
                <div style={{ fontSize: 55, marginTop: -70 }}>
                    Carga fallida
                </div>
                <hr style={{ borderWidth: 3, backgroundColor: "black" }} />
                <div
                    style={{
                        flexDirection: "row",
                        display: "flex",
                        marginTop: 40,
                        alignItems: "center",
                    }}
                >
                    <div style={{ fontSize: 30, width: 300 }}>Proyecto :</div>
                    <div style={{ fontSize: 30, width: 300 }}>
                        {proyectName}
                    </div>
                </div>
                <div
                    style={{
                        flexDirection: "row",
                        display: "flex",
                        marginTop: 30,
                    }}
                >
                    <div style={{ fontSize: 30, width: 300 }}>Tarea :</div>
                    <div style={{ fontSize: 30, width: 300 }}>{taskName}</div>
                </div>
                <div
                    style={{
                        flexDirection: "row",
                        display: "flex",
                        marginTop: 30,
                    }}
                >
                    <div style={{ fontSize: 30, width: 300 }}>Fecha :</div>
                    <div style={{ fontSize: 30, width: 300 }}>{date}</div>
                </div>
                <div
                    style={{
                        flexDirection: "row",
                        display: "flex",
                        marginTop: 30,
                    }}
                >
                    <div style={{ fontSize: 30, width: 300 }}>
                        Cantidad de horas :
                    </div>
                    <div style={{ fontSize: 30, width: 300 }}>{hours}</div>
                </div>
                <div
                    style={{
                        flexDirection: "row",
                        display: "flex",
                        marginTop: 30,
                    }}
                >
                    <div style={{ fontSize: 30, width: 300 }}>
                        Description :
                    </div>
                    <div style={{ fontSize: 30, width: 800 }}>
                        {description === ""
                            ? "No se coloco una descripcion"
                            : description}
                    </div>
                </div>
                <div
                    style={{
                        flexDirection: "row",
                        display: "flex",
                        marginTop: 30,
                    }}
                >
                    <div style={{ fontSize: 35, width: 300, color: "red" }}>
                        Motivo de falla :
                    </div>
                    <div style={{ fontSize: 35, width: 800, color: "red" }}>
                        Fecha futura ingresada!!
                    </div>
                </div>
            </div>
        </>
    );
};
