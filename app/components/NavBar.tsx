// components/NavBar.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './NavBar.module.css';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    return (
      <nav className={styles.nav}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    );
  };
  
  export default NavBar;
