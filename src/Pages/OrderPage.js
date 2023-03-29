
import React from "react";
import MenuItems from "../Components/MenuItems";
import SideMenu from "../Components/SideMenu";
import { useState, useEffect } from "react";
import styles from "./OrderPage.css";

export default function OrderPage() {

  const [type, setType] = useState("")
  const [foodItems, setFoodItems] = useState([]);

  const fetchFoodData = async () => {
      try {
          const response = await fetch(`http://localhost:5000/Food/${type}`);
          const jsonData = await response.json();
          setFoodItems(jsonData);
          console.log(foodItems)
      } catch (err) {
          console.error(err);
      }
  }

  useEffect(()=>{
      fetchFoodData()
  },[type])

  console.log(type)


  return (
    <div className="order-page container">
      <SideMenu  allFoods = {foodItems} setType = {setType} foodType = {type}/>
      <MenuItems allFoods = {foodItems} />
    </div>
  );
}
