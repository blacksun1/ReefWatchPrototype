import React from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

import config from "../config"
import FieldDay from "./ModalFieldDay"

/*
Get Survey Data
*/

const selectRowProp = {
  mode: 'radio',
  clickToSelect: true  // enable click to select
};


/*

*/
var Table = React.createClass({
  handleComplete: function (id) {
    alert(id);  
  },
  handleSelect: function (row) {
    $.publish("selectFieldDay", {"location":row.description, "date":row.date});
  },
  BuildButtons: function(cell, row, enumObject){
    return <div className="btn-toolbar">
                <button onClick={this.handleComplete.bind(this, row)} className="btn btn-success btn-sm">Complete</button>
                <button onClick={this.handleSelect.bind(this, row)} className="btn btn-info btn-sm">Select</button>                
           </div>
 },
 render() {
    return (
    <BootstrapTable ref={this.props.myref} data={this.props.surveys} pagination={true} striped={true}>
        <TableHeaderColumn width="50" dataField="id" isKey={true} dataAlign="center" dataSort={true}>ID</TableHeaderColumn>
        <TableHeaderColumn width="100" dataField="date" dataSort={true}>Date</TableHeaderColumn>
        <TableHeaderColumn dataField="description" dataSort={true}>Description</TableHeaderColumn>
        <TableHeaderColumn width="200" dataAlign="center" dataField="id" dataFormat={this.BuildButtons}>Actions</TableHeaderColumn>
    </BootstrapTable>
  )}
});

/* 

*/
var Panel = React.createClass({
    render() {
        return (<div className={"panel panel-"+this.props.type}>
                    <div className="panel-heading">{this.props.heading}</div>
                    <div className="panel-body">{this.props.children}</div>
                </div>)
    }
})


var ActiveSurvey = React.createClass({
    handleBtnClick: function(e) {
        this.refs.fieldDay.open();
    },
    getInitialState: function() {
        return {"surveys":[]};
    },  
    componentDidMount: function() {
        var that = this;
        this.serverRequest = $.get(config.api.hostname + ":"+config.api.port+"/api/v1/field_days?num="+Math.random(), function (result) {
            that.setState({
                surveys: result.data
            });
        })
        .done(function() {
        })
        .fail(function(jqXHR, textStatus, errorThrown) { 
        })
        .always(function() {
        });
    },
    componentWillUnmount: function() {
        this.serverRequest.abort();
    },
    render() {
        return ( 
            <Panel heading={"Current Field Days"} type={"primary"}>
                <button className="btn btn-primary" onClick={this.handleBtnClick}>Add</button>
                <Table surveys={this.state.surveys} />
                <FieldDay ref="fieldDay" />
            </Panel>
        )
    }
})

function priceFormatter(cell, row){
  return cell;
}


/*

*/
export default React.createClass({
  render() {
    return (<div>
                <ActiveSurvey />
            </div>)
  }
})
