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
    <div>
    <div>
      <Header></Header>
    </div>
    <div className="container-fluid  pt-28">
        <h1 className="text-center mt-5 display-3 fw-bold">Our <span className="theme-text">Services</span></h1>
        <hr className="mx-auto mb-5 w-25"/>
        <div className="row mb-5">
            <div className="col-12 col-sm-6 col-md-3 m-auto mb-5 mb-5">
                {/* <!-- card starts here --> */}
                <div className="card shadow">
                    <img src={Web} alt="" className="card-img-top"/>
                    <div className="card-body">
                        <h3 className="text-center">User-Friendly Interface</h3>
                        <hr className="mx-auto w-75"/>
                        <p>
                            Designed with utmost care, our user-friendly interface ensures effortless navigation, making it a delightful experience for both clients and merchants.
                        </p>
                    </div>
                </div>
                {/* <!-- card ends here --> */}
            </div>
            {/* <!-- col ends here --> */}
            <div className="col-12 col-sm-6 col-md-3 m-auto mb-5">
                {/* <!-- card starts here --> */}
                <div className="card shadow">
                    <img src={Iapp} alt="" className="card-img-top"/>
                    <div className="card-body">
                        <h3 className="text-center">Efficient Ordering Process</h3>
                        <hr className="mx-auto w-75"/>
                        <p>
                            Simplify your experience with a smooth, user-friendly interface. Quick menu selection, and secure payments for swift, efficient transactions.
                        </p>
                    </div>
                </div>
                {/* <!-- card ends here --> */}
            </div>
            {/* <!-- col ends here --> */}
            <div className="col-12 col-sm-6 col-md-3 m-auto mb-5">
                {/* <!-- card starts here --> */}
                <div className="card shadow">
                    <img src={Time} alt="" className="card-img-top"/>
                    <div className="card-body">
                        <h3 className="text-center">Accurate Time Estimates</h3>
                        <hr className="mx-auto w-75"/>
                        <p>
                            Our real-time updates, ensuring accurate time estimates for order preparation. Clients can plan their day confidently, while merchants optimize their service delivery.
                        </p>
                    </div>
                </div>
                {/* <!-- card ends here --> */}
            </div>
            {/* <!-- col ends here --> */}
            <div className="col-12 col-sm-6 col-md-3 m-auto mb-5">
                {/* <!-- card starts here --> */}
                <div className="card shadow">
                    <img src={Payment} alt="" className="card-img-top"/>
                    <div className="card-body">
                        <h3 className="text-center">Secure Payment Options</h3>
                        <hr className="mx-auto w-75"/>
                        <p>
                            We offer secure payment options, safeguarding your financial data. Clients and merchants can trust our platform for safe, hassle-free transactions  
                        </p>
                    </div>
                </div>
                {/* <!-- card ends here --> */}
            </div>
            {/* <!-- col ends here --> */}
            <div className="col-12 col-sm-6 col-md-3 m-auto mb-5">
                {/* <!-- card starts here --> */}
                <div className="card shadow">
                    <img src={Rating} alt="" className="card-img-top"/>
                    <div className="card-body">
                        <h3 className="text-center">Feedback and Ratings</h3>
                        <hr className="mx-auto w-75"/>
                        <p>
                            Clients can share feedback and ratings, shaping a community-driven experience. Their insights help us improve, ensuring a service that resonates with every user.
                        </p>
                    </div>
                </div>
                {/* <!-- card ends here --> */}
            </div>
            {/* <!-- col ends here --> */}
            <div className="col-12 col-sm-6 col-md-3 m-auto mb-5">
                {/* <!-- card starts here --> */}
                <div className="card shadow">
                    <img src={Menum} alt="" className="card-img-top"/>
                    <div className="card-body">
                        <h3 className="text-center">Easy Menu Management</h3>
                        <hr className="mx-auto w-75"/>
                        <p>
                            Manage your menu effortlessly with our intuitive interface. Add, update, and customize items with ease, ensuring your offerings are always up-to-date and attractive to your customers    
                        </p>
                    </div>
                </div>
                {/* <!-- card ends here --> */}
            </div>
            {/* <!-- col ends here --> */}
            <div className="col-12 col-sm-6 col-md-3 m-auto mb-5">
                {/* <!-- card starts here --> */}
                <div className="card shadow">
                    <img src= {Cmenu} alt="" className="card-img-top"/>
                    <div className="card-body">
                        <h3 className="text-center">Customizable Menus</h3>
                        <hr className="mx-auto w-75"/>
                        <p>
                            Empower merchants with control: Easily add your menu items, complete with prices and estimated preparation times. Empowering the Experience of our UI.
                        </p>
                    </div>
                </div>
                {/* <!-- card ends here --> */}
            </div>
            {/* <!-- col ends here --> */}
            <div className="col-12 col-sm-6 col-md-3 m-auto mb-5">
                {/* <!-- card starts here --> */}
                <div className="card shadow">
                    <img src= {Seo} alt="" className="card-img-top"/>
                    <div className="card-body">
                        <h3 className="text-center">Integration and Support</h3>
                        <hr className="mx-auto w-75"/>
                        <p>
                            Our platform effortlessly integrates with existing systems, ensuring a smooth experience for merchants. Plus, our dedicated support team is always ready to assist.
                        </p>
                    </div>
                </div>
                {/* <!-- card ends here --> */}
            </div>
            {/* <!-- col ends here --> */}
        </div>
    </div>

    </div>

    </>
  )
}

export default Services;
