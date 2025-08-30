import { Hability } from "../../types/@types.types";

import styles from "./styles.module.css";

export default function CardHability({name,image}: Hability) {
  return (
        <ul className={`${styles.cardUl} hover-lift`}>
            <li>
                <img 
                  src={image} 
                  alt={`Ícone da tecnologia ${name}`} 
                  className="hover-scale"
                  loading="lazy"
                  decoding="async"
                />
                <h3><strong>{name}</strong></h3>
            </li>
        </ul>
  )
}
