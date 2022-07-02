import React, {useState, useEffect} from 'react'
import BlogCard from './BlogCard'
import RecentArticles from './RecentArticles'
import BlogCategories from './BlogCategories'
import BlogConnect from './BlogConnect'
import Pagination from '../pagination/Pagination'
import axios from 'axios';
// import ReactPaginate from 'react-paginate';

function BlogsItem() {

  // const blogCardArray = [
  //   {
  //     id: 1,
  //     title: 'Behing the scene of top designers',
  //     dis: 'Quis nunc sagittis, a tellus dignissim consequat. Amet a amet, aliquam eget. Congue pellentesque urna purus ut nulla in purus.',
  //     img: require('../../assets/img/3/1.png'),
  //   },
  //   {
  //     id: 2,
  //     title: 'Behing the scene of top designers',
  //     dis: 'Quis nunc sagittis, a tellus dignissim consequat. Amet a amet, aliquam eget. Congue pellentesque urna purus ut nulla in purus.',
  //     img: require('../../assets/img/3/1.png'),
  //   },
  //   {
  //     id: 3,
  //     title: 'Behing the scene of top designers',
  //     dis: 'Quis nunc sagittis, a tellus dignissim consequat. Amet a amet, aliquam eget. Congue pellentesque urna purus ut nulla in purus.',
  //     img: require('../../assets/img/3/1.png'),
  //   },
  //   {
  //     id: 4,
  //     title: 'Behing the scene of top designers',
  //     dis: 'Quis nunc sagittis, a tellus dignissim consequat. Amet a amet, aliquam eget. Congue pellentesque urna purus ut nulla in purus.',
  //     img: require('../../assets/img/3/1.png'),
  //   },
  //   {
  //     id: 5,
  //     title: 'Behing the scene of top designers',
  //     dis: 'Quis nunc sagittis, a tellus dignissim consequat. Amet a amet, aliquam eget. Congue pellentesque urna purus ut nulla in purus.',
  //     img: require('../../assets/img/3/1.png'),
  //   },
  // ]

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // const [pageCount, setPageCount] = useState(0);
  const [postsPerPage] = useState(4);

  // setPosts([blogCardArray]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // useEffect(() => {
  //   // Fetch items from another resources.
  //   const endOffset = currentPage + postsPerPage;
  //   console.log(`Loading items from ${currentPage} to ${endOffset}`);
  //   setCurrentPage(posts.slice(currentPage, endOffset));
  //   setPageCount(Math.ceil(posts.length / postsPerPage));
  // }, [currentPage, postsPerPage]);

   // Invoke when user click to request another page.
  //  const handlePageClick = (event) => {
  //   const newOffset = (event.selected * postsPerPage) % posts.length;
  //   console.log(
  //     `User requested page number ${event.selected}, which is offset ${newOffset}`
  //   );
   
  // };



  return (
    <div className='container py-10'>
        <div className='grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 xm:grid-cols-1 gap-8'>
            <BlogCard posts={currentPosts} loading={loading}/>
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
            />
            {/* <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        postsPerPage={postsPerPage}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        totalPosts={posts.length}
              paginate={paginate}
      /> */}
            <div className=' lg:col-start-3 md:col-start-2 xm:col-start-1 md:row-start-1 xm:row-start-auto row-span-6'>
               <RecentArticles/>
               <BlogCategories/>
                <BlogConnect />
            </div>
        </div>
    </div>
  )
}

export default BlogsItem