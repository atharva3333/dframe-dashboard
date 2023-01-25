import React from 'react'
//Importing the Sidebar components from the Components folder
import { Sidebar } from "../Sidebar/Sidebar";
//Importing the BarChart1 components from the repective folder
import BarChart1 from '../PieCharts/BarChart1';

const Reward = () => {

  return (
    <div className="w-[100vw] p-0 m-0 h-[100vh]">
        <div className="w-[16.2vw]">
          {/*Using the Sidebar components */}
          <Sidebar />
        </div>
        <div className="bg-[#DFF6FF] left-[16.2vw] absolute h-[19vh] top-0 w-[83.8vw]">
           <h1 className="font-medium text-[5vh] ml-[7vh] mt-[5vh]">Rewards</h1>
        </div>
        <div className="bg-[#cccdcf] absolute h-[81vh] w-[83.8vw] pt-6 top-[19vh] left-[16.2vw]">
        {/*Calling the barChart */}
        <BarChart1/>
        <div className="bg-white left-[11vw] top-[51vh] text-center w-[30vw] absolute rounded-2xl">
             <p className='p-7 text-3xl'>Sign In Bonus: </p>
             <p className='text-3xl font-semibold text-green-600'>50 DFT</p>
             <button className='text-2xl font-medium bg-blue-400 w-[7vw] rounded-full m-5 p-1'>Claim</button>
        </div>
        <div className="bg-white left-[43vw] top-[51vh] text-center w-[30vw] absolute rounded-2xl">
             <p className='p-7 text-3xl'>Rewards In Bonus: </p>
             <p className='text-3xl font-semibold text-green-600'>50 DFT</p>
             <button className='text-2xl font-medium bg-blue-400 w-[7vw] rounded-full m-5 p-1'>Claim</button>
        </div>
      </div>
    </div>
  )
}

export default Reward