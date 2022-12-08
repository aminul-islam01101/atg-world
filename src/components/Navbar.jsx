/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from '../assets/images/logo.png';

const Navbar = () => (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="" />
                </a>

                <form className="d-flex" role="search">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                </form>
                <div className="nav-item dropdown">
                    <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Dropdown
                    </a>
                    <ul className="dropdown-menu">
                        <li>
                            <a className="dropdown-item" href="#">
                                Action
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Another action
                            </a>
                        </li>

                        <li>
                            <a className="dropdown-item" href="#">
                                Something else here
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
);

export default Navbar;
