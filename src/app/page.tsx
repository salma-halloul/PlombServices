"use client"

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faStar, faThumbsUp, faClock, faCalendar, faPhone, faChevronLeft, faChevronRight, faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import Lottie from 'lottie-react';

export default function Home() {
  // Chargement des animations Lottie pour tous les services
  const [serviceAnimations, setServiceAnimations] = useState<Record<string, any>>({});
  
  // Référence pour le carousel des avis
  const reviewsCarouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Charger toutes les animations Lottie
    const loadAnimations = async () => {
      const animations: Record<string, any> = {};
      
      for (let i = 0; i <= 6; i++) {
        try {
          const response = await fetch(`/0${i}_Icon.json`);
          const data = await response.json();
          animations[`service${i + 1}`] = data;
        } catch (error) {
          console.error(`Erreur lors du chargement de l'animation ${i}:`, error);
        }
      }
      
      setServiceAnimations(animations);
    };

    loadAnimations();
  }, []);

  // Fonctions pour le défilement du carousel
  const scrollLeft = () => {
    if (reviewsCarouselRef.current) {
      // Calcul dynamique basé sur la largeur de l'écran
      const scrollDistance = window.innerWidth >= 1024 ? 400 : window.innerWidth >= 640 ? 340 : 300;
      reviewsCarouselRef.current.scrollBy({
        left: -scrollDistance,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (reviewsCarouselRef.current) {
      // Calcul dynamique basé sur la largeur de l'écran
      const scrollDistance = window.innerWidth >= 1024 ? 400 : window.innerWidth >= 640 ? 340 : 300;
      reviewsCarouselRef.current.scrollBy({
        left: scrollDistance,
        behavior: 'smooth'
      });
    }
  };  // Composant pour afficher une animation Lottie avec fallback SVG
  const ServiceIcon = ({ serviceKey, fallbackSvg }: {
    serviceKey: string;
    fallbackSvg: React.ReactNode;
  }) => (
    <div className="mb-6 flex justify-center">
      {serviceAnimations[serviceKey] ? (
        <Lottie
          animationData={serviceAnimations[serviceKey]}
          style={{ width: '200px', height: '200px' }}
          loop={true}
          autoplay={true}
        />
      ) : (
        fallbackSvg
      )}
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Section Hero avec background */}
      <section
        className="relative min-h-screen"
      >
        {/* Background avec opacité réduite */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/back.png')",
            backgroundAttachment: 'fixed',
            opacity: 0.05
          }}
        ></div>

        {/* Overlay sombre pour améliorer la lisibilité */}
        <div className="absolute inset-0"></div>

        {/* Contenu principal */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">

            {/* Colonne gauche - Texte */}
            <div className="text-black space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span style={{ color: '#f4b34f' }}>Fachbetrieb</span><br />
                <span>für Kanaltechnik</span>
              </h1>

              <p className="text-md lg:text-lg leading-relaxed">
                Beauftragen Sie die Rohrmann Service – Ihren mehrfach geprüften Abwasserbetrieb.
                Als Ihr verlässlicher Partner stehen wir Ihnen für saubere und effiziente Rohr- und
                Kanalreinigungen zur Verfügung. Zusätzlich liegt unsere Expertise in der Sanierung
                und Instandsetzung von Kanal- und Abwassersystemen nach modernsten Verfahren sowie
                dem Einbau von Rückstausicherungen.
              </p>

              {/* Liste des avantages */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="yellow text-lg"
                    style={{
                      filter: 'drop-shadow(0 0 1px currentColor)',
                      fontWeight: 1000
                    }}
                  />
                  <span className="text-md">Kostenlose Beratung vor Ort</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faStar} className="yellow text-lg" />
                  <span className="text-md">Modernste Technik & Ausrüstung</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faThumbsUp} className="yellow text-lg" />
                  <span className="text-md ">Fachbetrieb mit über 15 Jahren Erfahrung</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faClock} className="yellow text-lg" />
                  <span className="text-md ">Schnelle Terminvergabe</span>
                </div>
              </div>

              {/* Bouton d'action */}
              <div className="pt-8">
                <button
                  className="px-8 py-4 text-white font-bold text-lg rounded-lg shadow-lg hover:opacity-90 transition-opacity flex items-center gap-3"
                  style={{ backgroundColor: '#f4b34f' }}
                >
                  <FontAwesomeIcon icon={faCalendar} className="text-lg" />
                  Termin vereinbaren
                </button>
              </div>
            </div>

            {/* Colonne droite - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image
                  src="/image1.jpg"
                  alt="Rohrmann Service Team"
                  width={1500}
                  height={1200}
                  className="rounded-lg shadow-2xl object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section Information avec fond blanc */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Colonne droite - Texte - Ordre 2 sur mobile, 1 sur lg */}
            <div className="text-black space-y-6 order-1 lg:order-2">
              <h2 className="text-lg lg:text-2xl font-bold leading-tight">
                <span style={{ color: '#d63231' }}>Wichtig:</span> Schnelle Reinigung<br />
                verhindert <span style={{ color: '#f4b34f' }}>85%</span> der Rohrbrüche!
              </h2>

              <p className="lg:text-lg text-md leading-relaxed">
                Hinter vielen Problemen mit Abflüssen im Haus steckt eine tiefer sitzende Ursache.
                Oft sind verstopfte Abflüsse Warnsignale! Mit unserer professionellen Kamerauntersuchung
                ermitteln wir genau Verschmutzungen und Leckagen in Ihrem Abwassersystem und können
                wichtige Maßnahmen zum Erhalt Ihres Immobilienwertes ableiten.
              </p>

              <div className="bg-gray-50 p-4 rounded-lg border-l-4" style={{ borderLeftColor: '#f4b34f' }}>
                <p className="lg:text-lg text-md font-semibold mb-3">
                  Rufen Sie jetzt an und lassen Sie sich von uns kostenlos beraten.
                </p>
                <p className="lg:text-md text-sm mb-3">
                  Bei <span style={{ color: '#f4b34f' }} className="font-bold">80 %</span> aller Anrufe
                  können wir bereits am Telefon weiterhelfen!
                </p>

                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-600">Jetzt telefonisch erreichbar</p>
                  <a
                    href="tel:015630814701"
                    className="text-3xl font-bold underline flex items-center gap-3 hover:opacity-80 transition-opacity"
                    style={{ color: '#1b5565' }}
                  >
                    <FontAwesomeIcon icon={faPhone} className="lg:text-2xl text-lg" />
                    0156 3081 4701
                  </a>
                </div>
              </div>
            </div>

            {/* Colonne gauche - Image 2 - Ordre 1 sur mobile, 2 sur lg */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative">
                <Image
                  src="/image2.jpeg"
                  alt="Rohrmann Service Ausrüstung"
                  width={1500}
                  height={1200}
                  className="rounded-lg shadow-2xl object-cover"
                />
                {/* Effet de bordure */}
                <div
                  className="absolute -inset-4 rounded-lg opacity-20 -z-10"
                  style={{ backgroundColor: '#1b5565' }}
                ></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section Processus avec fond jaune */}
      <section className="py-16" style={{ backgroundColor: '#f4b34f' }}>
        <div className="container mx-auto px-4">

          {/* Titre principal */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black leading-tight mb-2">
              In wenigen Schritten zu<br />
              langfristig sauberen Kanälen
            </h2>
            <p className="text-md lg:text-xl text-black font-semibold">
              Kanalreinigung mit Rohrritter in Minden und Umgebung
            </p>
          </div>

          {/* Processus en 3 étapes */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">

            {/* Étape 1 */}
            <div className="bg-white rounded-lg p-8 shadow-lg relative">
              <div
                className="absolute -top-6 left-8 w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                style={{ backgroundColor: '#d63231' }}
              >
                1
              </div>
              <h3 className="text-2xl font-bold text-black mt-6 mb-4">
                Kanalinspektion
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Eine Kamera wird in das Rohrsystem eingeführt, um den Zustand zu überprüfen
                und Verstopfungen oder Schäden zu lokalisieren. Anhand der Ergebnisse wird
                die geeignete Reinigungsmethode ausgewählt.
              </p>
            </div>

            {/* Étape 2 */}
            <div className="bg-white rounded-lg p-8 shadow-lg relative">
              <div
                className="absolute -top-6 left-8 w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                style={{ backgroundColor: '#d63231' }}
              >
                2
              </div>
              <h3 className="text-2xl font-bold text-black mt-6 mb-4">
                Kanalreinigung
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Mechanische Werkzeuge, wie eine elektrische Reinigungsspirale oder
                Hochdruckwasserstrahlen werden eingesetzt, um Ablagerungen und Verstopfungen
                zu entfernen. Diese Methoden reinigen das Kanalsystem gründlich.
              </p>
            </div>

            {/* Étape 3 */}
            <div className="bg-white rounded-lg p-8 shadow-lg relative">
              <div
                className="absolute -top-6 left-8 w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                style={{ backgroundColor: '#d63231' }}
              >
                3
              </div>
              <h3 className="text-2xl font-bold text-black mt-6 mb-4">
                Nachkontrolle
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Der Kanal wird erneut inspiziert, um den Erfolg der Maßnahmen zu überprüfen
                und sicherzustellen, dass die Kanäle langfristig funktionsfähig bleiben.
                Ergebnisse werden dokumentiert und zukünftige Maßnahmen ermittelt.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Section Minden avec image 3 */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Colonne gauche - Texte */}
            <div className="text-black space-y-2">
              <h2 className="text-sm lg:text-md font-extrabold leading-tight">
                <span style={{ color: '#1b5565' }}>Minden</span> – Hier sind wir Zuhause
              </h2>

              <h3 className="text-lg lg:text-2xl font-bold" style={{ color: '#d63231' }}>
                Fachbetrieb mit jahrelanger Erfahrung
              </h3>

              <p className="lg:text-lg text-md leading-relaxed">
                Rohrritter legt großen Wert auf hervorragende Qualität. Um diese zu erreichen,
                setzen wir auf drei entscheidende Faktoren: unser Fachwissen, unsere Erfahrung
                und unsere modernste Technik. Unsere Mitarbeiter sind fachlich versiert und
                routiniert im Umgang mit den neuesten Technologien, um Ihnen die bestmögliche
                Qualität zu bieten.
              </p>

              <p className="text-xl font-bold" style={{ color: '#1b5565' }}>
                Überzeugen Sie sich selbst von der Qualität bei Rohrritter!
              </p>

              {/* Liste des qualités */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon icon={faCheck} className="text-lg" style={{ color: '#f4b34f' }} />
                  <span className="font-medium">Innovatives Werkzeug</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon icon={faCheck} className="text-lg" style={{ color: '#f4b34f' }} />
                  <span className="font-medium">Erfahrene Techniker</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon icon={faCheck} className="text-lg" style={{ color: '#f4b34f' }} />
                  <span className="font-medium">24/7 Notfalldienst</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon icon={faCheck} className="text-lg" style={{ color: '#f4b34f' }} />
                  <span className="font-medium">Saubere Arbeitsweise</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon icon={faCheck} className="text-lg" style={{ color: '#f4b34f' }} />
                  <span className="font-medium">Vorbildlicher Kundenservice</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon icon={faCheck} className="text-lg" style={{ color: '#f4b34f' }} />
                  <span className="font-medium">100% umweltfreundlich</span>
                </div>
              </div>

              {/* Bouton rendez-vous */}
              <div className="pt-6">
                <button
                  className="px-8 py-4 text-white font-bold text-lg rounded-lg shadow-lg hover:opacity-90 transition-opacity flex items-center gap-3"
                  style={{ backgroundColor: '#d63231' }}
                >
                  <FontAwesomeIcon icon={faCalendar} className="text-lg" />
                  Termin vereinbaren
                </button>
              </div>
            </div>

            {/* Colonne droite - Image 3 */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image
                  src="/image3.jpeg"
                  alt="Rohrritter Minden Team"
                  width={600}
                  height={700}
                  className="rounded-lg shadow-2xl object-cover"
                />
                {/* Effet de bordure */}
                <div
                  className="absolute -inset-4 rounded-lg opacity-20 -z-10"
                  style={{ backgroundColor: '#f4b34f' }}
                ></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section Vidéo avec fond gris clair */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Colonne gauche - Vidéo YouTube */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-lg">
                <div className="aspect-video w-full">
                  <iframe
                    className="w-full h-full rounded-lg shadow-2xl"
                    src="https://www.youtube.com/embed/PVS5RgfxHf0"
                    title="MeisterRohr Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                {/* Effet de bordure */}
                <div
                  className="absolute -inset-4 rounded-lg opacity-20 -z-10"
                  style={{ backgroundColor: '#1b5565' }}
                ></div>
              </div>
            </div>

            {/* Colonne droite - Texte */}
            <div className="text-black space-y-4">
              <h2 className="text-lg lg:text-2xl font-bold leading-tight" style={{ color: '#1b5565' }}>
                So helfen wir Ihnen weiter:
              </h2>

              {/* Liste des services */}
              <div className="space-y-1">
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon icon={faCheck} className="text-xl" style={{ color: '#f4b34f' }} />
                  <span className="text-lg">Vorbildlicher Kundenservice</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon icon={faCheck} className="text-xl" style={{ color: '#f4b34f' }} />
                  <span className="text-lg">Hervorragend ausgebildetes Team</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon icon={faCheck} className="text-xl" style={{ color: '#f4b34f' }} />
                  <span className="text-lg">Modernste technische Ausstattung</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon icon={faCheck} className="text-xl" style={{ color: '#f4b34f' }} />
                  <span className="text-lg ">Fuhrpark auf neuestem Stand</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon icon={faCheck} className="text-xl" style={{ color: '#f4b34f' }} />
                  <span className="text-lg">Sehr saubere Arbeitsweise</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon icon={faCheck} className="text-xl" style={{ color: '#f4b34f' }} />
                  <span className="text-lg">Schutz vor erneuten Rohrverstopfungen</span>
                </div>
              </div>

              {/* Message d'appel final */}
              <div className="pt-4">
                <button
                  className=" px-8 py-4 text-white font-bold lg:text-xl text-sm rounded-lg shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-3"
                  style={{ backgroundColor: '#d63231' }}
                >
                  <FontAwesomeIcon icon={faPhone} className="lg:text-lg text-sm" />
                  Rufen Sie jetzt an 0156 3081 4701.
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section Services avec fond blanc */}
      <section className="bg-white py-20">
        <div className="container mx-auto lg:px-4 px-2">

          {/* Titre principal */}
          <div className="text-center mb-16">
            <h2 className="text-md lg:text-lg font-bold leading-tight mb-2" style={{ color: '#1b5565' }}>
              Schnell & zuverlässig
            </h2>
            <h3 className="text-2xl lg:text-3xl font-bold mb-1" style={{ color: '#d63231' }}>
              Unser Service-Angebot
            </h3>
            <p className="lg:text-lg text-md text-gray-600">
              Unsere erfahrenen Techniker sind echte Profis in diesen Dienstleistungen
            </p>
          </div>

          {/* Grille des services */}
          <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-1">

            {/* Service 1 - Kanal & Rohrsanierung */}
            <div className="bg-gray-50 rounded-lg lg:p-6 p-2 text-center hover:shadow-lg transition-shadow">
              <ServiceIcon
                serviceKey="service1"
                fallbackSvg={
                  <svg width="80" height="80" viewBox="0 0 100 100" className="animate-bounce">
                    <circle cx="50" cy="50" r="40" fill="#f4b34f" opacity="0.3" />
                    <path d="M30 50 L70 50 M50 30 L50 70" stroke="#1b5565" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="50" cy="50" r="8" fill="#d63231" />
                  </svg>
                }
              />
              <h4 className="lg:text-2xl text-lg font-bold mb-3" style={{ color: '#1b5565' }}>
                Kanal & Rohrsanierung
              </h4>
              <p className="text-gray-600">
                Mit einer Kanalsanierung sichern und reparieren wir Abwasserleitungen kosteneffizient und zerstörungsfrei.
              </p>
            </div>

            {/* Service 2 - Rohrreinigung */}
            <div className="bg-gray-50 rounded-lg lg:p-6 p-2 text-center hover:shadow-lg transition-shadow">
              <ServiceIcon
                serviceKey="service2"
                fallbackSvg={
                  <svg width="80" height="80" viewBox="0 0 100 100" className="animate-pulse">
                    <rect x="20" y="40" width="60" height="20" rx="10" fill="#f4b34f" opacity="0.3" />
                    <path d="M25 50 Q50 30 75 50" stroke="#1b5565" strokeWidth="3" fill="none" />
                    <circle cx="30" cy="50" r="3" fill="#d63231" />
                    <circle cx="70" cy="50" r="3" fill="#d63231" />
                  </svg>
                }
              />
              <h4 className="lg:text-2xl text-lg font-bold mb-3" style={{ color: '#1b5565' }}>
                Rohrreinigung
              </h4>
              <p className="text-gray-600">
                Wir sind für Sie erreichbar und beseitigen Rohrverstopfungen sauber, schnell und zuverlässig.
              </p>
            </div>

            {/* Service 3 - Küchenabfluss reinigen */}
            <div className="bg-gray-50 rounded-lg lg:p-6 p-2 text-center hover:shadow-lg transition-shadow">
              <ServiceIcon
                serviceKey="service3"
                fallbackSvg={
                  <svg width="80" height="80" viewBox="0 0 100 100" className="animate-spin" style={{ animationDuration: '3s' }}>
                    <circle cx="50" cy="50" r="35" fill="#f4b34f" opacity="0.3" />
                    <path d="M50 20 L50 80 M35 35 L65 65 M65 35 L35 65" stroke="#1b5565" strokeWidth="3" />
                    <circle cx="50" cy="50" r="5" fill="#d63231" />
                  </svg>
                }
              />
              <h4 className="lg:text-2xl text-lg font-bold mb-3" style={{ color: '#1b5565' }}>
                Küchenabfluss reinigen
              </h4>
              <p className="text-gray-600">
                Wir reinigen Ihren verstopften Küchenabfluss schnell und gründlich, damit das Wasser wieder frei abfließt.
              </p>
            </div>

            {/* Service 4 - Toilette verstopft */}
            <div className="bg-gray-50 rounded-lg lg:p-6 p-2 text-center hover:shadow-lg transition-shadow">
              <ServiceIcon
                serviceKey="service4"
                fallbackSvg={
                  <svg width="80" height="80" viewBox="0 0 100 100" className="animate-bounce">
                    <rect x="30" y="30" width="40" height="50" rx="5" fill="#f4b34f" opacity="0.3" />
                    <path d="M40 40 L60 40 M40 50 L60 50 M40 60 L60 60" stroke="#1b5565" strokeWidth="2" />
                    <circle cx="50" cy="25" r="8" fill="#d63231" />
                  </svg>
                }
              />
              <h4 className="lg:text-2xl text-lg font-bold mb-3" style={{ color: '#1b5565' }}>
                Toilette verstopft
              </h4>
              <p className="text-gray-600">
                Verstopfte Toilette? Unser Notdienst behebt das Problem rasch und zuverlässig, rund um die Uhr.
              </p>
            </div>

            {/* Service 5 - Kanalreinigung */}
            <div className="bg-gray-50 rounded-lg lg:p-6 p-2 text-center hover:shadow-lg transition-shadow">
              <ServiceIcon
                serviceKey="service5"
                fallbackSvg={
                  <svg width="80" height="80" viewBox="0 0 100 100" className="animate-pulse">
                    <path d="M20 50 Q30 30 40 50 Q50 70 60 50 Q70 30 80 50" stroke="#f4b34f" strokeWidth="6" fill="none" opacity="0.5" />
                    <path d="M20 50 Q30 30 40 50 Q50 70 60 50 Q70 30 80 50" stroke="#1b5565" strokeWidth="3" fill="none" />
                    <circle cx="20" cy="50" r="4" fill="#d63231" />
                    <circle cx="80" cy="50" r="4" fill="#d63231" />
                  </svg>
                }
              />
              <h4 className="lg:text-2xl text-lg font-bold mb-3" style={{ color: '#1b5565' }}>
                Kanalreinigung
              </h4>
              <p className="text-gray-600">
                Wir sind rund um die Uhr für Sie erreichbar und beseitigen Kanalverstopfungen sauber, schnell und zuverlässig.
              </p>
            </div>

            {/* Service 6 - Notdienst */}
            <div className="bg-gray-50 rounded-lg lg:p-6 p-2 text-center hover:shadow-lg transition-shadow">
              <ServiceIcon
                serviceKey="service6"
                fallbackSvg={
                  <svg width="80" height="80" viewBox="0 0 100 100" className="animate-ping">
                    <circle cx="50" cy="50" r="30" fill="#d63231" opacity="0.3" />
                    <path d="M50 35 L55 45 L45 45 Z M50 55 L50 65" stroke="#1b5565" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="50" cy="70" r="2" fill="#1b5565" />
                  </svg>
                }
              />
              <h4 className="lg:text-2xl text-lg font-bold mb-3" style={{ color: '#1b5565' }}>
                Notdienst
              </h4>
              <p className="text-gray-600">
                Unser 24/7-Notdienst steht Ihnen jederzeit zur Verfügung, um Ihr Abwasserproblem schnell, sauber und zuverlässig zu beseitigen.
              </p>
            </div>

            {/* Service 7 - Kanal-TV-Untersuchung */}
            <div className="bg-gray-50 rounded-lg lg:p-6 p-2 text-center hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1 mx-auto">
              <ServiceIcon
                serviceKey="service7"
                fallbackSvg={
                  <svg width="80" height="80" viewBox="0 0 100 100" className="animate-bounce">
                    <rect x="25" y="35" width="50" height="30" rx="5" fill="#f4b34f" opacity="0.3" />
                    <circle cx="50" cy="50" r="8" fill="#1b5565" />
                    <circle cx="50" cy="50" r="4" fill="#d63231" />
                    <path d="M35 50 L45 50 M55 50 L65 50" stroke="#1b5565" strokeWidth="2" />
                  </svg>
                }
              />
              <h4 className="lg:text-2xl text-lg font-bold mb-3" style={{ color: '#1b5565' }}>
                Kanal-TV-Untersuchung
              </h4>
              <p className="text-gray-600">
                Mithilfe von Rohrkameras wird der Zustand Ihrer Abwasserleitungen überprüft, um mögliche Schäden zu identifizieren.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Section Faire Preise avec fond teal */}
      <section className="pt-10 relative" style={{ backgroundColor: '#1b5565' }}>
        {/* Image de fond */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://ccrohrreinigung.com/wp-content/uploads/2025/03/PIXGO_-8889.webp')",
          }}
        ></div>

        {/* Overlay pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="container mx-auto px-2 relative z-10">

          {/* Titre principal */}
          <div className="p-7">
            <h2 className="text-xl lg:text-2xl font-bold text-white leading-tight mb-6">
              FAIRE PREISE
            </h2>
            <p className="text-md lg:text-lg text-white mx-auto mb-4">
              Die Kosten für Rohrreinigungen hängen immer von mehreren Faktoren ab, zum Beispiel dem Grad und Ort der Verstopfung. Bei uns bezahlen Sie immerzu nur marktübliche und faire Preise, ganz ohne versteckte Kosten. Dafür stehen wir mit unserem Namen.
            </p>

            {/* Angebot spécial */}
            <p className="text-lg text-white mb-6 leading-relaxed">
              <strong>Übrigens: HEUTE, am Donnerstag von 16 bis 22 Uhr</strong> ist in Berlin und Umgebung die Anfahrt kostenlos.
            </p>

            {/* Bouton d'appel */}
            <div>
              <a
                href="tel:03058919120"
                className="inline-flex items-center gap-4 px-8 py-3 text-white font-bold text-lg rounded-sm shadow-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#f4b34f' }}
              >
                <FontAwesomeIcon icon={faPhone} className="text-xl" />
                Rufen Sie uns jetzt an: 030 5891 9120
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Section Studien zeigen avec fond blanc */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-10">

          {/* Titre principal */}
          <div className=" mb-9">
            <h2 className="text-md lg:text-lg font-bold leading-tight mb-1" style={{ color: '#d63231' }}>
              Studien zeigen
            </h2>
            <p className="text-2xl lg:text-3xl font-bold" style={{ color: '#1b5565' }}>
              Je älter das Haus, desto wahrscheinlicher ein Rohrschaden.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 items-center">

            {/* Colonne gauche - Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <Image
                  src="/Source.jpg"
                  alt="Rohrreinigung Equipment"
                  width={450}
                  height={200}
                  className=" object-cover"
                />
                {/* Source sous l'image */}
                <div className="mt-3">
                  <p className="text-sm text-gray-500 italic">
                    Quelle: <a
                      href="https://www.gdv.de/gdv/unter-druck-39356"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      https://www.gdv.de/gdv/unter-druck-39356
                    </a>
                  </p>
                </div>
                {/* Effet de bordure */}
                <div
                  className="absolute -inset-4 rounded-lg opacity-20 -z-10"
                  style={{ backgroundColor: '#1b5565' }}
                ></div>
              </div>
            </div>

            {/* Colonne droite - Texte */}
            <div className="text-black space-y-6">
              <p className="text-lg leading-relaxed">
                Beschädigte Rohre und Kanäle sind die Ursache für viele weitere Probleme in Ihrer Wohnung.
                Fachgerechte Reinigungen und Untersuchungen minimieren die Häufigkeit von Brüchen und
                vermeiden aufwendige Arbeiten.
              </p>

              <p className="text-lg font-bold">
                Rufen Sie uns jetzt an und wir zeigen Ihnen, wie Sie:
              </p>

              {/* Liste des avantages */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-xl"
                      style={{ color: '#f4b34f' }}
                    />
                    <span className="text-lg text-black">
                      Kosten sparen
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-xl"
                      style={{ color: '#f4b34f' }}
                    />
                    <span className="text-lg text-black">
                      Immobilienwert erhalten
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-xl"
                      style={{ color: '#f4b34f' }}
                    />
                    <span className="text-lg text-black">
                      Hygiene bewahren
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-xl"
                      style={{ color: '#f4b34f' }}
                    />
                    <span className="text-lg text-black">
                      Schimmel vermeiden
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <a
                  href="tel:03058919120"
                  className="inline-flex items-center gap-4 px-8 py-3 text-white font-bold text-lg rounded-sm shadow-lg hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#f4b34f' }}
                >
                  <FontAwesomeIcon icon={faPhone} className="text-xl" />
                  Rufen Sie uns jetzt an: 030 5891 9120
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Section Avis Google avec fond gris clair */}
      <section className="bg-gray-100 p-10">
        <div className="container mx-auto px-4">
          
          {/* Titre principal */}
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight mb-2" style={{color: '#1b5565'}}>
              Was unsere Kunden sagen
            </h2>
            <p className="text-lg text-gray-600">
              Echte Bewertungen von zufriedenen Kunden
            </p>
          </div>

          {/* Grille des avis - Carousel horizontal avec boutons */}
          <div className="relative">
            {/* Bouton gauche */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
              style={{ marginLeft: '-50px' }}
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-lg" style={{ color: '#1b5565' }} />
            </button>

            {/* Bouton droite */}
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
              style={{ marginRight: '-50px' }}
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-lg" style={{ color: '#1b5565' }} />
            </button>

            {/* Carousel sans barre de défilement visible */}
            <div 
              ref={reviewsCarouselRef}
              className="overflow-x-scroll overflow-y-hidden hide-scrollbar"
            >
              <div className="flex space-x-6 pb-4" style={{ minWidth: 'max-content' }}>
                
                {/* Avis 1 */}
                <div className="bg-white rounded-lg p-6 shadow-lg flex-shrink-0 w-72 sm:w-80 lg:w-96">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      <FontAwesomeIcon icon={faStar} className="text-lg" />
                      <FontAwesomeIcon icon={faStar} className="text-lg" />
                      <FontAwesomeIcon icon={faStar} className="text-lg" />
                      <FontAwesomeIcon icon={faStar} className="text-lg" />
                      <FontAwesomeIcon icon={faStar} className="text-lg" />
                    </div>
                    <span className="ml-2 text-sm text-gray-500">5/5</span>
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Sehr professioneller und schneller Service. Das Team war pünktlich, freundlich und hat das Problem sofort gelöst. Absolute Empfehlung!"
                  </p>
                  <div className="text-sm">
                    <p className="font-semibold text-gray-800">Maria Schmidt</p>
                    <p className="text-gray-500">Berlin Mitte</p>
                  </div>
                </div>

                {/* Avis 2 */}
                <div className="bg-white rounded-lg p-6 shadow-lg flex-shrink-0 w-72 sm:w-80 lg:w-96">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      <FontAwesomeIcon icon={faStar} className="text-lg" />
                      <FontAwesomeIcon icon={faStar} className="text-lg" />
                      <FontAwesomeIcon icon={faStar} className="text-lg" />
                      <FontAwesomeIcon icon={faStar} className="text-lg" />
                      <FontAwesomeIcon icon={faStar} className="text-lg" />
                    </div>
                    <span className="ml-2 text-sm text-gray-500">5/5</span>
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Faire Preise und excellente Arbeit. Die Rohrreinigung war sehr gründlich und das Ergebnis perfekt. Danke für den tollen Service!"
                  </p>
                  <div className="text-sm">
                    <p className="font-semibold text-gray-800">Thomas Müller</p>
                    <p className="text-gray-500">Berlin Charlottenburg</p>
                  </div>
                </div>

                {/* Avis 3 */}
                <div className="bg-white rounded-lg p-6 shadow-lg flex-shrink-0 w-72 sm:w-80 lg:w-96">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      <FontAwesomeIcon icon={faStar} className="text-lg" />
                      <FontAwesomeIcon icon={faStar} className="text-lg" />
                      <FontAwesomeIcon icon={faStar} className="text-lg" />
                      <FontAwesomeIcon icon={faStar} className="text-lg" />
                      <FontAwesomeIcon icon={faStar} className="text-lg" />
                    </div>
                    <span className="ml-2 text-sm text-gray-500">5/5</span>
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Notdienst am Sonntag - innerhalb einer Stunde da! Sehr kompetent und sauber gearbeitet. Absolut zuverlässig!"
                  </p>
                  <div className="text-sm">
                    <p className="font-semibold text-gray-800">Sarah Weber</p>
                    <p className="text-gray-500">Berlin Kreuzberg</p>
                  </div>
                </div>

                {/* Avis 4 */}
                <div className="bg-white rounded-lg p-6 shadow-lg flex-shrink-0 w-72 sm:w-80 lg:w-96">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      <FontAwesomeIcon icon={faStar} className="text-lg" />
                      <FontAwesomeIcon icon={faStar} className="text-lg" />
                      <FontAwesomeIcon icon={faStar} className="text-lg" />
                      <FontAwesomeIcon icon={faStar} className="text-lg" />
                      <FontAwesomeIcon icon={faStar} className="text-lg" />
                    </div>
                    <span className="ml-2 text-sm text-gray-500">5/5</span>
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Kamera-Untersuchung war sehr aufschlussreich. Transparente Beratung und keine versteckten Kosten. Sehr zu empfehlen!"
                  </p>
                  <div className="text-sm">
                    <p className="font-semibold text-gray-800">Michael Fischer</p>
                    <p className="text-gray-500">Berlin Prenzlauer Berg</p>
                  </div>
                </div>

                {/* Avis 5 */}
                <div className="bg-white rounded-lg p-6 shadow-lg flex-shrink-0 w-72 sm:w-80 lg:w-96">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      <FontAwesomeIcon icon={faStar} className="text-lg" />
                      <FontAwesomeIcon icon={faStar} className="text-lg" />
                      <FontAwesomeIcon icon={faStar} className="text-lg" />
                      <FontAwesomeIcon icon={faStar} className="text-lg" />
                      <FontAwesomeIcon icon={faStar} className="text-lg" />
                    </div>
                    <span className="ml-2 text-sm text-gray-500">5/5</span>
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Jahrelange Probleme mit dem Abfluss endlich gelöst! Professionelle Sanierung und seitdem keine Probleme mehr. Top!"
                  </p>
                  <div className="text-sm">
                    <p className="font-semibold text-gray-800">Anna Hoffmann</p>
                    <p className="text-gray-500">Berlin Schöneberg</p>
                  </div>
                </div>

                {/* Avis 6 */}
                <div className="bg-white rounded-lg p-6 shadow-lg flex-shrink-0 w-72 sm:w-80 lg:w-96">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      <FontAwesomeIcon icon={faStar} className="text-lg" />
                      <FontAwesomeIcon icon={faStar} className="text-lg" />
                      <FontAwesomeIcon icon={faStar} className="text-lg" />
                      <FontAwesomeIcon icon={faStar} className="text-lg" />
                      <FontAwesomeIcon icon={faStar} className="text-lg" />
                    </div>
                    <span className="ml-2 text-sm text-gray-500">5/5</span>
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Sehr freundliches Team und erstklassige Arbeit. Pünktlich, zuverlässig und faire Preise. Immer wieder gerne!"
                  </p>
                  <div className="text-sm">
                    <p className="font-semibold text-gray-800">Peter Wagner</p>
                    <p className="text-gray-500">Berlin Tempelhof</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Zahlungsarten */}
      <section className="bg-white p-10">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight mb-4" style={{color: '#1b5565'}}>
              Zahlungsarten
            </h2>
            <p className="text-lg text-gray-600 mx-auto">
              Bei uns haben Sie die Möglichkeit, bequem per Rechnung zu zahlen. Keine Vorauszahlung erforderlich – Sie bezahlen erst nach erfolgreicher Leistungserbringung.
            </p>
          </div>

          <div className="flex justify-center items-center">
            {/* Icon/Visual */}
            <div className="w-full max-w-2xl">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-12 rounded-md flex items-center justify-center gap-6">
                <FontAwesomeIcon 
                  icon={faFileInvoice} 
                  className="text-5xl"
                  style={{color: '#1b5565'}}
                />
                <p className="text-lg font-semibold text-center" style={{color: '#1b5565'}}>
                  Rechnung erhalten, erst dann bezahlen
                </p>
              </div>
            </div>
          </div>


        </div>
      </section>
    </div>
  );
}