import { Api } from "../api";
import { ReportesList } from "../components/ReportesList";
import React, { useEffect, useState } from "react";
import DatePicker from "react-modern-calendar-datepicker";
import SelectDropDownComponent from "../components/SelectDropDownComponent";
import { Modal } from "reactstrap";

export const SearchScreen = () => {
    const [desdeDay, setDesdeDay] = useState(null);
    const [hastaDay, setHastaDay] = useState(null);
    const [proyectos, setProyectos] = useState([]);
    const [tareas, setTareas] = useState([]);
    const [idProyectoSeleccionado, setIdProyectoSeleccionado] = useState("");
    const [idTareaSeleccionada, setIdTareaSeleccionada] = useState("");
    const [reportes, setReportes] = useState([]);
    const [refreshReports, setRefreshReports] = useState(false);
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState("");
    const [tareaSeleccionada, setTareaSeleccionada] = useState("");

    useEffect(() => {
        getProyects();
        getReports();
    }, []);

    useEffect(() => {
        getTask();
    }, [idProyectoSeleccionado]);

    useEffect(() => {
        if (refreshReports) {
            getReports();
            setRefreshReports(false);
        }
    }, [refreshReports]);

    const getProyects = async () => {
        Api.get("https://arcane-journey-13639.herokuapp.com/projects").then(
            (resp) => {
                console.log(resp.data.data);
                setProyectos(resp.data.data);
            }
        );
    };

    const getFilterByDateReports = async () => {
        var init_date = `${desdeDay.year}-${desdeDay.month}-${desdeDay.day}`;
        var end_date = `${hastaDay.year}-${hastaDay.month}-${hastaDay.day}`;
        Api.get(
            `https://arcane-journey-13639.herokuapp.com/reports/filter/date/${init_date}/${end_date}`
        ).then((resp) => {
            console.log(resp.data);
            setReportes(resp.data.data);
        });
    };

    const getFilterByTaskOrProyectReports = async () => {
        if (idProyectoSeleccionado !== "" && idTareaSeleccionada === "") {
            Api.get(
                `https://arcane-journey-13639.herokuapp.com/reports/filter/project/${idProyectoSeleccionado}`
            ).then((resp) => {
                setReportes(resp.data.data);
            });
        } else {
            Api.get(
                `https://arcane-journey-13639.herokuapp.com/reports/filter/task/${idTareaSeleccionada}`
            ).then((resp) => setReportes(resp.data.data));
        }
    };

    const getReports = async () => {
        Api.get("https://arcane-journey-13639.herokuapp.com/reports").then(
            (resp) => {
                console.log(reportes);
                setReportes(resp.data.data);
            }
        );
    };

    const getTask = async () => {
        console.log(
            `https://arcane-journey-13639.herokuapp.com/tasks/${idProyectoSeleccionado}`
        );
        Api.get(
            `https://arcane-journey-13639.herokuapp.com/tasks/${idProyectoSeleccionado}`
        ).then((resp) => {
            setTareas(resp.data.data);
        });
    };

    return (
        <>
            <div className="content">
                <div style={{ fontSize: 55, marginTop: -70 }}>
                    Buscar Reporte
                </div>
                <hr style={{ borderWidth: 3, backgroundColor: "black" }} />
                <div style={{ flex: 1, flexDirection: "row", display: "flex" }}>
                    <div
                        style={{
                            display: "flex",
                            marginTop: 40,
                            width: "50%",
                            flexDirection: "column",
                        }}
                    >
                        <div style={{ fontSize: 25, width: 300 }}>
                            Buscar por Proyecto :
                        </div>
                        <div
                            style={{
                                flexDirection: "row",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: 30,
                            }}
                        >
                            <div style={{ fontSize: 22, width: 250 }}>
                                Proyecto
                            </div>
                            <SelectDropDownComponent
                                items={proyectos}
                                setSelectedComponent={setIdProyectoSeleccionado}
                                setSelectedName={setProyectoSeleccionado}
                            />
                        </div>
                        <div
                            style={{
                                flexDirection: "row",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: 30,
                            }}
                        >
                            <div style={{ fontSize: 22, width: 250 }}>
                                Tarea
                            </div>
                            <SelectDropDownComponent
                                items={tareas}
                                setSelectedComponent={setIdTareaSeleccionada}
                                setSelectedName={setTareaSeleccionada}
                            />
                        </div>
                        <div
                            style={{
                                backgroundColor: "rgba(0,0,0,0.8)",
                                padding: 10,
                                width: 120,
                                borderRadius: 10,
                                justifyContent: "center",
                                alignItems: "center",
                                display: "flex",
                                alignSelf: "flex-end",
                                marginTop: 30,
                                marginRight: 40,
                            }}
                        >
                            <div
                                style={{
                                    fontSize: 18,
                                    fontWeight: "bold",
                                    color: "white",
                                }}
                                onClick={() =>
                                    getFilterByTaskOrProyectReports()
                                }
                            >
                                Buscar
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            marginTop: 40,

                            width: "50%",
                            flexDirection: "column",
                        }}
                    >
                        <div style={{ fontSize: 25, width: 300 }}>
                            Buscar por Fecha :
                        </div>
                        <div
                            style={{
                                flexDirection: "row",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: 30,
                                alignSelf: "start",
                                marginLeft: 50,
                            }}
                        >
                            <div
                                style={{
                                    fontSize: 22,
                                    width: 250,
                                    marginLeft: -50,
                                }}
                            >
                                Desde
                            </div>
                            <DatePicker
                                value={desdeDay}
                                onChange={setDesdeDay}
                                inputPlaceholder="Select a day"
                                shouldHighlightWeekends
                            />
                        </div>
                        <div
                            style={{
                                flexDirection: "row",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: 30,
                                alignSelf: "start",
                                marginLeft: 50,
                            }}
                        >
                            <div
                                style={{
                                    fontSize: 22,
                                    width: 250,
                                    marginLeft: -50,
                                }}
                            >
                                Hasta
                            </div>
                            <DatePicker
                                value={hastaDay}
                                onChange={setHastaDay}
                                inputPlaceholder="Select a day"
                                shouldHighlightWeekends
                            />
                        </div>
                        <div
                            style={{
                                backgroundColor: "rgba(0,0,0,0.8)",
                                padding: 10,
                                width: 120,
                                borderRadius: 10,
                                justifyContent: "center",
                                alignItems: "center",
                                display: "flex",
                                alignSelf: "flex-end",
                                marginTop: 30,
                                marginRight: 50,
                            }}
                        >
                            <div
                                style={{
                                    fontSize: 18,
                                    fontWeight: "bold",
                                    color: "white",
                                }}
                                onClick={() => getFilterByDateReports()}
                            >
                                Buscar
                            </div>
                        </div>
                    </div>
                </div>
                <hr
                    style={{
                        borderWidth: 2,
                        backgroundColor: "black",
                        marginTop: 50,
                    }}
                />
                <div style={{ fontSize: 30, marginTop: 20 }}>Reportes</div>
                <div
                    style={{
                        flexDirection: "row",
                        display: "flex",
                        justifyContent: "space-around",
                        marginTop: 15,
                        marginLeft: -40,
                        width: "96%",
                        height: 40,
                        alignItems: "center",
                        borderRadius: 5,
                    }}
                >
                    <div
                        style={{
                            justifyContent: "center",
                            display: "flex",
                            width: "20%",
                        }}
                    >
                        Nombre
                    </div>
                    <div
                        style={{
                            justifyContent: "center",
                            display: "flex",
                            width: "20%",
                        }}
                    >
                        Proyecto
                    </div>
                    <div
                        style={{
                            justifyContent: "center",
                            display: "flex",
                            width: "20%",

                            marginLeft: 50,
                        }}
                    >
                        Tarea
                    </div>
                    <div
                        style={{
                            justifyContent: "center",
                            display: "flex",
                            width: "20%",
                        }}
                    >
                        Fecha
                    </div>
                    <div
                        style={{
                            justifyContent: "center",
                            display: "flex",
                            width: "15%",

                            marginRight: 70,
                        }}
                    >
                        Horas
                    </div>
                </div>

                <ReportesList
                    reportes={reportes}
                    setRefreshReports={setRefreshReports}
                />
            </div>
        </>
    );
};
