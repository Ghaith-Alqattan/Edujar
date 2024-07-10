import React from 'react'
import "./Questions.css"
export default function Questions({ smallPara, title, sendBtn, smallTitle, para, quesList }) {
    function showAnswer(answer, index) {
        const answer1 = document.getElementById(answer)
        for (let i = 0; i <= index; i++) {
            if (index == i) {
                if (answer1.style.display == "none") {
                    answer1.style.display = "block"
                } else {
                    answer1.style.display = "none"
                }
            }
        }
    }
    return (
        <>
            <div className="questions">
                <div className="container">
                    <div className="left">
                        <p className="small-para">{smallPara}</p>
                        <h1 className="title">{title}</h1>
                        <button className="send">{sendBtn}</button>
                    </div>
                    <div className="right">
                        <div className="title-section">
                            <h3 className="small-title">{smallTitle}</h3>
                            <p className="para">{para}</p>
                            <hr />
                        </div>
                        <ul className="ques-ans">
                            {
                                quesList.map((element, index) => {
                                    return (
                                        <>
                                            <li key={index}>
                                                <div className="ques-field">
                                                    <p className="ques">{element.ques}</p>
                                                    <img className={`plus${index}`} src={element.plus} onClick={() => showAnswer(`answer${index}`, index)} alt="" />
                                                </div>
                                                <div className="answer" id={`answer${index}`} key={index} style={{ display: "none" }} >{element.ans}</div>
                                                <hr className='ul-hr' />
                                            </li>
                                        </>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
