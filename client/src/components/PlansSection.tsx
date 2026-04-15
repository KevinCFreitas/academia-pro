import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

export default function PlansSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      name: "Mensal",
      price: "R$ 99",
      period: "/mês",
      description: "Perfeito para começar",
      features: [
        "Acesso à academia",
        "Equipamentos completos",
        "Aulas em grupo",
        "Suporte básico",
      ],
      highlighted: false,
    },
    {
      name: "Trimestral",
      price: "R$ 249",
      period: "/3 meses",
      description: "Mais escolhido",
      features: [
        "Tudo do plano mensal",
        "1 sessão com personal",
        "Avaliação física",
        "Suporte prioritário",
        "Desconto em produtos",
      ],
      highlighted: true,
    },
    {
      name: "Anual",
      price: "R$ 799",
      period: "/ano",
      description: "Melhor economia",
      features: [
        "Tudo do plano trimestral",
        "4 sessões com personal",
        "Planejamento nutricional",
        "Acompanhamento mensal",
        "Acesso VIP a eventos",
      ],
      highlighted: false,
    },
  ];

  return (
    <section
      id="plans"
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full opacity-5 blur-3xl" />

      <div className="container relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-yellow-500 font-bold text-sm uppercase tracking-wider">
            Planos
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mt-2">
            Escolha o plano ideal para você
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Todos os planos incluem acesso completo à academia e suporte profissional
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${100 + index * 100}ms`,
              }}
            >
              <div
                className={`relative h-full rounded-2xl transition-all duration-500 ${
                  plan.highlighted
                    ? "bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-2xl scale-105 md:scale-110 hover:shadow-2xl"
                    : "bg-gray-50 shadow-lg hover:shadow-2xl"
                } p-8 transform hover:-translate-y-3`}
              >
                {/* Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-black text-yellow-400 px-4 py-1 rounded-full text-sm font-bold">
                      Mais Escolhido
                    </span>
                  </div>
                )}

                {/* Plan Name */}
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    plan.highlighted ? "text-black" : "text-black"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${
                    plan.highlighted ? "text-black/70" : "text-gray-600"
                  }`}
                >
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <span
                    className={`text-4xl font-bold ${
                      plan.highlighted ? "text-black" : "text-yellow-500"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.highlighted ? "text-black/70" : "text-gray-600"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className={`flex items-center gap-3 ${
                        plan.highlighted ? "text-black" : "text-gray-700"
                      }`}
                    >
                      <Check
                        size={20}
                        className={
                          plan.highlighted ? "text-black" : "text-yellow-500"
                        }
                      />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="https://wa.me/5511999999999?text=Ola%20Academia%20Pro!%20Gostaria%20de%20contratar%20o%20plano%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 rounded-lg font-bold transition-all duration-300 text-center ${
                    plan.highlighted
                      ? "bg-black text-yellow-400 hover:bg-gray-900"
                      : "bg-yellow-400 text-black hover:bg-yellow-500"
                  }`}
                >
                  Contratar Agora
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
