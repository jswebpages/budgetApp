import React, { Fragment, useState } from "react";


const AddTransactions = () => {
  const [trans_name, setName] = useState('');
  const [trans_type, setType] = useState('');
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState('');
  

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
    const body = { 
        trans_name: trans_name, 
        trans_type: trans_type, 
        amount: amount,
        description: description 
    };
    
    await fetch("http://localhost:5000/posttransactions", {
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
    <h1 className="text-center mt-5">Add Transaction</h1>
    <form onSubmit={onSubmitForm}>
      <label>Transaction Name:
      <input type="text" className="form-control form-control2" value={trans_name} onChange={e => setName(e.target.value)} />
      </label>
      <label>Transaction Type:
      <select type="text" className="form-control form-control2" onChange={e => setType(e.target.value)}>
      <option value="Debit">Choose</option>
      <option value="Expense">Expense</option>
      <option value="Debit">Debit</option>
      </select>
      </label>
      <label>Amount:
      <input type="number" className="form-control form-control2" value={amount} onChange={e => setAmount(e.target.value)} />
      </label>
      <label>Transaction Description:
      <input type="text" className="form-control form-control2" value={description} onChange={e => setDescription(e.target.value)} />
      </label>
      <button className="btn btn-success">Add</button>
    </form>
  </Fragment>
  )
}
export default AddTransactions;
