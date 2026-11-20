import { Dumbbell, Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { navItems, whatsappLink } from "@/data/academyData";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const primaryCta = whatsappLink(
    "Olá, Academia Pro! Gostaria de agendar uma aula experimental."
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#E4E4E0]/80 bg-[#F6F6F4]/90 backdrop-blur-md">
        <div className="container flex h-20 items-center justify-between">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 text-left"
            aria-label="Ir para o início"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#A3E635] text-[#0E1012] shadow-sm">
              <Dumbbell size={20} strokeWidth={2.5} />
            </div>
            <span className="font-display text-lg font-bold tracking-tight text-[#0E1012]">
              Academia Pro
            </span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="group relative px-4 py-2 text-sm font-medium text-[#3F4652] transition-colors hover:text-[#0E1012]"
              >
                {item.label}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 origin-left scale-x-0 bg-[#A3E635] transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="/login"
              className="inline-flex items-center rounded-full border border-[#D7D9D2] bg-white px-4 py-2 text-sm font-semibold text-[#0E1012] transition-all hover:border-[#A3E635] hover:bg-[#F6F6F4]"
            >
              Área do Aluno
            </a>
            <a
              href={primaryCta}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#A3E635] px-4 py-2 text-sm font-bold text-[#0E1012] shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#84CC16] hover:shadow-md"
            >
              <MessageCircle size={16} />
              Agendar Aula
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex rounded-lg p-2 text-[#0E1012] transition-colors hover:bg-white md:hidden"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-[#E4E4E0] bg-[#F6F6F4] md:hidden animate-fadeInUp">
            <nav className="container flex flex-col py-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="rounded-lg px-3 py-3 text-left text-sm font-medium text-[#3F4652] transition-colors hover:bg-white hover:text-[#0E1012]"
                >
                  {item.label}
                </button>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-[#E4E4E0] pt-3">
                <a
                  href="/login"
                  className="rounded-lg border border-[#D7D9D2] bg-white px-4 py-3 text-center text-sm font-semibold text-[#0E1012]"
                >
                  Área do Aluno / Entrar
                </a>
                <a
                  href={primaryCta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#A3E635] px-4 py-3 text-sm font-bold text-[#0E1012]"
                >
                  <MessageCircle size={16} />
                  Agendar Aula Experimental
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      <a
        href={whatsappLink("Olá, Academia Pro! Gostaria de saber mais sobre os planos.")}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#A3E635] text-[#0E1012] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl animate-fadeInUp animate-pulse-accent"
        style={{ animationDelay: "0.3s" }}
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </>
  );
}
