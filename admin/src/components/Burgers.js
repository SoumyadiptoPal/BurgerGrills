import Burgeritem from './Burgeritem'
import React, {useContext, useEffect} from 'react'
import burgerContext from '../context/burgers/burgerContext';



const Burgers = () => {
    const context=useContext(burgerContext);
const { burgers, getBurgers } = context;
    useEffect(() => {
        getBurgers()
        // eslint-disable-next-line
    }, [])
  return (
    <>
            <div className="row my-3">
                <h2>Our Menu</h2>
                <div className="container mx-2"> 
                {burgers.length===0 && 'No burgers to display'}
                </div>
                {burgers.map((burger) => {
                    return <Burgeritem key={burger._id} burger={burger}/>
                })}
            </div>
            
    </>
  )
}

export default Burgers