import React, { Component } from 'react';
import Keycloak from 'keycloak-js';
import UserInfo from '../UserInfo/UserInfo';
import Logout from '../Logout';
import '../App.css';
import { Card } from 'react-bootstrap';
import { Container, Form } from './styles';

class Secured extends Component {

  constructor(props) {
    super(props);
    this.state = { keycloak: null, authenticated: false };
  }

  componentDidMount() {
    const keycloak = Keycloak('/keycloak.json');
    keycloak.init({onLoad: 'login-required'}).then(authenticated => {   
      console.log(keycloak);   
      this.setState({ keycloak: keycloak, authenticated: authenticated })
    })    
  }

  render() {
    if(this.state.keycloak) {
      if(this.state.authenticated) return (
        <Container>
          <Form>
            <Card border="dark" className="text-center">
              <Card.Header>Componente autenticado!</Card.Header> 
                 <Card.Body>               
                  <UserInfo keycloak={this.state.keycloak} />
                </Card.Body>
            </Card> 
            <Logout keycloak={this.state.keycloak} />   
          </Form>          
        </Container>
      ); else return (<div>Unable to authenticate!</div>)
    }
    return (
      <div>Initializing Keycloak...</div>
    );
  }
}
export default Secured;