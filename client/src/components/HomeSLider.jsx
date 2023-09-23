import { motion } from "framer-motion";
import React from "react";
import { Slider } from "../components";
import {  useSelector } from "react-redux";


const HomeSLider = () => {
  const user = useSelector((state) => state.user);
  return (
    <motion.div className="w-full flex items-center justify-center flex-col">
      <div className=" w-full flex items-center justify-center " id="Home_menu">
        <div className="flex flex-col items-start justify-start gap-1">
          <p className="text-2xl text-headingColor font-bold pt-12">
            Our Fresh & Healthy Fruits
          </p>
          <div className="w-40 h-1 rounded-md bg-red-500"></div>
        </div>
      </div>
    {user ? (
      <Slider />

    ) : (
      <div className="para w-full flex items-center justify-center py-20 ">Please Login to see Content</div>
    )}
    </motion.div>
  );
};

export default HomeSLider;
