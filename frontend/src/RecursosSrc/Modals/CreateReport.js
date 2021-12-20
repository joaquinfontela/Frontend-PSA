import React, { useState, useEffect, useContext } from 'react'
import { Button, Modal, Form, Select, Col } from "react-bootstrap"

const CreateReport = ({ projects }) => {
  const [employeeId, setEmployeeId] = useState(1);
  const [taskId, setTaskId] = useState(0);
  const [date, setDate] = useState("");
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0)
  const [description, setDescription] = useState("")

  const tasks = []
  const [tasksAux, setTasksAux] = useState([])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cleanFormData = () => {
    setTaskId(0)
    setDate("")
    setHours(0)
    setMinutes(0)
    setDescription("")
  };

  const refresh = () => {
    window.location.reload(false)
  }

  const handleCreateReport = async (e) => {
    e.preventDefault();
    //setActiveLoading(true)
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        employeeId: employeeId,
        taskId: taskId,
        date: date,
        hours: hours,
        minutes: minutes,
        description: description,
      }),
    };
    const response = await fetch("https://arcane-journey-13639.herokuapp.com/reports", requestOptions);
    if (!response.ok) {
        //setActiveLoading(false)
        //setErrorMessage("Something went wrong when creating lead");
    } else {
        //setActiveLoading(false)
        cleanFormData();
        handleClose();
        refresh()
    }
  };

  const handleCancel = () => {
    cleanFormData()
    handleClose()
  }

  console.log("PROYECTOS: ", projects)

  return(
    <>
      <Button 
          className="center-button width-button mt-2" 
          variant="outline-success"
          onClick={() => handleShow()}>
          Crear reporte
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear un Reporte</Modal.Title>
        </Modal.Header>
        <Form className="signup-form">
          <Form.Group className="mb-3" controlId="formBasicEmail" as={Col}>
            <Form.Label>Ingresar una fecha</Form.Label>
            <Form.Control 
            type="date"
            timeFormat="YYYY-MM-DD"
            className="name-input"
            placeholder="Ingresar una fecha"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicEmail" as={Col}>
            <Form.Label>Ingresar horas</Form.Label>
            <Form.Control 
            type="number"
            className="name-input"
            placeholder="Ingresar horas"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail" as={Col}>
            <Form.Label>Ingresar minutos</Form.Label>
            <Form.Control 
            type="number"
            className="name-input"
            placeholder="Ingresar minutos"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail" as={Col}>
            <Form.Control 
            type="text"
            className="name-input"
            placeholder="Ingresar descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail" as={Col}>
            <Form.Label>Ingresar id tarea</Form.Label>
            <Form.Control 
            type="number"
            className="name-input"
            placeholder="Ingresar tarea"
            value={taskId}
            onChange={(e) => setTaskId(e.target.value)}
            />
          </Form.Group>

        </Form>
        <Modal.Body>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCreateReport}>
            Crear Reporte
          </Button>
          <Button variant="secondary" onClick={handleCancel}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
  </>
  )
}

export default CreateReport