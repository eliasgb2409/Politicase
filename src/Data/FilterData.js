import { useState, useEffect } from 'react';

// Inspirert av: https://www.geeksforgeeks.org/how-to-implement-multiple-filters-in-react/#using-state-hooks

const useFilterData = (data) => {
    // Her definerer vi de ulike filtrene som skal bli brukt 
    const [filters, setFilters] = useState({
    merke: '',
    modell: '',
    status: '',
    årsmodell: '',
    });
    const [filteredData, setFilteredData] = useState([]);

    // Filtrering av data 
    useEffect(() => {
        const filtered = data.filter((car) => {
            // Hvis et filteret er tomt så ignorerer vi det
            // Hvis filterert ikke er tomt så sjekker vi om elementene matcher filteret 
            return (
            (filters.merke === '' || car.merke === filters.merke) &&
            (filters.modell === '' || car.modell === filters.modell) &&
            (filters.status === '' || car.status === filters.status) &&
            (filters.årsmodell === '' || car.årsmodell.toString() === filters.årsmodell)
            );
        });
        
        setFilteredData(filtered);
    }, [filters, data]);

    // Kalles på hver gang brukeren endrer filteret 
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    // Returnerer filtrert data, filtere og funksjon for å håndtere endring av filtere 
    return { filteredData, filters, handleFilterChange };
};

export default useFilterData;
