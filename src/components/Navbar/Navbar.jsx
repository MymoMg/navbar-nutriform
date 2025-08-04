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
        <a class="logo" href="index.html" aria-label="Accueil NutriForm - Retour à la page d'accueil">NutriForm</a>

        <ul className={`${styles.burger} ${open ? styles.open : ""}`}
          onClick={() => setOpen(!open)}
        >
          {links.map((link, index) => (
            <li key={index} className={link.special ? styles.org : ""}>
              <a className={link.special ? styles.orange : ""} href={link.path}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
    </header>
  );
}