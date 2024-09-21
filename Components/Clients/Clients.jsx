import React from 'react'
import "./Clients.css"
import arrow from "../../public/img/svg/arrow.svg"
import specialColon from "../../public/img/svg/specialColons.svg"
import standingGirl from "../../public/img/png/girl standing.png"
import BG from "../../public/img/png/slider bg.png"
export default function Clients({ title, para, clientName, clientsPics }) {
    return (
        <>
            <div className="clients">
                <div className="container">
                    <img src={BG} alt="" className="clientsBG" />
                    <img src={standingGirl} alt="" className="standing-girl" />
                    <div className="content-container">
                        <h1 className="title">{title}</h1>
                        <img src={specialColon} alt="" className="colons" />
                        <p className="para">{para}</p>
                        <div className="clients-info">
                            <p className="client-name">{clientName}</p>
                            <div className="clients-slider">
                                <img src={arrow} alt="" className="left-arrow" />
                                <ul className="clientsPics">
                                    {clientsPics.map((element, index) => {
                                        return (<li className="image" key={index}><img src={element.image} alt="" /></li>)
                                    })}
                                </ul>
                                <img src={arrow} alt="" className="right-arrow" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
