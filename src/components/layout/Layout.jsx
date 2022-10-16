import React from 'react';
import Header from "../header/Header";
import Routers from "../../router/Routers";
import Footer from "../footer/Footer";

const Layout = () => {
    return (
        <div>
            <Header/>
            <div>
                <Routers/>
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;