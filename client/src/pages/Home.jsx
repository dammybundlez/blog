import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Banner from "../components/Banner";
import Pagination from "../components/Pagination";



const Home = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  
  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }


  return (
    <div className="home mt-24  w-auto">      
      <h2 className="text-2xl px-6 pb-4 ">Blogs</h2>    
      <div className="lg:flex px-6 lg:flex-wrap md:flex md:justify-between sm:flex sm:flex-wrap sm:justify-between sm:gap-2 lg:justify-between gap-5 lg:gap-7 lg:w-full md:w-full">
        {currentPosts.map((post) => (
        <div className="mb-5 w-full lg:w-96 sm:w-64 md:w-52 lg:mb-8 lg:block  lg:rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700" key={post.id}>
          <Link className="link-tag p-0" to={`/post/${post.id}`}>
            <img className="rounded-t-lg h-44 object-cover w-full" src={`../upload/${post.img}`} alt="" />          
            <div className="py-6 px-3 content font-[inter] font-thin">
              <h2
                className="mb-1 text-xl truncate font-[inter] capitalize leading-tight text-neutral-800 dark:text-neutral-50">
                {post.title}
              </h2>
              <p className="mb-2 text-base truncate text-neutral-600 dark:text-neutral-200">
                {getText(post.desc)}
              </p>          
                <button
                  type="button"
                  className="inline-block rounded bg-[#324a4a] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                  Read More
                </button>           
            </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center flex-row">
          <Pagination className="flex justify-between flex-row"
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
          />
        </div>
        <Banner/>
    </div>
  );
};

export default Home;
