
import React from 'react'
import $ from 'jquery'
import GridRowCell from './GridRowCell'

var gridRow = React.createClass({
    render() {
        return (
                <tbody>
                {
                    this.props.data.rowData.map(function(item, index) {
                        return ( 
                            <tr key={index}> 
                                {
                                    item.row.map(function(row, rowIndex) {
                                        return <GridRowCell data={row} controlType={this.props.data.columnData[0].controlType} />;
                                    })
                                }
                            </tr>
                        );
                    })
                }
                </tbody>
            )
    }
});

module.exports = gridRow;