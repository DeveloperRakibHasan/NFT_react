import React from 'react'
import { BsArrowRightShort } from "react-icons/bs";
import Artiests from './Artiests';

function Artiest() {
  return (
    <div className='container'>
        <div className='flex justify-between mt-[100px]'>
            <h4 className='text-[36px] text-white font-roboto'>Top Artist</h4>
            <button className='text-white flex items-center'>View All <BsArrowRightShort className='text-[22px]' /> </button>
        </div>
        <div className='mt-12 grid grid-flow-row grid-cols-4 gap-10'>
            <Artiests 
              img={require('../../../assets/img/2/1.png')}
              title="Antique"
              price="$2000,000"
            />
            <Artiests 
              img={require('../../../assets/img/2/2.png')}
              title="Antique"
              price="$2000,000"
            />
            <Artiests 
              img={require('../../../assets/img/2/3.png')}
              title="Antique"
              price="$2000,000"
            />
            <Artiests 
              img={require('../../../assets/img/2/4.png')}
              title="Antique"
              price="$2000,000"
            />
        </div>    
    </div>
  )
}

export default Artiest