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
    })

    return (
        <>
            {/* <div class="pos-f-t">
                <div class="collapse" id="navbarToggleExternalContent">
                    <div class="bg-dark p-4">
                        <h5 class="text-white h4">Collapsed content</h5>
                        <span class="text-muted">Toggleable via the navbar brand.</span>
                    </div>
                </div>
                <nav class="navbar navbar-dark bg-dark">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div> */}

            <ul className="navBox">

                <button class="navbar-toggler">
                    <i class="bi bi-list" color="white"></i>
                </button>

                <Link to="/" class="navItems active"> Home </Link>
                <Link to="/menu" class="navItems"> Menu </Link>
                <Link to="/order" class="navItems"> Order </Link>
                <HashLink to="/#contact" class="navItems" smooth> Contact Us </HashLink>
                {
                    !isLogin ? <Link to="/account" class="navItems"> Account </Link> :
                        <Link to="/Profile" class="navItems"> Profile </Link>
                }
                <Link to="/cart" class="navItems right"> My Cart</Link>
            </ul>
        </>
    )
}