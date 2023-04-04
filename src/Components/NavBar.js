import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function NavBar(props) {

    const isLogin = props.isLogin

    const toggleButton = document.getElementsByClassName('toggle-button')[0]
    const [navOpen, setNavOpen] = useState(true);


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
            setNavOpen(!navOpen)
        }
    }

    return (
        <>
            <nav class="navbar">
                <a href="#" class="toggle-button" onClick={() => toggleNav()}>
                    {navOpen ? 
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" stroke-width="3" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" stroke-width="3" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg>}
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