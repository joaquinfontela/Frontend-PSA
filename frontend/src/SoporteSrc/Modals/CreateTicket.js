import React, { useState, useEffect, useContext } from 'react'
import { Context } from "../context/Context"
import { Button, Modal, Form, Select, Col } from "react-bootstrap"

const CreateTicket = () => {
	const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ticketType, setTicketType] = useState("BUG");
  const [severity, setSeverity] = useState(0);
  const [employeeId, setEmployeeId] = useState(0)
  const [state, setState] = useState("OPEN")
  const context = useContext(Context)

  const [employees, setEmployees] = useState([])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cleanFormData = () => {
    setTitle("");
    setDescription("");
    setTicketType("BUG");
    setSeverity(0);
    setEmployeeId(0);
    setState("OPEN");
  };

  const refresh = () => {
  	window.location.reload(false)
  }

  const obtainEmployees = async () => {
    //setActiveLoading(true)
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch("https://arcane-journey-13639.herokuapp.com/employees/all", requestOptions);
    const data = await response.json()
    //console.log(data.data)
    setEmployees(data.data)
    context.setEmployees(employees)
  }

  useEffect(() => {
    obtainEmployees()
  }, [])

  const handleCreateTicket = async (e) => {
    e.preventDefault();
    //setActiveLoading(true)
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        product_id: context.productId,
        ticket_type: ticketType,
        severity: severity,
        employee_id: employeeId,
        state: state,
      }),
    };
    const response = await fetch("https://squad4-tickets.herokuapp.com/tickets", requestOptions);
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

  return (
    <>
      <Button 
          className="center-button width-button mt-2" 
          variant="outline-success"
          onClick={() => handleShow()}>
          Crear ticket
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear un Ticket</Modal.Title>
        </Modal.Header>
        <Form className="mb-4 row">
        	<Form.Group className="mb-3" controlId="formBasicEmail" as={Col}>
				    <Form.Control 
				    type="text"
            className="name-input"
            placeholder="Ingresar título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
				    <Form.Label>Responsable</Form.Label>
				    <Form.Control
            as="select"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
				    >
            {employees.map((employee) => (
              <option value={employee.id}>{employee.name} {employee.last_name}</option>
            ))}
            </Form.Control>
				  </Form.Group>

				  <Form.Group className="mb-3" controlId="formBasicEmail" as={Col}>
				    <Form.Label>Severidad</Form.Label>
				    <Form.Control 
				    as="select"
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
				    >
				    <option value="1">1</option>
            <option value="2">2</option>
				    </Form.Control>
				  </Form.Group>

				  <Form.Group className="mb-3" controlId="formBasicEmail" as={Col}>
				    <Form.Label>Estado</Form.Label>
				    <Form.Control 
				    as="select"
            value={state}
            onChange={(e) => setState(e.target.value)}
				    >
				    <option value="OPEN">Abierto</option>
            <option value="IN_PROGRESS">En progreso</option>
            <option value="WAITING_DEVELOP">Esperando desarrollo</option>
            <option value="WAITING_CLIENT">Esperando al cliente</option>
            <option value="CLOSE">Cerrado</option>
          </Form.Control>
				  </Form.Group>

				  <Form.Group className="mb-3" controlId="formBasicEmail" as={Col}>
				    <Form.Label>Tipo de ticket</Form.Label>
				    <Form.Control 
				    as="select"
            value={ticketType}
            onChange={(e) => setTicketType(e.target.value)}
				    >
				     <option value="BUG">Error</option>
             <option value="QUERY">Consulta</option>
				    </Form.Control>
				  </Form.Group>
        </Form>
        <Modal.Body>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCreateTicket}>
            Crear ticket
          </Button>
          <Button variant="secondary" onClick={handleCancel}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
	</>
	);
}

export default CreateTicket