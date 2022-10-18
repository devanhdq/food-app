import React from 'react';
import {Container} from "reactstrap";
import {Link, NavLink} from "react-router-dom";

import logo from "../../assets/images/res-logo.png"

const nav__link = [
    {path: 'home', display: "Home"},
    {path: 'cart', display: "Cart"},
    {path: 'foods', display: "Foods"},
    {path: 'contact', display: "Contact"},
]

const Header = () => {
    return (
        <header className="header">
            <Container>
                <div className="nav__wrapper d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <img src={logo} alt="Logo..."/>
                        <h5>Tasty Treat</h5>
                    </div>
                    {/*    Meu*/}
                    <div className="navigation">
                        <div className="menu d-flex align-items-center gap-5">
                            {nav__link.map(item => (
                                <NavLink
                                    to={item.path}
                                    key={item.path}
                                >
                                    {item.display}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    {/*    nav right icons*/}
                    <div className="nav__right d-flex align-items-center gap-3">
                        <span className="cart__icon">
                            <i className="ri-shopping-basket-line"></i>
                            <span className="cart__badge">2</span>
                        </span>

                        <span className="user">
                            <Link to="/login"><i className="ri-user-line"></i></Link>
                        </span>

                        <span className="mobile__menu">
                            <i className="ri-menu-line"></i>
                        </span>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;