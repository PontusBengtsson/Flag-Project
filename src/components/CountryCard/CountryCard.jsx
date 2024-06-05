import React, { useState, useEffect } from 'react';

const CountryCard = ({ country }) => {
  const [flagUrl, setFlagUrl] = useState('');

  useEffect(() => {
    const fetchFlag = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${country.name.common}`);
        const data = await response.json();
        const flag = data[0].flags.png;
        setFlagUrl(flag);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFlag();
  }, [country.name.common]);

  return (
    <div className="country-card">
      <h2>{country.name.common}</h2>
      {flagUrl ? <img src={flagUrl} alt={`${country.name.common} flag`} /> : <p>Loading flag...</p>}
    </div>
  );
};

export default CountryCard;
