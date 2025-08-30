import { BsCalendar, BsBuilding } from "react-icons/bs";
import styles from "./styles.module.css";
import { useScrollAnimation, useStaggerAnimation } from '../../hooks/useScrollAnimation';

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string;
  current?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    company: "Capys",
    position: "Desenvolvedor",
    period: "Maio 2025 – Atual",
    description: "Desenvolvimento e manutenção de sistemas corporativos, aplicando práticas ágeis e tecnologias modernas para otimizar processos diários.",
    current: true
  },
  {
    company: "Memory",
    position: "Programador Júnior",
    period: "Jun 2024 – Abr 2025",
    description: "Desenvolvimento e manutenção de sistemas corporativos, aplicando práticas ágeis e tecnologias modernas para otimizar processos diários."
  }
];

export default function Experience() {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { containerRef, getItemStyle } = useStaggerAnimation(300);

  return (
    <section id="experience" className={styles.experience}>
      <div 
        ref={titleRef as React.RefObject<HTMLDivElement>}
        className={`${styles.experienceTitle} ${titleVisible ? 'fade-in-up' : ''}`}
      >
        <h1>Experiência Profissional</h1>
        <p>Minha trajetória profissional e principais conquistas</p>
        <div aria-label="Seção apenas de ilustrações de botões">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      <div 
        ref={containerRef as React.RefObject<HTMLDivElement>}
        className={styles.experienceContainer}
      >
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            style={getItemStyle(index)}
            className={`${styles.experienceCard} ${exp.current ? styles.current : ''} stagger-item hover-lift`}
          >
            <div className={styles.experienceHeader}>
              <div className={styles.companyInfo}>
                <h3>
                  <BsBuilding className={styles.icon} />
                  {exp.company}
                </h3>
                <h4>{exp.position}</h4>
              </div>
              <div className={styles.period}>
                <BsCalendar className={styles.icon} />
                <span>{exp.period}</span>
                {exp.current && <span className={`${styles.currentBadge} bounce-in`}>Atual</span>}
              </div>
            </div>
            <p className={styles.description}>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}