import React from 'react'
import Header from './Header'
// import "../assets/css/index.css";
// import { app } from "../assets"img/serveIMG;
import { Iapp , Dm,
  Three ,
  Cmenu ,
  Menum ,
  Payment ,
  Rating ,
  Seo ,
  Time ,
  Web 
}  from "../assets"

const Services = () => {
  return (
    <>
    <div className="mx-40">

    
<div>
      <h1 className="mt-10 mb-2 text-center capitalize text-4xl"> Our <span className="text-orange-500">Sevices</span></h1>
      <hr/>

      <div className="grid grid-cols-4 lg:gap-8 justify-items-center">
            <div className="py-10">
                <div className="rounded  overflow-hidden h-[100%] shadow-lg min-w-sm ">
                    <img src={Web} alt='image' className="w-[80%] " />

                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2"><span className="text-orange-500">User-Friendly Interface</span><hr/></div>
                        <p className="text-gray-600">Designed with utmost care, our user-friendly interface ensures effortless navigation, making it a delightful experience for both clients and merchants.Enjoy the seamless experience with this No-Queue solution.</p>
                    </div>
                    

                </div>
            </div>
            <div className="py-10">
                <div className="rounded overflow-hidden shadow-lg min-w-sm">
                    <img src={Time} alt='image' className="w-[80%]"/>

                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2"><span className="text-orange-500">Accurate Time Estimates</span><hr/></div>
                        <p className="text-gray-600">Our real-time updates, ensuring accurate time estimates for order preparation. Clients can plan their day confidently, while merchants optimize their service delivery.</p>
                    </div>
                    

                </div>
            </div>
            <div className="py-10">
                <div className="rounded overflow-hidden shadow-lg min-w-sm">
                    <img src={Iapp} alt='image' className="w-[80%]"/>

                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2"><span className="text-orange-500">Efficient Ordering Process</span><hr/></div>
                        <p className="text-gray-600">Simplify your experience with a smooth, user-friendly interface. Quick menu selection, and secure payments for swift, efficient transactions.which provides best experience.</p>
                    </div>
                    

                </div>
            </div>
            <div className="py-10">
                <div className="rounded overflow-hidden shadow-lg min-w-sm">
                    <img src={Menum} alt='image' className="w-[80%]"/>

                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2"><span className="text-orange-500">Easy Menu Management</span><hr/></div>
                        <p className="text-gray-600">Manage your menu effortlessly with our intuitive interface. Add, update, and customize items with ease, ensuring your offerings are always up-to-date and attractive to your customers    </p>
                    </div>
                    

                </div>
            </div>
            <div className="py-10">
                <div className="rounded overflow-hidden shadow-lg min-w-sm">
                    <img src={Rating} alt='image' className="w-[80%]"/>

                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2"><span className="text-orange-500">Feedback and Ratings</span><hr/></div>
                        <p className="text-gray-600">Clients can share feedback and ratings, shaping a community-driven experience. Their insights help us improve, ensuring a service that resonates with every user.</p>
                    </div>
                    

                </div>
            </div>
            <div className="py-10">
                <div className="rounded overflow-hidden shadow-lg min-w-sm">
                    <img src={Payment} alt='image' className="w-[80%]"/>

                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2"><span className="text-orange-500">Secure Payment Options</span><hr/></div>
                        <p className="text-gray-600"> We offer secure payment options, safeguarding your financial data. Clients and merchants can trust our platform for safe, hassle-free transactions  </p>
                    </div>
                    

                </div>
            </div>
            <div className="py-10">
                <div className="rounded overflow-hidden shadow-lg min-w-sm">
                    <img src={Cmenu} alt='image' className="w-[75%]"/>

                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2"><span className="text-orange-500">Customizable Menus</span><hr/></div>
                        <p className="text-gray-600">Empower merchants with control: Easily add your menu items, complete with prices and estimated preparation times. Empowering the Experience of our UI.Add your Own items along with time and price.</p>
                    </div>
                    

                </div>
            </div>
            <div className="py-10">
                <div className="rounded overflow-hidden shadow-lg min-w-sm">
                    <img src={Seo} alt='image' className="w-[75%]"/>

                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2"><span className="text-orange-500">Integration and Support</span><hr/></div>
                        <p className="text-gray-600">Our platform effortlessly integrates with existing systems, ensuring a smooth experience for merchants. Plus, our dedicated support team is always ready to assist.</p>
                    </div>
                    

                </div>
            </div>
      </div>
    </div>
    </div>
</>
  )
}

export default Services;
