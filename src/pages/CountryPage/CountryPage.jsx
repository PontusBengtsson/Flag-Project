// CountryPage.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import CountryCard from '../../components/CountryCard/CountryCard';


const CountryPage = () => {
    const { countryCode } = useParams();
    const navigate = useNavigate();
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCountry = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
                const data = await response.json();
                setCountry(data[0]);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchCountry();
    }, [countryCode]);

    if (loading) {
        return <Typography>Loading...</Typography>;
    }

    const handleBorderClick = (borderCountryCode) => {
        navigate(`/country/${borderCountryCode}`);
    };

    const handleBackClick = () => {
        navigate('/');
    };

    return country ? (
        <CountryCard
            country={country}
            handleBorderClick={handleBorderClick}
            handleBackClick={handleBackClick}
        />
    ) : (
        <Typography>Country not found</Typography>
    );
};

export default CountryPage;
