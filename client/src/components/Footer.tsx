import { Clock, Dumbbell, Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contactInfo, navItems, whatsappLink } from "@/data/academyData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0E1012] text-[#F8FAFC]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(163,230,53,0.12),transparent_35%)]" />
      <div className="container relative z-10 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#A3E635] text-[#0E1012]">
                <Dumbbell size={20} strokeWidth={2.5} />
              </div>
              <span className="font-display text-xl font-bold">Academia Pro</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#A1A1AA]">
              Centro de treinamento e performance focado em resultados reais, com método, estrutura e acompanhamento profissional.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#F8FAFC] transition-all hover:-translate-y-0.5 hover:border-[#A3E635]/50 hover:text-[#A3E635]"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#F8FAFC] transition-all hover:-translate-y-0.5 hover:border-[#A3E635]/50 hover:text-[#A3E635]"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={whatsappLink("Olá, Academia Pro! Gostaria de mais informações.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#F8FAFC] transition-all hover:-translate-y-0.5 hover:border-[#A3E635]/50 hover:text-[#A3E635]"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-[#A3E635]">Navegação</h4>
            <ul className="mt-4 space-y-2 text-sm text-[#A1A1AA]">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="transition-colors hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/login" className="transition-colors hover:text-white">
                  Área do Aluno
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-[#A3E635]">Contato</h4>
            <ul className="mt-4 space-y-3 text-sm text-[#A1A1AA]">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-[#A3E635]" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0 text-[#A3E635]" />
                <a href={contactInfo.phoneHref} className="transition-colors hover:text-white">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0 text-[#A3E635]" />
                <a href={contactInfo.emailHref} className="transition-colors hover:text-white">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-[#A3E635]">Horários</h4>
            <ul className="mt-4 space-y-2 text-sm text-[#A1A1AA]">
              {contactInfo.hours.map((hour) => (
                <li key={hour} className="flex items-start gap-2">
                  <Clock size={16} className="mt-0.5 flex-shrink-0 text-[#A3E635]" />
                  <span>{hour}</span>
                </li>
              ))}
            </ul>
            <a
              href={whatsappLink("Olá, Academia Pro! Quero agendar uma aula experimental.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#A3E635] px-4 py-2.5 text-sm font-bold text-[#0E1012] transition-all hover:bg-[#84CC16]"
            >
              <MessageCircle size={16} />
              Agendar Aula
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-[#71717A] md:flex-row">
          <p>© {year} Academia Pro. Todos os direitos reservados.</p>
          <p>Treinamento, performance e consistência.</p>
        </div>
      </div>
    </footer>
  );
}
