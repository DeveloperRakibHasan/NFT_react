import React from 'react'
import svgicon from '../../assets/img/blog/1.svg'

function RecentArticles() {
  return (
    <div className='bg-[#232738] py-6 rounded-[18px]'>
                    <h4 className='font-bold text-white px-9'>Recent Articles</h4>
                    <ul className='mt-6'>
                        <li className='py-4 px-9 hover:bg-[#26262F]'>
                           <div className='flex justify-between items-center'>
                            <span>
                                <p className='text-gray-300 font-medium font-roboto'>Consequat pellentesque egestas</p>
                                <small className='text-gray-500'>Aug 21 - 6:03 PM</small>
                            </span>
                            <img src={svgicon} alt='' />
                           </div>
                        </li>
                        <li className='py-4 px-9 hover:bg-[#26262F]'>
                           <div className='flex justify-between items-center'>
                            <span>
                                <p className='text-gray-300 font-medium font-roboto'>Behind the scene of topdesigners</p>
                                <small className='text-gray-500'>Aug 21 - 6:03 PM</small>
                            </span>
                            <img src={svgicon} alt='' />
                           </div>
                        </li>
                        <li className='py-4 px-9 hover:bg-[#26262F]'>
                           <div className='flex justify-between items-center'>
                            <span>
                                <p className='text-gray-300 font-medium font-roboto'>Tempor pretium vitae a malesuada turpis </p>
                                <small className='text-gray-500'>Aug 21 - 6:03 PM</small>
                            </span>
                            <img src={svgicon} alt='' />
                           </div>
                        </li>
                        <li className='py-4 px-9 hover:bg-[#26262F]'>
                           <div className='flex justify-between items-center'>
                            <span>
                                <p className='text-gray-300 font-medium font-roboto'>Venenatis habitant aliquam luctus aliquet</p>
                                <small className='text-gray-500'>Aug 21 - 6:03 PM</small>
                            </span>
                            <img src={svgicon} alt='' />
                           </div>
                        </li>
                    </ul>
                </div>
  )
}

export default RecentArticles