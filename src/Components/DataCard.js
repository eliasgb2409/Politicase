import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const DataCard = ({data}) => {
  const [status, setStatus] = useState(data.status);

  const updateStatus = () => {
    console.log(`Sender API kall for å oppdatere ${data.regNr} (ID: ${data.id}) til "${status}"`);
  }
  
  const statusOptions = ['Tilgjengelig', 'I oppdrag', 'På vei til hendelse', 'Under vedlikehold']; //Array of new set(data.status)

  return (
    <Card 
        key={data.id}
        style={{ width: '20rem' }}
        border="secondary"
        bg="dark"
        text="light"
        className="mb-3"
    >
      <Card.Header as="h5">
        {data.id}
      </Card.Header>
      <Card.Body>
        <Card.Title>      
          {data.merke}, {data.modell} 
        </Card.Title>
        <Card.Subtitle className="mb-2">        
          ({data.årsmodell})
        </Card.Subtitle>
        <Card.Text >
            RegNr: {data.regNr} <br />
            Status: {data.status} <br />
            Oppdrag: {data.oppdrag}
        </Card.Text>
        <div className="d-flex align-items-center">
          <Form.Select 
            className="me-2"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            {statusOptions.map(option => (
                <option key={option} value={option}>{option}</option>
            ))}
          </Form.Select>
          <Button variant="primary" onClick={updateStatus}>
            Endre status  
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default DataCard;