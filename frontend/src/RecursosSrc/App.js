import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import ReportsApp from "./Reports/ReportsApp"

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route exact path="/recursos" element={<ReportsApp />} />
        </Routes>
      </BrowserRouter>
    )
}

export default App;
