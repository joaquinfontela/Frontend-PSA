import React, { useState, useEffect, useContext } from 'react'
import { Button, Modal, Form, Select, Col } from "react-bootstrap"

const DeleteReport = ({ report }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const refresh = () => {
  	window.location.reload(false)
  }

  const handleDelete = async (id) => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(`https://arcane-journey-13639.herokuapp.com/reports/${report.id}`, requestOptions);
    if (!response.ok) {
      //setErrorMessage("Failed to delete lead");
    }

    handleClose();
    refresh();
  };

  const handleCancel = () => {
    handleClose()
  }

  return (
    <>
      <Button 
          className="my-2 float-right" 
          variant="outline-danger"
          onClick={() => handleShow()}>
          Eliminar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar un Reporte</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <b>Usted está eliminando un nuevo reporte</b>
          <p>Este cambio será permanente</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleDelete}>
            Eliminar
          </Button>
          <Button variant="secondary" onClick={handleCancel}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
	</>
	);
}

export default DeleteReport