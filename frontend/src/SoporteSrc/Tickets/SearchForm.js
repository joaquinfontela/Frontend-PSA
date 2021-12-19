import React from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import './styles/Button.css'

export default function SearchForm({ params, onParamChange }) {
  return (
    <Form className="mb-4">
        <Form.Group as={Col}>
          <Form.Label>Buscar un ticket</Form.Label>
          <Form.Control onChange={onParamChange} value={params.title} name="title" type="text" 
          placeholder="Ingrese un título de un ticket"/>
        </Form.Group>
        <Form.Group as={Col} xs="auto" className="center-button mt-4">
          <Button className="center-button width-button" variant="outline-dark">
          Crear ticket
          </Button>
        </Form.Group>
    </Form>
  )
}