import React from 'react'
import '../TopHero/HeroT.css'

export default function Hero({
  chairMan,
  title,
  specialWord,
  paragraph,
  searchBtn,
  laptopGirl,
}) {
  return (
    <>
      <div className="hero" id="Home">
        <div className="container">
          <div>
            <img className="man-on-chair" src={chairMan} alt="" />
          </div>
          <div className="middle-section">
            <h1 className="hero-title">
              {title}
              <span className="heroSpan">{specialWord}</span>
            </h1>
            <p className="para">{paragraph}</p>
            <form className="hero-form">
              <input
                className="heroSearch"
                type="search"
                placeholder="what do you want to learn?"
              />
              <button className="heroSearchButton">{searchBtn}</button>
            </form>
          </div>
          <div>
            <img className="laptopGirl" src={laptopGirl} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
