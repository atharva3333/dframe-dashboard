import React, { useState, useContext } from "react";
import axios from "axios";
import dFramelogo from "./d-frame-logo.png";
import { UserContext } from "../../context/UserContext";
import { useHistory } from "react-router-dom";

const UpdateProfile = () => {
  const history = useHistory();
  const { email, address } = useContext(UserContext);
  const [profileData, setProfileData] = useState({
    name: "",
    username: "",
    phone : "",
    address: ""
  });

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
        name: profileData.name,
        userName: profileData.username,
        phoneNumber : profileData.phone,
        address: profileData.address,
        isActive : true,
        earnings: "0",
        publicAddress: address,
        isEmailVerified : true,
        email: email,
    };
    axios.post(`https://www.dev.dframe-api.xyz/core-api/user/updateProfileData/${address}`, userData).then((response) => {
      console.log(response.status);
      console.log(response.data);
      setProfileData({...profileData,
        name : "",
        username: "",
        phone : "",
        address: ""
      })
      if(response.data){
       const navigate = () => history.push('/Profile');
       navigate()
      }}).catch(error => {console.log(error)})
  };

  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="bg-[#cccdcf] w-[100vw] h-[100vh]">
        <img src={dFramelogo} alt="" className="w-[10vw] ml-[2vw]" />
        <div className="text-center bg-[#DFF6FF] w-[8vw] text-[#3B4FE4] ml-[3vw] pt-1 font-medium text-xl h-[4vh]">
          <h1 className="px-[1vw] text-[#0d21d8] font-semibold">D Frame</h1>
        </div>
      <h1 className="text-[6vh] font-normal absolute left-[43vw] top-[11vh]">User Profile</h1>
      <div className=" absolute left-[20vw] rounded-3xl top-[22vh] bg-[#FFFFFF] w-[60vw] h-[56vh]">
      <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name" 
            placeholder="Name"
            className="bg-[#DFF6FF] border border-teal-400 outline-none text-3xl px-10 inline-block h-[8vh] w-[23vw] ml-[5vw] mt-[5vh] rounded-xl "
            value={profileData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="username"
            value={profileData.username}
            placeholder='Username'
            className="bg-[#DFF6FF] border border-teal-400 inline-block h-[8vh] outline-none w-[23vw] text-3xl px-10 ml-[5vw] mt-[5vh] rounded-xl "
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            value={profileData.address}
            placeholder='Address'
            className="bg-[#DFF6FF] border border-teal-400 block h-[8vh] w-[51vw] outline-none text-3xl px-10 ml-[5vw] mt-[5vh] rounded-xl "
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            value={profileData.phone}
            placeholder='Phone Number'
            className="bg-[#DFF6FF] border border-teal-400 inline-block h-[8vh] outline-none text-3xl px-10 w-[23vw] ml-[18vw] mt-[5vh] rounded-xl "
            onChange={handleChange}
          />
        <button className="block bg-[#47B5FF] ml-[27vw] mt-[5vh] text-lg text-white w-[8vw] rounded-3xl h-[5vh]" type="submit">Submit</button>
      </form>
      </div>
      </div>
    </div>
  );
};


export default UpdateProfile;