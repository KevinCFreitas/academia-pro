import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Sobre", id: "about" },
    { label: "Planos", id: "plans" },
    { label: "Professores", id: "trainers" },
    { label: "Aulas", id: "classes" },
    { label: "Depoimentos", id: "testimonials" },
    { label: "Newsletter", id: "newsletter" },
    { label: "Contato", id: "contact" },
  ];

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center font-bold text-black">
              💪
            </div>
            <span className="font-bold text-xl text-black hidden sm:inline">Academia Pro</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-yellow-500 transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/login"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Entrar
            </a>
            <a
              href="https://wa.me/5511999999999?text=Ola%20Academia%20Pro!%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 animate-fadeInUp">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-3 text-left font-medium text-gray-700 hover:bg-gray-50 hover:text-yellow-500 transition-colors border-b border-gray-100"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="/login"
                className="px-4 py-3 text-left font-bold text-blue-600 bg-blue-50 border-b border-gray-100"
              >
                Entrar
              </a>
              <a
                href="https://wa.me/5511999999999?text=Ola%20Academia%20Pro!%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 text-left font-bold text-yellow-500 bg-yellow-50 flex items-center gap-2"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5511999999999?text=Ola%20Academia%20Pro!%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-fadeInUp animate-pulse-yellow"
        style={{ animationDelay: "0.3s" }}
      >
        <MessageCircle size={28} className="text-black" />
      </a>
    </>
  );
}
