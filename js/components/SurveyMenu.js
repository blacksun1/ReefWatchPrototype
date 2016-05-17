import React from 'react'
import $ from 'jquery'
import { FormControl, Navbar, NavItem, Nav } from 'react-bootstrap'

var SurveyMenu = React.createClass({
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                    Surveys
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#/observation">Observation</NavItem>
                    <NavItem eventKey={2} href="#">Timed Search</NavItem>
                    <NavItem eventKey={2} href="#">Point Intercept</NavItem>
                    <NavItem eventKey={2} href="#">Species Qudrat Survey</NavItem>
                    <NavItem eventKey={2} href="#">Add Photo's</NavItem>
                </Nav>
            </Navbar>
          )
    }
});

module.exports = SurveyMenu;