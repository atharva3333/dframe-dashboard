import React from 'react';
import { Sidebar } from "../Sidebar/Sidebar";
import BarChart2 from '../PieCharts/BarChart2';
import BarChart3 from '../PieCharts/BarChart3';
import AreaChart1 from '../PieCharts/AreaChart';

const Monetisation = () => {
  return (
    <div className="w-[100vw] p-0 m-0 h-[100vh]">
    <div className="w-[16.2vw]">
      {/*Calling the Sidebar Component*/}
      <Sidebar />
      {/*Creating the Classname as of the required */}
    </div>
    <div className="bg-[#DFF6FF] left-[16.2vw] absolute h-[19vh] top-0 w-[83.8vw]">
       <h1 className="font-medium text-[5vh] ml-[7vh] mt-[5vh]">Analytics</h1>
    </div>
  <div className="bg-[#cccdcf] absolute h-[81vh] w-[83.8vw] top-[19vh] left-[16.2vw]">
    <h1 className='font-medium text-4xl p-4 pb-1'>Monetisation</h1>
    <h1 className='text-center text-2xl font-medium'>The User's data will be monetised based on the quality and quantity of data shared and demand from Industry (Advertisers, Companies)</h1>
    {/* Calling the BarCharts in the Program*/}
    <AreaChart1/>
    <BarChart2/>
    <BarChart3/>
  </div>
  <div>
  <h1 className='font-normal text-xl  absolute top-[92vh] h-[5vh] left-[32.60vw] text-center p-[1.5vh]'>Note- The used data is monetised based on quantity, quality, real time demand, velocity and veracity of data</h1>
  </div>
</div>        
  )
}

export default Monetisation
