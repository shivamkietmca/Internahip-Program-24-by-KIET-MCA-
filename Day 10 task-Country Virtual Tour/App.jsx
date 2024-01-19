// src/App.jsx
import React, { useState } from 'react';
import './App.css';

function App() {
  const [countryInput, setCountryInput] = useState('');
  const [countryInfo, setCountryInfo] = useState(null);

  const getCountryData = async () => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${countryInput}`);
      const data = await response.json();

      const country = data[0];

      if (country) {
        setCountryInfo({
          name: country.name.common,
          flag: country.flags.svg,
          capital: country.capital[0],
          population: country.population,
          currency: Object.values(country.currencies)[0].name,
          numStates: country.states ? country.states.length : 'N/A',
        });
      } else {
        setCountryInfo(null);
      }
    } catch (error) {
      console.error('Error fetching country data:', error);
    }
  };

  return (
    <div className="container mx-auto my-8 p-8 bg-white rounded shadow">
      <label htmlFor="countryInput" className="text-lg mb-4 block">Enter Country:</label>
      <input
        type="text"
        id="countryInput"
        placeholder="Type a country name"
        className="px-4 py-2 border rounded"
        value={countryInput}
        onChange={(e) => setCountryInput(e.target.value)}
      />
      <button
        onClick={getCountryData}
        className="mt-4 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer"
      >
        Get Country Info
      </button>
      {countryInfo && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold">{countryInfo.name}</h2>
          <img src={countryInfo.flag} alt="Flag" className="mt-4" width="150" />
          <p>Capital: {countryInfo.capital}</p>
          <p>Population: {countryInfo.population}</p>
          <p>Currency: {countryInfo.currency}</p>
          <p>Number of States: {countryInfo.numStates}</p>
        </div>
      )}
    </div>
  );
}

export default App;
