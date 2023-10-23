import styles from "./styles.module.css";
import Lottie from "lottie-react";
import animation from "../../images/animations/animation_lmqzdnjw.json";

//<Lottie  animationData={animation} />

export default function Curriculo() {
  return (
    <section
      aria-label="seção curriculo dowload Ian Borges"
      className={styles.Section}
    >
      <div>
        <h2>
          Ola 👋, Meu Nome é<br />
          <strong>Ian Pedro Borges</strong> Eu Sou
        </h2>
        <h2 className={styles.animation}>
          <strong>Desenvolvedor Full Stack</strong>
        </h2>
        <p>
          Neste Portfólio, você terá acesso a informações sobre mim, minhas
          habilidades e projetos que desenvolvi. Além disso, poderá baixar meu
          currículo em PDF e encontrar meus contatos para podermos conversar.
          <br />
          <strong>Seja bem-vindo e sinta-se à vontade!😀😀😀 </strong>
        </p>
        <a href="https://drive.google.com/file/d/1tX5qg4CogvRgSDHQ9_YyP--DYwfNWk1C/view?usp=share_link" target="blank">Baixar Curriculo</a>
      </div>
      <section>
        <Lottie id="image" animationData={animation} />
      </section>
    </section>
  );
}
