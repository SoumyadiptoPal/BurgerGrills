import KitchenItem from './KitchenItem'
import React, {useContext, useEffect, useRef, useState} from 'react'
import burgerContext from '../context/burgers/burgerContext';
import AddKitchen from './AddKitchen';

const Kitchen = () => {
    const context=useContext(burgerContext);
const { kitchen, getKitchen,updateToKitchen } = context;
    useEffect(() => {
        getKitchen()
        // eslint-disable-next-line
    }, [])
    const ref = useRef(null);
    const refClose = useRef(null);

    const [item, setItem] = useState({
        eid:"",
        etitle:"",
        eprice: "",
        eimage: "",
        quantity: "1",
      });
      const handleUpdateKitchen = async (e) => {
        e.preventDefault();
        refClose.current.click();
        await updateToKitchen(item);
      };
      const handleClose=async()=>{
        setItem({
          ...item,
          quantity: "1",
        })
       }
       const updateKitchen=async(currentItem)=>{
        // console.log("update");
        setItem({
          eid:currentItem._id,
          etitle: currentItem.title,
          eprice: currentItem.price,
          eimage: currentItem.image,
          quantity: currentItem.quantity
        })
        ref.current.click();
      }
      const onChange=async(e)=>{
        setItem({
            ...item,
            [e.target.name]:e.target.value
        })
      }
  return (
    <>
    <div className="row my-3">
    <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
              <input type="text" readOnly className="form-control-plaintext" id="floatingPlaintextInput"  value={item.etitle}/>
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleClose}
              ></button>
            </div>
            <div className="modal-body">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5>&#8377;{item.eprice}</h5>
                    <div className="btn-group">
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Example text with button addon"
                          aria-describedby="button-addon1"
                          style={{width:"50px"}}
                          name="quantity"
                          value={item.quantity}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary d-none"
                data-bs-dismiss="modal"
                onClick={handleClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={handleUpdateKitchen}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
                <h2>Our Kitchen</h2>
                <div className="container mx-2"> 
                {kitchen.length===0 && 'No items to display'}
                </div>
                {kitchen.map((Kitchen) => {
                    return <KitchenItem key={Kitchen._id} item={Kitchen} updateKitchen={updateKitchen}/>
                })}
            </div>
            <h4>Add Items</h4>
            <AddKitchen/>
     </>
  )
}

export default Kitchen