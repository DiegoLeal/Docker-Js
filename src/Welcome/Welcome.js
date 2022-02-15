import React, { Component } from 'react';
import { Card} from 'react-bootstrap';
import { Container, Form } from './styles';

class Welcome extends Component {
  render() {
    return (
      <Container>
          <Form>
            <Card border="dark" className="text-center">
              <Card.Header>Docker Nginx ReactJs</Card.Header> 
              <a href="https://github.com/DiegoLeal/Docker-Js">https://github.com/DiegoLeal/Docker-Js</a>                
            </Card> 
          </Form>          
        </Container>
    );
  }
}
export default Welcome;