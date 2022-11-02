import React from 'react';
import { Link } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Content.css';

function Content(){
return (
    // <!-- Page content --> 
    <div className="bg-gray-10 ">
        <Header/>
   <div className="flex justify-center h-screen w-screen items-center">
    <div className="w-full md:w-1/2 flex flex-col items-center " >
        {/* <!-- text login --> */}
        <h1 className="text-center text-2xl font-bold text-gray-600 mb-6">LOGIN</h1>
        {/* <!-- email input --> */}
        <div className="w-3/4 mb-6">
            <input type="email" name="email" id="email" className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500" placeholder="User Name"/>
        </div>
        {/* <!-- password input --> */}
        <div className="w-3/4 mb-6">
            <input type="password" name="password" id="password" className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 " placeholder="Password"/>
        </div>
        {/* <!-- remember input --> */}
        <div className="w-3/4 flex flex-row justify-between">
            <div className=" flex items-center gap-x-1">
                <input type="checkbox" name="remember" id="" className=" w-4 h-4  "/>
                <label for="" className="text-sm text-slate-400">Remember me</label>
            </div>
            <div>
                <a href="#" className="text-sm text-slate-400 hover:text-blue-500">Forgot?</a>
            </div>
        </div>
        {/* <!-- button --> */}
        <div className="w-3/4 mt-4">
            {/* <button type="submit" className="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700"> LOGIN</button> */}
            <Link type="submit" className="text-center py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700" to="/Dashboard">Login</Link>
        </div>
    </div>
   </div>
   <Footer/>
   </div>
    )
};

export default Content;
