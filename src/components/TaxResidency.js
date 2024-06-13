import React, { useState } from 'react';
import Nav from './Nav';
import { BrowserRouter, Route, Route, Link} from "react-router-dom";

function TaxCalculator() {
  const [isCitizenOrGreenCardHolder, setIsCitizenOrGreenCardHolder] = useState('');
  const [currentYearDays, setCurrentYearDays] = useState('');
  const [firstPrevYearDays, setFirstPrevYearDays] = useState('');
  const [secondPrevYearDays, setSecondPrevYearDays] = useState('');
  const [result, setResult] = useState('');

  const isTaxResident = (currentYearDays, firstPrevYearDays, secondPrevYearDays) => {
    const weightedDays = currentYearDays + (firstPrevYearDays / 3) + (secondPrevYearDays / 6);
    return currentYearDays >= 31 && weightedDays >= 183;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isCitizenOrGreenCardHolder === 'yes') {
      setResult('You are a tax resident of the USA.');
      return;
    }

    const currentYearDaysNum = parseInt(currentYearDays, 10);
    const firstPrevYearDaysNum = parseInt(firstPrevYearDays, 10);
    const secondPrevYearDaysNum = parseInt(secondPrevYearDays, 10);

    if (isNaN(currentYearDaysNum) || isNaN(firstPrevYearDaysNum) || isNaN(secondPrevYearDaysNum) ||
        currentYearDaysNum < 0 || currentYearDaysNum > 366 || 
        firstPrevYearDaysNum < 0 || firstPrevYearDaysNum > 366 || 
        secondPrevYearDaysNum < 0 || secondPrevYearDaysNum > 366) {
      setResult('Invalid input: Days must be between 0 and 366.');
      return;
    }

    if (isTaxResident(currentYearDaysNum, firstPrevYearDaysNum, secondPrevYearDaysNum)) {
      setResult('You are a tax resident of the USA.');
    } else {
      setResult('You are not a tax resident of the USA.');
    }
  };

  return (
    <>
    <Nav/>
    <div className="container">
      <h1>Tax Residency</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Are you a U.S. citizen or green card holder?:
            <select
              className='uscitizen'
              value={isCitizenOrGreenCardHolder}
              onChange={(e) => setIsCitizenOrGreenCardHolder(e.target.value)}
              required
            >
              <option value="" disabled>Select...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <label>
            Enter the number of days you were present in the USA in the current year:
            <input
              className='currentyear'
              type="number"
              value={currentYearDays}
              onChange={(e) => setCurrentYearDays(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Enter the number of days you were present in the USA in the first year before the current year:
            <input
              className='firstyear'
              type="number"
              value={firstPrevYearDays}
              onChange={(e) => setFirstPrevYearDays(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Enter the number of days you were present in the USA in the second year before the current year:
            <input
              className='secondyear'
              type="number"
              value={secondPrevYearDays}
              onChange={(e) => setSecondPrevYearDays(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      {result && <p>{result}</p>}
    </div>
  </>
  );
}

export default TaxCalculator;
