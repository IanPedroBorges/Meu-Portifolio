import { HabilityArray } from "../../utils/Habilitys";
import CardHability from "../CardHability";
import styles from "./styles.module.css";
import { useScrollAnimation, useStaggerAnimation } from '../../hooks/useScrollAnimation';

export default function Hability() {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { containerRef, getItemStyle } = useStaggerAnimation(100);

  return (
    <section className={styles.Services}>
      <h3 
        ref={titleRef as React.RefObject<HTMLHeadingElement>}
        className={titleVisible ? 'fade-in-up' : ''}
      >
        Minhas Habilidades
      </h3>
      <div 
        ref={containerRef as React.RefObject<HTMLDivElement>}
        id="hability" 
        className={styles.myServices}
      >
        {HabilityArray.map((item, index) => (
          <div 
            key={index}
            style={getItemStyle(index)}
            className="stagger-item"
          >
            <CardHability {...item} />
          </div>
        ))}
      </div>
    </section>
  )
}
