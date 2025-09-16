'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 1); // Déclenche l'animation après 20px de scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Barre d'information en haut */}
      <div className={`info-bar font-bold ${isScrolled ? 'info-bar-hidden' : ''}`}>
        🕖 HEUTE: Anfahrt ab 49€ für Kanalinspektion
      </div>

      {/* Navbar fixe */}
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-logo">
          <Image
            src="/Dein.png"
            alt="Rohritter Logo"
            width={150}
            height={50}
            className="navbar-logo"
          />
        </div>

        <div className="navbar-contact">
          <div className="font-bold text-sm text-lg text-black">24/7 erreichbar - Jetzt anrufen</div>
          <a
            href="tel:+49 5707 9325566"
            className="font-bold text-sm lg:text-3xl teal underline decoration-teal flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faPhone} className="lg:text-xl text-sm text-teal" />
            +49 5707 9325566
          </a>

        </div>
      </nav>
    </>
  );
}

