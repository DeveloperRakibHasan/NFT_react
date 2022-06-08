import React from 'react'
import AntqCards from './AntqCards'

function AntiqCard() {
  return (
    <>
        <div className='bg-gradient-1 w-[600px] rounded-[30px] top-[140px] right-[60px] z-0 h-full absolute'></div>
        <div className='grid grid-flow-row grid-cols-2 gap-8 float-right mb-10 z-10 relative'>
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