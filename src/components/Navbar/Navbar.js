import React from 'react';
import profile from './assets/images/profile.png';
import Title from '../Title';
import '../../flex.css';
import './index.css';

const Navbar = () => (
  <nav className="navbar flex ai-c jc-sb">
    <div className="inline-flex">
      <Title />
      <a href="#Bookstore" className="nav__link books">BOOKS</a>
      <a href="#Bookstore" className="nav__link categories">CATEGORIES</a>
    </div>
    <a href="#Bookstore" className="oval inline-flex jc-c ai-c">
      <img src={profile} alt="profile" className="mask" />
    </a>
  </nav>
);

export default Navbar;
