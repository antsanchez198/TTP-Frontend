import React, { useEffect } from "react";
import { useState } from "react";
import MenuItems from "./MenuItems";
import styles from "../Pages/OrderPage.css"

export default function MenuCard({ item }) {
  let [inCart, setInCart] = useState();


  const postToCart = async () => {
    try {
      let f_id_fk = item.f_id
      let f_qty = 1
      const body = { f_id_fk, f_qty }
      const response = await fetch(`http://localhost:5000/shoppingCart/`, {
        method: "POST",
        headers: { token: localStorage.token },
        body: JSON.stringify(body),
      });
      const jsonData = await response.json();
      console.log(jsonData)
    } catch (err) {
      console.error(err);
    }
  }

  const addToCart = async e => {
    setInCart(!inCart);
    if (!inCart) {
      e.target.classList.replace(e.target.classList[4], "btn-success");
      postToCart()
    }
    else {
      e.target.classList.replace(e.target.classList[4], "btn-warning");
    }
  }


  return (
      <div id={item.f_id} class="card">
        <div class="container">
          <h4 className="cardItem">{item.f_name}</h4>
          <p className="cardItem">{item.f_desc}</p>
          <p className="inner cardItem bottom">{item.f_price}</p>
          <button
            className="bi bi-cart cardBtn btn btn-warning bottom"
            onClick={(e) => addToCart(e)}
          >
            {inCart ? " Added" : " To Cart"}
          </button>
      </div>
    </div>
  );
}
