import React from 'react'
import AntqCards from './AntqCards'

function AntiqCard() {
  return (
    <>
        <div className='card-bg-gradient 2xl:w-[600px] xl:w-[500px] xm:overflow-hidden'></div>
        <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="500" className=' grid grid-flow-row grid-cols-2 xl:gap-8 lg:gap-4 md:gap-8 sm:gap-4 xm:gap-2 float-right mb-10 z-10 relative'>
            <AntqCards
            title="Antique"
            rate="0.234wETH"
            dis="Highest bid 1/20"
            like="214"
            bgImage={require('../../../assets/img/1/1.png')}
             />
            <AntqCards
            title="Antique"
            rate="0.234wETH"
            dis="Highest bid 1/20"
            like="214"
            bgImage={require('../../../assets/img/1/2.png')}
             />
            <AntqCards
            title="Antique"
            rate="0.234wETH"
            dis="Highest bid 1/20"
            like="214"
            bgImage={require('../../../assets/img/1/3.png')}
             />
            <AntqCards
            title="Antique"
            rate="0.234wETH"
            dis="Highest bid 1/20"
            like="214"
            bgImage={require('../../../assets/img/1/4.png')}
             />
        </div>
        
    </>
  )
}

export default AntiqCard