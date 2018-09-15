import React, {Component} from 'react';
import {Menu, Container, Button} from 'semantic-ui-react';
import {NavLink, Link, withRouter} from 'react-router-dom';

import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';

class Navbar extends Component {

  state = {
    authenticated: false
  }

  handleSignIn = () => {
    this.setState({authenticated: true})
  }

  handleSignOut = () => {
    this.setState({authenticated: false});
    this
      .props
      .history
      .push('/');
  }

  render() {
    const {authenticated} = this.state;

    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={Link} to="/" header>
            <img src="/assets/logo03.svg" alt="logo"/>
            Rendezvous
          </Menu.Item>
          {authenticated && [
            <Menu.Item as={NavLink} to="/events" name="Events"/>,
            <Menu.Item as={NavLink} to="/people" name="People"/>]
          }
          <Menu.Item>
            <Button
              as={Link}
              to="/createRendezvous"
              floated="right"
              positive
              inverted
              content="Plan Rendezvous"/>
          </Menu.Item>
          {authenticated
            ? <SignedInMenu handleSignOut={this.handleSignOut}/>
            : <SignedOutMenu handleSignIn={this.handleSignIn}/>}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(Navbar);