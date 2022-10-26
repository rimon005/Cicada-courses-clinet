import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-primary justify-around">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Cicada Courses</a>
            </div>

            <div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                {/* <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button> */}
                {/* <div className="form-control mx-5">
                    <input type="text" placeholder="Search" className=" input input-bordered rounded-none" />
                </div> */}
                    {/* {
                          user?.uid ?
                          <>
                              <div className="dropdown dropdown-end navbar-end">
                                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                      <div className="w-10 rounded-full">
                                          <img src="https://placeimg.com/80/80/people" />
                                      </div>
                                  </label>
                                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                      <li>
                                          <a className="justify-between">
                                              Profile
                                              <span className="badge">New</span>
                                          </a>
                                      </li>
                                      <li><a>Settings</a></li>
                                      <li><a>Logout</a></li>
                                  </ul>
                              </div>
                          </>
                          :
      
                          <>
                              <Link to='/login'>Login</Link>
                              <Link to='/register'>Register</Link>
                          </>
      
                    } */}

            </div>
        </div>
    );
};

export default Navbar;