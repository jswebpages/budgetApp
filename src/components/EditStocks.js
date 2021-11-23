import React, { Fragment, useState } from "react";

const EditStocks = ({stock}) => {

    const [stock_name, setStockName] = useState(stock.stock_name);
    const [symbol, setSymbol] = useState(stock.symbol);
    const [latest_price, setLatestPrice] = useState(stock.latest_price);
    const [shares_purchase, setSharesPurchase] = useState(stock.shares_purchase);
    const [acquisition_price, setAcquisitionPrice] = useState(stock.acquisition_price);
    const [description, setDescription] = useState(stock.description);

    const updateStock = async e => {
      e.preventDefault();
      try {
      
        const body = { 
          Stock_Name: stock_name, 
          Symbol: symbol, 
          Latest_Price: latest_price, 
          Shares_Purchase: shares_purchase, 
          Acquisition_Price: acquisition_price, 
          description: description 
      };

        await fetch(`http://localhost:5000/getstock/${stock.stock_id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          }
          
        );
        
        window.location = "/";
      } catch (err) {
        console.error(err.message);
      }
    };


return(
    <Fragment>
    <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${stock.stock_id}`}   //${stocks.stock_id}
      >
        Edit
      </button>

      {/* 
        id = id10
      */}
      <div
        className="modal"
        id={`id${stock.stock_id}`}  ////${stocks.stock_id}
        onClick={() => setStockName(stock_name)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Stock</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setStockName(stock.stock_name)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input type="text" className="form-control" value={stock_name} onChange={e => setStockName(e.target.value)} />
              <input type="text" className="form-control" value={symbol} onChange={e => setSymbol(e.target.value)} />
              <input type="Number" className="form-control" value={latest_price} onChange={e => setLatestPrice(e.target.value)} />
              <input type="number" className="form-control" value={shares_purchase} onChange={e => setSharesPurchase(e.target.value)} />
              <input type="number" className="form-control" value={acquisition_price} onChange={e => setAcquisitionPrice(e.target.value)} />
              <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateStock(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setStockName(stock.stock_name)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

    
    </Fragment>
)


}
export default EditStocks;