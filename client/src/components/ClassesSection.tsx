import { useEffect, useRef, useState } from "react";
import { Dumbbell, Flame, Users, Wind } from "lucide-react";
import { modalities } from "@/data/academyData";

const icons = {
  dumbbell: Dumbbell,
  wind: Wind,
  flame: Flame,
  users: Users,
};

export default function ClassesSection() {
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
      id="modalidades"
      ref={sectionRef}
      className="bg-white py-24"
    >
      <div className="container">
        <div
          className={`mb-14 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#65A30D]">
            Modalidades
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-[#0E1012] lg:text-5xl">
            Aulas e Serviços
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#5B616E]">
            Opções de treino para diferentes objetivos, com método, intensidade e
            acompanhamento na medida certa.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {modalities.map((modality, index) => {
            const Icon = icons[modality.icon];
            return (
              <article
                key={modality.name}
                className={`group rounded-2xl border border-[#E4E4E0] bg-[#F6F6F4] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#A3E635]/50 hover:bg-white hover:shadow-lg ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${100 + index * 80}ms` }}
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#A3E635]/15 text-[#4D7C0F] transition-colors group-hover:bg-[#A3E635] group-hover:text-[#0E1012]">
                    <Icon size={22} />
                  </div>
                  <span className="rounded-full border border-[#D7D9D2] bg-white px-3 py-1 text-xs font-semibold text-[#3F4652]">
                    {modality.focus}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-[#0E1012]">
                  {modality.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5B616E]">
                  {modality.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
