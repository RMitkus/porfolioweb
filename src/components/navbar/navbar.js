import React from 'react';
import styles from './navbar.module.scss';

const Navbar = ({ homeHandler, aboutHandler, workHandler }) => (
  <div className={styles.navbar}>
    <div className={styles.navlinks}>
      <button type="button" onClick={homeHandler}>Home</button>
      <div>
        <button type="button" onClick={workHandler}>Projects</button>
        <button type="button" onClick={aboutHandler}>About me</button>
      </div>
    </div>
  </div>
);

export default Navbar;
