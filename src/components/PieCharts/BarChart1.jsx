import React , { useContext } from 'react';
// import { UserContext } from '../../context/UserContext';
//Importing the the BarChart component from recharts.
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
// import axios from 'axios';

//Defing the Data values
const data = [
  {
    name: 'Jan',
    uv: 250,
    pv: 200,
    amt: 200,
  },
  {
    name: 'Feb',
    uv: 40,
    pv: 200,
    amt: 200,
  },
  {
    name: 'March',
    uv: 125,
    pv: 200,
    amt: 200,
  },
  {
    name: 'April',
    uv: 200,
    pv: 200,
    amt: 200,
  },
  {
    name: 'May',
    uv: 70,
    pv: 200,
    amt: 200,
  },
  {
    name: 'June',
    uv: 50,
    pv: 200,
    amt: 200,
  },
  {
    name: 'July',
    uv: 140,
    pv: 200,
    amt: 200,
  },
  {
    name: 'Aug',
    uv: 184,
    pv: 200,
    amt: 200,
  },
  {
    name: 'Sep',
    uv: 50,
    pv: 200,
    amt: 200,
  },
  {
    name: 'Oct',
    uv: 50,
    pv: 200,
    amt: 200,
  },
  {
    name: 'Nov',
    uv: 70,
    pv: 200,
    amt: 200,
  },
  {
    name: 'Dec',
    uv: 200,
    pv: 138,
    amt: 200,
  }
];

const BarChart1 = () => {

  // const { email,address } = useContext(UserContext);
  // console.log(`${email} ${address}`);
  // axios.get(`http://localhost:8080/top-sites-visited/${address}`)
  //   .then((response) => { console.log(response.data) });
    
  return (
      <ResponsiveContainer width="70%" className='bg-white ml-[13vw] mt-[4vh]' height="50%">
        {/*passing the width and height of the component. */}
        <BarChart width={50} height={35} data={data}>
          {/*Passing the dataKey and fill color to the Bar component */}
          <Bar dataKey="uv" fill="#17D68D" />
          {/*Passing the CartesianGrid component from recharts */}
          <CartesianGrid strokeDasharray="3 3" />
          {/*Passing the XAxis component from recharts */}
          <XAxis dataKey="name"/>
          {/*Passing the YAxis component from recharts. */}
          <YAxis type="number" unit="DFT" />
          {/* <Tooltip /> */}
          {/* <Legend /> */}
          
        </BarChart>
      </ResponsiveContainer>
    );
  }

export default BarChart1;