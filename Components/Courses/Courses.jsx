import React from 'react'
import "./Courses.css"
import arrow from "../../public/img/svg/another shaped arrow.svg"
import Home from "../TopHero/HeroT"
export default function Courses({ heading, para, cards }) {
    return (<>
        <div className="courses">
            <div className="container">
                <div className="heading">
                    <div className="text">
                        <h1>{heading}</h1>
                        <p>{para}</p>
                    </div>
                    <div className="arrows">
                        <div className="c-left-arrow"><img src={arrow} alt="" /></div>
                        <div className="c-right-arrow"><img src={arrow} alt="" /></div>
                    </div>
                </div>
                <div className="cards">
                    {
                        cards.map((element, index) => {
                            return (<>
                                <div className="card" key={index}>
                                    <div className="top">
                                        <div className="title">
                                            <div className="logo"><img src={element.logo} alt="" /></div>
                                            <p>{element.title}</p>
                                        </div>
                                        <div className="course-type">{element.courseType}</div>
                                    </div>
                                    <div className="content">
                                        <h3>{element.headingContent}</h3>
                                        <p>{element.para}</p>
                                        <hr />
                                    </div>
                                    <div className="bottom">
                                        <button className="btn">{element.btn}</button>
                                        <div className="course-pic">
                                            <img src={element.CoursePic} alt="" />
                                        </div>
                                    </div>
                                </div >
                            </>)
                        })}
                </div>
                <div className="explore-courses"><p >Explore Courses</p></div>
            </div>
        </div >
    </>
    )
}
