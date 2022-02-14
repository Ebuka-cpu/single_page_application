import styles from "../styles/Navbar.module.css";
import React, { useState } from "react";
// import Link from "next/link";
import {Link} from "react-scroll"

const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <div className={styles.container}>
      <Link passHref href="/">EBUE-DEV.</Link>
      <ul className={styles.list}>
      <li className={styles.listItem}>
          <Link smooth={true} to="header">HOME</Link>
        </li>
        <li className={styles.listItem}>
          <Link smooth={true} to="about">ABOUT</Link>
        </li>
        
        <li className={styles.listItem}>
          <Link smooth={true} to="projects">PROJECT</Link>
        </li>
        <li className={styles.listItem}>
          <Link smooth={true} to="volunteer">VOLUNTEER</Link>
        </li>
      </ul>
      <div className={styles.hamburger} onClick={()=>setOpen(!open)}>
          <div className={styles.lines}></div>
          <div className={styles.lines}></div>
          <div className={styles.lines}></div>
      </div>
      <ul className={styles.menu} style={{right: open ? "0px" : "-100vw"}} >
      <li className={styles.menuItem}>
          <Link smooth={true} to="header" onClick={()=>setOpen(false)}>HOME</Link>
        </li>
        <li className={styles.menuItem}>
          <Link smooth={true} to="about" onClick={()=>setOpen(false)}>ABOUT</Link>
        </li>
        
        <li className={styles.menuItem}>
          <Link smooth={true} to="projects" onClick={()=>setOpen(false)}>PROJECT</Link>
        </li>
        <li className={styles.menuItem}>
          <Link smooth={true} to="volunteer" onClick={()=>setOpen(false)}>VOLUNTEER</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
