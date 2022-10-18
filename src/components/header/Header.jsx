import React, {useRef} from 'react';
import {Container} from "reactstrap";
import {Link, NavLink} from "react-router-dom";

import logo from "../../assets/images/res-logo.png"
import "./header.css"

const nav__link = [
    {path: 'home', display: "Home"},
    {path: 'cart', display: "Cart"},
    {path: 'foods', display: "Foods"},
    {path: 'contact', display: "Contact"},
]

const Header = () => {
    const menuRef = useRef(null)
    const toggleMenu = () => menuRef.current.classList.toggle('show__menu')
    return (
        <header className="header">
            <Container>
                <div className="nav__wrapper d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <img src={logo} alt="Logo..."/>
                        <h5>Tasty Treat</h5>
                    </div>
                    {/*    Meu*/}
                    <div
                        className="navigation"
                        ref={menuRef}
                        onClick={toggleMenu}
                    >
                        <div className="menu d-flex align-items-center gap-5">
                            {nav__link.map(item => (
                                <NavLink
                                    to={item.path}
                                    key={item.path}
                                    className={navClass => navClass.isActive ? "active__menu" : ""}
                                >
                                    {item.display}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    {/*    nav right icons*/}
                    <div className="nav__right d-flex align-items-center gap-4">
                        <span className="cart__icon">
                            <i className="ri-shopping-basket-line"></i>
                            <span className="cart__badge">2</span>
                        </span>

                        <span className="user">
                            <Link to="/login"><i className="ri-user-line"></i></Link>
                        </span>

                        <span className="mobile__menu" onClick={toggleMenu}>
                            <i className="ri-menu-line"></i>
                        </span>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;