import './App.css';
import React from 'react';

let Nav =()=>
<div className="nav">
<div className="left">
<a href="#link">Link</a>
</div>
 <form className="searchbar">
   <input type="text" placeholder=" Search ..."></input>
   <button className="btn" type="submit">Search </button>
 </form>
 <div className="right">
<a href="#link">Link</a>
</div>
</div>

let Transfer =()=>{
  return(
    <form action="database.json">
    <div className="accountFrom">
      <label for="accountFrom">From:</label>
      <input type="number" id="acct-from" required></input>
    </div>
    <div className="accountTo">
      <label for="accountTo">Amount:</label>
      <input type="number" id="acct-to" required></input>
    </div>
    <div className="amount">
      <label for="amount">Amount:</label>
      <input type="number" id="amount" required></input>
    </div>
    <button className="btn" type="submit" id="btn" onClick={Transaction}>Transfer</button>
  </form>
  )
  
}

class Transaction extends React.Component{
  constructor(props){
    super(props);
 this.state={
   error: null,
   isLoaded: false,
   accounts: []
 };
  }
componentDidMount(){
  fetch('./database.json')
  .then(res=>{return res.json()})
  .then(
    (result)=> {
    console.log(result)
    this.setState({
      isLoaded: true,
      accounts: result.accounts
    });
  },
  (error)=>{
    console.log(error)
    this.setState({
      isLoaded: true,
      error
    });
  })
}

 render(){
  const {error, isLoaded, accounts} = this.state;
  if(error){
    return <h1>Error</h1>
  }
  else if(!isLoaded){
    return <h1>Load din din din loading</h1>
  }
  else{
  const accountFrom = document.getElementById("acct-from");
   const accountTo = document.getElementById("acct-to"); 
  let amount = document.getElementById("amount");
let reference = Math.floor(Math.random()*10000000);

  for(let i=0; i<=accounts.length; i++){
    if(accountFrom !== accounts[i].accountNumber || accountTo !== accounts[i].accountNumber){return prompt("Incorrect Account Number")}
    else{
      if(accountTo === accounts[i].accountNumber)
      {accounts[i].balance -= amount} if
      (accountTo === accounts[i].accountNumber){accounts[i].balance += amount}
      
      let transaction={
        reference: this.reference,
        amount: this.amount,
        accountNumber: this.accountFrom 
      };
      let balance ={
        accountFrom: this.accountFrom,
        balance: this.balance
      }
      fetch('./database.json', {
        method: 'POST',
        headers:{
          'Accept': 'application/json',
          'Content-type': 'application/json'},
        body: JSON.stringify({
          transaction: "transations.transaction",
          balance: "balances.balance"
        })
      });
      return <>
<b>Your Transfer of `${amount}` from `${accountFrom}` to `${accountTo}` with reference number `${reference}` was successful!</b>
      </>
    }
  }

  }

  
   
 }
}

function App() {
  return (
    <>
<Nav />
  <Transfer />
  <Transaction />
    </>
  )
  
}
export default App;
