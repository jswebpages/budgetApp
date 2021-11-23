import React, { Fragment, useEffect, useState } from "react";

const Balance = () => {
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [stocks, setStocks] = useState([]);
    
    const getBalance = async () => {
    try {
      const response = await fetch("http://localhost:5000/balance");
      const jsonData = await response.json();
      
      setExpense(jsonData[0].sum);
      setIncome(jsonData[1].sum);
    } catch (err) {
      console.error(err.message);
    }
  };
  
  useEffect(() => {
    getBalance();
  }, []);

  const getStocks = async () => {
    try {
      const response = await fetch("http://localhost:5000/getstock");
      const jsonData = await response.json();

      setStocks(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getStocks();
  }, []);  
  
    
  const total = ()=>{
  let totalInvestment = 0;    
  stocks.forEach( stock => {
      let a = parseInt((stock.latest_price).slice(1, -1))
      let b = (stock.latest_price).slice(-3)
      let price = a + b
      let total = (parseInt(stock.shares_purchase) * price)
      totalInvestment = totalInvestment + total                 
  })
  return totalInvestment
}
const thing = total()


return(
<Fragment>
<div className="bmarg row">
  <li className="bstat1">BALANCE: ${(income-expense).toFixed(2)}</li>
  <li className="bstat1">INCOME: ${income.toFixed(2)}</li>
  <li className="bstat2">EXPENSE: ${expense.toFixed(2)}</li>
  <li className="bstat1">INVESTMENT: ${thing.toFixed(2)}</li>
  <li className="bstat1">Net Worth: ${((income-expense) + thing).toFixed(2)}</li>
</div>
</Fragment>
  )
}
export default Balance;