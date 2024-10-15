import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Inspirert av: https://www.geeksforgeeks.org/how-to-implement-multiple-filters-in-react/#using-state-hooks

const CarFilter = ({ data, filters, handleFilterChange }) => {
    return (
        <Form>
            <Row className="mb-3">
                <Col>
                <Form.Group controlId="filterBrand">
                    <Form.Label>Filtrer med bilmerke</Form.Label>
                    <Form.Select 
                    as="select" 
                    name="merke"
                    value={filters.merke} 
                    onChange={handleFilterChange}
                    >
                    <option value="">Alle bilmerker</option>
                    {Array.from(new Set(data.map(car => car.merke))).map(merke => (
                        <option key={merke} value={merke}>{merke}</option>
                    ))}
                    </Form.Select>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId="filterModel">
                    <Form.Label>Filtrer med modell</Form.Label>
                    <Form.Select 
                    as="select" 
                    name="modell"
                    value={filters.modell} 
                    onChange={handleFilterChange}
                    >
                    <option value="">Alle modeller</option>
                    {Array.from(new Set(data.map(car => car.modell))).map(modell => (
                        <option key={modell} value={modell}>{modell}</option>
                    ))}
                    </Form.Select>
                </Form.Group>
                </Col>
                
                <Col>
                <Form.Group controlId="filterStatus">
                    <Form.Label>Filtrer med status</Form.Label>
                    <Form.Select 
                    as="select" 
                    name="status"
                    value={filters.status} 
                    onChange={handleFilterChange}
                    >
                    <option value="">Alle statuser</option>
                    {Array.from(new Set(data.map(car => car.status))).map(status => (
                        <option key={status} value={status}>{status}</option>
                    ))}
                    </Form.Select>
                </Form.Group>
                </Col>

                <Col>
                <Form.Group controlId="filterYear">
                    <Form.Label>Filtrer med årsmodell</Form.Label>
                    <Form.Select 
                    as="select" 
                    name="årsmodell"
                    value={filters.årsmodell} 
                    onChange={handleFilterChange}
                    >
                    <option value="">Alle årsmodeller</option>
                    {Array.from(new Set(data.map(car => car.årsmodell))).map(year => (
                        <option key={year} value={year.toString()}>{year}</option>
                    ))}
                    </Form.Select>
                </Form.Group>
                </Col>
            </Row>
        </Form>
    );
};

export default CarFilter;
