import React from 'react'
import "../BottomHero/HeroB.css"

export default function HeroB({ Items }) {
    return (
        <>
            <div className="HeroB">
                <ul className="items" >
                    {Items.map((element, index) => {
                        if (index == 2) {
                            return (<li key={index}>
                                <div className="top">
                                    <img className='special-star' src={element.logo} />
                                    <h3>{element.title}</h3></div>
                                <div className="bottom">
                                    <p className='para'>{element.para}</p>
                                    <p className="rating">{element.rate} </p>
                                    <img className='star-2' src={element.star} alt="" />
                                </div>
                            </li>)
                        } else {
                            return (<li key={index}>
                                <div className="top">
                                    <h3>{element.title}</h3></div>
                                <div className="bottom">
                                    <p className='para'>{element.para}</p>
                                    <p className="rating">{element.rate} </p>
                                </div>
                            </li>)
                        }
                    })}
                </ul>
            </div>
        </>
    )
}
