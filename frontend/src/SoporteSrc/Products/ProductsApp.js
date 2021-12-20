import React, { useState } from 'react'
import useFetchJobs from "./UseFetchJobs"
import { Container } from "react-bootstrap"
import Product from "./Product"
import ProductsPagination from "./ProductsPagination"
import SearchForm from "./SearchForm"
import TabButton from "../../Tab"

const ProductsApp = ({ history }) => {
    const [params, setParams] = useState({})
    const [page, setPage] = useState(1)
    const { products, loading, error, hasNextPage } = useFetchJobs(params, page)

    function handleParamChange(e) {
      const param = e.target.name
      const value = e.target.value
      setPage(1)
      setParams(prevParams => {
        return { ...prevParams, [param]: value }
      })
    }

    //<ProductsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    return (
    <Container className="my-4">
      <TabButton history={history}/>
      <h1 className="mb-4">Módulo de Soporte</h1>
      <SearchForm params={params} onParamChange={handleParamChange} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try Refreshing.</h1>}
      {products.map(prod => {
        return <Product key={prod.id} product={prod} />
      })}
    </Container>
    );
}

export default ProductsApp;
