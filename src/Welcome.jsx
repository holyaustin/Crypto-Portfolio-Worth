import React from "react";
import logo1 from "./assets/banner2.png";
//import App from './App/App.tsx'


const Welcome = () => {

 return (
    <div className="flex w-full h-screen flex-row justify-center items-center bg-blue-900 px-24 py-10">

        <div className="flex-1 justify-start items-start flex-col mf:mr-10 ">
          <h1 className="text-2xl sm:text-5xl text-white py-1 font-semibold">
          Crypto Portfolio Worth <br />
          </h1>
          <p className="text-left mt-5 text-yellow-500 font-extrabold font-light md:w-9/12 w-11/12 text-2xl ">
          ... track your portfolio value 
          </p><br />
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-4xl ">
          Track past and current worth <br /> 
          </p><br />
          <p className="text-justify mt-5 text-white font-light md:w-9/12 w-11/12 text-2xl">
          Imagine effortlessly monitoring your assets, analyzing market trends, and making data-driven decisions that could elevate your investment game. With Crypto Portfolio Worth, you gain access to state-of-the-art portfolio management features, real-time insights, and an engaging community of like-minded crypto enthusiasts. 
          </p><br />
          {/** {!currentAccount && ( )} */}
          <a href="/app">
          <button
            type="button"
           
            className="w-4/5 flex flex-row justify-center items-center my-5 bg-green-300 p-3 rounded-full cursor-pointer hover:bg-green-800 hover:text-white"
          >

            <p className="text-black text-2xl font-semibold py-1 px-2 mx-10 hover:text-white ">
              Get Started
            </p>
          </button>
          </a>
        </div>
     
      <div className="flex-1 justify-left items-center">

        <img src={logo1} alt="welcome" className="w-100 cursor-pointer" />
      </div>
    </div>
  );
};

export default Welcome;
