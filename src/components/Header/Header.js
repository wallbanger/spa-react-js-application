import React, { Component, PropTypes } from 'react';
import Logo from '../site/logo/Logo';
import styles from './header.scss';

class Header extends Component {

  render() {
    let text = 'Site Header';
    
    return (
      <div className={styles.header}>
        <Logo className={styles.header__logo} />
        <div>
          {text}
        </div>
      </div>
    );
  }
}

export default Header;
