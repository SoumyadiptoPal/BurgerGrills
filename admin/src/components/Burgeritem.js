import React, { useContext } from "react";
import burgerContext from "../context/burgers/burgerContext";

const Burgeritem = (props) => {
  const context=useContext(burgerContext);
  const { burger } = props;
  const {getBurgers}=context
  const handleDelete = async (id) => {
    // API Call
    const response = await fetch(`http://localhost:5000/api/Initialburgers/deleteBurger/${burger._id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const json = response.json(); 
    await getBurgers();
  }
  return (
      <div className="col md-3">
        <div className="card" style={{ width: "18rem", margin: "5px" }}>
          <div className="card-body">
            <h5 className="card-title">{burger.title}</h5>
            <h6>Image={burger.image}</h6>
            <p>{burger.description}</p>
            <div className="d-flex justify-content-between align-items-center">
            <h5>{burger.price}</h5>
            <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-danger" onClick={handleDelete}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
            </button>
            </div>
            </div>
          </div>
          <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill ${(burger.tag==="non-Veg")?"bg-danger":"bg-success"}`}>
            {burger.tag}
          </span>
        </div>
      </div>
  );
};

export default Burgeritem;
