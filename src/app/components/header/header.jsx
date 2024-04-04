"use client";

import React, { useState } from 'react';
import styles from './header.module.css';
import Image from 'next/image'; 
import logo from '$public/images/logo.svg';
import Button from '../button/button';

const altText = 'easybank logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Only assigning them here because they arnt real routes, but just placeholders for the menu
  const routes = ['home', 'around', 'contact', 'blog', 'careers'];

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image src={logo} alt={altText} />
      </div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        <ul className={styles.navigation}>
            {routes.map((route) => (
                <li key={route}><a href="#">{ route }</a></li>
            ))}
        </ul>
      </nav>
      <button onClick={toggleMenu} className={`${styles['menu-btn-container']} not_tablet not_desktop`}>
        <div className={`${styles['menu-btn']}`}></div>
      </button>
      <Button additionalClasses={['not_mobile']} />
    </header>
  );
};

export default Header;