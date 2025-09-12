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
            <p className="text-md">
              <strong>Tel:</strong> 030 5891 9120
            </p>
            <p className="text-md">
              <strong>E-Mail:</strong> info@ccrohrreinigung.de
            </p>
          </div>

          {/* Séparateur */}
          <div className="border-t border-yellow-300 my-4"></div>

          {/* Liens légaux */}
          <div className="flex justify-center space-x-8 text-sm" style={{ color: '#f4b34f' }}>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              Impressum
            </a>
            <span>|</span>
            <a href="#" className="hover:text-yellow-400 transition-colors" style={{ color: '#f4b34f' }}>
              Datenschutz
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
