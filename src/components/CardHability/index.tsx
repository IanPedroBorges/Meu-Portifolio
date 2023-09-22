import { Hability } from "../../types/@types.types";

import styles from "./styles.module.css";

export default function CardHability({name,image}: Hability) {
  return (
        <ul className={styles.cardUl}>
            <li>
                <img src={image} alt="" />
                <h3><strong>{name}</strong></h3>
            </li>
        </ul>
  )
}
