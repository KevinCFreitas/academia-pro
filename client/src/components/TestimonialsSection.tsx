import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
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

  const testimonials = [
    {
      name: "Jessica Oliveira",
      transformation: "Perdeu 12kg em 4 meses",
      text: "Comecei sem esperancas, mas o acompanhamento dos professores foi incrivel. Hoje me sinto muito melhor e mais confiante.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663241647868/nKoDBegxXWcUWFrCoQrWiu/testimonial-jessica-oliveira-QKht2Ddr7vWvydL9kdFca4.webp",
      rating: 5,
    },
    {
      name: "Rafael Gomes",
      transformation: "Ganhou 8kg de musculo",
      text: "Melhor investimento que fiz. A Academia Pro tem tudo: equipamentos, profissionais e ambiente motivador.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663241647868/nKoDBegxXWcUWFrCoQrWiu/testimonial-rafael-gomes-5Xcq5faU9DnCNBwxpwcSBP.webp",
      rating: 5,
    },
    {
      name: "Marina Silva",
      transformation: "Recuperou mobilidade",
      text: "Apos a cirurgia, pensei que nao conseguiria mais treinar. Os profissionais adaptaram tudo para mim.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663241647868/nKoDBegxXWcUWFrCoQrWiu/trainer-marina-costa-FqUqimwmjnZnHeLjSqKxUY.webp",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
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
            Historias de Sucesso
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mt-2">
            Veja as transformacoes dos nossos alunos
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${100 + index * 100}ms`,
              }}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                  </div>

                  {/* Transformation */}
                  <p className="text-yellow-500 font-bold text-sm mb-3">
                    {testimonial.transformation}
                  </p>

                  {/* Text */}
                  <p className="text-gray-600 text-sm mb-4 flex-1">
                    "{testimonial.text}"
                  </p>

                  {/* Name */}
                  <p className="font-bold text-black">{testimonial.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            transitionDelay: "400ms",
          }}
        >
          <p className="text-gray-600 mb-4">Voce tambem pode ter uma historia de sucesso</p>
          <a
            href="https://wa.me/5511999999999?text=Ola%20Academia%20Pro!%20Gostaria%20de%20comecas%20minha%20transformacao."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
          >
            Comece Agora
          </a>
        </div>
      </div>
    </section>
  );
}
