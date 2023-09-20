import { AiOutlineMenu } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";

import styles from "./styles.module.css";
import { useState } from "react";

export default function Header() {
  const [menuResponsivo, setMenuResponsivo] = useState(true);
  const handleClickResponsiveMenu = () => {
    setMenuResponsivo(!menuResponsivo);
  };
  

  return (
    <header className={styles.Header}>
      <h1>
        {'<Ian Borges/>'}
      </h1>
      <nav className={menuResponsivo ? styles.nav : styles.active}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#hability">Hability</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <i onClick={handleClickResponsiveMenu}>
        {menuResponsivo ? <AiOutlineMenu /> : <GiCancel />}
      </i>
    </header>
  );
}
