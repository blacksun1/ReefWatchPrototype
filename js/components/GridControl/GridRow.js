
import React from 'react'
import $ from 'jquery'
import GridRowCell from './GridRowCell'

var gridRow = React.createClass({
    CreateCell: function(row) {
        var rowCells = [];
        Object.keys(row).map(function (key) {
            var field = row[key];
            rowCells.push(<GridRowCell key={key} fieldKey={key} columnData={this.props.columnData[key]} data={field} row={row} />);
        }, this)
        return rowCells
    },
    render() {
        return (
                <tbody>
                {
                    this.props.data.map(function(row, index) {
                        return (<tr key={"RowID"+index}>
                            { this.CreateCell(row)}
                        </tr>);
                    }, this)
                }
                </tbody>
            )
    }
});

module.exports = gridRow;