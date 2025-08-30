import "./App.css";
import About from "./components/About";
import Curriculo from "./components/Curriculo";
import Header from "./components/Header";
import Hability from "./components/Hability";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="main-content-main">
      <Header />
      <Curriculo />
      <About />
      <Hability />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
