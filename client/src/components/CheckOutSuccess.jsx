import React, { useEffect } from "react";
import { FaArrowLeft } from "../assets/icons";
import { NavLink } from "react-router-dom";
import {  Tick } from "../assets";
import { Header } from "../components";
import { motion } from "framer-motion";
import { buttonClick } from "../animations";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";

import { clearCartItems } from "../context/actions/cartAction";
import { useNavigate } from "react-router-dom";


const CheckoutSuccess = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigatation = () => {
    navigate("/");
  };
  const handleClear = () => {
    dispatch(clearCartItems()); // Dispatch the clearCart action to clear cart items
  };

  const  bothFunc = ()=>{
    handleNavigatation();
    handleClear();
  }

  return (
    <main className=" w-screen min-h-screen flex items-center justify-start flex-col">
      <Header />
      <div className="w-full flex flex-col items-center justify-center mt-40 px-6 md:px-24 2xl:px-96 gap-12 pb-24">
        <img src={Tick} className="w-full md:w-16" alt="" />

        <h1 className="text-[50px] text-green-500 font-bold">
          Amount paid Successfully
        </h1>
        <h2 className="text-[50px] text-green-500 font-bold">
          Your Order got Placed
        </h2>

        <motion.div {...buttonClick}>
          <button
            onClick={bothFunc}
            className="flex items-center justify-center gap-4 cursor-pointer text-red-500 text-2xl bg-yellow-400 font-semibold px-4 py-2 rounded-md border border-gray-300 hover:shadow-md"
          >
            <FaArrowLeft className="text-3xl text-black " /> Get back to
            Home
          </button>
        </motion.div>

        {/* <button
        onClick={handleClear}
        >button</button> */}
      </div>
    </main>
  );
};

export default CheckoutSuccess;
