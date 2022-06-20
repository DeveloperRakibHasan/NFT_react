import React from 'react'
import about from '../../assets/img/about/about.png'
import linkimg from '../../assets/img/a.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
 
function AboutUs() {
    AOS.init();
  return (
    <div className='bg-[#111826] w-full h-full py-[100px]'>
        <div className='container'>
            <div className='grid grid-flow-row md:grid-cols-2 sm:grid-cols-1'>
                <div className='xl:w-[570px] lg:w-[470px] h-full bg-gradient-1 rounded-[30px] md:block sm:hidden'>
                    <img className="xl:ml-[110px] lg:ml-0 w-[900px] mt-[50px]" src={about} alt='' />
                </div>
                <div>
                    <img className='mt-[-50px] 2xl:ml-0 xl:ml-16 lg:block xm:hidden' src={linkimg} alt='' />
                    <div className='xl:ml-[200px] lg:ml-[120px] md:ml-10'>
                        <h2 className='text-[44px] text-white mb-5' data-aos="fade-up" data-aos-duration="400">About us</h2>
                        <p className='text-gray-500 leading-7 xl:mb-10 lg:mb-6'  data-aos="fade-up" data-aos-duration="600">Lacus consequat nibh euismod velit. Vitae cursus aliquam non vestibulum. Vel leo faucibus enim at nibh condimentum leo at blandit. Magnis duis non metus leo vitae commodo aliquam.elementum nulla turpis in nunc.</p>
                        <p className='text-gray-500 leading-7' data-aos="fade-up" data-aos-duration="700">Lacus consequat nibh euismod velit. Vitae cursus aliquam non vestibulum. Vel leo faucibus enim at nibh condimentum leo at blandit. Magnis duis non metus leo vitae commodo aliquam.Pulvinar nunc</p>
                        <div className='xl:mt-12 lg:mt-6 md:mt-4 sm:mt-8 flex'>
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