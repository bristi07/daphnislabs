import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { json } from 'react-router-dom';
ChartJS.register(ArcElement, Tooltip, Legend);

function Piechart() {
const [category, setCategory]=useState([]);
const [count, setCount]=useState([]);
useEffect(()=>{

  const getcategory=[];
  const getcount=[];
  const fakestore=async()=>{
    const response=await fetch('https://fakestoreapi.com/products');
    // console.log(response);
   const jsonData=await response.json();
    console.log(jsonData);
   const map1=new Map();

  
jsonData.map((value)=>{
// map1.set(value.category,  0);

 if (typeof map1.get(value.category)==="undefined")
 {
  map1.set(value.category,  1);
 }
 else{
  map1.set(value.category,map1.get(value.category)+1);
 }
})

console.log("updated");

   console.log(map1);   
   
   
   for(let [key,value] of map1.entries()){
    getcategory.push(key);
    console.log("hiiii");
    
   // console.log(getcategory);
    getcount.push(value);
    //console.log(map1.get(value));
    console.log(getcount);
   }
   setCategory(getcategory);
   setCount(getcount);
}
fakestore();

}, []);
//   const fakestore=async()=>{
//     const response=await fetch('https://fakestoreapi.com/products');
//     // console.log(response);
//    const jsonData=await response.json();
//     console.log(jsonData);
//    const map1=new Map();

  
// jsonData.map((value)=>{
// // map1.set(value.category,  0);

//  if (typeof map1.get(value.category)==="undefined")
//  {
//   map1.set(value.category,  1);
//  }
//  else{
//   map1.set(value.category,map1.get(value.category)+1);
//  }
// })

// console.log("updated");

//    console.log(map1);     
// }
// fakestore();





  return (
    <div className='container-fluid '>
    <div className='row '>
    
    <div className='col-md-5 mb-3 mt-3 m-20 '>
      <Pie
width={150}
height={200}
data={{
  labels:category,
  datasets: [
    {
      label: '# of Votes',
      data: count,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
      offset: [0,0,0,0]
    },
  ],
}}

// options={{

// responsive: true,

// }}
options={{                 
                responsive: false,         
                plugins:{
                    title:{
                        fontSize: 30,
                        text:'Chart js tutorial',
                        display: true ,
                        font:{ size:20}   
                    },
                    legend:{
                      labels:{
                        font:{size:15}
                      }
                    }                        
                 },                
               }}    


 /></div></div>
    </div>
  )
}

export default Piechart;