import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

const ComeBack = ({ path }) => {
	const { product_id, ticket_id } = useParams()

	if(path.indexOf("tickets/") !== -1)
		return (
			<Link to={`/soporte/${product_id}/tickets`}>
			<Button className="my-4" variant="link">Volver</Button>
			</Link>
		)

	if(path.indexOf("soporte/") !== -1)
		return (
			<Link to={`/soporte`}>
			<Button className="my-4" variant="link">Volver</Button>
			</Link>
		)

}

export default ComeBack