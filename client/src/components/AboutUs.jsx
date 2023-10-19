import React from 'react'
import Header from './Header'
import Footer from './Footer'

import {Faizu , Arif , Bot , Us} from "../assets";


const AboutUs = () => {
  return (
    <>
<main className="w-screen min-h-screen flex items-center justify-center flex-col bg-primary">

      <Header></Header>
    <div className="mx-40 mt-20">
    <div>
        <section className="text-gray-600 body-font">
  <div className=" mx-auto flex px-5 pt-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"><span className="text-red-500 text-4xl">NoQueue </span>
      
      </h1>
      <p className="mb-8 leading-relaxed text-2xl">We envision a world where waiting in long queues becomes a thing of the past. With cutting-edge technology and a user-centric approach, we strive to create a seamless and hassle-free experience for both customers and merchants. Our ultimate goal is to provide you with the freedom to order what you want, when you want, without the frustration of waiting in lines.</p>
      <div className="flex justify-center">
       
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src={Us}/>
    </div>
  </div>
</section>

<section class="text-gray-600 body-font">
  <div class=" px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest"><span className="text-red-500 text-4xl ">OUR TEAM </span></h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed  text-2xl">Our dedicated team is passionately committed to conceptualizing, designing, and crafting cutting-edge solutions that are not only innovative but also purpose-built to elevate and enrich your overall experience</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/3">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={Arif}/>
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-gray-900"> <span className="text-red-600 text-2xl">Arif Shaik </span></h2>
            <h3 class="text-gray-500 mb-3">Developer</h3>
            
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/3">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={Faizu}/>
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-gray-900"><span className="text-red-600 text-2xl">Faizan Shaik </span></h2>
            <h3 class="text-gray-500 mb-3">Developer</h3>
           
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/3 ">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={Bot}/>
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-gray-900"><span className="text-red-600 text-2xl">Madhu Bavireddy </span></h2>
            <h3 class="text-gray-500 mb-3">UI Designer</h3>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>


{/* <section class="text-white-600 body-font relative">
  <div class="flex px-5 py-24 mx-auto bg-red-300">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white-900">Contact Us</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button class="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Button</button>
        </div>
        
      </div>
    </div>
  </div>
</section> */}

<Footer/>




    </div>
    </div>
</main>
    </>
  )
}

export default AboutUs
