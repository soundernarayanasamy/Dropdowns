import React from "react";
import Nav from "./Nav";
import TaxResidency from "./TaxResidency";
import TaxFilingChecker from "./TaxFilingChecker";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Nav />} />
            <Route path='/taxresidency' element={<TaxResidency />} />
            <Route path='/taxfilingchecker' element={<TaxFilingChecker />} />
        </Routes>
    </BrowserRouter>
);

export default App;
