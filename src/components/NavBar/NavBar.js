import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/cv">Mon Cv</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/counter">Compteur</Link>
      <Link to="/list">List</Link>
      <Link to="/toogle">Toogle</Link>
      <Link to="/exampleObject">Objet</Link>
    </nav>
  );
};

export default NavBar;
