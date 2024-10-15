import React, { useState, useEffect } from 'react';
import DataCard from './DataCard'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CarFilter from './CarFilter';
import useFetchAPI from '../Data/Api';
import useFilterData from '../Data/FilterData';

const DisplayData = () => {
  // Henter relevant data fra de skreddersydde hooksene
  const { data, loading, error } = useFetchAPI();
  const { filteredData, filters, handleFilterChange } = useFilterData(data);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <CarFilter data={data} filters={filters} handleFilterChange={handleFilterChange} />
          <Row xs={1} sm={2} md={3} lg={4} xl={4}>
              {filteredData.map((item) => (
                <Col key={item.id}>
                  <DataCard 
                    key={item.id}
                    data={item}
                  />
                </Col>
              ))}
          </Row>
        </div>
      )}
    </div>
  );
};
  
export default DisplayData;