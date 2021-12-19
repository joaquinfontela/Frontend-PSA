import React from 'react'
import { Form, Col } from 'react-bootstrap'

export default function SearchForm({ params, onParamChange }) {
  return (
    <Form className="mb-4">
        <Form.Group as={Col}>
          <Form.Label>Buscar un producto</Form.Label>
          <Form.Control onChange={onParamChange} value={params.name} name="name" type="text"
          placeholder="Ingrese un nombre de un producto" />
        </Form.Group>
    </Form>
  )
}