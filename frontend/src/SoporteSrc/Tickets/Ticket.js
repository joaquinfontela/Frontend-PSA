import React from 'react'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment'

export default function Ticket({ ticket }) {
	return (
	    <Card className="mb-3">
	      <Card.Body>
	        <div className="d-flex justify-content-between">
	        <div>
	            <Card.Title>
	              Título: {ticket.title} - <span className="text-muted font-weight-light">Tipo: {ticket.ticket_type}</span>
	            </Card.Title>
	            <Badge bg="primary" text="light" className="mr-2">Severidad: {ticket.severity}</Badge>
            	<Badge bg="primary" text="light" className="mr-2">Estado: {ticket.state}</Badge>
            	<Badge bg="primary" text="light" className="mr-2">
            	Creación: <Moment format="DD/MM/YYYY">{ticket.created_at}</Moment>
            	</Badge>
	        </div>
	        </div>  
	      <Card.Text>
	          <Button
	            variant="outline-primary"
	            className="mt-4 mb-2"
	          >
	            Ver más
	          </Button>
	        </Card.Text>
	      </Card.Body>
	    </Card>
	  )
}