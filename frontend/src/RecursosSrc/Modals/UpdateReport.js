import React, { useState, useEffect, useContext } from 'react'
import { Button, Modal, Form, Select, Col } from "react-bootstrap"

const UpdateReport = ({ report }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const refresh = () => {
  	window.location.reload(false)
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    //setActiveLoading(true)
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reportId: report.id,
        hours: hours,
        minutes: minutes
      }),
    };
    const response = await fetch(`https://arcane-journey-13639.herokuapp.com/reports/${report.id}`, requestOptions);
    if (!response.ok) {
        //setActiveLoading(false)
        //setErrorMessage("Something went wrong when creating lead");
    } else {
        //setActiveLoading(false)
        handleClose();
        clean()
        refresh()
    }
  };

  const clean = () => {
    setHours(0)
    setMinutes(0)
  }

  const handleCancel = () => {
    clean()
    handleClose()
  }

  return (
    <>
      <Button 
          className="my-2 float-right" 
          variant="info"
          onClick={() => handleShow()}>
          Editar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Actualizar un Reporte</Modal.Title>
        </Modal.Header>
        <Form>
          <Form.Label>Ingresar horas nuevas</Form.Label>
          <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
            <Form.Control 
            type="number"
            className="name-input"
            placeholder="Ingresar horas nuevas"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            />
          </Form.Group>

          <Form.Label>Ingresar minutos nuevos</Form.Label>
          <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
            <Form.Control 
            type="number"
            className="name-input"
            placeholder="Ingresar minutos nuevos"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
            />
          </Form.Group>

        </Form>
        <Modal.Body>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleUpdate}>
            Confirmar cambios
          </Button>
          <Button variant="secondary" onClick={handleCancel}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
	</>
	);
}

export default UpdateReport