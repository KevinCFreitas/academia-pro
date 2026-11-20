import { useEffect, useRef, useState } from "react";
import { Dumbbell, Users, Zap } from "lucide-react";
import SafeImage from "@/components/SafeImage";
import { aboutFeatures, aboutImage } from "@/data/academyData";

const icons = {
  dumbbell: Dumbbell,
  users: Users,
  zap: Zap,
};

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F6F6F4] py-24"
    >
      <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-[#A3E635]/10 blur-3xl" />
      <div className="container relative z-10">
        <div
          className={`mb-14 max-w-2xl transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#65A30D]">
            Sobre a Academia
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-[#0E1012] lg:text-5xl">
            Por que escolher a Academia Pro?
          </h2>
          <p className="mt-4 text-lg text-[#5B616E]">
            Uma experiência de treino completa, com estrutura, método e pessoas
            que levam a sua evolução a sério.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-[1.75rem] border border-[#E4E4E0] bg-white" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-[#E4E4E0] shadow-xl">
                <SafeImage
                  src={aboutImage}
                  alt="Instalações modernas da Academia Pro"
                  fallbackLabel="Instalações da Academia Pro"
                  className="h-[420px] w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <div className="rounded-3xl border border-[#E4E4E0] bg-white p-8 shadow-sm lg:p-10">
              <h3 className="font-display text-2xl font-bold text-[#0E1012]">
                Transformação com Propósito
              </h3>
              <p className="mt-4 leading-relaxed text-[#5B616E]">
                Há mais de 12 anos, nossa missão é oferecer um ambiente
                profissional, acolhedor e motivador, onde cada aluno encontra o
                suporte necessário para alcançar resultados reais e duradouros.
              </p>

              <div className="mt-8 space-y-5">
                {aboutFeatures.map((feature, index) => {
                  const Icon = icons[feature.icon];
                  return (
                    <div
                      key={feature.title}
                      className={`flex gap-4 transition-all duration-500 ${
                        isVisible ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                      }`}
                      style={{ transitionDelay: `${300 + index * 100}ms` }}
                    >
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#A3E635]/15 text-[#4D7C0F]">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h4 className="font-display text-lg font-semibold text-[#0E1012]">
                          {feature.title}
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed text-[#5B616E]">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
