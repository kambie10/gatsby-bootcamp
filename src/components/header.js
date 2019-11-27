import React from 'react'
import { Link }from 'gatsby'

import styles from './header.module.scss'

const Header = () => {
  return (
    <header>
      <h1>Bajo Dev</h1>
      <nav>
        <ul>
          <li>
            <Link className={styles.link} to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header