import React, { useState } from 'react'
import { Form, Col, Button, Row } from 'react-bootstrap'
import './styles/Button.css'
import CreateReport from "../Modals/CreateReport"

export default function SearchForm({ params, onParamChange }) {

  return (
    <Form className="mb-4 row">
        <Form.Group as={Col}>
          <Form.Label>Buscar un proyecto</Form.Label>
          <Form.Control onChange={onParamChange} value={params.project} name="project" type="text"
          placeholder="Ingresar un título de un proyecto" 
           />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Buscar una tarea</Form.Label>
          <Form.Control onChange={onParamChange} value={params.task} name="task" type="text" 
          placeholder="Ingresar un título de una tarea" 
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Buscar una fecha</Form.Label>
          <Form.Control onChange={onParamChange} value={params.date} name="date" type="text" 
          placeholder="YYYY-MM-DD" 
          />
        </Form.Group>
        <Form.Group as={Col} xs="auto" className="center-button mt-4">
          <CreateReport />
        </Form.Group>
    </Form>
  )
}