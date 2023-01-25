import React, {useContext} from "react";
import { UserContext } from "../../context/UserContext"; 
import { Sidebar } from "../Sidebar/Sidebar";
import { NavLink } from "react-router-dom";

const Wallet = () => {

  const { address } = useContext(UserContext);

  return (
    <div className="w-[100vw] p-0 m-0 h-[100vh]">
    <div className="w-[16.2vw]">
      {/*Calling the sidebar */}
        <Sidebar />
      </div>
      <div className="bg-[#DFF6FF] left-[16.2vw] absolute h-[19vh] top-0 m-0 p-0 w-[83.8vw]">
      <h1 className="font-medium text-[5vh] ml-[7vh] mt-[5vh]">Wallet</h1>
    </div>
    {/*Giving the Components of the Wallet */}
    <div className="bg-[#cccdcf] absolute h-[81vh] w-[83.8vw] top-[19vh] left-[16.2vw]">
      <div className="bg-white ml-[6vw]  mt-[5vh] h-[22vh] w-[31vw] text-center rounded-2xl">         
            <p className='text-3xl font-semibold pt-12'>D Frame Earnings</p>
            <p className='text-2xl pt-4'>DFT: <span className="text-lime-600">20 DFT</span></p>   
      </div>
      <div className="bg-white absolute right-[9vw] top-[5vh] h-[47vh] w-[35vw] text-center rounded-2xl">         
            <p className='text-3xl font-semibold pt-12'>Withdraw your earnings</p>
            <h1 className='text-2xl font-normal pt-14 mt-[-20px]'>Amount</h1>   
            <div className='flex flex-row mt-5 ml-28 w-[23vw]'>
              <input type="text" className='rounded-xl w-[30vw] h-11 ml-[5.5vw] border-indigo-600 border bg-[#DFF6FF] w-[12vw] ' />
            </div>
            <p className='text-2xl font-normal pt-20 mt-[-50px]'>Receipent Wallet Address</p>
            <input type="text" className='rounded-xl w-[23vw] pl-2 h-12 mt-4 text-lg border-indigo-600 border bg-[#DFF6FF]  ' placeholder="Enter receipent wallet address" />
      </div>
      <div className="bg-white ml-[6vw] text-center mt-8 h-[22vh] w-[31vw] rounded-2xl">                 
            <p className='pt-12 text-3xl font-semibold'>Your Wallet Address</p>
            <p className='pt-4 text-[1.25vw]'>{address}</p>   
      </div>
      <div className="bg-white rounded-2xl ml-[6vw] h-[9vh] mt-12 mr-44 " >
        <NavLink to="/Help"><p className='pt-6 px-16 text-center text-2xl font-semibold'>Terms and Conditions</p></NavLink>
      </div>
    </div>     
  </div>
  )
}

export default Wallet