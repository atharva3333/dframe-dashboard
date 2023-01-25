import React, { useState, useEffect, useContext }  from 'react';
import { UserContext } from '../../context/UserContext';
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import axios from 'axios';
import { Sidebar } from "../Sidebar/Sidebar";

const data1 = [
  { name: "SitesDistribution", value: 100 },
  { name: "SitesDistribution", value: 300 },
  { name: "SitesDistribution", value: 400 },
  { name: "SitesDistribution", value: 200 }
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

const SiteDistribution = () => {

  const [data,setData] = useState(data1);
  const { address } = useContext(UserContext);

  const assignData = (category) => {
    if(category==="sports"){
      axios.get("https://www.dev.dframe-api.xyz/core-analytics/sites-distribution/sports/mbenedick4")
      .then((res)=>setData(res.data))
      .catch((err)=>console.log(err))
      // setData(data1)
      
    }else if(category==="crypto"){
      axios.get("https://www.dev.dframe-api.xyz/core-analytics/sites-distribution/crypto/mbenedick4")
      .then((res)=>setData(res.data))
      .catch((err)=>console.log(err))
      // setData(data1)

    }else if(category==="ecommerce"){
      axios.get("https://www.dev.dframe-api.xyz/core-analytics/sites-distribution/ecommerce/mbenedick4")
      .then((res)=>setData(res.data))
      .catch((err)=>console.log(err))
      //setData(data1)

    }else if(category==="social"){
      axios.get("https://www.dev.dframe-api.xyz/core-analytics/sites-distribution/social/mbenedick4")
      .then((res)=>setData(res.data))
      .catch((err)=>console.log(err))
      // setData(data1)
    }
  }

  useEffect(() => {assignData()},[]); 
  useEffect(() => {assignData("sports")},[]); 

  return (
    <div className="w-[100vw] p-0 m-0 h-[100vh]">
    <div className="w-[16.2vw]">
      {/*Calling the sidebar */}
      <Sidebar />
    </div>
    <div className="bg-[#DFF6FF] left-[16.2vw] absolute h-[19vh] top-0 w-[83.8vw]">
       <h1 className="font-medium text-[5vh] ml-[7vh] mt-[5vh]">Analytics</h1>
    </div>
      <div className='absolute top-[19vh] h-[5vh] left-[16.2vw] w-[83.8vw] '>
        <button className='inline-block active:bg-[#cccdcf] focus:bg-[#cccdcf] focus:border-black focus:rounded-md focus:border-2 focus:text-black h-[5vh] w-[20.95vw] text-center bg-[#47B5FF] border cursor-pointer border-indigo-600  text-white' onClick={()=>assignData("sports")}><h1 className='px-3 text-[2vh] font-normal'>Sports</h1></button>
        <button className='inline-block active:bg-[#cccdcf] focus:bg-[#cccdcf] focus:border-black focus:rounded-md focus:border-2 focus:text-black h-[5vh] w-[20.95vw] text-center bg-[#47B5FF] border cursor-pointer border-indigo-600  text-white' onClick={()=>assignData("crypto")}><h1 className='px-3 text-[2vh] font-normal'>Crypto</h1></button>
        <button className='inline-block active:bg-[#cccdcf] focus:bg-[#cccdcf] focus:border-black focus:rounded-md focus:border-2 focus:text-black h-[5vh] w-[20.95vw] text-center bg-[#47B5FF] border cursor-pointer border-indigo-600  text-white' onClick={()=>assignData("ecommerce")}><h1 className='px-3 text-[2vh] font-normal'>E-Commerce</h1></button>
        <button className='inline-block active:bg-[#cccdcf] focus:bg-[#cccdcf] focus:border-black focus:rounded-md focus:border-2 focus:text-black h-[5vh] w-[20.95vw] text-center bg-[#47B5FF] border cursor-pointer border-indigo-600  text-white' onClick={()=>assignData("social")}><h1 className='px-3 text-[2vh] font-normal'>Social</h1></button>
      </div>
      <div className="bg-[#cccdcf] absolute h-[76vh] w-[83.8vw] top-[24vh] left-[16.2vw]">
        <h1 className='font-medium text-4xl p-6'>Sites Distribution</h1>
        <ResponsiveContainer className='ml-[25%] mt-[-8vh]' width="39%" height="57%">
        <PieChart width={400} height={250} className="pie">
            <Pie data={data} cx={220} cy={186} labelLine={false} label={renderCustomizedLabel} outerRadius="30vw" fill="#B977AC" dataKey="value">
               {data.map((entry, index) => ( <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))}
            </Pie>
        </PieChart>
        </ResponsiveContainer>
      </div>
      <div className='absolute top-[27vh] rounded-2xl right-[10vw] bg-white space-y-3 '>
      <div className="flex flex-col px-[45px] py-1 mb-1">
          {data.map(({name,value},i)=>{
             return <div className='flex mt-2.5 justify-left text-2xl flex-row'><input style={{height:"20px",width:"17px",background:COLORS[i],border:"white",margin:"7px 5px", borderRadius:"5px"}}/>{name}</div>
          })}
      </div>
      </div>
      <div className='absolute w-[50vw] overflow-auto h-[29vh] border rounded-t-3xl bg-white space-y-3 top-[68vh] left-[30vw]'>
            {data.map(({name,value},i)=>{
             return ( 
              <div className='flex flex-row justify-between ml-16 mr-10 text-xl'>
              <div className='m-[5px] mt-7 text-[28px]'><input style={{height:"25px",width:"20px",background:COLORS[i],border:"white",margin:"0 5px", borderRadius:"5px"}}/>{name}</div>
              <div className='flex mt-7 text-2xl flex-row'><h1><span style={{color:"#3a6198", fontWeight:500}}>{value} minutes</span></h1> <h1 className=' px-6 text-red-600 text-[2vh]'>❌</h1></div>
              </div>
             )})}
      </div>
    </div>     
  )
}

export default SiteDistribution