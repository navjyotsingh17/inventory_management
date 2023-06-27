import React, { useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

function Home() {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

document.title="InventoryManagement | Home";


  const handlePieClick = (data, index) => {
    setActiveIndex(index);
  };

  const [setActiveIndex] = useState(null);

  const data = [
    { name: 'Apples', value: 400 },
    { name: 'Bananas', value: 300 },
    { name: 'Cherries', value: 200 },
    { name: 'Oranges', value: 100 }
  ];

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <PieChart width={700} height={700}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={200}
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          onClick={handlePieClick}
        </Pie>
      </PieChart>
      <div style={{ marginLeft: '50px' }}>
        <h1>Welcome to your personalized inventory management system</h1>
      </div>
    </div>


    // <div style={{ display: 'flex' }}>
    //   <div className="home_container">
    //     <h1 className="center">Welcome To Your Own Inventory Management System</h1>
    //     <PieChart width={700} height={700} className='pie-chart'>
    //       <Pie
    //         data={data}
    //         dataKey="value"
    //         nameKey="name"
    //         cx="50%"
    //         cy="50%"
    //         outerRadius={100}
    //         fill="#8884d8"
    //         activeIndex={activeIndex}
    //         activeShape={(props) => {
    //           const { cx, cy, outerRadius, startAngle, endAngle, fill } = props;

    //           return (
    //             <g>
    //               <path
    //                 d={`M${cx},${cy - outerRadius}A${outerRadius},${outerRadius},0,0,1,${cx + Math.sin(startAngle) * outerRadius},${cy - Math.cos(startAngle) * outerRadius}L${cx + Math.sin(endAngle) * outerRadius},${cy - Math.cos(endAngle) * outerRadius}A${outerRadius},${outerRadius},0,0,1,${cx},${cy - outerRadius}`}
    //                 stroke={fill}
    //                 strokeWidth={1}
    //                 fill={fill}
    //               />
    //               <text x={cx} y={cy} dy={8} textAnchor="middle" fill="#000000" fontWeight="bold">
    //                 {data[activeIndex].name}
    //               </text>
    //               <text x={cx} y={cy + 20} dy={8} textAnchor="middle" fill="#000000">
    //                 {data[activeIndex].value}
    //               </text>
    //             </g>
    //           );
    //         }}
    //         onClick={handlePieClick}
    //       >
    //         {data.map((entry, index) => (
    //           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
    //         ))}
    //       </Pie>
    //       <Tooltip />
    //     </PieChart>
    //   </div>
    // </div>



  );
}

export default Home;
