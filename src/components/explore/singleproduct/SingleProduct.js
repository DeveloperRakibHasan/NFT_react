import React from 'react'
import SingleProductSlider from './SingleProductSlider'
import RecentView from './RecentView'
import Footer from '../../footer/Footer'

function SingleProduct() {
  return (
    <>
    
    <div className='slider-dark-bg-grd py-[180px]'>
        <div className='container'>
            <h2 className='text-white mb-14'>Explore Product</h2>
            <div className='grid grid-flow-row grid-cols-2 gap-[240px]'>
                <div>
                    <SingleProductSlider />
                    <h4 className='text-white'>Description</h4>
                    <p className='text-[#7D8694] mt-7'>In risus at et, lectus phasellus quis a consectetur. Rhoncus imperdiet rutrum nulla habitasse eget. Ut et enim eu, neque. Adipiscing sit pellentesque blandit aliquam curabitur pretium ac lectus aliquam. Augue tellus vitae, viverra sed nisl aliquam sapien adipiscing faucibus. Aenean interdum morbi eu dolor non. Tincidunt nunc justo ornare euismod dapibus ut eget adipiscing. Ut est tristique congue nunc lectus non in viverra. Non sit egestas vitae tincidunt vitae eget vel. Sit posuere blandit tellus accumsan, nibh. Vel habitant diam, sollicitudin netus pellentesque pulvinar. Malesuada phasellus neque, dignissim nisl, volutpat.
                        Mattis scelerisque mi lorem eget. Fames .</p>
                </div>
                <div>

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