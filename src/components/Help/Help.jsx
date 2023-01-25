import React, {useState} from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import { NavLink } from "react-router-dom";

const Help = () => {
  const [showModal, setShowModal] = useState(false);
  const [showRead, setShowRead] = useState(false);

  return (
   <div className="w-[100vw] p-0 m-0 h-[100vh]">
   <div className="w-[16.2vw]">
     <Sidebar/>
   </div>
   <div className="bg-[#DFF6FF] left-[16.2vw] absolute h-[19vh] top-0 w-[83.8vw]">
        <h1 className="font-medium text-[5vh] ml-[7vh] mt-[5vh]">Help</h1>
        </div>
   <div className="bg-[#cccdcf] absolute h-[81vh] w-[83.8vw] top-[19vh] left-[16.2vw]">
        <div className=" bg-white ml-[7vw] mt-20 w-[70vw] h-[63vh] rounded-2xl">
        <div className="flex flex-col">
          <button onClick={() => setShowRead(true)} className="bg-[#d9d9d9] font-normal p-[16px] pt-5 text-[3vh] rounded-2xl w-[90%] h-[8vh] ml-[65px] mt-[4vh] text-center outline-none focus:outline-none ease-linear transition-all duration-150">Read More</button>
          <div className="bg-[#d9d9d9] text-center font-normal p-[16px] pt-5 text-[3vh] rounded-2xl w-[90%] h-[8vh] ml-[65px] mt-[4vh] ">Privacy Policy</div>
          <div className="bg-[#d9d9d9] text-center font-normal p-[16px] pt-5 text-[3vh] rounded-2xl w-[90%] h-[8vh] ml-[65px] mt-[4vh]">Support</div>
          <div className="bg-[#d9d9d9] text-center font-normal p-[16px] pt-5 text-[3vh] rounded-2xl w-[90%] h-[8vh] ml-[65px] mt-[4vh]">Terms of Services</div>
          <button onClick={() => setShowModal(true)} className="bg-[#d9d9d9] font-normal p-[16px] pt-5 text-[3vh] rounded-2xl w-[90%] h-[8vh] ml-[65px] mt-[3.5vh] text-center outline-none focus:outline-none ease-linear transition-all duration-150">FAQ</button>
        </div>
        </div>
   </div> 
   {showRead? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Read More</h3>
                </div>
                <div className="relative p-6 flex-auto w-[32vw] text-center">
                <a href="https://dframe.org/presentation/" target="_blank" rel="noreferrer"><div className="w-[30vw] text-2xl text-white h-[6vh] bg-[#007BFF]"><span className="pt-2">Presentation</span></div></a><br/><br/>
                <a href="https://dframe.org/d-frame-white-paper-v1-1" target="_blank" rel="noreferrer"><p className="w-[30vw] text-2xl text-white h-[6vh] bg-[#6C757D]">WhitePaper</p></a>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button className="bg-[#007BFF] text-white active:bg-[#007BFF] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowRead(false)}>Close</button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

    {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold"> FAQ </h3>
                </div>
                <div className="relative p-6 flex-auto">
                  <strong>1. Where is D frame Registered?<br/></strong>
                   The D frame Foundation is registered in the Hague, Netherlands. <br/>
                  <strong>2. What is D frame?<br/></strong>
                  D-frame is a decentralised data ecosystem to help people monetise their personal data with privacy, support businesses with dynamic value laden data and encourage developers to build for re-imagining the data ecosystem. Using Blockchain based smart contracts for trust and a D-frame token for value generation & distribution, the ecosystem aspires to be a community driven sustainable effort.<br/>
                  <strong>3.What is Ad frame? <br/></strong>
                   Ad-frame is an advertising platform built on D frame, to help clients target users better. Through advanced functionalities like real time target audience analytics with matching interests and a general willingness to watch ads from the users, we hope for significantly higher Click Through Rates (CTR) through AD-frame.<br/>
                  <strong>4. How many users does D frame have?<br/></strong>
                  Currently, D frame is at the prototype stage. Further, we would plan for an Alpha release for 50,000 to 100,000 users. Long term, a user base of atleast 10 million plus users is targeted.<br/>
                  <strong>5. How many Clients use D frame? How can Clients be successful on D frame? <br/></strong>
                  Currently, D frame is at the Prototype stage and we do not have active partnership with any client. However, we are pursuing partnerships with some of the largest Advertising firms in the world.<br/>
                  <strong>6. How does D frame compare to other Advertising platforms?<br/></strong>
                  D frame shows an active data pool size of all the relevant users. Further, User's are willing to view advertisements for making passive income for sharing their data. Finally, we would be working on integration with different metaverse platforms.<br/>
                  <strong>7. How much money do users make?<br/></strong>
                  Currently, we hope to atleast share 50% of the revenue generated directly with the users. Based on community feedback and stakeholder dynamics, these numbers will evolve.
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button className="bg-[#007BFF] text-white active:bg-[#007BFF] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowModal(false)}>  Close </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      </div>
  );
}

export default Help;