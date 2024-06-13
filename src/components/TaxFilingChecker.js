import React, { useState } from "react";
import { BrowserRouter, Route, Route, Link} from "react-router-dom";
import Nav from "./Nav";
const TaxFilingChecker = () => {
  const [filingStatus, setFilingStatus] = useState('');
  const [income, setIncome] = useState('');
  const [final, setFinal] = useState('');

  const handleSelectChange = (event) => {
    setFilingStatus(event.target.value);
  };

  const handleIncomeChange = (event) => {
    setIncome(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Selected Filing Status:', filingStatus);
    console.log('Entered Income:', income);

    let finalState1 = `You do not need to file taxes as your income is below the threshold for ${filingStatus} status.`;
    let finalState2 = `You need to file taxes as your income exceeds the threshold for ${filingStatus} status.`;

    
    if ((filingStatus === 'Single') && (income < 12550 && income >= 1)) {
      setFinal(finalState1);
    } else if ((filingStatus === 'Single') && (income >= 12550)) {
      setFinal(finalState2);
    } else if ((filingStatus === 'Married filing jointly') && (income < 25100 && income >= 1)) {
      setFinal(finalState1);
    } else if ((filingStatus === 'Married filing jointly') && (income >= 25100)) {
      setFinal(finalState2);
    } else if ((filingStatus === 'Married filing separately') && (income < 12550 && income >= 1)) {
      setFinal(finalState1);
    } else if ((filingStatus === 'Married filing separately') && (income >= 12550)) {
      setFinal(finalState2);
    } else if ((filingStatus === 'Head of household') && (income < 18800 && income >= 1)) {
      setFinal(finalState1);
    } else if ((filingStatus === 'Head of household') && (income >= 18800)) {
      setFinal(finalState2);
    } else if ((filingStatus === 'Qualifying widow (or) with dependent child') && (income < 25100 && income >= 1)) {
      setFinal(finalState1);
    } else if ((filingStatus === 'Qualifying widow (or) with dependent child') && (income >= 25100)) {
      setFinal(finalState2);
    } else {
      alert('Enter the valid input');
    }
  };

  return (
    <>
        <Nav></Nav>
        <div className="container">
        <h1>Tax Filing Checker</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="filingStatus">Choose your filing status:</label>
            <select id="filingStatus" value={filingStatus} onChange={handleSelectChange}>
              <option value=''>Select your status</option>
              <option value='Single'>Single</option>
              <option value='Married filing jointly'>Married filing jointly</option>
              <option value='Married filing separately'>Married filing separately</option>
              <option value='Head of household'>Head of household</option>
              <option value='Qualifying widow (or) with dependent child'>Qualifying widow (or) with dependent child</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="income">Enter your gross income for the year:</label>
            <input id="income" type="number" value={income} onChange={handleIncomeChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
        <p>{final}</p>
      </div>
    </>
    
  );
};

export default TaxFilingChecker;
