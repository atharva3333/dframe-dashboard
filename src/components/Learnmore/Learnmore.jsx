import React, {useState} from "react";
import { Sidebar } from "../Sidebar/Sidebar";

const Learnmore = () => {
  const [showWhy, setShowWhy] = useState(false);
  const [showValue, setShowValue] = useState(false);
  const [showSafe, setShowSafe] = useState(false);
  const [showToken, setShowToken] = useState(false);
  const [showFaq, setShowFaq] = useState(false);

  return (
   <div className="w-[100vw] p-0 m-0 h-[100vh]">
   <div className="w-[16.2vw]">
     <Sidebar/>
   </div>
   <div className="bg-[#DFF6FF] left-[16.2vw] absolute h-[19vh] top-0 w-[83.8vw]">
        <h1 className="font-medium text-[5vh] ml-[7vh] mt-[5vh]">Learn More</h1>
        </div>
   <div className="bg-[#cccdcf] absolute h-[81vh] w-[83.8vw] top-[19vh] left-[16.2vw]">
        <div className=" bg-white ml-[7vw] mt-20 w-[70vw] h-[63vh] rounded-2xl">
        <div className="flex flex-col">
        <button className="bg-[#d9d9d9] font-normal p-[16px] pt-5 text-[3vh] rounded-2xl w-[90%] h-[8vh] ml-[65px] mt-[4vh] text-center outline-none focus:outline-none ease-linear transition-all duration-150" onClick={() => setShowWhy(true)}>Why Install D Frame? </button>
        <button className="bg-[#d9d9d9] font-normal p-[16px] pt-5 text-[3vh] rounded-2xl w-[90%] h-[8vh] ml-[65px] mt-[4vh] text-center outline-none focus:outline-none ease-linear transition-all duration-150" onClick={() => setShowValue(true)}>What is the value of your data?</button>
        <button className="bg-[#d9d9d9] font-normal p-[16px] pt-5 text-[3vh] rounded-2xl w-[90%] h-[8vh] ml-[65px] mt-[4vh] text-center outline-none focus:outline-none ease-linear transition-all duration-150" onClick={() => setShowSafe(true)}>Is your data safe with us?</button>
        <button className="bg-[#d9d9d9] font-normal p-[16px] pt-5 text-[3vh] rounded-2xl w-[90%] h-[8vh] ml-[65px] mt-[4vh] text-center outline-none focus:outline-none ease-linear transition-all duration-150" onClick={() => setShowToken(true)}>How can you receive and access D Frame tokens?</button>
        <button className="bg-[#d9d9d9] font-normal p-[16px] pt-5 text-[3vh] rounded-2xl w-[90%] h-[8vh] ml-[65px] mt-[3.5vh] text-center outline-none focus:outline-none ease-linear transition-all duration-150" onClick={() => setShowFaq(true)}>FAQ</button>
        </div>
        </div>
   </div> 
{showWhy? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Why Install D Frame?</h3>
                </div>
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-lg leading-relaxed">D Frame is a decentralised Data ecosystem to help people monetise their personal data with privacy, support businesses with dynamic value laden data and encourage developers to build for re-imagining the data economy. To earn a rightful passive income by viewing Advertisements of choice and Sharing your data with Industry, please install this application and secure a more safer future. Being Governed by the D-Frame Foundation registered in the Netherlands, we hope to inspire trust and are dedicated to building financially sustainable livelihoods. </p>
                 </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button className="bg-[#007BFF] text-white active:bg-[#007BFF] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowWhy(false)}>Close</button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

{showValue? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">What is the value of your data?</h3>
                </div>
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-lg leading-relaxed">The value of your data is directly co-related with the price of data paid by the Advertiser or Data Collector from Industry in future. Based on your personal profile and interests, it is possible that certain people's data are more valuable in a collective data set at different time periods based on dynamic demand. The Ad Pricing is decided via the Data Valuation Engine (DVE). This is discussed in Detail in the White Paper. Through general demand-supply dynamics for certain types of Data determined via tags and actual Ad spent, the pricing is calculated. A base price of different data types is set and further calculations are processed. To be explored in the Alpha version. <a href="https://dFrame.org/d-Frame-white-paper-v1-1/" rel="noreferrer" target="_blank" className="bg-slate-200">https://dFrame.org/d-Frame-white-paper-v1-1/</a> </p>
                 </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button className="bg-[#007BFF] text-white active:bg-[#007BFF] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowValue(false)}>Close</button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

{showSafe? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Is your data safe with us?</h3>
                </div>
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-lg leading-relaxed">With your prior permission, your data is processed, stored and timestamped (hashed) through  support of Blockchains like Polygon and services like Mongo Data Base. We hope to empower full public transparency via the blockchain with personal privacy through encryption technologies. Only with your permission, would your data be accessed or used by third parties including us. Hence, there would be full compliance to GDPR and CCPA regulatory acts. </p>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button className="bg-[#007BFF] text-white active:bg-[#007BFF] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowSafe(false)}>Close</button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
     
{showToken? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">How can you receive and access D Frame tokens?</h3>
                </div>
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-lg leading-relaxed">The D Frame utility tokens are being generated on a Public Blockchain like Polygon. Hence, they can be easily accessed through third party interphases like Meta Mask and the D-Frame Wallets. These tokens would be earned periodically with the users willingly sharing their data. </p>
                 </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button className="bg-[#007BFF] text-white active:bg-[#007BFF] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowToken(false)}>Close</button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
     
{showFaq ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold"> FAQ </h3>
                </div>
                <div className="relative p-6 flex-auto">
                  <strong>1. Where is D Frame Registered?<br/></strong>
                   The D Frame Foundation is registered in the Hague, Netherlands. <br/>
                  <strong>2. What is D Frame?<br/></strong>
                  D-Frame is a decentralised data ecosystem to help people monetise their personal data with privacy, support businesses with dynamic value laden data and encourage developers to build for re-imagining the data ecosystem. Using Blockchain based smart contracts for trust and a D-Frame token for value generation & distribution, the ecosystem aspires to be a community driven sustainable effort.<br/>
                  <strong>3.What is Ad Frame? <br/></strong>
                   Ad-Frame is an advertising platform built on D Frame, to help clients target users better. Through advanced functionalities like real time target audience analytics with matching interests and a general willingness to watch ads from the users, we hope for significantly higher Click Through Rates (CTR) through AD-Frame.<br/>
                  <strong>4. How many users does D Frame have?<br/></strong>
                  Currently, D Frame is at the prototype stage. Further, we would plan for an Alpha release for 50,000 to 100,000 users. Long term, a user base of atleast 10 million plus users is targeted.<br/>
                  <strong>5. How many Clients use D Frame? How can Clients be successful on D Frame? <br/></strong>
                  Currently, D Frame is at the Prototype stage and we do not have active partnership with any client. However, we are pursuing partnerships with some of the largest Advertising firms in the world.<br/>
                  <strong>6. How does D Frame compare to other Advertising platforms?<br/></strong>
                  D Frame shows an active data pool size of all the relevant users. Further, User's are willing to view advertisements for making passive income for sharing their data. Finally, we would be working on integration with different metaverse platforms.<br/>
                  <strong>7. How much money do users make?<br/></strong>
                  Currently, we hope to atleast share 50% of the revenue generated directly with the users. Based on community feedback and stakeholder dynamics, these numbers will evolve.
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button className="bg-[#007BFF] text-white active:bg-[#007BFF] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowFaq(false)}>Close</button>
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

export default Learnmore;