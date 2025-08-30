import CardProject from "../CardProject";
import styles from "./styles.module.css";
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function Project() {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className={styles.project}>
      <div 
        ref={titleRef as React.RefObject<HTMLDivElement>}
        className={`${styles.sobreTitulo} ${titleVisible ? 'fade-in-up' : ''}`}
      >
        <h1>Meus Projetos</h1>
        <p>
          Nesta seção, você encontrará uma seleção dos projetos que desenvolvi
          ao longo da minha jornada como desenvolvedor Full Stack. Cada projeto
          representa uma oportunidade para aplicar minhas habilidades e
          conhecimentos em tecnologias web modernas, desde o frontend até o
          backend. Explore esses projetos para ver como eles foram criados e
          como você pode fazer o mesmo.
        </p>

        <div aria-label="Seção apenas de ilustrações de botões">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div 
        ref={contentRef as React.RefObject<HTMLDivElement>}
        className={`${styles.projectArmazenamento} ${contentVisible ? 'fade-in-up' : ''}`}
      >
        <CardProject />
      </div>
    </section>
  );
}
