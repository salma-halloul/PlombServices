import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        <div className="space-y-4">

          {/* Nom de l'entreprise */}
          <h3 className="text-2xl font-bold" style={{ color: '#1b5565' }}>
            Rohrritter Minden
          </h3>

          {/* Informations de contact */}
          <div className="space-y-2">
            <p>
              <a
                href="tel:+49 5707 9325566"
                className="text-md"
              >
                <strong>Tel:</strong> +49 5707 9325566
              </a>
            </p>
            <p>
              <a
                href="mailto:info@RohrRitter-Minden.de"
                className="text-md"
              >
                <strong>E-Mail:</strong> info@RohrRitter-Minden.de
              </a>
            </p>
          </div>

          {/* Séparateur */}
          <div className="border-t border-red-300 my-4"></div>

          {/* Liens légaux */}
          <div className="flex justify-center space-x-8 text-sm" style={{ color: '#d63231' }}>
            <Link href="/impressum" className="hover:text-yellow-400 transition-colors">
              Impressum
            </Link>
            <span>|</span>
            <Link href="/datenschutz" className="hover:text-yellow-400 transition-colors" style={{ color: '#d63231' }}>
              Datenschutz
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
