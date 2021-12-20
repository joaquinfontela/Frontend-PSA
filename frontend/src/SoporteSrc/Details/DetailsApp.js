import React, { useState, useContext } from 'react'
import useFetchJobs from "./UseFetchJobs"
import { Container } from "react-bootstrap"
import { Context } from "../context/Context"
import Details from "./Details"
import ComeBack from "../ComeBack/ComeBack"
import { useParams } from 'react-router-dom'

const ProductsApp = () => {
    const context = useContext(Context)
    const { product_id, ticket_id } = useParams()

    const [params, setParams] = useState({})
    const [page, setPage] = useState(1)
    const { ticket, loading, error, hasNextPage } = useFetchJobs(params, page)

    function handleParamChange(e) {
      const param = e.target.name
      const value = e.target.value
      setPage(1)
      setParams(prevParams => {
        return { ...prevParams, [param]: value }
      })
    }


    return (
      <Container className="my-4">
        <ComeBack path={`/soporte/${product_id}/tickets/${ticket_id}`}/>
        <h1 className="mb-4">Detalles del ticket {context.ticketId}</h1>
        {loading && <h1>Loading...</h1>}
        {error && <h1>Error. Try Refreshing.</h1>}
        {!loading && !error && <Details key={ticket.id} ticket={ticket} />}
      </Container>
    );
}

export default ProductsApp;
