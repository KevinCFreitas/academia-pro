import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import EnrollmentModal from "@/components/EnrollmentModal";
import { plans, type Plan } from "@/data/academyData";

export default function PlansSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
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
      id="planos"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F6F6F4] py-24"
    >
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#A3E635]/10 blur-3xl" />
      <div className="container relative z-10">
        <div
          className={`mb-14 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#65A30D]">
            Planos e Matrícula
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-[#0E1012] lg:text-5xl">
            Escolha o plano ideal para você
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#5B616E]">
            Planos claros, comparáveis e pensados para diferentes fases da sua jornada de treino.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <article
              key={plan.id}
              className={`relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                plan.highlighted
                  ? "border-[#A3E635] bg-[#0E1012] text-[#F8FAFC] shadow-xl shadow-[#0E1012]/20 md:-translate-y-2"
                  : "border-[#E4E4E0] bg-white text-[#0E1012] shadow-sm"
              } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${100 + index * 100}ms` }}
            >
              {plan.highlighted && plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex rounded-full border border-[#A3E635]/40 bg-[#A3E635] px-4 py-1 text-xs font-bold uppercase tracking-wide text-[#0E1012] shadow">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display text-2xl font-bold">{plan.name}</h3>
                <p className={`mt-2 text-sm ${plan.highlighted ? "text-[#A1A1AA]" : "text-[#5B616E]"}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className={`font-mono text-4xl font-bold tabular-nums ${plan.highlighted ? "text-[#A3E635]" : "text-[#0E1012]"}`}>
                  {plan.price}
                </span>
                <span className={`ml-1 text-sm ${plan.highlighted ? "text-[#A1A1AA]" : "text-[#5B616E]"}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
                        plan.highlighted ? "bg-[#A3E635]/20 text-[#A3E635]" : "bg-[#A3E635]/15 text-[#4D7C0F]"
                      }`}
                    >
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span className={`text-sm ${plan.highlighted ? "text-[#E4E4E7]" : "text-[#3F4652]"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => setSelectedPlan(plan)}
                className={`w-full rounded-full px-6 py-3.5 font-bold transition-all duration-300 hover:-translate-y-0.5 ${
                  plan.highlighted
                    ? "bg-[#A3E635] text-[#0E1012] hover:bg-[#84CC16]"
                    : "border border-[#D7D9D2] bg-[#F6F6F4] text-[#0E1012] hover:border-[#A3E635] hover:bg-white"
                }`}
              >
                Contratar Agora
              </button>
            </article>
          ))}
        </div>
      </div>

      <EnrollmentModal
        plan={selectedPlan}
        open={selectedPlan !== null}
        onClose={() => setSelectedPlan(null)}
      />
    </section>
  );
}
