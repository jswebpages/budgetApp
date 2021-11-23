import React, { Fragment, useState} from "react";

const EditTransactions = ({transaction}) => {
//console.log(transaction);

  const [trans_name, setName] = useState(transaction.trans_name);
  const [trans_type, setType] = useState(transaction.trans_type);
  const [amount, setAmount] = useState(transaction.amount);
  const [description, setDescription] = useState(transaction.description);
  
  
  const updateTransactions = async e => {
    e.preventDefault();
    try {
    
      const body = { 
        trans_name: trans_name, 
        trans_type: trans_type, 
        amount: amount,
        description: description 

    };
    
      await fetch(`http://localhost:5000/gettransactions/${transaction.trans_id}`,
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
      data-target={`#id${transaction.trans_id}`} 
    >
      Edit
    </button>

    {/* 
      id = id10
    */}
    <div
      className="modal"
      id={`id${transaction.trans_id}`} 
      onClick={() => setName(trans_name)}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Edit Stock</h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              onClick={() => setName(transaction.trans_name)}
            >
              &times;
            </button>
          </div>

          <div className="modal-body">
          <label>Transaction Name:
            <input type="text" className="form-control" value={trans_name} onChange={e => setName(e.target.value)} /></label>
              <label>Transaction Type:
                <select type="text" className="form-control" onChange={e => setType(e.target.value)}>
                <option value="Debit">Choose</option>
                <option value="Expense">Expense</option>
                <option value="Debit">Debit</option>
                </select>
              </label>
            <label>Transaction Amount:
            <input type="Number" className="form-control" value={amount} onChange={e => setAmount(e.target.value)} /></label>
            <label>Transaction Description:
            <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} /></label>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-warning"
              data-dismiss="modal"
              onClick={e => updateTransactions(e)}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
              onClick={() => setName(transaction.trans_name)}
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
export default EditTransactions;