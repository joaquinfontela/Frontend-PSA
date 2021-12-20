import React, { useState } from "react";
import FlatList from "flatlist-react";
import { Api } from "../api";
import { Modal } from "reactstrap";

export const ReportesList = ({ reportes, setRefreshReports }) => {
    const [showModal, setShowModal] = useState(false);
    const [reporteBorrarid, setReporteBorrarid] = useState("");

    const editReportbyId = (reporteModificarId) => {
        var hours = prompt("inserte una nueva cantidad de horas");
        editReport(hours, "0", reporteModificarId);
        setRefreshReports(true);
    };

    const editReport = async (hours, minutes, reporteModificarId) => {
        await Api.put(
            `https://arcane-journey-13639.herokuapp.com/reports/${reporteModificarId}`,
            {
                hours,
                minutes,
            }
        );
    };

    const borrarReporte = (reporteBorrarId) => {
        setShowModal(true);
        setReporteBorrarid(reporteBorrarId);
    };
    const deleteReport = async (reporteBorrarId) => {
        await Api.delete(
            `https://arcane-journey-13639.herokuapp.com/reports/${reporteBorrarId}`
        );
        alert("Has borrado un reporte!");
        setRefreshReports(true);
    };

    const modString = (max, string) => {
        const long = string.length;
        if (long > max) {
            return string.slice(0, max - 2) + "...";
        }
        return string;
    };

    function closeModal() {
        showModal(false);
    }
    const renderReporte = (reporte, idx) => {
        return (
            <div>
                <Modal
                    isOpen={showModal}
                    onRequestClose={closeModal}
                    contentLabel="Alerta"
                    style={{ marginTop: "20%" }}
                >
                    <div
                        style={{
                            marginTop: 30,
                            alignSelf: "center",
                            fontWeight: "bold",
                        }}
                    >
                        ¿Esta seguro de borrar este reporte?
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                            marginTop: 40,
                            marginBottom: 30,
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: "red",
                                padding: 5,
                                width: 100,
                                alignItems: "center",
                                color: "white",
                                justifyContent: "center",
                                display: "flex",
                                fontWeight: "bold",
                                borderRadius: 7,
                            }}
                            onClick={() => {
                                setShowModal(false);
                            }}
                        >
                            Cancelar
                        </div>
                        <div
                            style={{
                                backgroundColor: "blue",
                                padding: 5,
                                width: 100,
                                alignItems: "center",
                                color: "white",
                                justifyContent: "center",
                                display: "flex",
                                fontWeight: "bold",
                                borderRadius: 7,
                            }}
                            onClick={() => {
                                setShowModal(false);
                                deleteReport(reporteBorrarid);
                            }}
                        >
                            Borrar
                        </div>
                    </div>
                </Modal>
                <div
                    style={{
                        flexDirection: "row",
                        display: "flex",
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            flexDirection: "row",
                            display: "flex",
                            justifyContent: "space-around",
                            marginTop: 15,
                            marginLeft: -40,
                            backgroundColor: "rgba(0,0,0,0.05)",
                            width: "98%",
                            height: 40,
                            alignItems: "center",
                            borderRadius: 5,
                        }}
                    >
                        <div style={{ alingSelf: "center", width: 150 }}>
                            {modString(15, reporte.name)}
                        </div>
                        <div style={{ alingSelf: "center", width: 150 }}>
                            {modString(15, reporte.project)}
                        </div>
                        <div
                            style={{
                                alingSelf: "center",
                                width: 150,
                            }}
                        >
                            {modString(20, reporte.task)}
                        </div>
                        <div style={{ alingSelf: "center", width: 100 }}>
                            {reporte.date.slice(0, 10)}
                        </div>
                        <div style={{ alingSelf: "center", width: 100 }}>
                            {Math.floor(reporte.minutes / 60) + 1}
                        </div>
                    </div>
                    <div
                        style={{
                            alignSelf: "center",
                            textAlign: "center",
                            borderRadius: 5,
                            backgroundColor: "rgba(0,0,0,0.8)",
                            color: "white",
                            padding: 5,
                            fontSize: 12,
                            marginTop: 12,
                            marginLeft: 10,
                        }}
                        onClick={() => {
                            editReportbyId(reporte.id);
                        }}
                    >
                        Editar
                    </div>
                    <div
                        style={{
                            alignSelf: "center",
                            textAlign: "center",
                            borderRadius: 5,
                            backgroundColor: "rgba(0,0,0,0.8)",
                            color: "white",
                            padding: 5,
                            fontSize: 12,
                            marginTop: 12,
                            marginLeft: 10,
                        }}
                        onClick={() => {
                            borrarReporte(reporte.id);
                        }}
                    >
                        Borrar
                    </div>
                </div>
            </div>
        );
    };
    return (
        <ul>
            <FlatList
                list={reportes}
                renderItem={(reporte, idx) => renderReporte(reporte, idx)}
                renderWhenEmpty={() => <div>No hay reportes!</div>}
            />
        </ul>
    );
};
