import React, { Fragment, useState } from "react";


const AddStock = ()=>{
    const [stock_name, setStockName] = useState('');
    const [symbol, setSymbol] = useState('');
    const [latest_price, setLatestPrice] = useState(0);
    const [shares_purchase, setSharesPurchase] = useState(0);
    const [acquisition_price, setAcquisitionPrice] = useState(0);
    const [description, setDescription] = useState('');
    

    const onSubmitForm = async (e) => {
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
        

        await fetch("http://localhost:5000/addstock", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          
          });

          window.location = "/";
        } catch (err) {
          console.error(err.message);
        }

        
      };



    return(
    <Fragment>
      <h1 className="text-center mt-5">Add Stock</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>

        <label>Stock Name:
        <input type="text" className="form-control" value={stock_name} onChange={e => setStockName(e.target.value)} />
        </label>

        <label>Symbol:
        <input type="text" className="form-control" value={symbol} onChange={e => setSymbol(e.target.value)} />
        </label>

        <label>Latest Price:
        <input type="text" className="form-control" value={latest_price} onChange={e => setLatestPrice(e.target.value)} />
        </label>

        <label>Shares Purchase:
        <input type="text" className="form-control" value={shares_purchase} onChange={e => setSharesPurchase(e.target.value)} />
        </label>

        <label>Acquisition Price:
        <input type="text" className="form-control" value={acquisition_price} onChange={e => setAcquisitionPrice(e.target.value)} />
        </label>

        <label>Stock Description:
        <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
        </label>


        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
    )
}
export default AddStock;