import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom'
//import RecursosApp from './RecursosSrc/RecursosApp'
import ProductsApp from "./SoporteSrc/Products/ProductsApp"
import TicketsApp from "./SoporteSrc/Tickets/TicketsApp"
import { Context } from "./SoporteSrc/context/Context"
import Projects from './ProyectosSrc/views/Projects';
import AdminLayout from "./RecursosSrc/layouts/Admin.js";


const App = () => {
    const [productId, setProductId] = useState(-1)

    const valueContext = {
      productId: productId,
      setProductId: setProductId
    }

    return (
      <Context.Provider value={valueContext}>
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Projects />} />
            <Route exact path="/soporte" element={<ProductsApp />} />
            <Route exact path="/soporte/:product_id/tickets" element={<TicketsApp />} />
            <Route
                exact path="/admin"
                render={(props) => <AdminLayout {...props} />}
                element = {<AdminLayout />}
            />
        </Routes>
      </BrowserRouter>
      </Context.Provider>
    )
}

export default App