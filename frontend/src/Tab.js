import React, { useState } from 'react'
import { Tabs, Tab, Button, Nav, Container } from 'react-bootstrap'
import Redirection from "./Redirection"
import { Link } from "react-router-dom"

const TabButton = ({ history }) => {
	const [tab, setTab] = useState("/proyectos")

	return (
		<div id="23-container">
		<Link to={"/proyectos"}>
          <Button
            variant="light"
            className="my-2 centered"
          >
            Proyectos
          </Button>
         </Link>
         <Link to={"/recursos"}>
          <Button
            variant="light"
            className="my-2"
          >
            Recursos
          </Button>
         </Link>
         <Link to={"/soporte"}>
          <Button
            variant="light"
            className="my-2"
          >
            Soporte
          </Button>
         </Link>
         </div>
	)
}

export default TabButton