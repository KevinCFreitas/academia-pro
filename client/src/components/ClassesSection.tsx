import { useEffect, useRef, useState } from "react";
import { Dumbbell, Wind, Zap, Users } from "lucide-react";

export default function ClassesSection() {
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

  const classes = [
    {
      icon: Dumbbell,
      name: "Musculação",
      description: "Treinamento com pesos para ganho de massa e força",
      color: "from-yellow-400 to-yellow-500",
    },
    {
      icon: Wind,
      name: "Funcional",
      description: "Exercicios que melhoram mobilidade e funcionalidade",
      color: "from-orange-400 to-orange-500",
    },
    {
      icon: Zap,
      name: "CrossFit",
      description: "Treinamento intenso e variado para resistencia",
      color: "from-red-400 to-red-500",
    },
    {
      icon: Users,
      name: "Aulas em Grupo",
      description: "Zumba, yoga, pilates e muito mais",
      color: "from-purple-400 to-purple-500",
    },
  ];

  return (
    <section
      id="classes"
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full opacity-5 blur-3xl" />

      <div className="container relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-yellow-500 font-bold text-sm uppercase tracking-wider">
            Modalidades
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mt-2">
            Aulas e Servicos
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Diversas opcoes de treinamento para todos os objetivos
          </p>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {classes.map((classItem, index) => {
            const Icon = classItem.icon;
            return (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${100 + index * 80}ms`,
                }}
              >
                <div className="group h-full">
                  <div
                    className={`bg-gradient-to-br ${classItem.color} p-8 rounded-2xl h-full flex flex-col items-center text-center text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer`}
                  >
                    <div className="mb-4 p-4 bg-white/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{classItem.name}</h3>
                    <p className="text-sm opacity-90">{classItem.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
