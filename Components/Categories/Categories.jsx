import React from 'react'
import Arrow from "../../public/img/svg/another shaped arrow.svg"
import "./Categories.css"
export default function Categories({ categories }) {
    return (
        <>
            <div className="categories">
                <div className="container">
                    <div className="special-heading">
                        <h1>Explore Top Categories</h1>
                        <p>Click on categories and explore all courses</p>
                    </div>
                </div>
                <div className="categories-slider">
                    <div className="cat-slider-container">
                        <img className='left-arrow' src={Arrow} alt="" />
                        <ul className="cat-items" >
                            {categories.map((element, index) => {
                                return (
                                    <li key={index}>
                                        <div className="cat-con">
                                            <img src={element.logo} alt="" className="logo" />
                                        </div>
                                        <p>{element.para}</p>
                                    </li>
                                )
                            })}
                        </ul>
                        <img src={Arrow} alt="" className="right-arrow" />
                    </div>
                </div>
            </div>
        </>
    )
}
