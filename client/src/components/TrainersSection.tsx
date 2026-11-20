import { useEffect, useRef, useState } from "react";
import { MessageCircle } from "lucide-react";
import SafeImage from "@/components/SafeImage";
import { trainers, whatsappLink } from "@/data/academyData";

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function TrainersSection() {
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
    <section id="equipe" ref={sectionRef} className="bg-white py-24">
      <div className="container">
        <div
          className={`mb-14 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#65A30D]">
            Equipe
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-[#0E1012] lg:text-5xl">
            Personal Trainers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#5B616E]">
            Profissionais experientes para orientar, motivar e personalizar sua evolução.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {trainers.map((trainer, index) => (
            <article
              key={trainer.name}
              className={`group overflow-hidden rounded-3xl border border-[#E4E4E0] bg-[#F6F6F4] transition-all duration-500 hover:-translate-y-2 hover:border-[#A3E635]/40 hover:shadow-xl ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${100 + index * 100}ms` }}
            >
              <div className="relative h-80 overflow-hidden bg-[#171A1F]">
                <SafeImage
                  src={trainer.image}
                  alt={`${trainer.name} — ${trainer.specialty}`}
                  fallbackLabel={`${trainer.name} (${getInitials(trainer.name)})`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1012]/80 via-[#0E1012]/10 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#65A30D]">
                  {trainer.specialty}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-[#0E1012]">
                  {trainer.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5B616E]">
                  {trainer.bio}
                </p>
                <a
                  href={whatsappLink(
                    `Olá, Academia Pro! Gostaria de agendar uma sessão com ${trainer.name} (${trainer.specialty}).`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#D7D9D2] bg-white px-4 py-2 text-sm font-semibold text-[#0E1012] transition-all hover:border-[#A3E635] hover:bg-[#A3E635]/10"
                >
                  <MessageCircle size={16} />
                  Agendar Sessão
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
