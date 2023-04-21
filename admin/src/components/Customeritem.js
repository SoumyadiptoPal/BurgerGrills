import React, { useContext } from "react";
import burgerContext from "../context/burgers/burgerContext";

const Customeritem = (props) => {
  const context = useContext(burgerContext);
  const { Order } = props;
  const { deleteOrder } = context;
  return (
    <div className="col md-3">
      <div className="card" style={{ width: "18rem", margin: "5px" }}>
        <div className="card-body">
          <h5 className="card-title">{Order.name}</h5>
          <p>
            {Order.email}
            <br />
            {Order.contact}
          </p>
          <p>
            {Order.address}
            <br />
            {Order.city}-{Order.pincode}
            <br />
            {Order.country}
          </p>
          <h5>
            <u>Orders</u>
          </h5>
          {Order.Burger.map((burger) => {
            return (
              <div key={burger._id}>
                <h5>&gt;{burger.title}</h5>
                <p>{burger.description}</p>
                <small className="text-muted">
                                    Quantity: {burger.quantity}
                                  </small>
                {(burger.extras)  ? (
                  <div key={burger.extras._id}>
                    <h5>Extras:</h5>
                    <ul className="list-group mb-3">
                      {burger.extras &&
                        Object.keys(burger.extras).map((key) => {
                          if (burger.extras[key] > 0) {
                            return (
                              <li
                                key={key}
                                className="list-group-item d-flex justify-content-between lh-sm"
                              >
                                <div>
                                  <h6 className="my-0">{key}</h6>
                                  <small className="text-muted">
                                    Quantity: {burger.extras[key]}
                                  </small>
                                </div>
                              </li>
                            );
                          }
                        })}
                    </ul>
                  </div>
                ) : (
                  <div></div>
                )}
                {(burger.removals)  ? (
                  <div key={burger.removals._id}>
                    <h5>Removals:</h5>
                    <ul className="list-group mb-3">
                      {burger.removals &&
                        Object.keys(burger.removals).map((key) => {
                          if (burger.removals[key] > 0) {
                            return (
                              <li
                                key={key}
                                className="list-group-item d-flex justify-content-between lh-sm"
                              >
                                <div>
                                  <h6 className="my-0">{key}</h6>
                                  <small className="text-muted">
                                    Quantity: {burger.removals[key]}
                                  </small>
                                </div>
                              </li>
                            );
                          }
                        })}
                    </ul>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            );
          })}
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-primary"
                onClick={() => {
                  deleteOrder(Order._id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customeritem;
