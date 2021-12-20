import React, { useEffect, useState } from "react";
import SelectDropDownComponent from "../components/SelectDropDownComponent";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import NumericInput from "react-numeric-input";
import { Api } from "../api";
import { Redirect, useHistory } from "react-router";
import { CargaExitosaScreen } from "./CargaExitosa";
import { CargaFallidaScreen } from "./CargaFallida";

export const CargaScreen = () => {
    const [selectedDay, setSelectedDay] = useState(null);
    const [Proyectos, setProyectos] = useState([]);
    const [idProyectoSeleccionado, setIdProyectoSeleccionado] = useState("");
    const [idTareaSeleccionada, setIdTareaSeleccionada] = useState("");
    const [Tareas, setTareas] = useState([]);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [descripcion, setDescripcion] = useState("");
    const [CargaFallida, setCargaFallida] = useState(false);
    const [CargaExitosa, setCargaExitosa] = useState(false);
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState("");
    const [tareaSeleccionada, setTareaSeleccionada] = useState("");

    useEffect(() => {
        getProyects();
    }, []);

    useEffect(() => {
        getTask();
    }, [idProyectoSeleccionado]);

    const getProyects = async () => {
        Api.get("https://arcane-journey-13639.herokuapp.com/projects").then(
            (resp) => setProyectos(resp.data.data)
        );
    };

    const getTask = async () => {
        Api.get(
            `https://arcane-journey-13639.herokuapp.com/tasks/${idProyectoSeleccionado}`
        ).then((resp) => setTareas(resp.data.data));
    };

    const postReport = async () => {
        if (
            !selectedDay |
            (idProyectoSeleccionado === "") |
            (idTareaSeleccionada === "") |
            (hours === 0 && minutes === 0)
        ) {
            alert("Datos Faltantes");
        } else {
            Api.post(`https://arcane-journey-13639.herokuapp.com/reports`, {
                employeeId: 1,
                taskId: idTareaSeleccionada,
                date: `${selectedDay.year}-${selectedDay.month}-${selectedDay.day}`,
                hours: hours,
                minutes: minutes,
                description: descripcion,
            })
                .then((resp) => {
                    if (resp.status === 201) {
                        setCargaExitosa(true);
                    }
                })
                .catch((error) => {
                    setCargaFallida(true);
                });
        }
    };

    if (CargaExitosa) {
        return (
            <CargaExitosaScreen
                taskName={tareaSeleccionada}
                proyectName={proyectoSeleccionado}
                date={`${selectedDay.year}-${selectedDay.month}-${selectedDay.day}`}
                hours={hours}
                description={descripcion}
            />
        );
    }
    if (CargaFallida) {
        return (
            <CargaFallidaScreen
                taskName={tareaSeleccionada}
                proyectName={proyectoSeleccionado}
                date={`${selectedDay.year}-${selectedDay.month}-${selectedDay.day}`}
                hours={hours}
                description={descripcion}
            />
        );
    }

    return (
        <>
            <div className="content">
                <div style={{ fontSize: 55, marginTop: -70 }}>
                    Nuevo reporte
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
                    <SelectDropDownComponent
                        items={Proyectos}
                        setSelectedComponent={setIdProyectoSeleccionado}
                        setSelectedName={setProyectoSeleccionado}
                    />
                </div>
                <div
                    style={{
                        flexDirection: "row",
                        display: "flex",
                        marginTop: 30,
                    }}
                >
                    <div style={{ fontSize: 30, width: 300 }}>Tarea :</div>
                    <SelectDropDownComponent
                        items={Tareas}
                        setSelectedComponent={setIdTareaSeleccionada}
                        setSelectedName={setTareaSeleccionada}
                    />
                </div>
                <div
                    style={{
                        flexDirection: "row",
                        display: "flex",
                        justifyContent: "space-around",
                        marginTop: 40,
                    }}
                >
                    <div style={{ fontSize: 30 }}>Fecha :</div>
                    <div style={{ fontSize: 30 }}>Horas :</div>
                    <div style={{ fontSize: 30 }}>Minutos :</div>
                </div>
                <div
                    style={{
                        flexDirection: "row",
                        display: "flex",
                        justifyContent: "space-around",
                        marginTop: 20,
                        height: 23,
                    }}
                >
                    <DatePicker
                        value={selectedDay}
                        onChange={setSelectedDay}
                        inputPlaceholder="Select a day"
                        shouldHighlightWeekends
                    />
                    <NumericInput
                        min={0}
                        max={24}
                        value={hours}
                        onChange={(value) => setHours(value)}
                    />
                    <NumericInput
                        min={0}
                        max={59}
                        value={minutes}
                        onChange={(value) => setMinutes(value)}
                    />
                </div>
                <div style={{ fontSize: 30, width: 300, marginTop: 40 }}>
                    Descripcion :
                </div>
                <textarea
                    type={"text"}
                    style={{
                        marginTop: 20,
                        marginLeft: 50,
                        height: 130,
                        width: "90%",
                    }}
                    onChange={(value) => setDescripcion(value.target.value)}
                />
                <div
                    style={{
                        flexDirection: "row",
                        display: "flex",
                        justifyContent: "right",
                        marginTop: 70,
                        paddingLeft: 40,
                        paddingRight: 40,
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "green",
                            padding: 10,
                            width: 200,
                            height: 60,
                            borderRadius: 10,
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                            marginRight: 60,
                        }}
                    >
                        <div
                            onClick={() => postReport()}
                            style={{
                                fontSize: 22,
                                fontWeight: "bold",
                                color: "white",
                            }}
                        >
                            Guardar
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
