import { ArrowRight, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import SafeImage from "@/components/SafeImage";
import { heroImage, heroMetrics, whatsappLink } from "@/data/academyData";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string): void => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0E1012] pt-32 pb-20 text-[#F8FAFC]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(163,230,53,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_30%)]" />
      <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-[#A3E635]/10 blur-3xl" />

      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-[#D4D4D8]">
              <span className="h-2 w-2 rounded-full bg-[#A3E635]" />
              Centro de Treinamento & Performance
            </div>

            <h1 className="max-w-xl font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white lg:text-6xl">
              Transforme seu corpo em{" "}
              <span className="text-[#A3E635]">90 dias</span> com propósito.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#A1A1AA]">
              Estrutura moderna, metodologia consistente e acompanhamento
              profissional para você evoluir com força, saúde e confiança.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink(
                  "Olá, Academia Pro! Quero começar agora e agendar minha aula experimental."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#A3E635] px-8 py-4 font-bold text-[#0E1012] shadow-lg shadow-[#A3E635]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#84CC16]"
              >
                Começar Agora
                <ArrowRight size={18} />
              </a>
              <button
                type="button"
                onClick={() => scrollToSection("planos")}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-[#A3E635]/50 hover:bg-white/10"
              >
                Conhecer Planos
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {heroMetrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className="transition-all duration-500 hover:-translate-y-1"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <p className="font-mono text-3xl font-bold tabular-nums text-[#A3E635]">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-sm text-[#A1A1AA]">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-150 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] border border-white/10 bg-white/5 blur-sm" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 shadow-2xl">
                <SafeImage
                  src={heroImage}
                  alt="Treino de alta performance na Academia Pro"
                  fallbackLabel="Academia Pro — Treinamento de Performance"
                  className="h-[420px] w-full object-cover lg:h-[540px]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0E1012]/90 via-[#0E1012]/20 to-transparent p-6">
                  <p className="font-display text-lg font-semibold text-white">
                    Ambiente focado em resultado
                  </p>
                  <p className="text-sm text-[#D4D4D8]">
                    Equipamentos modernos, treinos inteligentes e evolução real.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-[#A3E635]/20 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
