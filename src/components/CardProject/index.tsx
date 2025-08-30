import { useState, useEffect } from 'react';
import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { ProjectArray } from '../../utils/ProjectArray';
import styles from './styles.module.css';

type ProjectType = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  image: string;
  category: string;
  tech: string;
};

type FilterType = 'Todos' | 'Estudos' | 'Profissional';

export default function CardProject() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [activeFilter, setActiveFilter] = useState<FilterType>('Todos');
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>([]);

  // Update items per page based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1200) {
        setItemsPerPage(3);
      } else if (width >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  // Filter projects based on active filter
  useEffect(() => {
    let filtered: ProjectType[] = [];
    
    if (activeFilter === 'Todos') {
      filtered = [...ProjectArray];
    } else if (activeFilter === 'Estudos') {
      filtered = ProjectArray.filter(project => 
        project.category === 'study' || project.category === 'personal'
      );
    } else if (activeFilter === 'Profissional') {
      filtered = ProjectArray.filter(project => 
        project.category === 'professional' || project.category === 'work'
      );
    }
    
    setFilteredProjects(filtered);
    setCurrentIndex(0);
  }, [activeFilter]);

  // Navigation functions
  const handlePrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - itemsPerPage));
  };

  const handleNext = () => {
    const maxIndex = Math.max(0, filteredProjects.length - itemsPerPage);
    setCurrentIndex(prev => Math.min(maxIndex, prev + itemsPerPage));
  };

  // Filter handlers
  const handleFilterClick = (filter: FilterType) => {
    setActiveFilter(filter);
  };

  // Calculate visible projects and navigation state
  const visibleProjects = filteredProjects.slice(currentIndex, currentIndex + itemsPerPage);
  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex + itemsPerPage < filteredProjects.length;
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const currentPage = Math.floor(currentIndex / itemsPerPage) + 1;

  return (
    <section className={styles.projectSection} id="project">
      <div className={styles.container}>
        <h2 className={styles.title}>Meus Projetos</h2>
        <p className={styles.subtitle}>
          Aqui estão alguns dos projetos que desenvolvi
        </p>

        {/* Filter Buttons */}
        <div className={styles.filterContainer}>
          {(['Todos', 'Estudos', 'Profissional'] as FilterType[]).map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={`${styles.filterButton} ${
                activeFilter === filter ? styles.active : ''
              }`}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Display */}
        <div className={styles.projectsWrapper}>
          {/* Navigation Arrow - Previous */}
          <button
            onClick={handlePrevious}
            disabled={!canGoPrevious}
            className={`${styles.navButton} ${styles.navButtonPrev} ${
              !canGoPrevious ? styles.disabled : ''
            }`}
            aria-label="Projetos anteriores"
          >
            <AiFillCaretLeft />
          </button>

          {/* Projects Container */}
          <div className={styles.projectsContainer}>
            {visibleProjects.length > 0 ? (
              <div 
                className={styles.projectsGrid}
                style={{
                  gridTemplateColumns: `repeat(${itemsPerPage}, 1fr)`
                }}
              >
                {visibleProjects.map((project) => (
                  <div key={project.id} className={styles.projectCard}>
                    <div className={styles.projectImageContainer}>
                      <img
                        src={project.image}
                        alt={`Screenshot do projeto ${project.name}`}
                        className={styles.projectImage}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <div className={styles.projectOverlay}>
                        <div className={styles.projectActions}>
                          {project.homepage && project.homepage.trim() !== '' && (
                            <a
                              href={project.homepage}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`${styles.projectLink} ${styles.demoLink}`}
                              aria-label={`Ver demo do projeto ${project.name}`}
                            >
                              <FiExternalLink size={18} />
                              Ver Site
                            </a>
                          )}
                          {project.html_url && project.html_url.trim() !== '' && (
                            <a
                              href={project.html_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`${styles.projectLink} ${styles.codeLink}`}
                              aria-label={`Ver código do projeto ${project.name}`}
                            >
                              <FiGithub size={18} />
                              Ver Código
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className={styles.projectContent}>
                      <h3 className={styles.projectTitle}>{project.name}</h3>
                      <p className={styles.projectDescription}>{project.description}</p>
                      <div className={styles.projectTech}>
                        {project.tech.split(', ').map((tech: string, index: number) => (
                          <span key={index} className={styles.techBadge}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.noProjects}>
                <p>Nenhum projeto encontrado para esta categoria.</p>
              </div>
            )}
          </div>

          {/* Navigation Arrow - Next */}
          <button
            onClick={handleNext}
            disabled={!canGoNext}
            className={`${styles.navButton} ${styles.navButtonNext} ${
              !canGoNext ? styles.disabled : ''
            }`}
            aria-label="Próximos projetos"
          >
            <AiFillCaretRight />
          </button>
        </div>

        {/* Pagination Info */}
        {filteredProjects.length > 0 && (
          <div className={styles.paginationInfo}>
            <span>
              Página {currentPage} de {totalPages} • {filteredProjects.length} projeto{filteredProjects.length !== 1 ? 's' : ''}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
