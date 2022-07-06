import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate'


export default function Posts(props) {

  const { data } = props;

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

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
    <div>
      {
        currentItems.map(elem => {
          return(
            <li key={elem.id} className='px-4 py-4 border border-gray-800'>
             {elem.title}
            </li>
          )
        })
      }
    </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );


}

//   return (
//     <ul className='text-gray-500 mb-4'>
//       {posts.map(post => (
//         <li key={post.id} className='px-4 py-4 border border-gray-800'>
//           {post.title}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default Posts;