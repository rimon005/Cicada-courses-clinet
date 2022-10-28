import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext/AuthProvider';
import './Navber.css'

const Navbar = () => {
    const [theme , setTheme] = useState("cupcake");
    useEffect(()=>{
    },[theme]);

    const toggleBtn = () =>{
        if(theme === "cupcake"){
            setTheme("luxury")
        }
        else{
            setTheme("cupcake")
        }
    }
    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
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
                <div className="form-control">
                    <label onClick={toggleBtn} className="label cursor-pointer">
                        <input type="checkbox" className="toggle" />
                    </label>
                </div>
                {
                    user?.uid ?
                        <>
                            <div className="dropdown dropdown-end navbar-end tooltip tooltip-bottom" data-tip={user.displayName} >
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        {
                                            user?.photoURL ?
                                                <img src={user?.photoURL} alt="" />
                                                :
                                                <img src="https://placeimg.com/80/80/people" />
                                        }
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
                                    <button className="btn btn-active" onClick={handleLogOut}> LogOut</button>
                                </ul>
                            </div>
                        </>
                        :

                        <>
                            <Link className='mx-2' to='/login'>Login</Link>
                            <Link to='/register'>Register</Link>
                        </>

                }

            </div>
        </div>
    );
};

export default Navbar;