import React, { Component } from 'react'
import Transaction from './Transaction';

class Transactions extends Component {

    render() {
        return (
            <div>
                <div>
                    <h4>Your transactions:</h4>
                </div>
                <table id='transactions'>
                    <thead>
                        <tr>
                            <th>Amount</th>
                            <th>Vendor</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.transactions.map(transaction => <Transaction key={transaction.amount + transaction.category + transaction.category} transaction={transaction} amount={transaction.amount} vendor={transaction.vendor} category={transaction.category} deleteTransaction={this.props.deleteTransaction} />)}                    
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Transactions
