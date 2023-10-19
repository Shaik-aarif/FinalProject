
import axios from "axios";
import { useSelector } from "react-redux";

import { baseURL  } from "../api";
import React from 'react'
import { useNavigate } from "react-router-dom";


const PayButton = ({}) => {

    
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);
    const user = useSelector((state) => state.user);
    const handleCheckOut = () =>{
        // console.log(cartItems);
        console.log("new button clicked");
        
        const data = {
                user: user,
                cart: cart,
                // total: total,
              };
              axios
                .post(`${baseURL}/api/products/create-checkout-session`, { data })
                .then((res) => {
                  if (res.data.url) {
                    window.location.href = res.data.url;
                    // console.log(res);
                  }
                })
                .catch((err) => console.log(err));

            console.log(data);
    }

    return (
    <div>
        <button
        // onClick={() => handleCheckOut()}
        onClick={()=>navigate("/PaymentForm")}

                 className="bg-red-500 w-[120%] px-4 py-3 text-xl text-yellow-400 hover:text-red-500 font-semibold hover:bg-yellow-400 drop-shadow-md rounded-2xl"
        
        >checkout</button>      
    </div>
  )
}

export default PayButton

