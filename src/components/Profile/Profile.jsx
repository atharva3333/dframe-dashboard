import { Sidebar } from "../../components/Sidebar/Sidebar";
import axios from 'axios';
import React, {useContext, useEffect, useState} from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import { GrFormEdit } from "react-icons/gr";

const Profile = () => {

  const { email,address } = useContext(UserContext);
  const [profileData, setProfileData] = useState('');
  // const BackendUrl = process.env.REACT_APP_BACKEND_URL

 useEffect(() => {
    axios.get(`https://www.dev.dframe-api.xyz/core-api/user/updateProfileData/${address}`).then((response) => {
     console.log(response.data);
     console.log(response.data.userName);
     setProfileData(response.data);
    }).catch((err) => { console.log(err) });
  }, []);
 
return (
<div className="w-[100vw] p-0 m-0 h-[100vh]">
       <div className="w-[16.2vw]">
         {/*Calling the Sidebar */}
       <Sidebar/>
       </div>
      <div className="bg-[#DFF6FF] left-[16.2vw] absolute h-[19vh] m-0 p-0 top-0 w-[83.8vw]">
        <h1 className="font-medium text-[5vh] ml-[7vh] mt-[5vh]">Profile</h1>
      </div>
      {/*Assigning the profile Structure */}
      <div className="bg-[#cccdcf] absolute h-[81vh] w-[83.8vw] top-[19vh] left-[16.2vw]">
          <div className="bg-white ml-[3vw] mt-[5vh] w-[76vw] rounded-2xl">
          <div className="flex pt-[2vh] flex-row ml-[8vw] justify-between w-[60vw]">
              <div className="text-3xl mt-12 ">
              <p>{profileData.name? <span className="font-semibold text-[#0d21d8] ">Name: <span className="font-normal text-black">{profileData.name} </span><div className="w-[2vw] inline-block ml-[1vw]"><Link to='/UpdateProfile'><GrFormEdit className="mt-1"/></Link></div></span> : <span className="font-semibold inline text-[#0d21d8]">Name: <span className="font-normal text-black">Please Update </span><div className="w-[2vw] inline-block ml-[1vw]"><Link to='/UpdateProfile'><GrFormEdit className="mt-1"/></Link></div> </span> }</p>
              <p className="font-semibold text-[#0d21d8]">Email: <span className="font-normal text-black "> {email}</span> </p>
              </div>
              <div className="text-3xl mt-12 ">
                <p>{profileData.userName? <span className="font-semibold text-[#0d21d8]">Username:  <span className="font-normal text-black"> {profileData.userName}</span> <div className="w-[2vw] inline-block ml-[1vw]"><Link to='/UpdateProfile'><GrFormEdit className="mt-1"/></Link></div></span>  :   <span className="font-semibold text-[#0d21d8]">Username: <span className="font-normal text-black">Please Update</span> <div className="w-[2vw] inline-block ml-[1vw]"><Link to='/UpdateProfile'><GrFormEdit className="mt-1"/></Link></div></span>  } </p>
                <p>{profileData.phoneNumber? <span className="font-semibold text-[#0d21d8]">Phone Number: <span className="font-normal text-black">{profileData.phoneNumber}</span><div className="w-[2vw] inline-block ml-[1vw]"><Link to='/UpdateProfile'><GrFormEdit className="mt-1"/></Link></div></span>  :   <span className="font-semibold text-[#0d21d8]">Phone Number: <span className="font-normal text-black">Please Update<div className="w-[2vw] inline-block ml-[1vw]"><Link to='/UpdateProfile'><GrFormEdit className="mt-1"/></Link></div> </span> </span> } </p>
              </div> 
            </div>
            <div className="text-center ml-[10%] mt-[4vh] w-[80%]">
              <p className="text-3xl font-semibold py-2">Profile Improvement:</p>
              <p className="text-2xl">This enable us to know about you better and show more relevant ads</p>
              <Link to="/Survey"><button className="bg-[#47B5FF] mb-5 w-[8vw] text-xl mt-4 h-12 rounded-full text-white">Survey</button></Link>
            </div>
        </div> 
        <div className="bg-white text-center ml-[3vw] mt-[3vh] w-[76vw] rounded-2xl" >
          <div className="ml-[8vw] w-[60vw]">
          <p className=" pt-[18px] text-3xl font-semibold">KYC Identity verification</p>
          <p className="text-2xl">This Verification makes us aware that you are a valid user. It may take upto 24 hours.</p>
          <button className="bg-[#47B5FF] text-2xl mt-4 h-14 rounded-full mb-6 text-white w-[30%]">2 Step Verification</button>
          </div>
        </div>
      </div>      
    </div>
  );
};

export default Profile;

