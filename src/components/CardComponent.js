import React, {useState, useEffect} from "react";
import ReadMoreReadLess from "./Navbar/ReadMoreReadLess";
import Piechart from "./Piechart";
import Modal from "./Modal";
// const ReadMore = ({ children }) => {
//     const text = children;
//     const [isReadMore, setIsReadMore] = useState(true);
//     const toggleReadMore = () => {
//       setIsReadMore(!isReadMore);
//     };
//     return (
//       <p className="text">
//         {isReadMore ? String(text).slice(0, 1000) : text}
//         <span onClick={toggleReadMore} className="read-or-hide">
//           {isReadMore ? "..read more"  : " show less"}
//         </span>
//       </p>
//     );
//   };

export default function CardComponent() {

    const [fake, setFake]=useState([]);

   
    useEffect(()=>{
        
        fakestore();
    },[])
    const fakestore=async()=>{
        const response=await fetch('https://fakestoreapi.com/products');
        // console.log(response);
        const jsonData=await response.json();
        console.log(jsonData);
        setFake(jsonData);
    }
    
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handleClick = () => {
        setOpenModal(!openModal);
        //console.log(openModal);



    }
    
  const [type, setType] = useState("All");


  const handleTypeChange = (e) => {
      setType(e.target.value);
      console.log(type)
  }

  const filtercheck = (e) => {

      if (type === "All") {
          return true;
      }

      if (type === e.category) {
          return true;
      }


  }
    
   
    return (
        <>
       <div className=" flex justify-begin my-4 mx-10 border-spacing-3 border-solid ">
                <select style={{ width: "100px" }}
                    onChange={(e) => handleTypeChange(e)}
                    type="text"
                    className="form-control border-solid"
                    placeholder="Filter by type"
                >
                    <option className="shadow-lg" value="All">All</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="men's clothing">Men's clothing</option>
                    <option value="women's clothing">Women's clothing</option>

                </select>
            </div>
       
            <div className="grid gap-28 mt-9 m-7 lg:grid-cols-3  mx-10">
                {fake.filter((e)=> filtercheck(e)).map((values) => (
                    <div className="w-full rounded-2xl shadow-xl font-mono hover:border-l-amber-200 lg:max-w-sm" >
                        {/* <img
                            className="object-contain  max-h-48 min-h-fit flex  relative justify-evenly w-full h-300px w-300px pt-20 pr-20 pl-20 shadow-5xl rounded-5xl"
                            src={values.image}
                            alt="image"
                        /> */}
                        <img className=" max-h-48 min-h-fit object-contain w-full h-full rounded-2xl" src={values.image} alt="image" />

                        <br></br><div className="justify-end flex p-2 w-full mt-5">
                        <button className="px-1 py-1 text-sm text-black   bg-gradient-to-b from-blue-100 to-blue-300 shadow">
                                {values.category}
                            </button></div>
                        <div className="p-4 ">
                            <h4 className="text-md font-bold text-black-600">
                                
                                {values.title}
                            </h4>   
                                           <br/><br/>  <ReadMoreReadLess limit={150}>                
                                                          
                            {values.description} 
                            </ReadMoreReadLess>
   
       
                        </div>
                    </div>
                ))}
            </div>
           
           <div className=" sticky bottom-6  flex justify-end px-4">
                <button class=" bg-gradient-to-b from-green-100 to-blue-300 hover:bg-blue-700 text-black font-bold py-2 px-4 border border-green-700 rounded" onClick={handleClick}>
                    Anayze
                </button>
            </div >
      
            {openModal && <Modal setOpen={setOpenModal} />}
        </>
    );
}
// import React from "react";
// import { useState } from "react";
// import Modal from "./Modal";

// // import Fetch from "../hooks/Fetch";

// export default function CardComponent() {

//     const { data, loading, error } = Fetch(`https://fakestoreapi.com/products`);
//     // console.log(data);
//     // const posts = [
//     //     {
//     //         title: "Grid 1",
//     //         img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
//     //         content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
//     //     },
//     //     {
//     //         title: " Grid 2",
//     //         img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
//     //         content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
//     //     },
//     //     {
//     //         title: " Grid 3",
//     //         img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
//     //         content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
//     //     },
//     //     {
//     //         title: "Grid 3",
//     //         img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
//     //         content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
//     //     },
//     //     {
//     //         title: " Grid 2",
//     //     img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
//     //         content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
//     //     },
//     //     {
//     //         title: " Grid 1",
//     //         img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
//     //         content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
//     //     },
//     // ];

//     const [open, setOpen] = useState(false);
//     const [openModal, setOpenModal] = useState(false);

//     const handleClick = () => {
//         setOpenModal(!openModal);
//         //console.log(openModal);



//     }
//     return (
//         <>
//             <div className="grid gap-28 mt-9 m-10 lg:grid-cols-3  mx-10">
//                 {data.map((items, key) => (
//                     <div className="w-full rounded-2xl shadow-2xl lg:max-w-sm p-8" key={key}>
//                         <img className=" max-h-48 min-h-fit object-contain w-full h-full rounded-2xl" src={items.image} alt="image" />
//                         <div className="flex justify-end -mt-4 px-2">
//                             <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
//                                 {items.category}
//                             </button>
//                         </div>
//                         <div className="p-4">
//                             <h4 className="text-sm font-semibold text-blue-600 py-4">

//                                 {items.title}
//                             </h4>
//                             <p className="mb-2 leading-normal text-black text-xs">
//                                 {items.description}
//                             </p>

//                         </div>
//                     </div>
//                 ))}

//             </div>
//             <div className=" sticky bottom-6  flex justify-end px-4">
//                 <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={handleClick}>
//                     Button
//                 </button>
//             </div >
//             {openModal && <Modal setOpen={setOpenModal} />}

//         </>
//     );
// }