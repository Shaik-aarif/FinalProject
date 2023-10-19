import { motion } from "framer-motion";
import React from "react";
import { buttonClick, staggerFadeInOut } from "../animations";
import { Delivery, HeroBg  , MainIMG} from "../assets";
import { randomData } from "../utils/styles";
import {useNavigate} from 'react-router-dom';
import Footer from "./Footer";
import { Main } from "../containers";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
    <motion.div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
      <div className="flex flex-col items-start justify-start gap-6">
        {/* <div className="px-4 py-1 flex items-center justify-center gap-2 bg-orange-100 rounded-full">
          <p className="text-lg font-semibold text-orange-500">Free Delivery</p>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary shadow-md">
            <img
              src={Delivery}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div> */}
        
        {/* <Footer></Footer> */}
        <p className="text-[40px]  text-yellow-400  md:text-[72px] py-8 font-sans font-extrabold tracking-wider">
          No Waiting in Lines with{" "}
          <span className="text-red-600">No Queue</span>
        </p>
        <p className="text-textColor text-lg">
        Escape queues, embrace efficiency. Our cutting-edge solution
          revolutionizes crowded spaces, offering seamless experiences. Embrace
          the future, today.
        </p>
        <motion.button
          {...buttonClick}
          onClick={()=>navigate("/Menu")}
          className="bg-gradient-to-bl from-red-500 to-red-600 px-4 py-2 rounded-xl text-black text-base font-semibold"
        >
          Order Now
        </motion.button>
      </div>

      <div className="py-2 flex-1 flex items-center justify-end relative">
        <img
          className="relative bottom-7 right-10 md:-right-12  w-full h-420 md:w-auto md:h-650"
          src={MainIMG}
          alt=""
        />


      
      </div>
    </motion.div>
    <div className="flex items-center justify-center  m-auto pt-80">

    <Footer/>
    </div>
    </>

  );
};

export default Home;
