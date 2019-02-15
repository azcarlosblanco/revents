import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import logo from "./logo.png";
import { NavLink, Link, withRouter } from "react-router-dom";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";
import { connect } from 'react-redux';
import { openModal } from '../../modals/modalsActions';
import { logout } from '../../auth/authActions';

export class NavBar extends Component {

  handleSignIn = () => {
    this.props.openModal('LoginModal');
  };

  handleRegister = () => {
    this.props.openModal('RegisterModal');
  };


  handleSignOut = () => {
    this.props.logout();

    this.props.history.push("/");
  };

  render() {
    const { auth } = this.props;
    const authenticated = auth.authenticated;

    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={Link} to="/" header>
            <img src={logo} alt="logo" />
            Re-vents
          </Menu.Item>

          <Menu.Item as={NavLink} to="/events" name="Events" />
          {authenticated &&
            <Menu.Item as={NavLink} to="/people" name="People" />}
          
          {authenticated &&
            <Menu.Item>
              <Button
                as={Link}
                to="/create-event"
                floated="right"
                positive
                inverted
                content="Create Event"
              />
            </Menu.Item>}

          {authenticated ? (
            <SignedInMenu currentUser={auth.currentUser} signOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu signIn={this.handleSignIn} register={this.handleRegister} />
          )}
        </Container>
      </Menu>
    );
  }
}

const mapDispatchToProps = {
  openModal,
  logout
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
