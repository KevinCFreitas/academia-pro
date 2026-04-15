import { useEffect, useRef, useState } from "react";
import { Dumbbell, Users, Zap } from "lucide-react";

export default function AboutSection() {
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

  const features = [
    {
      icon: Dumbbell,
      title: "Equipamentos Modernos",
      description: "Máquinas de última geração importadas e mantidas regularmente",
    },
    {
      icon: Users,
      title: "Personal Trainers",
      description: "Profissionais certificados e especializados em diferentes áreas",
    },
    {
      icon: Zap,
      title: "Aulas Variadas",
      description: "Musculação, funcional, cross, yoga e muito mais",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-yellow-400 rounded-full opacity-5 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-900 rounded-full opacity-5 blur-3xl" />

      <div className="container relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-yellow-500 font-bold text-sm uppercase tracking-wider">
            Sobre Nós
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mt-2">
            Por que escolher a Academia Pro?
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663241647868/nKoDBegxXWcUWFrCoQrWiu/gym-facility-modern-C39NtXws7iMq6pmPebguCr.webp"
              alt="Instalacoes Academia Pro"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              style={{
                clipPath: "polygon(0 0, 100% 8%, 100% 100%, 0 92%)",
              }}
            />
          </div>

          {/* Right Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">
                  Transformacao com Proposito
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ha 12 anos ajudando pessoas a alcançarem seus objetivos. Nossa missao eh
                  proporcionar um ambiente acolhedor, profissional e motivador onde cada
                  aluno possa se transformar.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className={`flex gap-4 transition-all duration-500 ${
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                      }`}
                      style={{
                        transitionDelay: `${300 + index * 100}ms`,
                      }}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                          <Icon size={24} className="text-black" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-black mb-1">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
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
