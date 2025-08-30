import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

import styles from "./styles.module.css";

function Footer() {
  return (
    <div className={styles.MainContainer}>
      <ul>
        <li>
          <a target="_blank" href="https://github.com/IanPedroBorges">
            <BsGithub />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://api.whatsapp.com/send?phone=5533984253047">
            <BsWhatsapp />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/ian-borges/">
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.instagram.com/ian_borges__/">
            <BsInstagram />
          </a>
        </li>
        <li>
          <a target="_blank" href="mailto:ianpborges0@gmail.com">
            <BiLogoGmail />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
