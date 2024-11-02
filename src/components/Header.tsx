import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 flex flex-row text-white text-center py-4 px-24 shadow-lg">
      <h1 className="basis-3/7 py-2 text-3xl font-bold ml-7 mr-10">Crypto Portfolio Worth</h1>

    <div className="basis-1/7">
    <Link to="/">
        <button
            type="button"
            className=" mx-2 bg-green-600 p-1 cursor-pointer hover:bg-blue-800 hover:text-white"
          >

            <p className="text-black text-lg font-semibold py-1 px-2 mx-10 hover:text-white ">
              HOME
            </p>
          </button>
          </Link>
    </div>

    <div className="basis-1/7">
    <Link to="/app">
          <button
            type="button"
            className=" mx-2 bg-green-600 p-1 cursor-pointer hover:bg-blue-800 hover:text-white"
          >

            <p className="text-black text-lg font-semibold py-1 px-2 mx-10 hover:text-white ">
              APP
            </p>
          </button>
          </Link>
    </div>

    <div className="basis-1/7">
    <Link to="/pyusd">
          <button
            type="button"
            className=" mx-2 bg-green-600 p-1 cursor-pointer hover:bg-blue-800 hover:text-white"
          >

            <p className="text-black text-lg font-semibold py-1 px-2 mx-10 hover:text-white ">
              PYUSD
            </p>
          </button>
          </Link>
    </div>
 
    <div className="basis-1/7">
    <Link to="/transaction">
          <button
            type="button"
            className=" mx-2 bg-green-600 p-1 cursor-pointer hover:bg-blue-800 hover:text-white"
          >

            <p className="text-black text-lg font-semibold py-1 px-2 mx-10 hover:text-white ">
              TRANSACTION
            </p>
          </button>
          </Link>
    </div>

    </header>
  );
};

export default Header;
