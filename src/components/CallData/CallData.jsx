import React from 'react';
//Importing the Sidebar component from the components folder.
import { Sidebar } from "../Sidebar/Sidebar";

const BrowserData = () => {
  return (
    <div className="w-[100vw] p-0 m-0 h-[100vh]">
        <div className="w-[16.2vw]">
           {/*Calling the Sidebar Component*/}
          <Sidebar />
          {/*Creating the Classname as of the required */}
        </div>
        <div className="bg-[#DFF6FF] left-[16.2vw] absolute h-[19vh] top-0 w-[83.8vw]">
           <h1 className="font-medium text-[5vh] ml-[7vh] mt-[5vh]">Data</h1>
        </div>
        <div className="bg-[#cccdcf] absolute h-[81vh] w-[83.8vw] top-[19vh] left-[16.2vw]">
        <h1 className='font-medium text-4xl p-6'>Call Data</h1>
        <div className="bg-white ml-[8vw] h-[16vh] w-[64vw] text-center rounded-2xl">           
              <p className='text-[3.4vh] pt-5 font-semibold'>Call Data Policy</p>
              <p className='text-[2.7vh] pt-[1vh]'>We collect data only for analysing with user permission. The data is not directly shared with third parties. </p>   
        </div>
        <div className="bg-white mt-6 ml-[8vw] h-[46vh] w-[64vw] rounded-2xl">              
            <p className='pt-9 text-3xl font-semibold ml-[1vw] text-center'>Data Collected</p>
        <div className=' overflow-auto h-[34.7vh] space-y-[1vh] mt-[2vh]  '>
        <div className='flex flex-row'>
              <p className='px-[7vw] text-[2.65vh]'>This is your data from this _______ Call, which will be analyzed</p>  <p className='px-24 text-red-500 text-2xl'>X</p> 
        </div>
        <div className='flex flex-row'>
              <p className='px-[7vw] text-[2.65vh]'>This is your data from this _______ Call, which will be analyzed</p>  <p className='px-24 text-red-500 text-2xl'>X</p> 
        </div>
        <div className='flex flex-row'>
              <p className='px-[7vw] text-[2.65vh]'>This is your data from this _______ Call, which will be analyzed</p>  <p className='px-24 text-red-500 text-2xl'>X</p> 
        </div>
        <div className='flex flex-row'>
              <p className='px-[7vw] text-[2.65vh]'>This is your data from this _______ Call, which will be analyzed</p>  <p className='px-24 text-red-500 text-2xl'>X</p> 
        </div>
        <div className='flex flex-row'>
              <p className='px-[7vw] text-[2.65vh]'>This is your data from this _______ Call, which will be analyzed</p>  <p className='px-24 text-red-500 text-2xl'>X</p> 
        </div>
        <div className='flex flex-row'>
              <p className='px-[7vw] text-[2.65vh]'>This is your data from this _______ Call, which will be analyzed</p>  <p className='px-24 text-red-500 text-2xl'>X</p> 
        </div>
        <div className='flex flex-row'>
              <p className='px-[7vw] text-[2.65vh]'>This is your data from this _______ Call, which will be analyzed</p>  <p className='px-24 text-red-500 text-2xl'>X</p> 
        </div>
        <div className='flex flex-row'>
              <p className='px-[7vw] text-[2.65vh]'>This is your data from this _______ Call, which will be analyzed</p>  <p className='px-24 text-red-500 text-2xl'>X</p> 
        </div>
      </div>
      </div>
      </div>   
    </div>
  )
}

export default BrowserData