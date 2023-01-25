import React, { useState, useEffect, useContext }  from 'react';
import { UserContext } from '../../context/UserContext';
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
//Importing the SideBar and PieChatrs component
import { Sidebar } from "../Sidebar/Sidebar";
import axios from 'axios';

const data1 = [
  { name: "SiteByTime", value: 100 },
  { name: "SiteByTime", value: 300 },
  { name: "SiteByTime", value: 200 },
  { name: "SiteByTime", value: 400 }
];

const COLORS = ["#b5473f","#6c6bc2","#3eb54a","#baa806","#78066b","#8c5307","#037330"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const SiteByTime = () => {

  const [data,setData] = useState(data1);
  const { address } = useContext(UserContext);

  const assignData= () => {
    //  if(address){ axios.get(`http://127.0.0.1:5000/top-sites-visited/${address}`).then((res)=>setData(res.data)).catch((err)=>console.log(err))}
     if(address){ axios.get(`https://www.dev.dframe-api.xyz/core-analytics/sites-by-time/crannells0`).then((res)=>setData(res.data)).catch((err)=>console.log(err))}
    }

  useEffect(() => {assignData()},[]); 

  return (
    <div className="w-[100vw] p-0 m-0 h-[100vh]">
    <div className="w-[16.2vw]">
      {/*Calling the sidebar */}
      <Sidebar />
    </div>
    <div className="bg-[#DFF6FF] left-[16.2vw] absolute h-[19vh] top-0 w-[83.8vw]">
       <h1 className="font-medium text-[5vh] ml-[7vh] mt-[5vh]">Analytics</h1>
    </div>
    <div className="bg-[#cccdcf] absolute h-[81vh] w-[83.8vw] top-[19vh] left-[16.2vw]">
    <h1 className='font-medium text-4xl p-6'>Site By Time</h1>
        <ResponsiveContainer className='ml-[22vw] mt-[-4vh]' width="39%" height="57%">
        <PieChart width={400} height={250} className="pie">
            <Pie data={data} cx={220} cy={186} labelLine={false} label={renderCustomizedLabel} outerRadius="30vw" fill="#8884d8" dataKey="value">
               {data.map((entry, index) => ( <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))}
            </Pie>
        </PieChart>
        </ResponsiveContainer>
      </div>
      {/*Giving Data models to the PieChats */}
      <div className='absolute top-[27vh] rounded-2xl right-[10vw] bg-white space-y-3'>
      <div className="flex flex-col px-[45px] py-1 mb-1">
          {data.map(({name,value},i)=>{
             return <div className='flex mt-2.5 justify-left text-2xl flex-row'><input style={{height:"20px",width:"17px",background:COLORS[i],border:"white",margin:"7px 5px", borderRadius:"5px"}}/>{name}</div>
          })}
      </div>
      </div>
      <div className='absolute w-[50vw] overflow-auto h-[29vh] border rounded-t-3xl bg-white space-y-3 top-[68vh] left-[30vw]'>
            {data.map(({name,value},i)=>{
             return  ( 
             <div className='flex flex-row justify-between ml-16 mr-10 text-xl'>
             <div className='m-[5px] mt-7 text-[28px]'><input style={{height:"25px",width:"20px",background:COLORS[i],border:"white",margin:"0 5px", borderRadius:"5px"}}/>{name}</div>
             <div className='flex mt-7 text-2xl flex-row'><h1><span style={{color:"#3a6198", fontWeight:500}}>{value} minutes</span></h1> <h1 className=' px-6 text-red-600 text-[2vh]'>❌</h1></div>
             </div>
             )})}
      </div>
    </div> 
  )
}

export default SiteByTime