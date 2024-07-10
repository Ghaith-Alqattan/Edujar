import React from 'react'
import '../NavBar/NavBar.css'
import { GiHamburgerMenu } from 'react-icons/gi'
export default function NavBar({ logo, NavLinks, btn }) {
  function showNavMenu() {
    const navMenu = document.querySelector('.nav-menu')
    const burgerIcon = document.querySelector('.burger-icon')
    const xIcon = document.querySelector('.X')
    navMenu.classList.toggle('menu-active')
    if (navMenu.classList.contains('menu-active')) {
      xIcon.style.display = 'block'
      burgerIcon.style.display = 'none'
    } else {
      xIcon.style.display = 'none'
      burgerIcon.style.display = 'block'
    }
  }
  return (
    <>
      <nav>
        <div className="container">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <ul className="links">
            {NavLinks.map((element, index) => {
              return (
                <li key={index}>
                  <a href="#">{element.link}</a>
                </li>
              )
            })}
          </ul>
          <button className="sign">{btn}</button>
          <div className="info-btn">
            <div className="burger-icon" onClick={showNavMenu}>
              <GiHamburgerMenu />
            </div>
            <div className="X" onClick={showNavMenu}>
              X
            </div>
          </div>
        </div>
      </nav>
      <div className="menu-container">
        <div className="nav-menu">
          <ul className="links">
            {NavLinks.map((element, index) => {
              return (
                <li key={index}>
                  <a href="#">{element.link}</a>
                </li>
              )
            })}
          </ul>
          <button className="sign">{btn}</button>
        </div>
      </div>
    </>
  )
}
