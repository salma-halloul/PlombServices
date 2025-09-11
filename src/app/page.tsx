"use client"

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faStar, faThumbsUp, faClock, faCalendar, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
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
                <span style={{color: '#f4b34f'}}>Fachbetrieb</span><br />
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
                  style={{backgroundColor: '#f4b34f'}}
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
                <span style={{color: '#d63231'}}>Wichtig:</span> Schnelle Reinigung<br />
                verhindert <span style={{color: '#f4b34f'}}>85%</span> der Rohrbrüche!
              </h2>
              
              <p className="lg:text-lg text-md leading-relaxed">
                Hinter vielen Problemen mit Abflüssen im Haus steckt eine tiefer sitzende Ursache. 
                Oft sind verstopfte Abflüsse Warnsignale! Mit unserer professionellen Kamerauntersuchung 
                ermitteln wir genau Verschmutzungen und Leckagen in Ihrem Abwassersystem und können 
                wichtige Maßnahmen zum Erhalt Ihres Immobilienwertes ableiten.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg border-l-4" style={{borderLeftColor: '#f4b34f'}}>
                <p className="lg:text-lg text-md font-semibold mb-3">
                  Rufen Sie jetzt an und lassen Sie sich von uns kostenlos beraten.
                </p>
                <p className="lg:text-md text-sm mb-3">
                  Bei <span style={{color: '#f4b34f'}} className="font-bold">80 %</span> aller Anrufe 
                  können wir bereits am Telefon weiterhelfen!
                </p>
                
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-600">Jetzt telefonisch erreichbar</p>
                  <a 
                    href="tel:015630814701"
                    className="text-3xl font-bold underline flex items-center gap-3 hover:opacity-80 transition-opacity"
                    style={{color: '#1b5565'}}
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
                  style={{backgroundColor: '#1b5565'}}
                ></div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}