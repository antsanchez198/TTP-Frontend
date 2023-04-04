import React, { useEffect } from "react"
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function NavBar(props) {

    const isLogin = props.isLogin

    const toggleButton = document.getElementsByClassName('toggle-button')[0]


    useEffect(() => {
        var navItems = document.getElementsByClassName("navItems");
        for (var i = 0; i < navItems.length; i++) {
            navItems[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }
    })

    const toggleNav = () => {
        if (window.innerWidth < 735) {
            const navbarLinks = document.getElementsByClassName('navbar-links')[0]
            navbarLinks.classList.toggle('column')
        }
    }

    return (
        <>
            <nav class="navbar">
                <a href="#" class="toggle-button" onClick={() => toggleNav()}>
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </a>
                <div class="navbar-links">
                    {/* <ul className="navBox"> */}
                    <Link to="/" class="navItems active" onClick={() => toggleNav()}> Home </Link>
                    <Link to="/menu" class="navItems" onClick={() => toggleNav()}> Menu </Link>
                    <Link to="/order" class="navItems" onClick={() => toggleNav()}> Order </Link>
                    <HashLink to="/#contact" class="navItems" smooth onClick={() => toggleNav()}> Contact Us </HashLink>
                    {
                        !isLogin ? <Link to="/account" class="navItems" onClick={() => toggleNav()}> Account </Link> :
                            <Link to="/Profile" class="navItems" onClick={() => toggleNav()}> Profile </Link>
                    }
                    <Link to="/cart" class="navItems right" onClick={() => toggleNav()}> My Cart</Link>
                    {/* </ul> */}
                </div>
            </nav>


        </>
    )
}