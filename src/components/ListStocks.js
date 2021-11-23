import React, { Fragment, useEffect, useState } from "react";
import EditStocks from "./EditStocks";

const ListStocks = () => {
  const [stocks, setStocks] = useState([]);
  

  const deleteStock = async id => {
    try {
        await fetch(`http://localhost:5000/getstock/${id}`, {
        method: "DELETE"
      });

      setStocks(stocks.filter(stock => stock.stock_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

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




  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Latest Price</th>
            <th>Shares Purchased</th>
            <th>Acquistion Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map(stock => (
            <tr key={stock.stock_id}>
              <td>{stock.stock_name}</td>
              <td>{stock.symbol}</td>
              <td>{stock.latest_price}</td>
              <td>{stock.shares_purchase}</td>
              <td>{stock.acquisition_price}</td>  
              <td>{stock.description}</td>
              <td>
                <EditStocks stock={stock} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteStock(stock.stock_id)}
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

export default ListStocks;