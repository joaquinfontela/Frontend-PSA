import React, { useState } from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import './styles/Button.css'
import CreateTicket from "../Modals/CreateTicket"

export default function SearchForm({ params, onParamChange }) {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <Form className="mb-4">
        <Form.Group as={Col}>
          <Form.Label>Buscar un ticket</Form.Label>
          <Form.Control onChange={onParamChange} value={params.title} name="title" type="text" 
          placeholder="Ingrese un título de un ticket"/>
        </Form.Group>
        <Form.Group as={Col} xs="auto" className="center-button mt-4">
          <CreateTicket />
        </Form.Group>
    </Form>
  )
}