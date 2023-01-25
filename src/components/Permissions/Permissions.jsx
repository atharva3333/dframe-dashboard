import React from "react";
//Importing the Sidebar components from the Components folder
import { Sidebar } from "../../components/Sidebar/Sidebar";

import ButtonToggle from "../atoms/Toggle/ButtonToggle";

const Permissions = () => {
  return (
    <div className="w-[100vw] p-0 m-0 h-[100vh]">
        <div className="w-[16.2vw]">
          {/*Calling the Sidebar Component*/}
          <Sidebar />
        </div>
        <div className="bg-[#DFF6FF] left-[16.2vw] absolute h-[19vh] top-0 w-[83.8vw]">
           <h1 className="font-medium text-[5vh] ml-[7vh] mt-[5vh]">Permissions</h1>
        </div>
        <div className="bg-[#cccdcf] absolute h-[81vh] w-[83.8vw] top-[19vh] left-[16.2vw]">
            <div className="flex flex-row items-center ml-[10vw] mt-16 text-2xl">
              {/*Creating the Button togggle for Location */}
              <label className="mt-[10px]">Location</label>
              <div className="ml-[4.3vw]"><ButtonToggle /></div>
            </div>
            <div className="flex flex-row items-center ml-[10.2vw] mt-9 text-2xl">
              {/*Creating the Button togggle for cookies */}
              <label className="mt-[10px]">Cookies</label>
              <div className="ml-[4.4vw]"><ButtonToggle /></div>
            </div>
            <div className="flex flex-row items-center ml-[8.8vw] mt-9 text-2xl">
              {/*Creating the Button togggle for Call Tracking */}
              <label className="mt-[10px]">Call Tracking</label>
              <div className="ml-[3.2vw]"><ButtonToggle /></div>
            </div>
            <div className="flex flex-row items-center ml-[8.4vw] mt-9 text-2xl">
              {/*Creating the Button togggle for Email Sharing */}
              <label className="mt-[10px]">Email Sharing </label>
              <div className="ml-[3vw]"><ButtonToggle /></div>
            </div>
            <div className="flex flex-row items-center ml-[9.2vw] mt-9 text-2xl">
              {/*Creating the Button togggle for Notification */}
              <label className="mt-[10px]">Notification</label>
              <div className="ml-[3.2vw]"><ButtonToggle /></div>
            </div>
      </div>
    </div>
  );
};

export default Permissions;