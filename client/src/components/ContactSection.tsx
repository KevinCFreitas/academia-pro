import { useEffect, useRef, useState } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contactInfo, whatsappLink } from "@/data/academyData";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const message = `Olá, Academia Pro! Meu nome é ${formData.name} e meu telefone é ${formData.phone}. Gostaria de saber mais sobre os planos e agendar uma visita.`;
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setFormData({ name: "", phone: "" });
  };

  return (
    <section id="contato" ref={sectionRef} className="bg-white py-24">
      <div className="container">
        <div
          className={`mb-14 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#65A30D]">
            Contato
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-[#0E1012] lg:text-5xl">
            Fale com a Academia Pro
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#5B616E]">
            Tire suas dúvidas, conheça a estrutura e dê o primeiro passo na sua evolução.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div
            className={`space-y-5 transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="rounded-3xl border border-[#E4E4E0] bg-[#F6F6F4] p-6 sm:p-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#A3E635]/15 text-[#4D7C0F]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-[#0E1012]">Localização</h3>
                    <p className="mt-1 text-sm text-[#5B616E]">{contactInfo.address}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#A3E635]/15 text-[#4D7C0F]">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-[#0E1012]">Telefone e WhatsApp</h3>
                    <a href={contactInfo.phoneHref} className="mt-1 block text-sm text-[#5B616E] hover:text-[#0E1012]">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#A3E635]/15 text-[#4D7C0F]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-[#0E1012]">E-mail</h3>
                    <a href={contactInfo.emailHref} className="mt-1 block text-sm text-[#5B616E] hover:text-[#0E1012]">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-[#E4E4E0] bg-[#0E1012] p-6 text-[#F8FAFC] sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#A3E635]/15 text-[#A3E635]">
                  <Clock size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold">Horário de Funcionamento</h3>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-[#D4D4D8]">
                {contactInfo.hours.map((hour) => (
                  <li key={hour} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#A3E635]" />
                    {hour}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink("Olá, Academia Pro! Gostaria de falar com a equipe.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#A3E635] px-5 py-3 font-bold text-[#0E1012] transition-all hover:bg-[#84CC16]"
              >
                <MessageCircle size={18} />
                Falar no WhatsApp
              </a>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-150 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <form onSubmit={handleSubmit} className="h-full rounded-3xl border border-[#E4E4E0] bg-[#F6F6F4] p-6 shadow-sm sm:p-8">
              <h3 className="font-display text-2xl font-bold text-[#0E1012]">Agende uma visita</h3>
              <p className="mt-2 text-sm text-[#5B616E]">
                Preencha seus dados e nossa equipe retornará pelo WhatsApp.
              </p>
              <div className="mt-8 space-y-5">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-[#0E1012]">
                    Nome
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-[#D7D9D2] bg-white px-4 py-3 text-[#0E1012] placeholder:text-[#A1A1AA] focus:border-[#A3E635] focus:outline-none focus:ring-2 focus:ring-[#A3E635]/30"
                    placeholder="Seu nome completo"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="mb-2 block text-sm font-semibold text-[#0E1012]">
                    Telefone
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl border border-[#D7D9D2] bg-white px-4 py-3 text-[#0E1012] placeholder:text-[#A1A1AA] focus:border-[#A3E635] focus:outline-none focus:ring-2 focus:ring-[#A3E635]/30"
                    placeholder="(11) 99999-9999"
                    autoComplete="tel"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#A3E635] px-6 py-4 font-bold text-[#0E1012] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#84CC16]"
                >
                  <MessageCircle size={18} />
                  Enviar pelo WhatsApp
                </button>
                <p className="text-center text-xs text-[#5B616E]">
                  Atendimento rápido durante o horário de funcionamento.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
