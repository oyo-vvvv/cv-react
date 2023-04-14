import React from 'react'
import "./Header.css"

const Header = (props) => {
  return (
    <div id="first-block">
    <div className="haut-gauche">
      <h1>{props.name}</h1>
      <p className="header-text">
        <span className="color-letter">C</span>ommunication /
        <span className="color-letter">M</span>arkenting /
        <span className="color-letter">D</span>igital
      </p>
    </div>
    <div className="haut-droit">
      <div className="lien">
        <a href="#">Télécharger mon CV</a>
        <a href="#">Partagez</a>
      </div>
    </div>
  </div>
  )
}

export default Header