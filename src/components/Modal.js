// import React from 'react'
import { FaXingSquare } from 'react-icons/fa'
// import Piechart from './PieChart'
// const Modal = ({ setOpen }) => {
//     return (

//         <div className='flex justify-end items-start w-52 bg-orange-100'>

//             <div className="" >
//                 <img src='https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png' alt='image' />
//             </div>
//             <div onClick={() => setOpen(false)}>

//                 <FaXingSquare />
//             </div>
//         </div>

//     )
// }

// export default Modal;

import React from "react";
import Piechart from './Piechart';

export default function Modal({ setOpen }) {
    //const [showModal, setShowModal] = React.useState(false);
    return (
        // <>
        //     <button
        //         className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        //         type="button"
        //         onClick={() => setShowModal(true)}
        //     >
        //         Open regular modal
        //     </button>
        //     {showModal ? (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-auto"
            >
                {/* <div className="relative w-auto my-6 mx-auto max-w-3xl"> */}
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-center justify-end p-1 border-t border-solid border-slate-200 rounded-b">

                            <FaXingSquare onClick={() => setOpen(false)} />

                        </div>
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-xl font-semibold">
                                Categories in Catalogue
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setOpen(false)}
                            >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative justify-center w-full flex-auto">
                            <Piechart />
                        </div>


                    </div>
             
            </div>

            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>


    );
}