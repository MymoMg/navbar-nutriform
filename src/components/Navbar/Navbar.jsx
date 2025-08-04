// src/components/Navbar/Navbar.jsx

import { useState } from "react";
import styles from "./Navbar.module.css";

const links = [
  { label: "IMC", path: "/IMC", special: true },
  { label: "Calorie", path: "/calorie", special: true },
  { label: "Contact", path: "/contact" },
  { label: "Connexion", path: "#login" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>

        <input
          type="checkbox"
          id="burger-toggle"
          className={styles.burgerToggle}
          checked={open}
          onChange={() => setOpen(!open)}
        />

        <label htmlFor="burger-toggle" className={styles.burger}>
          {links.map((link, index) => (
            <span key={index} className={link.special ? styles.org : ""}>
              <a className={link.special ? styles.orange : ""} href={link.path}>
                {link.label}
              </a>
            </span>
          ))}
        </label>
      </div>
    </header>
  );
}
