import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';

const Information = (props) => {
    
    return (
        <div>
            <Card style={{ width: '600px'
         }}>
  <Card.Img variant="top" src={props?.information?.img} />
  <Card.Body>
    <Card.Title>{props?.information?.Title}</Card.Title>
    <Card.Text>
      {props?.information?.Description}
    </Card.Text>
    
  </Card.Body>
</Card>
            
        </div>
    );
};

export default Information;