import React from "react"
import { useState } from "react"
import styles from "../Pages/OrderPage.css"

export default function SideMenu(props) {

    const allFoods = props.allFoods
    const setType = props.setType
    const [categories, setCategories] = useState([])

    allFoods.map(index => {
        if (!categories.includes(index.f_category)) {
            categories.push(index.f_category)
        }
    }
    )

    return (
        <div className="sideMenu">
            <div class="dropdown">
                {props.foodType == "" ? <button class="dropbtn"> All Foods
                <i class="bi bi-chevron-down"></i>
                </button>
                    :
                    <button class="dropbtn"> {props.foodType}
                        <i class="bi bi-chevron-down"></i>
                    </button>}
                <div class="dropdown-content">
                    <a onClick={() => setType("")}>All Foods</a>
                    {categories.map(index => {
                        return (
                            <a onClick={() => setType(index)}>{index}</a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
