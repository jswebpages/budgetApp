import React, { Fragment, useEffect, useState } from "react";
import EditTransaction from "./EditTransactions";

const ListTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  
//delete Transaction function
  const deleteTransaction = async id => {
    try {
        await fetch(`http://localhost:5000/gettransactions/${id}`, {
        method: "DELETE"
      });

      setTransactions(transactions.filter(transaction => transaction.trans_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTransactions = async () => {
    try {
      const response = await fetch("http://localhost:5000/gettransactions");
      const jsonData = await response.json();

      setTransactions(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);


  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Transaction Name</th>
            <th>Transaction Type</th>
            <th>Transaction Amount</th>
            <th>Transaction Desciption</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.trans_id}>
              <td>{transaction.trans_name}</td>
              <td>{transaction.trans_type}</td>
              <td>{(transaction.amount).toFixed(2)}</td>
              <td>{transaction.description}</td>
              <td>
                <EditTransaction transaction={transaction} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTransaction(transaction.trans_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};
export default ListTransactions;
