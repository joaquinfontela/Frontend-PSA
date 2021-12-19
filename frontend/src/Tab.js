import React from 'react'
import { Tabs, Tab, Button, Nav } from 'react-bootstrap'

const TabButton = () => {
	return (
		<Tabs defaultActiveKey="recursos" id="uncontrolled-tab-example" className="mb-3">
		  <Tab eventKey="recursos" title="Recursos">
		    <p>Recursos</p>
		  </Tab>
		  <Tab eventKey="proyectos" title="Proyectos">
		    <p>Proyectos</p>
		  </Tab>
		  <Tab eventKey="soporte" title="Soporte">
		    <p>Soporte</p>
		  </Tab>
		</Tabs>
	)
}

export default TabButton