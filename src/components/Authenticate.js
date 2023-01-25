/* eslint-disable react/prop-types */
import { useHistory } from 'react-router-dom';
import { loginUser } from '../services/magic';
import React, { useState } from "react";
import styles from "./Authenticate.module.css";
import Navbar from './Navbar/Navbar';
import dFrameHero from "../assets/Images/d-frame-hero.png";

const Authenticate = ({ setStatus }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState('');
  const [error, setError] = useState(null);
  const [checkedTC, setCheckedTC] = useState(false);

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (!checkedTC) {
      alert("Please accept the Terms and conditions.");
      return;
    }
    try {
      if (!email) {
      setLoading(false);
      setError('Email is Invalid');
      alert({error})
      return; 
    }
    try {
      await loginUser(email, setStatus);
      setLoading(false);
      history.replace('/Profile');
    } catch (error) {
      setError('Unable to log in');
      console.error(error);
    }
    } catch {
      // Handle errors if required!
    }
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCheckboxChange = (e) => {
    setCheckedTC(!checkedTC);
  };

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#000",
      }}
    >
      <Navbar />
      <div
        
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div className={styles.blur1}></div>
        <div className={styles.blur2}></div>
        <div className={styles.hero}>
          <img
            src={dFrameHero}
            alt="Dframe logo"
            style={{ height: "35rem", width: "37rem" }}
          />
          <div
            className="container"
            style={{
              height: "8rem",
              width: "22rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <span className={styles.formHeading}>Create Your Account</span>

            <form style={{ color: "white" }}>
              <input
                placeholder="Enter your email"
                value={email}
                onChange={handleChange}
                style={{ color: "white", border: "1px solid white" , padding:'1rem'}}
              />

            </form>
            
              
                <div style={{display:'flex'}}>
                  <input type='checkbox'
                    style={{
                      color: "#49c0f3",
                      "&.Mui-checked": {
                        color: "#49c0f3",
                      },
                    }}
                    onChange={handleCheckboxChange}
                  />
               <label style={{color:'whitesmoke', paddingLeft:'1rem'}}>I agree to all terms and conditions</label>
               </div>
              
            
            <button style={{backgroundColor:'blue', color:'white', padding:'0.5rem 1rem'}} onClick={handleSubmit}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authenticate;
