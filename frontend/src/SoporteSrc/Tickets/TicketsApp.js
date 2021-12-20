import React, { useState, useContext } from 'react'
import useFetchJobs from "./UseFetchJobs"
import { Container } from "react-bootstrap"
import { Context } from "../context/Context"
import Ticket from "./Ticket"
import SearchForm from "./SearchForm"
import { useParams } from 'react-router-dom'
import ComeBack from "../ComeBack/ComeBack"

const ProductsApp = () => {
    const context = useContext(Context)

    const [params, setParams] = useState({})
    const [page, setPage] = useState(1)
    const { tickets, loading, error, hasNextPage } = useFetchJobs(params, page)
    const { product_id } = useParams()

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
        <ComeBack path={`/soporte/${product_id}/tickets`} />
        <h1 className="mb-4">Tickets del producto {context.productId}</h1>
        <SearchForm params={params} onParamChange={handleParamChange} />
        {loading && <h1>Loading...</h1>}
        {error && <h1>Error. Try Refreshing.</h1>}
        {tickets.map(ticket => {
          return <Ticket key={ticket.id} ticket={ticket} />
        })}
      </Container>
    );
}

export default ProductsApp;
