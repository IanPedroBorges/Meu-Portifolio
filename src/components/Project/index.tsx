import CardProject from "../CardProject";
import styles from "./styles.module.css";

export default function Project() {
  return (
    <section className={styles.project}>
      <div className={styles.sobreTitulo}>
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
      <div className={styles.projectModels}>
        <ul aria-label="Navegação entre modelos expecificos de projetos">
          <li>All</li>
          <li>Studies</li>
          <li>Professional</li>
        </ul>
      </div>
      <div className={styles.projectArmazenamento}>
        <CardProject />
      </div>
    </section>
  );
}
