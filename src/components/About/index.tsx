import { BsPhone, BsHouseDoorFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import eu from "../../images/eu.png";

import styles from "./styles.module.css";
import { useScrollAnimation, useStaggerAnimation } from '../../hooks/useScrollAnimation';

export default function About() {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.2 });
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });
  const { containerRef: infoRef, getItemStyle } = useStaggerAnimation(150);

  return (
    <main className={styles.main}>
      <article aria-label="seção sobre mim" className={styles.sobre}>
        <div 
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`${styles.sobreTitulo} ${titleVisible ? 'fade-in-up' : ''}`}
        >
          <h1 id="about">Sobre Mim</h1>
          <p>Perfil Profissional - Conheça mais sobre minha trajetória</p>
          <div aria-label="Seção apenas de ilustrações de botões">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <img 
          ref={imageRef as React.RefObject<HTMLImageElement>}
          src={eu} 
          alt="Foto de perfil de Ian Pedro Borges, desenvolvedor full-stack" 
          className={`${imageVisible ? 'scale-in hover-lift' : ''}`}
          loading="lazy"
          decoding="async"
        />
        
        <div 
          ref={contentRef as React.RefObject<HTMLDivElement>}
          className={`${styles.sobreConteudo} ${contentVisible ? 'fade-in-right' : ''}`}
        >
          <div className={styles.sobreTexto}>
            <h1>Desenvolvedor Full Stack - Ian Borges</h1>
            <p>
              Olá! Meu nome é Ian Pedro Borges, e sou natural de Minas Gerais. Sou um desenvolvedor <strong>Full Stack</strong> com paixão por tecnologia e solução de problemas. Atualmente trabalho como Desenvolvedor na <strong>Capys</strong>, onde aprimoro continuamente minhas habilidades e aplico práticas ágeis em projetos corporativos.
              <br /><br />
              Minha jornada na programação começou há mais de dois anos, quando me dediquei de forma autodidata aos fundamentos do desenvolvimento web. Posteriormente, tive a oportunidade de estudar na <strong>Trybe</strong>, onde aprofundei meus conhecimentos em tecnologias modernas. Tenho experiência em diversas linguagens e frameworks.
              <br /><br />
              Busco constantemente novos desafios e oportunidades para crescer como profissional, sempre focado em entregar soluções de qualidade e otimizar processos através da tecnologia.
            </p>
          </div>
          
          <div 
            ref={infoRef as React.RefObject<HTMLDivElement>}
            className={styles.sobreInfo}
          >
            <p style={getItemStyle(0)} className="stagger-item">
              <i>
                <BsPhone />
              </i>{" "}
              (33) 984253047
            </p>
            <p style={getItemStyle(1)} className="stagger-item">
              <i>
                <BsHouseDoorFill />
              </i>{" "}
              Contagem - Minas Gerais
            </p>
            <p style={getItemStyle(2)} className="stagger-item">
              <i>
                <MdEmail />
              </i>{" "}
              ianpborges0@gmail.com
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
