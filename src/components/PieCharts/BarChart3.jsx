import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
//Importintg the Piecharts from recharts.
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import axios from 'axios';

//Defing the Data values
const data = [
  { name: 'Group A', value: 50 },
  { name: 'Group B', value: 100 },
  { name: 'Group C', value: 80 },
  { name: 'Group D', value: 60 },
  { name: 'Group e', value: 40 }
];

//Defing the Customized PieChart component
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

const BarChart3 = () => {
  
  // const { email,address } = useContext(UserContext);
  // console.log(`${email} ${address}`);
  // axios.get(`http://localhost:8080/top-sites-visited/${address}`)
  //   .then((response) => { console.log(response.data) });

  return (
      <ResponsiveContainer className='top-[44vh] rounded-3xl left-[44vw] bg-white absolute' width="30%" height="35%">
        {/* Using the PieChart component to render the chart */}
        <PieChart width={500} height={450}>
          {/* Using the Pie component to render the chart */}
          <Pie
            data={data}
            cx="10vw"
            cy={130}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius="10vh"
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }

export default BarChart3
