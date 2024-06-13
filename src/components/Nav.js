import React from "react";
import TaxResidency from "./TaxResidency";
import { BrowserRouter, Route, Route, Link} from "react-router-dom";

   
const Nav = () => (
    <div className="nav-container">
        <ul className="nav-list">
            
            <Link to='/'><li className="nav-item"><a href="#" className="nav-link">Home</a></li></Link> 
            <li className="nav-item dropdown">
                <a href="#" className="nav-link">Dropdown</a>
                <ul className="dropdown-menu">
                    <Link to='/taxResidency'><li className="dropdown-item"><a href="/TaxResidency" className="nav-link">Tax Residency</a></li></Link>
                    <Link to='/taxfilingchecker'><li className="dropdown-item"><a href="/TaxFilingChecker" className="nav-link">Tax Filing Eligibility Checker</a></li></Link>
                    <li className="dropdown-item"><a href="/Filing Status Determination" className="nav-link">Filing Status Determination</a></li>
                    <li className="dropdown-item"><a href="/IRA Eligibility Checker" className="nav-link">IRA Eligibility Checker</a></li>
                    <li className="dropdown-item"><a href="/IRA Conversion and Recharacterization" className="nav-link">IRA Conversion and Recharacterization</a></li>
                </ul>
            </li>
        </ul>
    </div>
);

export default Nav;
