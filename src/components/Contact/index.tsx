import { BsPhone, BsHouseDoorFill, BsGithub, BsLinkedin, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import styles from "./styles.module.css";
import { useScrollAnimation, useStaggerAnimation } from '../../hooks/useScrollAnimation';

export default function Contact() {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { containerRef, getItemStyle } = useStaggerAnimation(200);

  return (
    <section id="contact" className={styles.contact}>
      <div 
        ref={titleRef as React.RefObject<HTMLDivElement>}
        className={`${styles.contactTitle} ${titleVisible ? 'fade-in-up' : ''}`}
      >
        <h1>Entre em Contato</h1>
        <p>Vamos conversar sobre oportunidades e projetos</p>
        <div aria-label="Seção apenas de ilustrações de botões">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      <div 
        ref={containerRef as React.RefObject<HTMLDivElement>}
        className={styles.contactContainer}
      >
        <div 
          style={getItemStyle(0)}
          className={`${styles.contactInfo} stagger-item hover-lift`}
        >
          <h3>Informações de Contato</h3>
          <div className={styles.contactItem}>
            <BsPhone className={styles.icon} />
            <span>(33) 984253047</span>
          </div>
          <div className={styles.contactItem}>
            <MdEmail className={styles.icon} />
            <span>ianpborges0@gmail.com</span>
          </div>
          <div className={styles.contactItem}>
            <BsHouseDoorFill className={styles.icon} />
            <span>Contagem - Minas Gerais</span>
          </div>
        </div>
        
        <div 
          style={getItemStyle(1)}
          className={`${styles.socialMedia} stagger-item hover-lift`}
        >
          <h3>Redes Sociais</h3>
          <div className={styles.socialLinks}>
            <a 
              href="https://github.com/IanPedroBorges" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover-glow"
              aria-label="GitHub"
            >
              <BsGithub />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/ian-borges/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover-glow"
              aria-label="LinkedIn"
            >
              <BsLinkedin />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://www.instagram.com/ian_borges__/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover-glow"
              aria-label="Instagram"
            >
              <BsInstagram />
              <span>Instagram</span>
            </a>
            <a 
              href="https://api.whatsapp.com/send?phone=5533984253047" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover-glow"
              aria-label="WhatsApp"
            >
              <BsWhatsapp />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
        

      </div>
    </section>
  );
}