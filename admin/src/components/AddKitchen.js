
import React, {useContext, useState} from 'react'
import burgerContext from '../context/burgers/burgerContext';

const AddKitchen = () => {
  const context=useContext(burgerContext);
  const {addItem} = context;

    const [item, setItem] = useState({title: "", price:"", image:"", quantity:""});

    const handleClick = (e)=>{
        e.preventDefault();
        addItem(item.title, item.price, item.image, item.quantity);
        setItem({title: "", price:"", image:"", quantity:""})
    }

    const onChange = (e)=>{
        setItem({...item, [e.target.name]: e.target.value})
    }
  return (
    <div>
        <form>
  <div className="mb-3">
    <label htmlFor="exampleInputTitle" className="form-label">Title</label>
    <input type="text" className="form-control" id="exampleInputTitle" aria-describedby="titleHelp" name="title" value={item.title} onChange={onChange} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputName" className="form-label">Image Name</label>
    <input type="text" className="form-control" id="exampleInputImage" name="image" value={item.image} onChange={onChange} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPrice" className="form-label">Price</label>
    <input type="text" className="form-control" id="exampleInputPrice" name="price" value={item.price} onChange={onChange} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPrice" className="form-label">Quantity</label>
    <input type="text" className="form-control" id="exampleInputTag" name="quantity" value={item.quantity} onChange={onChange} required/>
  </div>

  <button type="submit" className="btn btn-primary my-3" onClick={handleClick}>Add</button>
</form>
    </div>
  )
}

export default AddKitchen