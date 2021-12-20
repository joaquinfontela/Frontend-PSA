//Esta es la presentación del producto
import React, { useState, useContext } from 'react'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import Moment from "moment"
import UpdateReport from "../Modals/UpdateReport"
import DeleteReport from "../Modals/DeleteReport"

export default function Report({ report }) {
  const hs = Math.ceil(report.minutes/60)

  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              Reporte de: {report.name} {report.last_name} - <span className="text-muted font-weight-light">Tarea: {report.task}</span>
            </Card.Title>
            <Card.Subtitle className="mb-2">
              Proyecto: {report.project}
            </Card.Subtitle>
            <Badge bg="primary" text="light" className="mr-2">Id reporte: {report.id}</Badge>
            <Badge bg="primary" text="light" className="mr-2">Fecha: {report.date.split("T")[0]}</Badge>

          </div>
        </div>
        <Card.Text>
          <Button
            variant="dark"
            className="my-2"
            disabled
          >
            Horas: {hs}
          </Button>
          <DeleteReport report={report} />
         <UpdateReport report={report} />
        </Card.Text>
      </Card.Body>
    </Card>
  )
}