import React, { useState, useContext } from 'react'
import { Container } from "react-bootstrap"
import { Context } from "../context/Context"
import { Card, Badge, Button, Collapse, Form, Col } from 'react-bootstrap'
import '../Tickets/styles/Button.css'

const Tasks = ({ tasks }) => {
    const context = useContext(Context)

    return (
      <Container className="my-4">
        
        <h1 className="mb-4">Listado de tareas</h1>
        <Form className="mb-4">
        <Form.Group as={Col} xs="auto" className="center-button mt-4">
          <Button 
	          className="center-button width-button" 
	          variant="outline-dark">
	          Crear tarea
      		</Button>
        </Form.Group>
  		</Form>

        
        {tasks.map(task => {
          return <TaskList key={task.id} task={task} />
        })}
      </Container>
    );
}

const TaskList = ({ task }) => {
	const [open, setOpen] = useState(false)
	return (
    <>
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
        <div>
            <Card.Title>
              Título: {task.name} - <span className="text-muted font-weight-light">Id: {task.id}</span>
            </Card.Title>
        	<Card.Subtitle className="text-muted mb-2">
              Id del proyecto: {task.id_project}
            </Card.Subtitle>
        </div>
        </div>  
      <Card.Text>
          <Button
	            onClick={() => setOpen(prevOpen => !prevOpen)}
	            variant="primary"
	            className="mt-4"
	          >
	            {open ? 'Hide Details' : 'View Details'}
	          </Button>
	        </Card.Text>
	        <Collapse in={open}>
	          <div className="mt-4">
	          	<p>{task.description}</p>
	          </div>
	        </Collapse>
      </Card.Body>
    </Card>
    </>
  )
}

export default Tasks;

