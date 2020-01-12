import React, { Component } from 'react'

class Breakdown extends Component {

    render() {
        let transactions = this.props.transactions
        let transactionsByCategory = transactions.reduce(function (acc, obj){
            if (!acc[obj.category]){
                acc[obj.category] = obj.amount
                } else {
                acc[obj.category] += obj.amount
               }
                return acc
        }, {})
            let categories = Object.keys(transactionsByCategory)   
        return (
            <div>
                <div className="expensesBreakdown">Expenses Breakdown</div>
                {categories.map(c => <div className="categories" key={c}><div>Category: {c}</div> <div>Total: {transactionsByCategory[c]}</div></div>)}
            </div>
        )
    }
}

export default Breakdown  