"use client";

import React from "react";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8" style={{ color: "#1b5565" }}>
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 text-gray-800 text-md">
          <section>
            <h2 className="font-semibold text-lg mb-2">Stand</h2>
            <p>Stand: 4. Oktober 2025</p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">1. Einführung</h2>
            <p>
              Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. In dieser Datenschutzerklärung
              informieren wir Sie über Art, Umfang und Zweck der Verarbeitung personenbezogener Daten
              im Zusammenhang mit unserem Angebot.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">2. Verantwortliche Stelle</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
              ZJ Serviceunternehmen UG (haftungsbeschränkt)<br />
              Hauptstraße 8<br />
              32457 Porta Westfalica<br />
              Geschäftsführer: Basit Ahmady<br />
              Telefon: +49 5707 9325566<br />
              E-Mail: info@RohrRitter-Minden.de
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">3. Allgemeine Zwecke & Rechtsgrundlagen</h2>
            <p>
              Wir verarbeiten personenbezogene Daten vertraglich, zur Erfüllung rechtlicher
              Verpflichtungen oder auf Grundlage berechtigter Interessen bzw. Ihrer Einwilligung:
            </p>
            <ul className="list-disc ml-6 mb-2">
              <li>Besuch der Website: berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO) zur Sicherstellung des Betriebs und der Sicherheit.</li>
              <li>Kontaktaufnahme (Kontaktformular / E-Mail) oder Reservierungsformular: Art. 6 Abs. 1 lit. b (Vertragserfüllung) oder Art. 6 Abs. 1 lit. a (Einwilligung).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">4. Welche Daten werden erhoben?</h2>
            <p className="font-bold mb-2">a) Beim Besuch der Website</p>
            <ul className="list-disc ml-6 mb-2">
              <li>IP-Adresse (anonymisiert/halb-anonymisiert möglich),</li>
              <li>Datum und Uhrzeit des Zugriffs,</li>
              <li>abgerufene Ressource / URL,</li>
              <li>Referrer, Browsertyp/-version, Betriebssystem.</li>
            </ul>
            <p>Diese Angaben dienen der Gewährleistung des technischen Betriebs und der Sicherheit.</p>

            <p className="font-bold mt-4 mb-2">b) Kontakt- und Reservierungsformulare</p>
            <p>
              Wenn Sie uns über das Kontaktformular oder das Reservierungsformular schreiben, verarbeiten wir die von Ihnen angegebenen Daten (z. B. Name, E-Mail, Telefonnummer, Reservierungsdetails), um Ihre Anfrage oder Reservierung zu bearbeiten.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">5. Keine Tracking-Cookies / kein Analytics</h2>
            <p>
              Wir setzen <strong>kein</strong> Google Analytics, Facebook Pixel oder sonstige Tracking-Cookies ein. Es werden keine Drittanbieter-Tracker geladen.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">6. Hosting & technische Dienstleister</h2>
            <p>
              Hosting: Unsere Website ist bei Vercel, Inc. (Vercel.com) gehostet. Vercel handelt als Auftragsverarbeiter (Processor). Datenübermittlungen in Drittländer (z. B. USA) können vorkommen; wir stützen uns auf geeignete Garantien wie die Standardvertragsklauseln (SCC).
            </p>
            <p>
              E-Mail/SMTP: Für den Versand von E-Mails und Reservierungsbestätigungen nutzen wir Gmail SMTP (Google LLC). Google ist ebenfalls Auftragsverarbeiter und verarbeitet Daten nur gemäß unseren Weisungen.
            </p>
            <p>
              Mit unseren Auftragsverarbeitern bestehen entsprechende AV-Verträge (Data Processing Agreements).
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">7. Weitergabe von Daten</h2>
            <p>
              Eine Weitergabe personenbezogener Daten an Dritte erfolgt nur, wenn:
            </p>
            <ul className="list-disc ml-6 mb-2">
              <li>sie zur Vertragserfüllung erforderlich ist,</li>
              <li>Sie zuvor eingewilligt haben, oder</li>
              <li>wir gesetzlich dazu verpflichtet sind.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">8. Speicherdauer</h2>
            <p>
              Personenbezogene Daten aus Kontakt- und Reservierungsformularen werden nur **während der Bearbeitung der jeweiligen Anfrage oder Reservierung** gespeichert und anschließend gelöscht. Server-Logdaten werden kurzfristig zur Fehleranalyse und Sicherheit gespeichert und danach anonymisiert oder gelöscht.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">9. Betroffenenrechte</h2>
            <ul className="list-disc ml-6 mb-2">
              <li>Auskunft (Art. 15),</li>
              <li>Berichtigung (Art. 16),</li>
              <li>Löschung (Art. 17),</li>
              <li>Einschränkung der Verarbeitung (Art. 18),</li>
              <li>Datenübertragbarkeit (Art. 20),</li>
              <li>Widerspruch (Art. 21) und</li>
              <li>Widerruf erteilter Einwilligungen.</li>
            </ul>
            <p>
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte per E-Mail an: <strong>info@RohrRitter-Minden.de</strong> oder telefonisch unter +49 5707 9325566.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">10. Datensicherheit</h2>
            <p>
              Wir treffen angemessene technische und organisatorische Maßnahmen (z. B. HTTPS, Zugriffsbeschränkungen), um die Daten vor Verlust, Manipulation und unberechtigtem Zugriff zu schützen.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">11. Änderungen dieser Datenschutzerklärung</h2>
            <p>
              Diese Datenschutzerklärung kann bei Bedarf angepasst werden. Die aktuelle Version ist unter dem oben genannten Stand-Datum verfügbar.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">12. Sonstiges</h2>
            <p>
              Falls Sie Fragen zur Verarbeitung Ihrer Daten haben, kontaktieren Sie uns bitte: <strong>info@RohrRitter-Minden.de</strong> oder telefonisch unter +49 5707 9325566.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
