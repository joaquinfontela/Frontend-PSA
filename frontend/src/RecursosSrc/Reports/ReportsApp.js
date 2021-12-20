import React, { useState } from 'react'
import useFetchJobs from "./UseFetchJobs"
import { Container } from "react-bootstrap"
import Report from "./Report"
import SearchForm from "./SearchForm"

const ReportsApp = () => {
    const [params, setParams] = useState({})
    const [page, setPage] = useState(1)
    const { reports, loading, error, hasNextPage } = useFetchJobs(params, page)

    function handleParamChange(e) {
      const param = e.target.name
      const value = e.target.value
      setPage(1)
      setParams(prevParams => {
        return { ...prevParams, [param]: value }
      })
    }

    console.log("Reportes: ", reports)

    return (
    <Container className="my-4">
      <h1 className="mb-4">Módulo de Recursos</h1>
      <SearchForm params={params} onParamChange={handleParamChange} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try Refreshing.</h1>}
      {reports.map(report => {
        return <Report key={report.id} report={report} />
      })}
    </Container>
    );
}

export default ReportsApp;
