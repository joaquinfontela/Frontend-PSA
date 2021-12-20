import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom'
import ProductsApp from "./SoporteSrc/Products/ProductsApp"
import DetailsApp from "./SoporteSrc/Details/DetailsApp"
import TicketsApp from "./SoporteSrc/Tickets/TicketsApp"
import { Context } from "./SoporteSrc/context/Context"
import Projects from './ProyectosSrc/views/Projects';
import ReportsApp from "./RecursosSrc/Reports/ReportsApp"


const App = () => {
    const [productId, setProductId] = useState(-1)
    const [ticketId, setTicketId] = useState(-1)
    const [employees, setEmployees] = useState([])

    const valueContext = {
      productId: productId,
      setProductId: setProductId,
      ticketId: ticketId,
      setTicketId: setTicketId,
      employees: employees,
      setEmployees: setEmployees
    }

    return (
      <Context.Provider value={valueContext}>
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Projects />} />
            <Route exact path="/recursos" element={<ReportsApp />} />
            <Route exact path="/soporte" element={<ProductsApp />} />
            <Route exact path="/soporte/:product_id/tickets" element={<TicketsApp />} />
            <Route exact path="/soporte/:product_id/tickets/:ticket_id" element={<DetailsApp />} />

        </Routes>
      </BrowserRouter>
      </Context.Provider>
    )
}

export default App