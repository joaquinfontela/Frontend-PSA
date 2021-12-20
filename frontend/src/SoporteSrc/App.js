import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import ProductsApp from "./Products/ProductsApp"
import TicketsApp from "./Tickets/TicketsApp"
import DetailsApp from "./Details/DetailsApp"
import { Context } from "./context/Context"
import State from "./Constants/Constants"
import moment from 'moment'

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
            <Route exact path="/soporte" element={<ProductsApp />} />
            <Route exact path="/soporte/:product_id/tickets" element={<TicketsApp />} />
            <Route exact path="/soporte/:product_id/tickets/:ticket_id" element={<DetailsApp />} />
        </Routes>
      </BrowserRouter>
      </Context.Provider>
    )
}

export default App;
