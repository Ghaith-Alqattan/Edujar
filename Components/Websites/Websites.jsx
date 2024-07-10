import React from 'react'
import "./Websites.css"
import arrow from "../../public/img/svg/another shaped arrow.svg"
export default function Websites({ slider }) {
    return (
        <>
            <div className="Websites">
                <div className="container">
                    <img src={arrow} alt="" className="left-arrow" />
                    <ul className="web-slider">
                        {
                            slider.map((element, index) => {
                                return (
                                    <li key={index}><img src={element.logo} alt="" /></li>
                                )
                            })
                        }
                    </ul>
                    <img src={arrow} alt="" className="right-arrow" />
                </div>
            </div>
        </>
    )
}
