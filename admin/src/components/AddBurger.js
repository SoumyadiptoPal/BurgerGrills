
import React, {useContext, useState, useEffect} from 'react'
import burgerContext from '../context/burgers/burgerContext';

const AddBurger = () => {
  const context=useContext(burgerContext);
  const {addBurger,kitchen,getKitchen} = context;

    const [burger, setBurger] = useState({title: "", description: "", tag: "", price:"", image:"", ingredients:{}})
    useEffect(() => {
      getKitchen()
      // eslint-disable-next-line
  }, [])
    const handleClick = (e)=>{
        e.preventDefault();
        addBurger(burger.title, burger.description, burger.ingredients, burger.tag, burger.price, burger.image);
        setBurger({title: "", description: "", tag: "",price:"",image:"", ingredients:{}})
    }

    const onChange = (e)=>{
        setBurger({...burger, [e.target.name]: e.target.value})
    }
    const minus=(key)=>{
      if(burger.ingredients[key] && burger.ingredients[key]>0)
      {
        var v=(burger.ingredients[key])?(burger.ingredients[key]):"0";
        v=v-0-1;
        setBurger({
          ...burger,
          ingredients:{...burger.ingredients,[key]:v}
        })
      } 
      // console.log(Kitchen.image);
    }

    const add=(key)=>{
      
        var v=(burger.ingredients[key])?(burger.ingredients[key]):"0";
        v=v-0+1;
        setBurger({
          ...burger,
          ingredients:{...burger.ingredients,[key]:v}
        })
      // console.log(Kitchen.image);
    }

    

  return (
    <div>
        <form>
  <div className="mb-3">
    <label htmlFor="exampleInputTitle" className="form-label">Title</label>
    <input type="text" className="form-control" id="exampleInputTitle" aria-describedby="titleHelp" name="title" value={burger.title} onChange={onChange} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputName" className="form-label">Image Name</label>
    <input type="text" className="form-control" id="exampleInputImage" name="image" value={burger.image} onChange={onChange} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPrice" className="form-label">Price</label>
    <input type="text" className="form-control" id="exampleInputPrice" name="price" value={burger.price} onChange={onChange} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPrice" className="form-label">Tag(Veg/non-Veg)</label>
    <input type="text" className="form-control" id="exampleInputTag" name="tag" value={burger.tag} onChange={onChange} required/>
  </div>
  <div className="input-group">
  <span className="input-group-text">Description</span>
  <textarea className="form-control" aria-label="With textarea" name="description" value={burger.description} onChange={onChange} required></textarea>
</div>
<h4>Add Ingredients</h4>
                  <div style={{maxHeight:"40vh",overflowY:"scroll", margin:"20px"}}>
                    {kitchen.map((Kitchen) =>{
                          return(
        <div className="p-details" key={Kitchen._id}>
            <div className="d-flex justify-content-between align-items-center">
                    <h5>{Kitchen.title}</h5>
                    <div className="btn-group" style={{height:"30px"}}>
                      <div className="input-group mb-3" style={{paddingLeft:"50px"}}>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          type="button"
                          onClick={()=>minus(Kitchen.title)}
                        style={{height:"26px",display:"flex",alignItems:"center"}}
                        >
                          &#9866;
                        </button>
                        <input
                          type="text"
                          id={Kitchen.title}
                          readOnly
                          className="form-control"
                          placeholder=""
                          value={(burger.ingredients[Kitchen.title])?(burger.ingredients[Kitchen.title]):0}
                          style={{width:"50px",height:"26px"}}
                        />
                        <button
                          className="btn btn-sm btn-outline-danger"
                          type="button"
                          onClick={()=>add(Kitchen.title)}
                        style={{height:"26px",display:"flex",alignItems:"center"}}
                        >
                          &#10009;
                        </button>
                      </div>
                    </div>
                  </div>
        </div>
        

                          )
                    })}
                  </div>
  <button type="submit" className="btn btn-primary my-3" onClick={handleClick}>Add</button>
</form>
    </div>
  )
}

export default AddBurger