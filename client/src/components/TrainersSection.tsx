import { useEffect, useRef, useState } from "react";

export default function TrainersSection() {
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

  const trainers = [
    {
      name: "Carlos Silva",
      specialty: "Hipertrofia",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663241647868/nKoDBegxXWcUWFrCoQrWiu/personal-trainer-professional-giHyzPsCpzymiz8AHn5KXU.webp",
      bio: "Especialista em ganho de massa muscular com 8 anos de experiencia",
    },
    {
      name: "Ana Costa",
      specialty: "Emagrecimento",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663241647868/nKoDBegxXWcUWFrCoQrWiu/personal-trainer-professional-giHyzPsCpzymiz8AHn5KXU.webp",
      bio: "Especialista em transformacao fisica e perda de peso sustentavel",
    },
    {
      name: "Roberto Dias",
      specialty: "Funcional",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663241647868/nKoDBegxXWcUWFrCoQrWiu/personal-trainer-professional-giHyzPsCpzymiz8AHn5KXU.webp",
      bio: "Treinador de mobilidade e funcionalidade com certificacao internacional",
    },
  ];

  return (
    <section
      id="trainers"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full opacity-5 blur-3xl" />

      <div className="container relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-yellow-500 font-bold text-sm uppercase tracking-wider">
            Nossos Profissionais
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mt-2">
            Conheça nossos Personal Trainers
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Profissionais certificados e experientes prontos para ajudar você
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${100 + index * 100}ms`,
              }}
            >
              <div className="group cursor-pointer">
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-2xl mb-6 h-80 bg-gray-200">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-6">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm">{trainer.bio}</p>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-black mb-1">{trainer.name}</h3>
                  <p className="text-yellow-500 font-semibold mb-3">{trainer.specialty}</p>
                  <a
                    href="https://wa.me/5511999999999?text=Ola%20Academia%20Pro!%20Gostaria%20de%20agendar%20uma%20sessao%20com%20personal."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
                  >
                    Agendar Sessão
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
