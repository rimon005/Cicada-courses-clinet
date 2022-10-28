import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSide from '../Pages/LeftSide/LeftSide';
import './main.css'
import Navbar from '../Pages/Navbar/Navbar';
import Footer from '../Pages/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div>
                    <LeftSide></LeftSide>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;