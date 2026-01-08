"use client";

import React from "react";

export const metadata = {
  robots: "noindex",
};

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8" style={{ color: "#1b5565" }}>
          Impressum
        </h1>
        <div className="space-y-8 text-gray-800 text-md">
          <section>
            <h2 className="font-semibold text-lg mb-2">Firma / Hauptniederlassung</h2>
            <p>
              ZJ Serviceunternehmen UG (haftungsbeschränkt)<br />
              Hauptstraße 8<br />
              32457 Porta Westfalica
            </p>
            <p>
              Handelsregister: HRB [Platzhalter]<br />
              Registergericht: Amtsgericht [Platzhalter]
            </p>
            <p>
              Vertretungsberechtigter Geschäftsführer:<br />
              Basit Ahmady
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">Kontakt</h2>
            <p>
              Telefon: +49 5707 9325566<br />
              E-Mail: info@RohrRitter-Minden.de
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              [Platzhalter]
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">Aufsichtsbehörde</h2>
            <p>
              Handwerkskammer [Platzhalter]
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">Angaben zur Betriebshaftpflichtversicherung</h2>
            <p>
              Name und Sitz des Versicherers: [Platzhalter]<br />
              Geltungsbereich der Versicherung: Deutschland
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              Basit Ahmady<br />
              Hauptstraße 8<br />
              32457 Porta Westfalica
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">Information gem. § 36 VSBG</h2>
            <p>
              Die Online-Streitbeilegungs-Plattform der EU-Kommission finden Sie hier:<br />
              <a
                href="https://www.verbraucher-schlichter.de/start"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline"
              >
                https://www.verbraucher-schlichter.de/start
              </a>
            </p>
            <p>
              Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
            <p>
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
