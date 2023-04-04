
import React from "react";
import { useState, useEffect } from "react";
import Home from "./Home.css";
import fajitas from "../images/fajitas.JPG";
import burrito from "../images/burrito.JPG";
import chile from "../images/chile.JPG";
import interior2 from "../images/interior2.jpg";
import tacos from "../images/tacos.jpg";
import tacos2 from "../images/tacos2.jpg";
import tinga from "../images/tinga.JPG";
import exterior from "../images/exterior.JPG";
import mariachis_playing from "../images/mariachis_playing.jpg";
import instagram from "../images/instagram.png";
import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';

export default function HomePage() {

  useEffect(() => {
    const slideElements = document.querySelectorAll('.hidden');
    console.log(slideElements)

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.target.className.includes("rectangle") || entry.target.className.includes("box")) {
          entry.target.classList.toggle("show", entry.isIntersecting);
          if (entry.isIntersecting) { observer.unobserve(entry.target); }
        }
        else {
          entry.target.classList.toggle("slide-show", entry.isIntersecting);
          if (entry.isIntersecting) { observer.unobserve(entry.target); }
        }
      })
    })

    slideElements.forEach(element => {
      observer.observe(element)
    })
  });

  return (
    <div>
      <body>
        <section className="title-section myborder center">
          <div className="left">
            <h1><strong>Los Mariachis Mexican Restaurant</strong></h1>
            <div className="button-container flex">
              <Link to="/order"><button className="btn-lg transition">Order Online</button></Link>
              <Link to="/menu"><button className="btn-lg transition">See the Menu</button></Link>
            </div>
          </div>
          <img class="d-block" src={exterior} alt="Restarant Picture" />
        </section>

        <section className="preview myborder">
          <div className="blur flex center column">
            <h3>Serving Authentic Mexican Food <span>for over <strong>20 Years</strong></span></h3>
            {/* <div className="container"> */}
            <div className="para-container flex">
              <p class="hidden">Lorem ipsum dolor sit amet. Et labore sunt 33 neque voluptate est error internos. Ut rerum tenetur ea repellendus repudiandae id consequatur omnis et atque ullam. Sit omnis accusantium et reprehenderit adipisci ad internos nisi? Ut reprehenderit doloremque eum provident necessitatibus ut delectus possimus qui porro libero eum mollitia error ut laboriosam saepe ea minima dolores?</p>
              <p class="hidden">Lorem ipsum dolor sit amet. Et labore sunt 33 neque voluptate est error internos. Ut rerum tenetur ea repellendus repudiandae id consequatur omnis et atque ullam. Sit omnis accusantium et reprehenderit adipisci ad internos nisi? Ut reprehenderit doloremque eum provident necessitatibus ut delectus possimus qui porro libero eum mollitia error ut laboriosam saepe ea minima dolores?</p>
            </div>
            {/* </div> */}
          </div>
        </section>

        <section className="bio-section myborder">
          <div className="bio-section-container reverse">
            <div className="bio-paragraph">
              <h5 className="paragraph"><strong>Live Mariachis</strong></h5>
              <p>every Friday from 8pm to 11pm</p>
              <HashLink to="/#contact"
              ><button className="btn-lg transition">
                  Visit Us
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" stroke-width="0" fill="currentColor"></path>
                  </svg>
                </button></HashLink>
            </div>
            <img src={mariachis_playing} class="slide hidden from-right"></img>
          </div>
          <div className="bio-section-container">
            <img src={fajitas} alt="fajitas" class="slide hidden from-left"></img>
            <div className="bio-paragraph">
              <h5 className="paragraph"><strong>Comforting Food</strong></h5>
              <p>with recipes from Puebla, Mexico</p>
              <Link to="/menu"><button className="btn-lg transition">See Menu
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tools-kitchen-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12zm0 12v6h-1v-3m-10 -14v17m-3 -17v3a3 3 0 1 0 6 0v-3"></path>
                </svg></button></Link>
            </div>
          </div>
        </section>

        <section className="images-section myborder">
          <h2><strong>Gallery</strong></h2>
          <div className="image-container">
            <img src={tacos} class="rectangle hidden"></img>
            <img src={interior2} class="rectangle hidden" ></img>
            <img src={tinga} class="rectangle hidden"></img>
            <img src={burrito} class="rectangle hidden"></img>
            <img src={chile} class="box hidden"></img>
            <img src={tacos2} class="rectangle hidden"></img>
          </div>
        </section>
      </body>

      <footer id="contact" className="myborder">
        <section className="contact-section" >
          <div className="blur flex center">
            <div className="contact-container">
              <div className="cc-inner-left">
                <h1>Contact Us</h1>
                <div className="cc-inner-info">
                  <div>
                    <h3>Hours</h3>
                    <p>Monday: 11am - 10pm</p>
                    <p>Tuesday: 11am - 10pm</p>
                    <p>Wednesday: 11am - 10pm</p>
                    <p>Thursday: 11am - 10pm</p>
                    <p>Friday: 11am - 10pm</p>
                    <p>Saturday: 11am - 10pm</p>
                    <p>Sunday: 11am - 10pm</p>
                  </div>
                  <div className="line"></div>
                  <h3>Address</h3>
                  <p>805 Coney Island Ave</p>
                  <p>Brooklyn, NY 11206</p>
                  <div className="line"></div>
                  <h3>Phone</h3>
                  <p>718-826-3388</p>
                  <div className="line"></div>
                  <h3>Social Media</h3>
                  <a href="https://instagram.com/losmariachisrestaurant_?igshid=YmMyMTA2M2Y=" title="@losmariachisrestaurant_" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#AD4132" class="bi bi-instagram" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="cc-inner-right">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12110.578729019113!2d-73.9681236!3d40.6377173!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b33b370af79%3A0x8081cf4a6211dcb!2sLos%20Mariachis!5e0!3m2!1sen!2sus!4v1678050870583!5m2!1sen!2sus" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allow="autoplay"></iframe>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}
