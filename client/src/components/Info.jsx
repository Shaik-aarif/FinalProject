import React from 'react'
import Header from './Header'

import {  useSelector } from "react-redux";

const Info = () => {



const user = useSelector((state) => state.user);

const userinfo=()=>{

console.log(user);

}

  return (
    <>
<main className="w-screen min-h-screen flex items-center justify-center flex-col bg-primary">
  
    <div>
    <Header></Header>
    <div className="bg-white my-56 rounded-lg w-full shadow-md p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 ">
      <div className="flex justify-center">
        <img
          src={user?.picture ? user?.picture : Avatar}  // Replace with the actual image URL
          alt="user-image"
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-full border-4 border-red-600 p-1"
        />
      </div>
      <div className=" mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-red-600 font-bold">Name :
         <span className="text-gray-600 text-3xl"> {user.name}</span>
         </p>
         <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-yellow-400 font-bold">Account Type :
         <span className="text-gray-600  text-3xl">  { user?.user_id == "FmwmrtjACaVx7jaZDMK6Pr2JRzr2" ? (
        <>
            <span>Admin</span>
        </>
      ) : 
      (
        <>
            <span>User</span>
        </>
      )}</span>
         </p>
         <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-red-600 font-bold">Email_Id :
         <span className="text-gray-600  text-3xl"> {user.email}</span>
         </p>
         <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-yellow-400 font-bold">User_Id : 
         <span className="text-gray-600  text-3xl"> {user.user_id}</span>
         </p>
         <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-red-600 font-bold">Status :
         <span className="text-gray-600  text-3xl">  { user?.email_verified ? (
        <>
            <span>verified</span>
        </>
      ) : 
      (
        <>
            <span>Not verified</span>
        </>
      )}</span>
         </p>
         

      </div>
    </div>

      {/* <div className='mb-10'>
      <button 
      onClick={userinfo}
      >click here</button>
      </div> */}
    </div>
      </main>
    </>
  )
}


export default Info
