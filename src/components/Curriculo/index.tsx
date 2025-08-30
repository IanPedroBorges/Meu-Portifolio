import styles from "./styles.module.css";
import Lottie from "lottie-react";
import animation from "../../images/animations/animation_lmqzdnjw.json";
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

//<Lottie  animationData={animation} />

export default function Curriculo() {
  const { elementRef: textRef, isVisible: textVisible } = useScrollAnimation({ threshold: 0.3 });
  const { elementRef: animationRef, isVisible: animationVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      aria-label="seção curriculo dowload Ian Borges"
      className={styles.Section}
    >
      <div 
        ref={textRef as React.RefObject<HTMLDivElement>}
        className={textVisible ? 'fade-in-left' : ''}
      >
        <h2 className="fade-in-up">
          Ola 👋, Meu Nome é<br />
          <strong>Ian Pedro Borges</strong> Eu Sou
        </h2>
        <h2 className={styles.animation}>
          <strong>Desenvolvedor Full Stack</strong>
        </h2>
        <p className="fade-in-up">
          Neste Portfólio, você terá acesso a informações sobre mim, minhas
          habilidades e projetos que desenvolvi. Além disso, poderá baixar meu
          currículo em PDF e encontrar meus contatos para podermos conversar.
          <br />
          <strong>Seja bem-vindo e sinta-se à vontade!😀😀😀 </strong>
        </p>
        <a 
          href="https://drive.google.com/file/d/1_e1bLvDCWDz-TMs7EErBzmnsgtqP5tKR/view?usp=sharing" 
          target="blank"
          className="hover-lift hover-glow"
        >
          Baixar Curriculo
        </a>
      </div>
      <section 
        ref={animationRef as React.RefObject<HTMLElement>}
        className={animationVisible ? 'scale-in' : ''}
      >
        <Lottie id="image" animationData={animation} className="hover-scale" />
      </section>
    </section>
  );
}
