import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-900 rounded-full opacity-5 blur-3xl" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-block">
                <span className="px-4 py-2 bg-yellow-100 text-yellow-700 font-semibold text-sm rounded-full">
                  🔥 Transformação Garantida
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
                Transforme seu corpo em{" "}
                <span className="text-yellow-400">90 dias</span>
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed">
                Equipamentos modernos, personal trainers especializados e acompanhamento
                profissional. Tudo que você precisa para alcançar seus objetivos.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="transition-all duration-500 hover:scale-110">
                  <p className="text-3xl font-bold text-yellow-400">500+</p>
                  <p className="text-sm text-gray-600">Alunos Ativos</p>
                </div>
                <div className="transition-all duration-500 hover:scale-110">
                  <p className="text-3xl font-bold text-yellow-400">98%</p>
                  <p className="text-sm text-gray-600">Satisfação</p>
                </div>
                <div className="transition-all duration-500 hover:scale-110">
                  <p className="text-3xl font-bold text-yellow-400">12+</p>
                  <p className="text-sm text-gray-600">Anos Experiência</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                  href="https://wa.me/5511999999999?text=Ola%20Academia%20Pro!%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Começar Agora
                  <ArrowRight size={20} />
                </a>
                <button
                  onClick={() => {
                    const element = document.getElementById("about");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-black text-black font-bold rounded-lg hover:bg-black hover:text-white transition-all duration-300"
                >
                  Conhecer Mais
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Image with clip-path diagonal */}
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663241647868/nKoDBegxXWcUWFrCoQrWiu/hero-gym-training-oXH8MFPDqzW43mnTVA6mBy.webp"
                alt="Academia Pro - Treinamento"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                style={{
                  clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 92%)",
                }}
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-2xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-gray-900 rounded-full opacity-10 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
