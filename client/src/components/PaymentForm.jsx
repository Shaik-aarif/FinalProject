import "../assets/css/Payment.css";
import Header from './Header';
import {useNavigate} from 'react-router-dom';
import { cardIMG } from "../assets";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buttonClick, slideIn, staggerFadeInOut } from "../animations";
import { motion } from "framer-motion";
import { alertNULL, alertSuccess } from "../context/actions/alertActions";
import { setCartItems } from "../context/actions/cartAction";
import { setCartOff } from "../context/actions/displayCartAction";
import { baseURL, getAllCartItems, increaseItemQuantity } from "../api";

import {
  BiChevronsRight,
  FcClearFilters,
  HiCurrencyRupee,
  BiTime,
} from "../assets/icons";

// import React from "react";
// import { useCountries } from "use-react-countries";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Input,
//   Button,
//   Typography,
//   Tabs,
//   TabsHeader,
//   TabsBody,
//   Tab,
//   TabPanel,
//   Select,
//   Option,
// } from "@material-tailwind/react";
// import {
//   BanknotesIcon,
//   CreditCardIcon,
//   LockClosedIcon,
// } from "@heroicons/react/24/solid";


const PaymentForm = () => {


  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const [total, setTotal] = useState(0);
  const [time, setTime] = useState(0);
  

  useEffect(() => {
    let ttc = 0 ;
    let tot = 0;
    if (cart) {
      cart.map((data) => {
        tot = tot + data.product_price * data.quantity;
        setTotal(tot);
      });
    }
    if (cart) {
      cart.map((data) => {
        ttc = Math.max(ttc , data.time_to_get_ready);
        setTime(ttc);
      });
    }
  }, [cart]);



  // const { countries } = useCountries();
  // const [type, setType] = React.useState("card");
  // const [cardNumber, setCardNumber] = React.useState("");
  // const [cardExpires, setCardExpires] = React.useState("");

  const navigate = useNavigate();

  // const NavigateToCheckoutSuccess = () => {
  //   // 👇️ navigate to /contacts
  //   navigate('/checkout-success');
  // };


  return (
    <>
         <main className="w-screen min-h-screen flex items-center justify-center flex-col bg-primary">
         
         {/* <Header></Header> */}
         <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20  md:w-100 mx-10 ">
      <div className="grid grid-cols-2 gap-4">

      


         <div>
         
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-500 mb-6">Order Information</h1>
      <div className=" h-full gap-3 relative">
        {cart && cart?.length > 0 ? (
          <>
            <div className="flex flex-col w-full items-start justify-start gap-3 h-[65%] overflow-y-scroll scrollbar-none px-4">
              {cart &&
                cart?.length > 0 &&
                cart?.map((item, i) => (
                  <CartItemCard key={i} index={i} data={item} />
                ))}
            </div>
            <div className=" w-full h-fill flex flex-col items-center justify-center px-4 gap-8">
              <div className="w-full flex items-center justify-evenly">
                <p className="text-3xl text-red-500 font-semibold">Total Price</p>
                <p className="text-3xl text-yellow-400 font-semibold flex items-center justify-center gap-1">
                  <HiCurrencyRupee className="text-red-500" />
                  {total}
                </p>
              </div>
              <div className="w-full flex items-center justify-evenly">
                <p className="text-3xl text-red-500 font-semibold">Your Order will get ready in</p>
                <p className="text-3xl text-yellow-400 font-semibold flex items-center justify-center gap-1">
                  <BiTime className="text-red-500" />
                  {time} minutes
                </p>
              </div>
            </div>
          </>
        ) : (
          <><p>No data</p></>
        )}
      </div>

      </div>



      <div>
         
         <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-500 mb-6">Payment Details</h1>
         <form>
           <div className="mb-4 md:mb-6">
             <label className="text-yellow-400 block mb-2">Card Number</label>
             <input
               type="text"
               className="w-full p-2 border border-gray-300 rounded-md"
               placeholder="1234 5678 9012 3456"
             />
           </div>
           <div className="flex flex-col sm:flex-row mb-4 sm:mb-6">
             <div className="w-full sm:w-1/2 sm:pr-2">
               <label className="text-yellow-400 block mb-2">Expiration Date</label>
               <input
                 type="text"
                 className="w-full p-2 border border-gray-300 rounded-md"
                 placeholder="MM/YY"
               />
             </div>
             <div className="w-full sm:w-1/2 sm:pl-2">
               <label className="text-yellow-400 block mb-2">CVV</label>
               <input
                 type="text"
                 className="w-full p-2 border border-gray-300 rounded-md"
                 placeholder="123"
               />
             </div>
           </div>
           <div className="mb-4 md:mb-6">
             <label className="text-yellow-400 block mb-2">Name on Card</label>
             <input
               type="text"
               className="w-full p-2 border border-gray-300 rounded-md"
               placeholder="John Doe"
             />
           </div>
           <div className="mb-4 md:mb-6">
             <button
               className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
               type="submit"
               onClick={()=>navigate("/checkout-success")}
             >
               Pay
               
             </button>
           </div>
         </form>
         <div className="flex justify-center">
           <img
             src={cardIMG} // Replace with MasterCard logo image URL
             alt="MasterCard"
             className="w-[80%] "
           />
         </div>
         </div>

    </div>

    </div>
</main>
    </>
  )
}


export const CartItemCard = ({ index, data }) => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const [itemTotal, setItemTotal] = useState(0);
  const dispatch = useDispatch();

  const decrementCart = (productId) => {
    dispatch(alertSuccess("Updated the cartitem"));

    increaseItemQuantity(user?.user_id, productId, "decrement").then((data) => {
      getAllCartItems(user?.user_id).then((items) => {
        dispatch(setCartItems(items));
        dispatch(alertNULL());
      });
    });
  };

  const incrementCart = (productId) => {
    dispatch(alertSuccess("Updated the cartitem"));
    increaseItemQuantity(user?.user_id, productId, "increment").then((data) => {
      getAllCartItems(user?.user_id).then((items) => {
        dispatch(setCartItems(items));
        dispatch(alertNULL());
      });
    });
  };

  useEffect(() => {
    setItemTotal(data.product_price * data.quantity);
  }, [itemTotal, cart]);

  return (
    <motion.div
      key={index}
      {...staggerFadeInOut(index)}
      className="w-full flex items-center justify-start rounded-md  px-4 gap-4"
    >
      <img
        src={data?.imageURL}
        className=" w-24 min-w-[94px] h-24 object-contain"
        alt=""
      />

      <div className="flex items-center justify-start gap-1 w-full">
        <p className="text-lg text-yellow-400 font-semibold">
          {data?.product_name}
          <span className="text-sm block capitalize text-gray-600">
            {data?.product_category}
          </span>
        </p>
        <p className="text-xl font-semibold text-yellow-400 ml-10">Price</p>

        <p className="text-sm flex items-center gap-1 font-semibold text-red-500 ">
          <HiCurrencyRupee className="text-red-500" /> {itemTotal}
        </p>
        <p className="text-xl font-semibold text-yellow-400 ml-10">Quantity</p>

        <p className="text-md flex items-center gap-2 font-bold text-red-500 ">
           {data?.quantity}
        </p>
      </div>

      {/* <div className="ml-auto flex items-center justify-center gap-3">
        <motion.div


         className="w-8 h-8 flex items-center justify-center "
        >
          <p className="text-xl font-semibold text-yellow-400">Quantity</p>
        </motion.div>
        <p className="text-lg text-red-500 font-semibold">{data?.quantity}</p>
      </div> */}
    </motion.div>
  );
};



export default PaymentForm

