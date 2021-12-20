import React, { useContext } from 'react'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment'
import { Context } from "../context/Context"
import dateSeverity from "../Constants/Severity"


export default function Ticket({ ticket }) {
	const context = useContext(Context)
	const date_severity = dateSeverity(ticket.severity, ticket.created_at)

	return (
	    <Card className="mb-3">
	      <Card.Body>
	        <div className="d-flex justify-content-between">
	        <div>
	            <Card.Title>
	              Título: {ticket.title} - <span className="text-muted font-weight-light">Tipo: {ticket.ticket_type}</span>
	            </Card.Title>
	            <Badge bg="primary" text="light" className="mr-2">
            	Límite de tiempo: <Moment format="DD/MM/YYYY">{date_severity}</Moment>
	            </Badge>
            	<Badge bg="primary" text="light" className="mr-2">Estado: {ticket.state}</Badge>
            	<Badge bg="primary" text="light" className="mr-2">
            	Creación: <Moment format="DD/MM/YYYY">{ticket.created_at}</Moment>
            	</Badge>
	        </div>
	        </div>  
	      <Card.Text>
	          <Link to={`/soporte/${context.productId}/tickets/${ticket.id}`}>
	          <Button
	            variant="outline-primary"
	            className="mt-4 mb-2"
	          >
	            Ver más
	          </Button>
	          </Link>
	        </Card.Text>
	      </Card.Body>
	    </Card>
	  )
}