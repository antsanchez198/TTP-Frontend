import React, { useEffect } from "react"
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function NavBar(props) {

    const isLogin = props.isLogin

    useEffect(() => {
        var navItems = document.getElementsByClassName("navItems");
        for (var i = 0; i < navItems.length; i++) {
            navItems[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }

        const toggleButton = document.getElementsByClassName('toggle-button')[0]
        const navbarLinks = document.getElementsByClassName('navbar-links')[0]

        toggleButton.addEventListener('click', () => {
            navbarLinks.classList.toggle('column')
        })

    })



    return (
        <>
            <nav class="navbar">
                <a href="#" class="toggle-button">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </a>
                <div class="navbar-links">
                    {/* <ul className="navBox"> */}
                        <Link to="/" class="navItems active"> Home </Link>
                        <Link to="/menu" class="navItems"> Menu </Link>
                        <Link to="/order" class="navItems"> Order </Link>
                        <HashLink to="/#contact" class="navItems" smooth> Contact Us </HashLink>
                        {
                            !isLogin ? <Link to="/account" class="navItems"> Account </Link> :
                                <Link to="/Profile" class="navItems"> Profile </Link>
                        }
                        <Link to="/cart" class="navItems right"> My Cart</Link>
                    {/* </ul> */}
                </div>
            </nav>


        </>
    )
}