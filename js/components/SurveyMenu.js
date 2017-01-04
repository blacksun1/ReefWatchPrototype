import React from 'react'
import $ from 'jquery'
import { Button, Navbar, NavItem, Nav, Glyphicon } from 'react-bootstrap'
import config from "../../config"
import * as services from "../../data/services"

var SurveyMenu = React.createClass({
    closePanel: function () {
        $("div.contentPage").animate({
            left: '100%'
        });        
    },
    loadSurvey: function () {
        if(this.props.surveyID) {
            GetSurveyDay(surveyID, result => this.setState({surveys: result}));
        }
    },
    getInitialState: function() {
        return {"survey":{}};
    },  
    componentDidMount: function() {
        this.loadSurvey();
    },
    componentWillUnmount: function() {
        this.serverRequest.abort();
    },
    componentDidUpdate: function (prevProps, prevState) {
        if(prevProps.surveyID!=this.props.surveyID) {
            this.loadSurvey();
        }
    },
    render() {
        return (
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Button className="pull-right" onClick={this.closePanel}>Back</Button>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#/observation">Observation</NavItem>
                    <NavItem eventKey={2} href="#/timed">Timed Search</NavItem>
                    <NavItem eventKey={3} href="#/intercept">Point Intercept</NavItem>
                    <NavItem eventKey={4} href="#/quadrat">Species Quadrat Survey</NavItem>
                    <NavItem eventKey={5} href="#/photoUpload">Add Photo's</NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={6} href="#">{this.state.survey.description}</NavItem>
                </Nav>
            </Navbar>
          )
    }
});

module.exports = SurveyMenu;