import React, { Fragment } from "react";
import './App.css';

//components
import AddTransactions from "./components/AddTransactions";
import ListTransactions from "./components/ListTransactions";
import Balance from "./components/Balance";
import AddStock from "./components/AddStock";
import ListStocks from "./components/ListStocks";


function App() {
   
  return (
    <Fragment>
      <div className="header">
        <h1 className="logo">MONEY<span>FIT</span></h1>
      </div>
      <div className="row">
        <div className="left"><div>  
          <h1>BUDGET</h1>
          <Balance />
        </div>
        <div><AddTransactions /></div>          
        <div><ListTransactions /></div>
      </div>

      <div className="right">
        <AddStock />
        <ListStocks />
      </div>
      </div>    
</Fragment>
  );
}

export default App;
