import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

class Logout extends Component {

  logout() {
    this.props.history.push('/');
    this.props.keycloak.logout();
  }

  render() {
    return (
      <Button variant="dark" onClick={ () => this.logout() }>
        Logout
      </Button>
    );
  }
}
export default withRouter(Logout);