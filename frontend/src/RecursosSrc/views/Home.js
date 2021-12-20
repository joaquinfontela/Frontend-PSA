import React from "react";

export const Home = () => {
    return (
        <div className="content">
            <div
                style={{
                    justifyContent: "center",
                    flexDirection: "column",
                    display: "flex",
                }}
            >
                <div
                    style={{
                        fontSize: 100,
                        alignSelf: "center",
                        marginBottom: 100,
                        display: "flex",
                    }}
                >
                    Recursos
                </div>
                <div
                    style={{
                        flexDirection: "row",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 50,
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                        }}
                    >
                        <div
                            style={{
                                borderRadius: 25,
                                fontSize: 55,
                                padding: 25,
                                alignContent: "center",
                                justifyContent: "center",
                                color: "black",
                                textAlign: "center",
                            }}
                        >
                            Carga de Reportes
                        </div>
                        <div
                            style={{
                                fontSize: 20,
                                fontWeight: "bold",
                                textAlign: "center",
                                marginTop: 20,
                                width: "60%",
                            }}
                        >
                            Cargue sus horas de trabajo destinadas a un proyecto
                            y tarea específicos en una fecha determinada.
                            Adicionalmente, podrá optar por agregar una
                            descripción.
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                        }}
                    >
                        <div
                            style={{
                                borderRadius: 25,
                                fontSize: 55,
                                padding: 25,
                                justifyContent: "center",
                                alignItems: "center",
                                color: "black",
                                textAlign: "center",
                            }}
                        >
                            Busqueda de Recursos
                        </div>
                        <div
                            style={{
                                fontSize: 20,
                                fontWeight: "bold",
                                textAlign: "center",
                                marginTop: 20,
                                width: "60%",
                            }}
                        >
                            Navegue por el historial de reportes filtrando por
                            nombres de proyectos y tareas para los cuales se
                            realizaron, así como también las fechas en las que
                            tomaron lugar.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
