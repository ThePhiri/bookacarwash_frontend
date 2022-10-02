import React from 'react'
import logo from '../images/logo.png'
import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";


function Home() {
  return (
    <div  >
      <Navbar />

      <div className="max-w-screen-2xl flex flex-col mt-0 mr-auto mb-0 ml-auto pt-16 pr-4 pb-16 pl-4 relative lg:flex-row lg:pt-8 xl:pt-16 xl:pb-4 md:px-8">
        <div className="lg:w-1/3 lg:justify-end lg:bottom-0 lg:left-0  flex w-full h-full justify-center ">
          <img src={logo} className="h-[400px] max-w-full lg:w-full lg:h-[500px] object-cover object-top rounded-2xl" alt='' />
        </div>

        <div className="xl:pr-32 lg:max-w-screen-xl flex justify-end mt-0 mr-auto mb-0 ml-auto relative max-w-xl">

          <div className="lg:pr-5 lg:max-w-lg lg:mb-0 mt-0 mr-0 mb-16 ml-0">
            <div className="mt-0 mr-0 mb-6 ml-0 max-w-xl">
              {/* <p className="inline-block font-semibold text-xs tracking-wider mt-0 mr-0 mb-4 ml-0 pt-1 pr-3 pb-1 pl-3 uppercase bg-pink-500 text-pink-200 rounded-2xl" contenteditable="false" disabled="">Brand new</p> */}



              <h1 className='text-blue-600 font-bold text-4xl text-left'>About Book A Car Wash</h1>
              {/* {ingridients.length ? ingridients.map((ingridients) => (<p>{ingridients}</p>)) : ""} */}
              <p className='pt-4 pb-4'>
                With BOOKACARWASH you have access to a professional car wash service, whether you’re at home getting ready for an event or, at an event away from home and need to travel back in a clean car. We can find a washer in your location to come to you.
              </p>
            </div>

            <div>


              <p className='pt-4 pb-4'>
                Book now to have a washer come to your place or choose to drive to the nearest car wash where you will be first in the queue. We have a network of washer partners across the country so, you can be assured of the best service wherever you may be.
              </p>
            </div>

            <Link to="/"> <button>Book Now!</button></Link>




          </div>
        </div>

      </div>


    </div>
  )
}

export default Home