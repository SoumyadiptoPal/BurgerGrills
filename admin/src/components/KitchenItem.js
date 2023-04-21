import React, { useContext } from "react";
import burgerContext from "../context/burgers/burgerContext";

const Kitchenitem = (props) => {
  const context=useContext(burgerContext);
  const { item, updateKitchen } = props;

  return (
      <div className="col md-3">
        <div className="card" style={{ width: "18rem", margin: "5px" }}>
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <h6>Image={item.image}</h6>
            <div className="d-flex justify-content-between align-items-center">
            <h5>&#8377; {item.price}</h5>
            <h5>Quantity:{item.quantity}</h5>
            <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-danger" onClick={()=>updateKitchen(item)}>Edit</button>
            </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Kitchenitem;
