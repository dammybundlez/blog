import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  const menuref = useRef()
  let [isOpen , setIsOpen] = useState(false)


  useEffect(() => {
    const handler = (e) => {
      if(!menuref.current.contains(e.target)){
        setIsOpen(false)
      }
    }
    document.addEventListener("scroll", handler)

    return() => {
      document.removeEventListener("scroll", handler)

    }
  })
  return (
    <div className="">
      <div className="bg-[#9cd8d8] top-0 px-6 py-5 flex items-center justify-between fixed z-10 right-0 w-full" ref={menuref}>       
        <div className="flex gap-5 items-center w-full">
          <div onClick={() => setIsOpen(!isOpen)} className="lg:hidden sm:flex md:flex flex">
            {
              isOpen ?
              <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
            }
          </div>
          <div>
            <Link to="/">
            <h3 className="font-bold text-2xl">DamBlog</h3>
            </Link>
          </div>
        </div>
        <div className={`px-6 py-10 md:flex md:flex-col absolute  bg-white w-full duration-100 ease-in left-0 transition-all z-[-1] top-20 ${isOpen ? '' : 'top-[-490px]'}`}>
          <div className="lg:hidden gap-2 font-bold flex flex-col lg:justify-start lg:w-full font-[inter]">
            <Link className="link" to="/?cat=art">
              <h6>ART</h6>
            </Link>
            <Link className="link" to="/?cat=science">
              <h6>SCIENCE</h6>
            </Link>
            <Link className="link" to="/?cat=technology">
              <h6>TECHNOLOGY</h6>
            </Link>
            <Link className="link" to="/?cat=cinema">
              <h6>CINEMA</h6>
            </Link>
            <Link className="link" to="/?cat=design">
              <h6>DESIGN</h6>
            </Link>
            <Link className="link" to="/?cat=food">
              <h6>FOOD</h6>
            </Link>      
          </div>
          <div className=" lg:hidden md:flex md:gap-10 md:justify-normal py-5 gap-4 flex justify-between items-center lg:w-full lg:justify-end">
            <span>{currentUser?.username}</span>
              {currentUser ? (
                <><span onClick={logout} className="bg-[red] py-2 px-4" style={{ cursor: 'pointer',  }}>logout</span>
                <span className="write">
                {/* <Link className="link bg-[#fff] text-[#000] py-2 px-4 font-bold" to="/write">
                  Post
                </Link> */}
              </span></>
                  ) : (
                    <Link className=" px-4 py-2 bg-teal-300 rounded-md text-[black]" to="/login">
                      Login
                    </Link>
                  )}     
          </div>
      </div>
        <div className="links hidden sm:hidden md:gap-4  md:hidden md:w-full md:justify-center lg:flex lg:gap-6 lg:justify-center lg:w-full font-[inter]">
          <Link className="link" to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>FOOD</h6>
          </Link>      
        </div>
        <div className="flex sm:flex md:flex md:w-full md:justify-end md:gap-3 lg:w-full lg:justify-end">
          <span className="hidden lg:block mr-2">{currentUser?.username}</span>
            {currentUser ? (
              <>
                <span className="hidden lg:block  hover:underline" onClick={logout} style={{ cursor: 'pointer' }}>logout</span><span className="write">
                  <Link className="link md:block sm:block bg-[#fff] text-[#000] py-2 px-4 font-bold" to="/write">
                    Post
                  </Link>
                </span>
              </>
                ) : (
                  <Link className=" px-4 py-2 bg-teal-300 rounded-md text-[black]" to="/login">
                    Login
                  </Link>
                )}     
        </div>
      </div>    
    </div>
  );
};

export default Navbar;
