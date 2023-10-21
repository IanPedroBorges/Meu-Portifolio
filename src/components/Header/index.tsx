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
            <a href="#about">Sobre Mim</a>
          </li>
          <li>
            <a href="#hability">Habilidades</a>
          </li>
          <li>
            <a href="#project">Projetos</a>
          </li>
          <li>
            <a href="#contact">Contatos</a>
          </li>
        </ul>
      </nav>
      <i onClick={handleClickResponsiveMenu}>
        {menuResponsivo ? <AiOutlineMenu /> : <GiCancel />}
      </i>
    </header>
  );
}
