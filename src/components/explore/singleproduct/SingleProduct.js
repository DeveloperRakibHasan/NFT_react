import React from 'react'
import SingleProductSlider from './SingleProductSlider'
import RecentView from './RecentView'
import BidComponent from './BidComponent'
import BidHistory from './BidHistory'
import Footer from '../../footer/Footer'
import abc from '../../../assets/img/2/1.png'
import abc2 from '../../../assets/img/2/2.png'
import { BsThreeDots } from "react-icons/bs";
// import { useParams } from 'react-router-dom'

function SingleProduct() {

// const {id }= useParams();

// const [data, setdata] = useState([]);

// const [users, setUsers] = useState([{}]);

// useEffect(()=>{
//     fetch (`./product.json`)
//     .then((resp)=> resp.json())
//     .then((dt) => setdata(dt)) 
   

// },[data])

// useEffect(()=>{
//     const abc = data.filter((d)=> d.id === id);

//     setUsers(abc)

// },[data, id])


  return (
    <>
    
    <div className='slider-dark-bg-grd sm:py-[180px] xm:py-[80px]'>
        <div className='container'>
            <h2 className='text-white mb-14 sm:text-[35px] xm:text-[24px]'>Explore Product</h2>
            <div className='grid grid-flow-row lg:grid-cols-2 sm:grid-cols-1 xm:grid-cols-1 md:mx-auto 2xl:gap-[240px] xl:gap-[100px] lg:gap-[60px] md:gap-[60px]'>
                <div>
                    <SingleProductSlider />
                    <h4 className='text-white'>Description</h4>
                    <p className='text-[#7D8694] sm:mt-7 xm:mt-4'>In risus at et, lectus phasellus quis a consectetur. Rhoncus imperdiet rutrum nulla habitasse eget. Ut et enim eu, neque. Adipiscing sit pellentesque blandit aliquam curabitur pretium ac lectus aliquam. Augue tellus vitae, viverra sed nisl aliquam sapien adipiscing faucibus. Aenean interdum morbi eu dolor non. Tincidunt nunc justo ornare euismod dapibus ut eget adipiscing. Ut est tristique congue nunc lectus non in viverra. Non sit egestas vitae tincidunt vitae eget vel. Sit posuere blandit tellus accumsan, nibh. Vel habitant diam, sollicitudin netus pellentesque pulvinar. Malesuada phasellus neque, dignissim nisl, volutpat.
                        Mattis scelerisque mi lorem eget. Fames .</p>
                </div>
                <div>
                    <div className='md:mt-0 xm:mt-6'>
                        <div className='flex justify-between items-center'>
                        <h4 className='text-white font-bold sm:text-[36px] xm:text-[28px] font-redhet'>Qubic digital art</h4>
                        <BsThreeDots className='text-white text-[22px]' />
                        </div>
                        <div className='md:mt-4 sm:mt-2 xm:mt-2 flex'>
                            <p className='text-[#7D8694] sm:text-[18px] xm:text-[14px]'>Highest bid <span className='text-[#566FFE]'>0.234wETH</span></p>
                            <p className='ml-6 text-white font-medium sm:text-[18px] xm:text-[12px]'>#27 portal</p>
                        </div>
                    </div>   
                    <div className='md:mt-10 xm:mt-4'>
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

    <Footer />
    </>
  )
}

export default SingleProduct