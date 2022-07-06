import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import LinesEllipsis from 'react-lines-ellipsis'
import user from '../../assets/img/2/1.png'
import img from '../../assets/img/3/1.png'
import ReactPaginate from 'react-paginate'
import '../css/Pagination.css'

function BlogCard (props) {

  const { data } = props;

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage,data]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
<>
{currentItems.map(item => (
    <Link to='/singlenews'>
    <div key={item.id} className='bg-[#232738] p-3 rounded-[30px]'>
        <div className=' relative text-white'>
        <img className=' w-full lg:max-h-[300px] md:max-h-[200px] sm:max-h-[300px]' src={img} alt="" />
        <span className='px-4 py-2 rounded-3xl bg-[#232738] absolute top-5 left-4'>Design</span>
        </div>
        <div>
          <div className='px-4 lg:mt-9 md:mt-6 xm:mt-9 '>
          <LinesEllipsis
            text={item.title}
            maxLine='1'
            ellipsis='...'
            trimRight
            basedOn='letters'
            className='text-white font-bold overflow-ellipsis 2xl:text-[22px] xl:text-[20px] md:text-[18px] xm:text-[16px]'
          />
          </div>
          <div className=' mt-3 px-5 pb-2'>
          <LinesEllipsis
            text={item.body}
            maxLine='2'
            ellipsis='...'
            trimRight
            basedOn='letters'
            className='lg:text-[16px] md:text-[14px] overflow-ellipsis text-gray-400'
          />
          </div>
          <div className='flex justify-between items-center 2xl:px-5 xl:px-4 md:px-4 sm:mt-5 xm:mt-2 mb-6'>
            <div className='flex items-center'>
              <img className='w-[50px] h-[50px] rounded-full' src={user} alt="" />
              <div className='xl:ml-5 md:ml-3 xm:ml-5 xl:text-[16px] lg:text-[14px] text-gray-400'>
                <b>Alfonso Likens</b>
                <p>writer</p>
              </div>
            </div>
            <small className='text-gray-600 xl:text-[14px] lg:text-[11px]'>Aug 21 - 6:03 PM</small>
          </div>
        </div>
    </div>
    </Link>
   ))}

  <div className='mt-[130px]'>
  <ReactPaginate
        breakLabel=".."
        // nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={0}
        pageCount={pageCount}
        // previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName='pagination'
        pageLinkClassName='page-num'
        previousLinkClassName='page-prev'
        nextLinkClassName='page-next'
        activeLinkClassName='page-active'
      />
  </div>
</>
  )
}

export default BlogCard