import React, { useContext, useState } from 'react'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment'
import { Context } from "../context/Context"
import UpdateTicket from "../Modals/UpdateTicket"
import Tasks from "../Tasks/Tasks"
import dateSeverity from "../Constants/Severity"

export default function Ticket({ ticket }) {
	const context = useContext(Context)
	const [open, setOpen] = useState(true)
	const date_severity = dateSeverity(ticket.severity, ticket.created_at)

	return (
	    <>
	    <Card className="mb-3">
	      <Card.Body>
	        <div className="d-flex justify-content-between">
	        <div>
	            <Card.Title>
	              Título: {ticket.title} - <span className="text-muted font-weight-light">Id responsable: {ticket.employee_id}</span>
	            </Card.Title>
	            <Card.Subtitle className="text-muted mb-2">
	              Límite de tiempo: <Moment format="DD/MM/YYYY">{date_severity}</Moment>
	            </Card.Subtitle>
	            <Badge bg="primary" text="light" className="mr-2">Tipo: {ticket.ticket_type}</Badge>
	            <Badge bg="primary" text="light" className="mr-2">Severidad: {ticket.severity}</Badge>
            	<Badge bg="primary" text="light" className="mr-2">Estado: {ticket.state}</Badge>
            	<Badge bg="primary" text="light" className="mr-2">
            	Creación: <Moment format="DD/MM/YYYY">{ticket.created_at}</Moment>
            	</Badge>
	        </div>
	        </div>  
	      <Card.Text>
	          <UpdateTicket ticket={ticket}/>
	          <Button
		            onClick={() => setOpen(prevOpen => !prevOpen)}
		            variant={open ? "outline-secondary" : "outline-primary"}
		            className="mt-4"
		          >
		            {open ? 'Ocultar detalles' : 'Ver detalles'}
		          </Button>
		        </Card.Text>
		        <Collapse in={open}>
		          <div className="mt-4">
		          	<p>{ticket.description}</p>
		          </div>
		        </Collapse>
	      </Card.Body>
	    </Card>
	    <Tasks tasks={ticket.tasks}/>
	    </>
	  )
}