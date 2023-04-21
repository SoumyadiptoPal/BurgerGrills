import Customeritem from './Customeritem'
import React, {useContext, useEffect} from 'react'
import burgerContext from '../context/burgers/burgerContext';


const Customers = () => {
    const context=useContext(burgerContext);
const { orders, getOrders } = context;
    useEffect(() => {
        getOrders()
        // eslint-disable-next-line
    }, [])
  return (
    <>
            <div className="row my-3">
                <div className="container mx-2"> 
                {orders.length===0 && 'No recent customers to display'}
                </div>
                {orders.map((Order) => {
                    return <Customeritem key={Order._id} Order={Order}/>
                })}
            </div>
    </>
  )
}

export default Customers