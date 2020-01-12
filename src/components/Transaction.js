import React, { Component } from 'react'
import DeleteIcon from '@material-ui/icons/Delete'

class Transaction extends Component {

    render() {
        return (
            <tr style={{ color: this.props.amount <0 ? 'red' : 'green'}}>
                <td>${this.props.amount}</td>
                <td>{this.props.vendor}</td>
                <td>{this.props.category}</td>
                <td><button onClick={() => this.props.deleteTransaction(this.props.transaction)}><DeleteIcon /></button></td>            
            </tr>

        )
    }
}

export default Transaction  
