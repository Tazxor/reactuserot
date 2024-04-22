import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>

        <li>
          <Link to="vue/login">Connexion</Link>
        </li>
        <li>
          <Link to="vue/signup">Inscription</Link>
        </li>
        <li>
          <Link to="vue/updateuser">Mise à jour utilisateur</Link>
        </li>
        <li>
          <Link to="vue/showuser">Afficher utilisateur</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
