import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {AllFoods, Cart, Checkout, Contact, Home, Login, Register,FoodDetails} from "../pages";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to='/home'/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="foods" element={<AllFoods/>}/>
            <Route path="foods/:id" element={<FoodDetails/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="checkout" element={<Checkout/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="contact" element={<Contact/>}/>
        </Routes>
    );
};

export default Routers;