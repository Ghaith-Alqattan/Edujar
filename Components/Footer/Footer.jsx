import React from 'react'
import './Footer.css'
export default function Footer({
    logo,
    para,
    linkTitle,
    quickLinks,
    legalTitle,
    legalLinks,
    contactTitle,
}) {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="first-section">
                        <img src={logo} alt="" className="logo" />
                        <p className="para">{para}</p>
                        <p className="rights">
                            {' '}
                            © 2024 <span className="rights-span">edujar</span> - All Rights
                            Reserved
                        </p>
                    </div>
                    <div className="second-section">
                        <h3>{linkTitle}</h3>
                        <ul className="quick-links">
                            {quickLinks.map((element, index) => {
                                return (
                                    <li key={index}>
                                        <a href="" className="link">
                                            {element.link}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="third-section">
                        <h3>{legalTitle}</h3>
                        <ul className="quick-links">
                            {legalLinks.map((element, index) => {
                                return (
                                    <li key={index}>
                                        <a href="" className="link">
                                            {element.legalLink}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="fourth-section">
                        <h3>{contactTitle}</h3>
                        <form>
                            <input type="email" placeholder="enter email" className='email' />
                            <input type="submit" value="Subscribe" className='sub' />
                        </form>
                    </div>
                </div>
            </footer>
        </>
    )
}
