import React from 'react'
import about from '../../assets/img/about/about.png'
import linkimg from '../../assets/img/a.png'
 
function AboutUs() {
  return (
    <div className='slider-dark-bg-grd w-full h-full py-[100px]'>
        <div className='container'>
            <div className='grid grid-flow-row grid-cols-2'>
                <div className='w-[570px] h-full bg-gradient-1 rounded-[30px]'>
                    <img className="ml-[110px] w-[900px] mt-[50px]" src={about} alt='' />
                </div>
                <div>
                    <img className='mt-[-50px]' src={linkimg} alt='' />
                    <div className='ml-[200px]'>
                        <h2 className='text-[44px] text-white mb-5'>About us</h2>
                        <p className='text-gray-500 leading-7 mb-14'>Lacus consequat nibh euismod velit. Vitae cursus aliquam non vestibulum. Vel leo faucibus enim at nibh condimentum leo at blandit. Magnis duis non metus leo vitae commodo aliquam.elementum nulla turpis in nunc.</p>
                        <p className='text-gray-500 leading-7'>Lacus consequat nibh euismod velit. Vitae cursus aliquam non vestibulum. Vel leo faucibus enim at nibh condimentum leo at blandit. Magnis duis non metus leo vitae commodo aliquam.Pulvinar nunc</p>
                        <div className='mt-14 flex'>
                            <div className='flex items-center pr-10 mr-10 border-r-slate-700 border-r'>
                                <h4 className='text-white'>13k</h4>
                                <span className='text-blue-500 ml-4'>creator</span>
                            </div>
                            <div className='flex items-center'>
                                <h4 className='text-white'>13k</h4>
                                <span className='text-blue-500 ml-4'>creator</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs