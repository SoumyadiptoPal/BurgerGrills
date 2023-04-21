import {useState} from 'react'
import BurgerContext from "./burgerContext"
import { read, utils,writeFileXLSX } from 'xlsx';

const BurgerState = (props) => {
  const host = "http://localhost:5000"
  const burgersInitial = []
  const[burgers,setBurgers]=useState(burgersInitial)

  const orderInitial=[];
  const [orders,setOrders]=useState(orderInitial)

  const [kitchen,setKitchen]=useState([]);
  const userInitial = []
  const[user,setUser]=useState(userInitial)
  // Get all Burgers
  const getBurgers = async () => {
    // API Call 
    const response = await fetch(`${host}/api/Initialburgers/getBurger`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
     }
    });
    const json = await response.json() 
    setBurgers(json)
  }

  const getUser= async()=>{
    //API Call
    const response = await fetch(`${host}/api/auth/getallUsers`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
     }
    });
    const json = await response.json() 
    setUser(json)
  }

  const addBurger = async (title, description, ingredients, tag, price, image) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/Initialburgers/addIburger`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title, description, ingredients, tag, price, image})
    });
    const burger = await response.json();
    setBurgers(burgers.concat(burger))
  }

  //Get all customers
  const getOrders= async () => {
    // API Call 
    const response = await fetch(`${host}/api/order/getorder`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
       }
      });
      const json = await response.json() 
      setOrders(json)
  }

    // Delete a Customer
    const deleteOrder = async (id) => {
      // API Call
      const response = await fetch(`${host}/api/order/deleteorder/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const json = response.json(); 
      const newOrder = orders.filter((order) => { return order._id !== id })
      setOrders(newOrder)
    }

      //Get all kitchen items
  const getKitchen = async () => {
    // API Call 
    const response = await fetch(`${host}/api/kitchen/getKitchen`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
     }
    });
    const json = await response.json()
    setKitchen(json)
  }

  const addItem = async (title, price, image, quantity) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/kitchen/addKitchen`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title, price, image, quantity})
    });
    const item = await response.json();
    setKitchen(kitchen.concat(item))
  }
  const updateToKitchen=async(item)=>{
    let quantity=item.quantity;
    const response = await fetch(`${host}/api/kitchen/updateKitchen/${item.eid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({quantity})
    });
    await getKitchen();
  }
  const importData=async(item)=>{
    var xlsx= require("xlsx");
    await getUser();
    console.log(user)
    var ws = xlsx.utils.json_to_sheet(user);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Data");
    writeFileXLSX(wb, "UserDetails.xlsx");
  }

  return (
    <BurgerContext.Provider value={{burgers, addBurger, getBurgers, getOrders, orders, deleteOrder,kitchen,getKitchen, addItem, updateToKitchen, importData}}>
        {props.children}
    </BurgerContext.Provider>
  )
}

export default BurgerState