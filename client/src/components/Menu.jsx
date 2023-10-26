import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = ({cat}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className="men lg:w-1/3 ">
      <h1 className="font-bold font-[inter]">Other posts you may like</h1>
      <div className="sm:flex sm:justify-between sm:flex-wrap">     
      {posts.map((post) => (
        <Link to={`/post/${post.id}`}>
        <div className="pos py-4 sm:w-64" key={post.id}>
          <img className="w-full pb-2" src={`../upload/${post?.img}`} alt="" />
          <h2 className="text-xl capitalize font-bold">{post.title}</h2>
          <button>Read More</button>
        </div>
        </Link>
      ))}
      </div>
    </div>
  );
};

export default Menu;
