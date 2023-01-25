import React, {useState} from "react";
import styles from "./Sidebar.module.css";
import dFrameLogo from "../../assets/Images/d-frame-logo.png";
// import { SidebarData } from "./SidebarData";
import { NavLink, Link } from "react-router-dom";
import {FiChevronDown } from 'react-icons/fi';
//Importing the Required components for the Program
import Profile from "../../assets/Images/person.png"
import wallet from "../../assets/Images/account_balance_wallet.png";
import chart from '../../assets/Images/bar_chart.png';
import payment from '../../assets/Images/payments.png';
import analysis from '../../assets/Images/query_stats.png'
import settings from '../../assets/Images/settings.png'
import help from '../../assets/Images/info.png';
import learnmore from '../../assets/Images/library.png';
import { GrFormEdit } from "react-icons/gr";

export const Sidebar = () => {
  
  const [dataActive, setDataActive] = useState(false);
  const [dropActive, setDropActive] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={dFrameLogo} alt="" className={styles.logo} />
        <div className={styles.titleContainer}>
          <h3 className='font-semibold'>D Frame</h3>
        </div>
      </div>
      <div className="flex flex-col items-center w-[18vw] justify-between h-[70%]">
      <div className="flex flex-col items-center space-y-2 mr-[3vw]  mt-10 font-medium text-xl content-center ">
        <NavLink to="/Profile" className='flex flex-row  w-[18vw] hover:bg-[#F3B3E9]'>
          <img src={Profile} width='22' className='ml-[4.6vw]' alt="" /> <p className="px-[2.6vw] text-[#0d21d8]">Profile</p><Link to='/UpdateProfile'><GrFormEdit className="mt-1 ml-[-0.2vw]"/></Link>
        </NavLink>
        <NavLink to="/Wallet" className='flex flex-row  w-[18vw] hover:bg-[#F3B3E9]' >
          <img src={wallet} width='25'  className='ml-[4.5vw]'  alt="" /> <p className="px-[2.5vw] text-[#0d21d8]">Wallet</p> 
        </NavLink>
         <NavLink to='#' onClick={(e) => { setDataActive(!dataActive) }} className='flex flex-row  w-[18vw] hover:bg-[#F3B3E9]'>
          <img src={chart} width='23' className='ml-[4.5vw]' alt="" /> <p className="px-[3vw] text-[#0d21d8]">Data</p><FiChevronDown className="mt-1"/>
         </NavLink>
        <div className="ml-[-10px] bg-[#DFF6FF] w-[18vw] "> { dataActive && (<div className=" mt-[-3.7px] space-y-2">
        <NavLink to="/BrowserData" className='flex flex-row  w-[18vw] hover:bg-[#F3B3E9]'>          
          <p className="ml-[7.2vw] text-[#0d21d8]">Browser Data</p> 
        </NavLink>
        <NavLink to="/EMailData" className='flex flex-row  w-[18vw] hover:bg-[#F3B3E9]'>
          <p className=" ml-[7.7vw] text-[#0d21d8]">E-Mail Data</p> 
        </NavLink>
        <NavLink to="/CallData" className='flex flex-row  w-[18vw] hover:bg-[#F3B3E9]'>    
          <p className=" ml-[8.2vw] text-[#0d21d8]">Call Data</p>     
        </NavLink>    
        <NavLink to="/Survey" className='flex flex-row  w-[18vw] hover:bg-[#F3B3E9]'>      
          <p className=" ml-[8.7vw] text-[#0d21d8]">Survey</p> 
        </NavLink>
        </div>)}
        </div>    
        <NavLink to="/Reward" className='flex flex-row  w-[18vw] hover:bg-[#F3B3E9]'>
          <img src={payment} width='28' className='ml-[4.5vw]'  alt="" /><p className="px-[2vw] text-[#0d21d8]">Rewards</p>  
        </NavLink>
        <NavLink to="#"> <div onClick={(e) => { setDropActive(!dropActive) }} className="flex flex-row w-[18vw] hover:bg-[#F3B3E9]">
          <img src={analysis} width='27'  className='ml-[4.5vw]' alt="" /> <p className="px-[2vw] text-[#0d21d8]">Analytics</p>  <FiChevronDown className="mt-1 ml-[-0.5vw]"/> </div>
        </NavLink>
        <div className="ml-[-10px] bg-[#DFF6FF] mt-[75px]"> { dropActive && ( <div className="mt-[-5px] space-y-2">
        <NavLink to="/TopSiteVisited" className='flex flex-row  w-[18vw] hover:bg-[#F3B3E9] text-[#0d21d8]'>     
          <p className="ml-[6.6vw]">Top Site Visited</p>     
        </NavLink>
        <NavLink to="/Monetisation"  className='flex flex-row  w-[18vw] hover:bg-[#F3B3E9] text-[#0d21d8]' >
           <p className="ml-[7.3vw]">Monetisation</p>  
        </NavLink>
        <NavLink to="/SiteByTime" className='flex flex-row  w-[18vw] hover:bg-[#F3B3E9] text-[#0d21d8]'>    
          <p className=" ml-[7.5vw]">Site By Time</p>     
        </NavLink> 
        <NavLink to="/SiteDistribution"  className='flex flex-row ml-[-0.2vw] hover:bg-[#F3B3E9] text-[#0d21d8]'>   
          <p className="ml-[6.7vw]">Site Distribution</p> 
        </NavLink>
        </div>)}
        </div>
        <NavLink to="/Permissions" className='flex flex-row  w-[18vw] hover:bg-[#F3B3E9] text-[#0d21d8]'>
          <img src={settings} width='27' className='ml-[4.5vw]' alt="" /> <p className="px-[1.5vw]">Permissions</p> 
        </NavLink>
      </div>
      <div className="flex flex-col items-center space-y-3 w-[18vw] ml-[-2.65vw]  mt-10 font-medium text-xl content-center ">
      <NavLink to="/Help" className='flex flex-row  w-[18vw] hover:bg-[#F3B3E9] text-[#0d21d8]'>   
        <img src={help} className=" ml-[4.5vw]" alt="Help Icon" /> <p className="ml-[2.7vw]">Help</p>  
      </NavLink>
      <NavLink to="/Learnmore"  className='flex flex-row  w-[18vw] hover:bg-[#F3B3E9] text-[#0d21d8]'> 
        <img src={learnmore} className="ml-[4.5vw]" alt="Learn More Icon" /> <p className="ml-[1.4vw]">Learn More</p> 
      </NavLink>
      </div>
      </div>
    </div>
  );
};


// <NavLink to="/BrowserData" 
// // className={({ isActive }) => isActive ? 'flex flex-row  w-[320px] bg-[#F3B3E9]' : 'flex flex-row  w-[320px] hover:bg-[#F3B3E9] '}
// className='flex flex-row  w-[18vw] hover:bg-[#F3B3E9]'
// >          
//   <img src={chart} width='23' className="ml-[80px]" alt="" />
//   <p className="px-[30px]">Browser Data</p> 
// </NavLink>