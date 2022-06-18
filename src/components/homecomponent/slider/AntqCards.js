import React, { useState, useEffect } from 'react'
import { GiSelfLove } from "react-icons/gi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function AntqCards(props) {

  // const save = () => {
  //   toast.success("Saved Item.", {
  //     position: "top-center",
  //     autoClose: 2000,
  // });
  // }
  // const deleted = () => {
  //   toast.error("Delete Item.", {
  //     position: "top-center",
  //     autoClose: 2000,
  // });
  // }

  const [dotsActive, setDotsActive] = useState(false);
  const [fill, setFill]  = useState (false);

  const [countdownDate] = useState(new Date('12/25/2022').getTime());
  const [state, setState] = useState ({
    days:0,
    hours:0,
    minutes:0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  });

  const setNewTime = () => {
    if(countdownDate) {
      const currentTime = new Date().getTime();
      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 *24));
      let hours = Math.floor((distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),);
      let minutes = Math.floor((distanceToDate % (1000 * 60 * 60)) / (1000 * 60),);
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);
      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ days: days, hours: hours, minutes, seconds });

    }
  }

  return (
    <>
        <div className='xl:w-[270px] lg:w-full bg-[#2A2E3F] rounded-[30px] h-full p-3 nth-position'>
            <div className=' bg-no-repeat bg-contain bg-center w-full xl:h-[220px] lg:h-[172px] relative' style={{ backgroundImage: `url(${props.bgImage})` }}>
            <div className='absolute right-2 top-4 text-white z-20'>
            <button onClick={()=> setDotsActive(!dotsActive)} className='font-bold cursor-pointer text-[24px]'><BsThreeDotsVertical /></button>
            <ul className={dotsActive?'dots active-dots duration-200': 'dots'}>
              <li className='mb-1 px-2 py-1 hover:bg-[#7D68F7] rounded-md hover:text-white'><button>Saved</button></li>
              <li className=' px-2 py-1 hover:bg-[#f00] rounded-md hover:text-white'><button>Delete</button></li>
            </ul>
            </div>
              <div className='text-center grid grid-flow-row grid-cols-4 relative h-full mx-auto items-end text-white px-4 bottom-2'>
                <div>
                  <div className='font-bold text-[18px]'>{state.days || '0'}</div>
                  <small>Days</small>
                </div>
                <div>
                  <div className='font-bold text-[18px]'>{state.hours || '00'}</div>
                  <small>Hou</small>
                </div>
                <div>
                  <div className='font-bold text-[18px]'>{state.minutes || '00'}</div>
                  <small>Min</small>
                </div>
                <div>
                  <div className='font-bold text-[18px]'>{state.seconds || '00'}</div>
                  <small>Sec</small>
                </div>
              </div>
            </div>
            <div className='flex justify-between items-center mt-4 px-5'>
                <b className='text-white text-[18px]'>{props.title}</b>
                <span className='text-[#566FFE]'>{props.rate}</span>
            </div>
            <div className='flex justify-between mt-1 px-5 pb-2'>
                <span className='text-[#7D8694]'>{props.dis}</span>
                <span className='text-[#7D8694] flex items-center'> <GiSelfLove onClick={()=> setFill(!fill)} className={fill ? "mr-2 cursor-pointer text-red-600":"mr-2 cursor-pointer"} />{props.like}</span>
            </div>
        <ToastContainer />

        </div>
    </>
  )
}

export default AntqCards