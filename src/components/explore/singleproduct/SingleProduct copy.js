import React from 'react'
import SingleProductSlider from './SingleProductSlider'
import RecentView from './RecentView'
import BidComponent from './BidComponent'
import BidHistory from './BidHistory'
import Footer from '../../footer/Footer'
import abc from '../../../assets/img/2/1.png'
import abc2 from '../../../assets/img/2/2.png'

function SingleProduct({item}) {

    const singleProductItem = [
        {
            id: 1,
            dis: 'Description',
            title: 'Qubic digital art',
            portal: '#27 portal',

        },
        {
            id: 2,
            dis: 'Description1',
            title: 'Qubic digital art1',
            portal: '#28 portal',

        },
        {
            id: 3,
            dis: 'Description2',
            title: 'Qubic digital art2',
            portal: '#29 portal',

        },
    ]
   

  return (
    <>
    {
        singleProductItem.map((elem, id) => {
            return(
                <div key={elem.id}>
                <div className='slider-dark-bg-grd py-[180px]'>
        <div className='container'>
            <h2 className='text-white mb-14'>Explore Product</h2>
            <div className='grid grid-flow-row grid-cols-2 gap-[240px]'>
                <div>
                    <SingleProductSlider />
                    <h4 className='text-white'>{elem.dis}</h4>
                    <p className='text-[#7D8694] mt-7'>In risus at et, lectus phasellus quis a consectetur. Rhoncus imperdiet rutrum nulla habitasse eget. Ut et enim eu, neque. Adipiscing sit pellentesque blandit aliquam curabitur pretium ac lectus aliquam. Augue tellus vitae, viverra sed nisl aliquam sapien adipiscing faucibus. Aenean interdum morbi eu dolor non. Tincidunt nunc justo ornare euismod dapibus ut eget adipiscing. Ut est tristique congue nunc lectus non in viverra. Non sit egestas vitae tincidunt vitae eget vel. Sit posuere blandit tellus accumsan, nibh. Vel habitant diam, sollicitudin netus pellentesque pulvinar. Malesuada phasellus neque, dignissim nisl, volutpat.
                        Mattis scelerisque mi lorem eget. Fames .</p>
                </div>
                <div>
                    <div>
                        <h4 className='text-white font-bold text-[36px] font-redhet'>{elem.title}</h4>
                        <div className='mt-4 flex'>
                        <p className='text-[#7D8694]'>Highest bid <span className='text-[#566FFE]'>0.234wETH</span></p>
                        <p className='ml-6 text-white font-medium'>{elem.portal}</p>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <div className='flex'>
                            <div>
                                <b className='text-[#566FFE]'>Category 10% royalties</b>
                                <div className='flex items-center mt-4'>
                                <img className='w-[50px] h-[50px] border-[5px] rounded-full' src={abc} alt='' />
                                <div className='ml-4'>
                                    <span className='text-[#7D8694] block'>Creator</span>
                                    <b className='text-white'>Alfonso Likens</b>
                                </div>
                                </div>
                            </div>
                            <div className='ml-6'>
                                <b className='text-[#566FFE]'>Collections</b>
                                <div className='flex items-center mt-4'>
                                <img className='w-[50px] h-[50px] border-[5px] rounded-full' src={abc2} alt='' />
                                <div className='ml-4'>
                                    <span className='text-[#7D8694] block'>Collection</span>
                                    <b className='text-white'>Robert Morris</b>
                                </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className='mt-[54px]'>
                        <BidComponent />
                    </div>
                    <div className='mt-[30px]'>
                        <BidHistory />
                    </div>
                </div>
            </div>
            <RecentView /> 
        </div>
    </div>
                </div>
            )
        })
    }
    
    <Footer />


    </>
  )
}

export default SingleProduct