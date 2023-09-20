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
        <h2 className={styles.animation}><strong>Desenvolvedor Full Stack</strong></h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          distinctio, aspernatur exercitationem hic delectus mollitia illo
          laborum quam vero porro?
        </p>
        <a href="#">Dowload CV</a>
      </div>
      <section>
        <Lottie id="image" animationData={animation} />
      </section>
    </section>
  );
}
