import { ProjectArray } from "../../utils/ProjectArray";

import { useState } from "react";

import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";


import styles from "./styles.module.css";

const initialProject = {
  project1: 0,
  project2: 1,
  project3: 2,
};

export default function CardProject() {
  const [project, setProject] = useState(initialProject);
  const [projectFilter, setProjectFilter] = useState(ProjectArray)
  const handleClickLess = () => {
    if (project.project1 === 0) {
      setProject({
        project1: projectFilter.length - 1,
        project2: project.project2 - 1,
        project3: project.project3 - 1,
      });
      return;
    } else if (project.project2 === 0) {
      setProject({
        project1: project.project1 - 1,
        project2: projectFilter.length - 1,
        project3: project.project3 - 1,
      });
      return;
    } else if (project.project3 === 0) {
      setProject({
        project1: project.project1 - 1,
        project2: project.project2 - 1,
        project3: projectFilter.length - 1,
      });
      return;
    }
    setProject({
      project1: project.project1 - 1,
      project2: project.project2 - 1,
      project3: project.project3 - 1,
    });
  };

  const handleClickMore = () => {
    if (project.project1 === projectFilter.length - 1) {
      setProject({
        project1: 0,
        project2: project.project2 + 1,
        project3: project.project3 + 1,
      });
      return;
    } else if (project.project2 === projectFilter.length - 1) {
      setProject({
        project1: project.project1 + 1,
        project2: 0,
        project3: project.project3 + 1,
      });
      return;
    } else if (project.project3 === projectFilter.length - 1) {
      setProject({
        project1: project.project1 + 1,
        project2: project.project2 + 1,
        project3: 0,
      });
      return;
    }
    setProject({
      project1: project.project1 + 1,
      project2: project.project2 + 1,
      project3: project.project3 + 1,
    });
  };

  const handleClickFilter = (filter: string) => {
    if(filter === "All"){
      console.log('ntrou')
      setProjectFilter(ProjectArray)
      setProject(initialProject)
      return
    }

    if(filter === "Destaques") {
      console.log('ntrou')
      setProjectFilter(ProjectArray.filter((project) => project.highlights))
      setProject(initialProject)
      return
    }

    if(filter === 'Front-End') {
      console.log('ntrou')
      setProjectFilter(ProjectArray.filter((project) => project.frontend))
      setProject(initialProject)
      return
    }
    if(filter === 'Back-End') {
      console.log('ntrou')
      setProjectFilter(ProjectArray.filter((project) => project.backend))
      setProject(initialProject)
      return
    }
  }

  return (
    <div>
      <ul className={styles.MainNavigation}>
        <li onClick={() => handleClickFilter('All')}>
          <button>All</button>
        </li>
        <li onClick={() => handleClickFilter('Destaques')}>
          <button>Destaques</button>
        </li>
        <li onClick={() => handleClickFilter('Front-End')}>
          <button>Front-End</button>
        </li>
        <li onClick={() => handleClickFilter('Back-End')} >
          <button>Back-End</button>
        </li>
      </ul>
    <div className={styles.MainContainer} id="project">
      <ul>
        <li>
          <button onClick={handleClickLess}><AiFillCaretLeft/></button>
        </li>
        <li>
          <img src={projectFilter[project.project1].image} alt="" />
          <h3>{projectFilter[project.project1].title}</h3>
          <p><strong>Descrição:</strong>{projectFilter[project.project1].description}</p>
          <p><strong>Tecnologias usadas:</strong> {projectFilter[project.project1].tech}</p>
          <ul>
            <li>
              <a target="_blank" href={projectFilter[project.project1].deploy}>
                Site
              </a>
            </li>
            <li>
              <a target="_blank" href={projectFilter[project.project1].github}>
                Repositorio
              </a>
            </li>
          </ul>
        </li>
        <li>
          <img src={projectFilter[project.project2].image} alt="" />
          <h3>{projectFilter[project.project2].title}</h3>
          <p><strong>Descrição:</strong>{projectFilter[project.project2].description}</p>
          <p><strong>Tecnologias usadas:</strong> {projectFilter[project.project2].tech}</p>
          <ul>
            <li>
              <a target="_blank" href={projectFilter[project.project2].deploy}>
                Site
              </a>
            </li>
            <li>
              <a target="_blank" href={projectFilter[project.project2].github}>
                Repositorio
              </a>
            </li>
          </ul>
        </li>
        <li>
          <img src={projectFilter[project.project3].image} alt="" />
          <h3>{projectFilter[project.project3].title}</h3>
          <p><strong>Descrição:</strong>{projectFilter[project.project3].description}</p>
          <p><strong>Tecnologias usadas:</strong>{projectFilter[project.project3].tech}</p>
          <ul>
            <li>
              <a target="_blank" href={projectFilter[project.project3].deploy}>
                Site
              </a>
            </li>
            <li>
              <a target="_blank" href={projectFilter[project.project3].github}>
                Repositorio
              </a>
            </li>
          </ul>
        </li>
        <li>
          <button id="contact" onClick={handleClickMore}>
            <AiFillCaretRight />
          </button>
        </li>
      </ul>
    </div>
    </div>
  );
}
