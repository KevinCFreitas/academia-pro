import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import SafeImage from "@/components/SafeImage";
import { testimonials, whatsappLink } from "@/data/academyData";

export default function TestimonialsSection() {
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
      id="depoimentos"
      ref={sectionRef}
      className="bg-[#F6F6F4] py-24"
    >
      <div className="container">
        <div
          className={`mb-14 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#65A30D]">
            Histórias de Sucesso
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-[#0E1012] lg:text-5xl">
            Resultados que inspiram consistência
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#5B616E]">
            Evolução real de alunos que treinaram com método, acompanhamento e propósito.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className={`flex h-full flex-col overflow-hidden rounded-3xl border border-[#E4E4E0] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${100 + index * 100}ms` }}
            >
              <div className="relative h-52 overflow-hidden bg-[#171A1F]">
                <SafeImage
                  src={testimonial.image}
                  alt={testimonial.name}
                  fallbackLabel={testimonial.name}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1012]/50 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex gap-1" aria-label={`${testimonial.rating} de 5 estrelas`}>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-[#A3E635] text-[#A3E635]" />
                  ))}
                </div>
                <p className="text-sm font-semibold text-[#65A30D]">{testimonial.transformation}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5B616E]">
                  “{testimonial.text}”
                </p>
                <p className="mt-5 font-display font-bold text-[#0E1012]">{testimonial.name}</p>
              </div>
            </article>
          ))}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "350ms" }}
        >
          <p className="text-[#5B616E]">Pronto para escrever a sua própria história?</p>
          <a
            href={whatsappLink(
              "Olá, Academia Pro! Quero começar minha transformação e saber mais sobre os planos."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-[#A3E635] px-8 py-3.5 font-bold text-[#0E1012] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#84CC16]"
          >
            Começar Agora
          </a>
        </div>
      </div>
    </section>
  );
}
