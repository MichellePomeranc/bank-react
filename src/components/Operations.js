import React, { Component } from 'react';

class Operations extends Component {
    constructor() {
        super()
        this.state = {
            amount: "",
            vendor: "",
            category: ""
        }
    }

    eventHandler = (event) => {
        let className = event.target.className;
        console.log(className)
         this.setState({
           [className]: event.target.value
         })
    }

    addTransaction = (event) => {
        if (event.target.className === "Withdraw") {
            let newWithdraw = {"amount": this.state.amount * -1, "vendor": this.state.vendor, "category": this.state.category}
            this.props.addTransaction(newWithdraw)
            console.log(newWithdraw)
            console.log(this.state.amount)
        } else {
            let newDeposit = {"amount": this.state.amount, "vendor": this.state.vendor, "category": this.state.category}
            this.props.addTransaction(newDeposit)
            console.log(newDeposit)
        }
    }

    render() {
        return (
            <div>
                <div>
                    <input className="amount" type="number" min="0" placeholder="amount" value={this.state.eventHandler} onChange={this.eventHandler}></input>
                    <input className="vendor" placeholder="vendor" value={this.state.eventHandler} onChange={this.eventHandler}></input>
                    <input className="category" placeholder="category" value={this.state.eventHandler} onChange={this.eventHandler}></input>
                </div>
                <div>
                    <button className="Deposit" onClick={this.addTransaction}>Deposit</button>
                    <button className="Withdraw" onClick={this.addTransaction}>Withdraw</button>
                </div>
            </div>
        )
    }
}



export default Operations;

