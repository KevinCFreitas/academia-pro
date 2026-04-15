import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full opacity-5 blur-3xl" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center font-bold text-black">
                💪
              </div>
              <span className="font-bold text-lg">Academia Pro</span>
            </div>
            <p className="text-gray-400 text-sm">
              Transformando vidas atraves do treinamento profissional e dedicacao.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Links Rapidos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#home" className="hover:text-yellow-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-yellow-400 transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#plans" className="hover:text-yellow-400 transition-colors">
                  Planos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Servicos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#classes" className="hover:text-yellow-400 transition-colors">
                  Musculacao
                </a>
              </li>
              <li>
                <a href="#classes" className="hover:text-yellow-400 transition-colors">
                  Funcional
                </a>
              </li>
              <li>
                <a href="#classes" className="hover:text-yellow-400 transition-colors">
                  CrossFit
                </a>
              </li>
              <li>
                <a href="#trainers" className="hover:text-yellow-400 transition-colors">
                  Personal Trainer
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-yellow-400" />
                <span>Rua das Academias, 123</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-yellow-400" />
                <a href="tel:+5511999999999" className="hover:text-yellow-400">
                  (11) 99999-9999
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-yellow-400" />
                <a href="mailto:contato@academiapro.com.br" className="hover:text-yellow-400">
                  contato@academiapro.com.br
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Social Links */}
          <div className="flex items-center justify-between flex-col md:flex-row gap-6">
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform"
              >
                <Twitter size={18} />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-400">
              &copy; 2024 Academia Pro. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
