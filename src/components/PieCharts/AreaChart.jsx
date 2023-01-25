import React, { useContext } from "react";
// import { UserContext } from '../../context/UserContext';
// import axios from 'axios'
//Importing the Recharts library
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

//Defing the Data values
const data = [
  {
    name: "0",
    uv: 25,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "1",
    uv: 10,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "2",
    uv: 40,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "3",
    uv: 80,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "4",
    uv: 40,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "5",
    uv: 35,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "6",
    uv: 40,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "7",
    uv: 15,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "8",
    uv: 18,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "9",
    uv: 25,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "10",
    uv: 25,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "11",
    uv: 45,
    pv: 7000,
    amt: 2100,
  },
];

const AreaChart1 = () => {

  // const { email,address } = useContext(UserContext);
  // console.log(`${email} ${address}`);
  // axios.get(`http://localhost:8080/top-sites-visited/${address}`)
  //   .then((response) => { console.log(response.data) });
    
  return (
      //Creating the data variable and assign it the value of the data variable
      <ResponsiveContainer className='bg-white ml-[13vw] mt-5 rounded-3xl' width="69%" height="34%">
        <AreaChart
          width={900}
          height={200}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="" dataKey="uv" stroke="rgba(234, 121, 84, 0.6)" fill="rgba(234, 121, 84, 0.6)" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }

export default AreaChart1