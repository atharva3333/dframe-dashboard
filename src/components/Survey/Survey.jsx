import React from 'react';
import { Sidebar } from "../../components/Sidebar/Sidebar";

const Survey = () => {
  return (
    <div className="w-[100vw] p-0 m-0 h-[100vh]">
        <div className="w-[16.2vw]">
          <Sidebar />
        </div>
        <div className="bg-[#DFF6FF] left-[16.2vw] absolute h-[19vh] top-0 w-[83.8vw]">
           <h1 className="font-medium text-[5vh] ml-[7vh] mt-[5vh]">Data</h1>
        </div>
        <div className="bg-[#cccdcf] absolute h-[81vh] w-[83.8vw] top-[19vh] left-[16.2vw]">
        <h1 className='font-medium text-4xl p-6'>Survey</h1>
        <div className="bg-white absolute h-[25vh] left-[6vw] top-[14vh] w-[32vw] text-center rounded-2xl">          
              <p className='text-3xl pt-[5.5vh] px-[2vw] mb-[2.7vh]'>Do you like Indian or Chinese food?</p>   
              <button className='bg-[#47B5FF] inline-block  text-white w-[8vw] text-3xl  h-12 rounded-full' type="submit">Indian</button>
              <button className='bg-[#D4300C] inline-block ml-[3.5vw] text-white w-[8vw] text-3xl h-12 rounded-full' type="submit">Chinese</button>
        </div>    
        <div className="bg-white absolute left-[44vw] top-[14vh] h-[25vh] w-[32vw] text-center rounded-2xl">          
              <p className='text-3xl pt-[5.5vh] px-[2vw] mb-[2.7vh]'>Where would you take a holiday?</p>   
              <button className='bg-[#47B5FF] inline-block  text-white w-[8vw] text-3xl h-12 rounded-full' type="submit">Mountains</button>
              <button className='bg-[#D4300C] inline-block ml-[3.5vw] text-white w-[8vw] text-3xl h-12 rounded-full' type="submit">Beach</button>
        </div> 
        <div className="bg-white absolute h-[25vh] left-[6vw] top-[46vh] w-[32vw] text-center rounded-2xl">          
              <p className='text-3xl pt-[5.5vh] px-[2vw] mb-[2.7vh]'>Which is your favourite Comic Universe?</p>   
              <button className='bg-[#47B5FF] inline-block  text-white w-[8vw] text-3xl  h-12 rounded-full' type="submit">Marvel</button>
              <button className='bg-[#D4300C] inline-block ml-[3.5vw] text-white w-[8vw] text-3xl h-12 rounded-full' type="submit">DC</button>
        </div> 
        <div className="bg-white absolute left-[44vw] top-[46vh] h-[25vh] w-[32vw] text-center rounded-2xl">          
              <p className='text-3xl pt-[5.5vh] px-[2vw] mb-[2.7vh]'>Which Operating System do you prefer?</p>   
              <button className='bg-[#47B5FF] inline-block  text-white w-[8vw] text-3xl h-12 rounded-full' type="submit">Windows</button>
              <button className='bg-[#D4300C] inline-block ml-[3.5vw] text-white w-[8vw] text-3xl h-12 rounded-full' type="submit">Mac</button>
        </div> 
        </div>
      </div>     
  )
}

export default Survey