import React from 'react'
import "./Footer.css"

const Footer = (props) => {
  return (
    <div className="conteneur">
          <a href="">Informations</a> - <a href="">Mentions Légales</a> -
          <a href="contact.php">Contact</a>
          <br />
          <p>
            © 2022 Conception et réalisation par {props.name}. Tous droits
            réservés.
          </p>
        </div>
  )
}

export default Footer