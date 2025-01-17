import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

import { NavLink as RRNavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggleIsOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return <Navbar color="primary" dark expand="md">
            <Container>
                <NavLink
                    tag={RRNavLink}
                    className="navbar-brand"
                    exact to="/">
                    <i className="fa fa-cubes mr-3"></i>
                    <span className="project-name">Watches</span>
                </NavLink>
            <NavbarToggler onClick={this.toggleIsOpen} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink
                            tag={RRNavLink}
                            exact to="/home"
                            activeClassName="active">
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            tag={RRNavLink}
                            exact to="/brand"
                            activeClassName="active">
                            Favorite Movies
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            tag={RRNavLink}
                            exact to="/Contact"
                            activeClassName="active">
                            Popular Movies
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            tag={RRNavLink}
                            exact 
                            to="/information"
                            activeClassName="active">
                            Gallery
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
            </Container>
        </Navbar>
    }
}

export default Header;