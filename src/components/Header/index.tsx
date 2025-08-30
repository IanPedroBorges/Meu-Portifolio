import { useState, useEffect } from "react";
import styles from "./styles.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navigationItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "Sobre Mim" },
    { href: "#hability", label: "Habilidades" },
    { href: "#experience", label: "Experiência" },
    { href: "#project", label: "Projetos" },
    { href: "#contact", label: "Contatos" }
  ];

  return (
    <>
      <header 
        className={`${styles.Header} ${isScrolled ? styles.scrolled : ''}`} 
        role="banner"
      >
        <div className={styles.headerContainer}>
          {/* Logo */}
          <a href="#home" className={styles.logo} onClick={closeMenu}>
            {'<Ian Borges/>'}
          </a>

          {/* Desktop Navigation */}
          <nav className={styles.nav} role="navigation" aria-label="Menu principal">
            <ul className={styles.navList}>
              {navigationItems.map((item, index) => (
                <li key={index} className={styles.navItem}>
                  <a 
                    href={item.href} 
                    className={styles.navLink}
                    aria-label={`Ir para seção ${item.label}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''}`}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`} 
        id="mobile-menu"
        role="navigation"
        aria-label="Menu mobile"
      >
        <ul className={styles.mobileNavList}>
          {navigationItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.href} 
                className={styles.mobileNavLink}
                onClick={closeMenu}
                aria-label={`Ir para seção ${item.label}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
