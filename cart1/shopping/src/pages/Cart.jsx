import { useSelector } from "react-redux";
import { NavLink} from "react-router-dom"
import CartItem from "../components/CartItem";
import { useState,useEffect } from "react";
const Cart = () => {
 const [totalAmount, setTotalAmount] = useState(0);


 const {cart}= useSelector((state)=>state)
 
 useEffect(()=>{
  setTotalAmount();
 },[cart])
  return (
    
 <div>
  {cart.length>0?
  (<div>


      <div>
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div>

        <div>
          <div>Your Cart</div>
          <div>Summary</div>
          <p>
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
          <p>Total Amount: ${totalAmount}</p>
          <button>
            CheckOut Now
          </button>
        </div>

      </div>


    </div>):
  (<div>
      <h1>Cart Empty</h1>
      <NavLink to={"/"}>
        <button>
          Shop Now
        </button>
      </NavLink>
    </div>)
  }
  </div>
   
  );
};

export default Cart;
