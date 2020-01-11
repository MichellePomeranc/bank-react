import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Operations from './components/Operations';
import Transactions from './components/Transactions';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      transactions: []
    }
  }

  getBalance = () => {
    const transactions = [...this.state.transactions]
    let balance = transactions.map(transaction => transaction.amount)
    let sum = 0
    for (let i = 0; i < balance.length; i++) {
      sum += balance[i]
    }
    return sum
  }

  async componentDidMount() {
    const response = await this.getTransactions()
    this.setState({ transactions: response.data })
  }

  async getTransactions() {
    return axios.get('http://localhost:8080/transactions')
  }

  addTransaction = async (newTransaction) => {
    await axios.post('http://localhost:8080/transaction', newTransaction)
    let data = await this.getTransactions()
    this.setState({
      transactions: data.data
    })
  }


  deleteTransaction = async (transaction) => {
    await axios.delete('http://localhost:8080/transaction', {data: { id: transaction._id }})
    let response = await this.getTransactions()
    this.setState({ transactions: response.data })
  }

    render() {
      return (
        <Router>
          <div className="App">
            <h1> MPM BANK</h1>
            <Link to="/"> Home </Link>
            <Link to="/transactions"> Transactions </Link>
            <Link to="/operations"> Operations </Link>
            <div>Balance: ${this.getBalance()}</div>
            <Route path="/transactions" exact render={() => <Transactions deleteTransaction={this.deleteTransaction} addTransaction={this.addTransaction} transactions={this.state.transactions} />} />
            <Route path="/operations" exact render={() => <Operations addTransaction={this.addTransaction} />} />
          </div>
        </Router>
      );
    }
  }

  export default App;
