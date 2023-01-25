import React, { useState, useEffect } from 'react';
import {Switch, BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import { UserContext } from './context/UserContext';
import { checkUser } from './services/magic';
import Authenticate from './components/Authenticate';
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Profile/Profile';
import Wallet from './components/Wallet/Wallet';
import Reward from './components/Reward/Reward';
import Permissions from './components/Permissions/Permissions';
import Help from './components/Help/Help';
import Learnmore from './components/Learnmore/Learnmore';
import BrowserData from './components/BrowserData/BrowserData';
import EMailData from './components/EMailData/EMailData';
import CallData from './components/CallData/CallData';
import Survey from './components/Survey/Survey';
import TopSiteVisited from './components/TopSiteVisited/TopSiteVisited';
import SiteByTime from './components/SiteByTime/SiteByTime';
import SiteDistribution from './components/SiteDistribution/SiteDistribution';
import Monetisation from './components/Monetisation/Monetisation';
import UpdateProfile from './components/Profile/UpdateProfile';
import dframelogo from './assets/Images/DFrame.jpeg';
import dframelogoa from './assets/Images/DFramea.jpeg';
import dframelogob from "./assets/Images/Dframeb.jpeg";
import dframelogoc from "./assets/Images/Dframec.jpeg";
import dframelogod from "./assets/Images/Dframed.jpeg";
import dframe from "./assets/Images/d-frame-logo.png"

const App = () => {
  const [user, setUser] = useState({ isLoggedIn: false, email: '',address: ''});
  const [loading, setLoading] = useState();
  useEffect(() => {
    const validateUser = async () => {
      setLoading(true);
      try {
        await checkUser(setUser);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    validateUser();
  }, [user.isLoggedIn]);

  if (loading) {
    return (
      <div className=' bg-[#DFF6FF] w-[100vw] h-[100vh]'>
        <div className='absolute left-[40vw] top-[34vh]'>
          <img src={dframe} alt="D Frame images" className='absolute top-[-36vh] w-[20vw]' />
          <h1 className='font-bold text-[#0d21d8] text-[3.5vw] ml-[-6vw]'>Welcome to D Frame</h1>
          <img src={dframelogoc} alt="D Frame images" className='absolute left-[30vw] top-[-28vh] w-[30vw]' />
          <img src={dframelogod} alt="D Frame images" className='absolute left-[-35vw] top-[-28vh] w-[30vw]' />
          <img src={dframelogo} alt="D Frame images" className='absolute left-[-2vw] w-[30vw]' />
          <img src={dframelogoa} alt="D Frame images" className="absolute left-[-30vw] w-[16vw] h-[40vh] top-[20vh]" />
          <img src={dframelogob} alt="D Frame images" className=" absolute left-[34vw] w-[24vw] h-[40vh] top-[18vh] " />
        </div>
      </div>
    );
  }
  return (
    <UserContext.Provider value={user}>
      <Router>
      {/* {user.isLoggedIn ?       */}
        <Switch>
          <Route exact path="/"><Authenticate setStatus={setUser} /></Route>
          <PrivateRoute path="/Profile" component={Profile} />
          <PrivateRoute path="/Wallet" component={Wallet} />
          <PrivateRoute path="/Reward" component={Reward} />
          <PrivateRoute path="/Permissions" component={Permissions} />
          <PrivateRoute path="/Help" component={Help}/>
          <PrivateRoute path="/Learnmore" component={Learnmore}/> 
          <PrivateRoute path="/BrowserData" component={BrowserData} />
          <PrivateRoute path="/EMailData" component={EMailData} />
          <PrivateRoute path="/CallData" component={CallData} />
          <PrivateRoute path="/Survey" component={Survey} />
          <PrivateRoute path="/TopSiteVisited" component={TopSiteVisited} />
          <PrivateRoute path="/UpdateProfile" component={UpdateProfile} />
          <PrivateRoute path="/SiteByTime" component={SiteByTime} />
          <PrivateRoute path="/SiteDistribution" component={SiteDistribution} />
          <PrivateRoute path="/Monetisation" component={Monetisation} />
        </Switch> 
        {/* : <Route exact path="/">
            <Authenticate setStatus={setUser} />
          </Route> */}
        {/* } */}
      </Router>
    </UserContext.Provider>
  );
};

export default App;
