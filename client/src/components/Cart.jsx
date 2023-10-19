import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buttonClick, slideIn, staggerFadeInOut } from "../animations";
import { baseURL, getAllCartItems, increaseItemQuantity } from "../api";
import {
  BiChevronsRight,
  FcClearFilters,
  HiCurrencyRupee,
  BiTime,
} from "../assets/icons";
import { alertNULL, alertSuccess } from "../context/actions/alertActions";
import { setCartItems } from "../context/actions/cartAction";
import { setCartOff } from "../context/actions/displayCartAction";
// import {loadStripe} from '@stripe/stripe-js';


import {PayButton} from "./index"

const Cart = () => {
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


  // const makePayment = async () => {
  //   const stripe = await loadStripe("pk_test_51NuCaBSAvl9t0ryh78HDZDLvCtpBhLJhQrzkkEcv6WEYTZDauD3a1V6jUXVJgN0X8D6geAZPAYi3C2l1W49glybP00xGR1o3UL");
  
  //   const body = {
  //     // Include any data you want to send in the request body
  //   };
  
  //   const headers = {
  //     "Content-Type": "application/json", // Set the content type to JSON
  //   };
  
  //   const response = await fetch("http://localhost:7000/api/create-checkout-session", {
  //     method: "POST",
  //     headers: headers,
  //     body: JSON.stringify(body), // Convert the body object to a JSON string
  //   });
  
  //   const session = await response.json();
  
  //   const result = stripe.redirectToCheckout({
  //     sessionId: session.id,
  //   });
  
  //   if (result.error) {
  //     console.log(result.error);
  //   }
  // };


  // const handleCheckOut = () => {

  //   console.log("clicked on checkout")
  //   const data = {
  //     user: user,
  //     cart: cart,
  //     total: total,
  //   };
  //   axios
  //     .post(`${baseURL}/api/products/create-checkout-session`, { data })
  //     .then((res) => {
  //       if (res.data.url) {
  //         window.location.href = res.data.url;
  //       }
  //       console.log(res)
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <motion.div
      {...slideIn}
      className="fixed z-50 top-0 right-0 w-300 md:w-508 bg-lightOverlay backdrop-blur-md shadow-md h-[90%] pb-8"
    >
      <div className="w-full flex items-center justify-between py-4 pb-12 px-6">
        <motion.i
          {...buttonClick}
          className="cursor-pointer"
          onClick={() => dispatch(setCartOff())}
        >
          <BiChevronsRight className="text-[50px] text-textColor" />
        </motion.i>
        <p className="text-2xl text-headingColor font-semibold">Your Cart</p>
        <motion.i {...buttonClick} className="cursor-pointer">
          <FcClearFilters className="text-[30px] text-textColor" />
        </motion.i>
      </div>

      <div className="flex-1 flex flex-col items-center justify-start rounded-t-2xl  bg-lightOverlay h-full py-6  gap-3 relative">
        {cart && cart?.length > 0 ? (
          <>
            <div className="flex flex-col w-full items-start justify-start gap-3 h-[65%] overflow-y-scroll scrollbar-none px-4">
              {cart &&
                cart?.length > 0 &&
                cart?.map((item, i) => (
                  <CartItemCard key={i} index={i} data={item} />
                ))}
            </div>
            <div className="bg-zinc-800 rounded-t-[60px] w-full h-fill flex flex-col items-center justify-center px-4 py-6 gap-8">
              <div className="w-full flex items-center justify-evenly">
                <p className="text-3xl text-gray-300 font-semibold">Total</p>
                <p className="text-3xl text-yellow-500 font-semibold flex items-center justify-center gap-1">
                  <HiCurrencyRupee className="text-red-500" />
                  {total}
                </p>
              </div>
              <div className="w-full flex items-center justify-evenly">
                <p className="text-3xl text-gray-300 font-semibold">Estimated Time</p>
                <p className="text-3xl text-yellow-500 font-semibold flex items-center justify-center gap-1">
                  <BiTime className="text-red-500" />
                  {time} minutes
                </p>
              </div>

              

              {/* <motion.button
                {...buttonClick}
                className="bg-red-500 w-[70%] px-4 py-3 text-xl text-yellow-400 hover:text-red-500 font-semibold hover:bg-yellow-400 drop-shadow-md rounded-2xl"
                onClick={handleCheckOut}
              >
                Check Out
              </motion.button> */}
              <div
                >
                <PayButton
                cartItems = {cart.cart}
                ></PayButton>
                </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-3xl text-red-400 text-center font-bold">Empty Cart</h1>
          </>
        )}
      </div>
    </motion.div>
  );
};

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
      className="w-full flex items-center justify-start bg-zinc-800 rounded-md drop-shadow-md px-4 gap-4"
    >
      <img
        src={data?.imageURL}
        className=" w-24 min-w-[94px] h-24 object-contain"
        alt=""
      />

      <div className="flex items-center justify-start gap-1 w-full">
        <p className="text-lg text-yellow-400 font-semibold">
          {data?.product_name}
          <span className="text-sm block capitalize text-gray-300">
            {data?.product_category}
          </span>
        </p>
        {/* <p className="text-sm  text-red-500 flex items-center justify-center gap-1 ml-auto">
          <BiTime className="text-red-500" />
          {parseInt(data?.time_to_get_ready)}
        </p> */}
        <p className="text-sm flex items-center justify-center gap-1 font-semibold text-red-500 ml-auto">
          <BiTime className="text-red-500" /> {parseInt(data?.time_to_get_ready)}
        </p>
        <p className="text-sm flex items-center justify-center gap-1 font-semibold text-red-500 ml-auto">
          <HiCurrencyRupee className="text-red-500" /> {itemTotal}
        </p>
      </div>

      <div className="ml-auto flex items-center justify-center gap-3">
        <motion.div
          {...buttonClick}
          onClick={() => decrementCart(data?.productId)}
          className="w-8 h-8 flex items-center justify-center rounded-md drop-shadow-md bg-zinc-900 cursor-pointer"
        >
          <p className="text-xl font-semibold text-primary">--</p>
        </motion.div>
        <p className="text-lg text-yellow-400 font-semibold">{data?.quantity}</p>
        <motion.div
          {...buttonClick}
          className="w-8 h-8 flex items-center justify-center rounded-md drop-shadow-md bg-zinc-900 cursor-pointer"
          onClick={() => incrementCart(data?.productId)}
        >
          <p className="text-xl font-semibold text-primary">+</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Cart;
