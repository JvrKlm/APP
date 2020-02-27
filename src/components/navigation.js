import React from 'react';
import { Link } from 'gatsby';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem } from 'reactstrap';
import Logotip from '../components/images/app-logos/logotip';

export default class TopNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar className="navbar navbar-light shadow" color="white" expand="md">
        <div className="container">
          <Link aria-label="ORI Solutions" className="navbar-brand" to="/"><Logotip/></Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/">Početna</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/usluge/">Usluge</Link>
              </NavItem>
              <NavItem>
                <Link className="btn btn-outline-primary rounded-pill" to="/kontakt/">Kontakt</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    )
  }
}
