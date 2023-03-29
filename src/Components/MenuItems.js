import React from "react"
import MenuCard from "./MenuCard"
import { useState, useEffect } from "react"
import styles from "../Pages/OrderPage.css"

export default function MenuItems({allFoods}) {

    return(
        <div class="grid-container grid-container--fill">
        {allFoods.map(index => {
            return(
                <MenuCard item = {index}/>
            )
            })}
        </div>
    );
}