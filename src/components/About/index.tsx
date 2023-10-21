import { BsPhone, BsHouseDoorFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import eu from "../../images/eu.png";

import styles from "./styles.module.css";

export default function About() {
  return (
    <main className={styles.main}>
      <article aria-label="seção sobre mim" className={styles.sobre}>
      <div className={styles.sobreTitulo}>
          <h1 id="about">Sobre Mim</h1>
          <p>Professional Profile - There is All About me</p>
          <div aria-label="Seção apenas de ilustrações de botões">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <img src={eu} alt="Minha Imagem" />
        <div className={styles.sobreConteudo}>
          <div className={styles.sobreTexto}>
            <h1>I'M Dev Full Stack - Ian Borges</h1>
            <p>
            Olá! Meu nome é Ian Pedro Borges, e sou natural de Minas Gerais. Atualmente, estou empolgado em estar estudando na Trybe, uma instituição renomada que tem me proporcionado um aprendizado profundo em desenvolvimento web. Minha jornada na área de programação começou há dois ano e meio, quando decidi me dedicar de forma autodidata para aprender os fundamentos e conceitos básicos da programação web.
              <br />
              Agora,  com a oportunidade de estudar na Trybe, estou aprimorando minhas habilidades e expandindo meu conhecimento em tecnologias modernas e práticas ágeis de desenvolvimento. Estou entusiasmado em dar o próximo passo na minha carreira e ingressar no mercado de trabalho como programador web. Durante minha trajetória de estudos, desenvolvi projetos pessoais e participei de desafios que me permitiram aplicar o que aprendi e aprofundar minha compreensão em diferentes áreas da programação. Busco meu primeiro emprego em uma empresa inovadora, onde possa contribuir com minhas habilidades técnicas e minha sede de aprender e crescer como profissional. 
            </p>
          </div>
          <div className={styles.sobreInfo}>
            <p>
              <i>
                <BsPhone />
              </i>{" "}
              (33) 987157144
            </p>
            <p>
              <i>
                <BsHouseDoorFill />
              </i>{" "}
              Coroaci - Minas Gerais
            </p>
          <p>
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
