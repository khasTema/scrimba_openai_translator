import React from 'react';
import logoParrot from '../../images/parrot.svg';
import styles from './Header.module.css';
import { HEADER_TEXT } from '../../consts';

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.center}>
            <div className={styles.imageLogo}>
                <img src={logoParrot} alt="logo" />
            </div>
            <div className={styles.text}>
                <h1 className={styles.logo}>{HEADER_TEXT.TITLE}</h1>
                <p className={styles.subtitle}>{HEADER_TEXT.SUBTITLE}</p>
            </div>
        </div>
    </header>
  )
}

export default Header