import React from 'react'
import classes from "./Navbar.module.scss";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
    <nav className={classes.navbar}>
        <div className={classes.navbar__container}>
            <NavLink exact to="/" className={classes.navbar__logo}>
                C | T
            </NavLink>

            <ul className={classes.navbar__menu}>
                <li className={classes.navbar__item}>
            <NavLink exact to="/about" className={classes.navbar__navlinks}>
                About
            </NavLink>
            </li>
            <li className={classes.navbar__item}>
            <NavLink exact to="/interior" className={classes.navbar__navlinks}>
                Interior Designs
            </NavLink>
            </li>
            <li className={classes.navbar__item}>
            <NavLink exact to="/exterior" className={classes.navbar__navlinks}>
                Exterior
            </NavLink>
            </li>
            <li className={classes.navbar__item}>
            <NavLink exact to="/contact" className={classes.navbar__navlinks}>
                Contact Us
            </NavLink>
            </li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar