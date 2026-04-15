import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Ola! Meu nome eh ${formData.name} e meu telefone eh ${formData.phone}. Gostaria de saber mais sobre os planos.`;
    window.open(
      `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    setFormData({ name: "", phone: "" });
  };

  return (
    <section
      id="contact"
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
            Fale Conosco
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mt-2">
            Estamos prontos para ajudar
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-8">
              {/* Location */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                    <MapPin size={24} className="text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-black mb-1">Localizacao</h3>
                  <p className="text-gray-600">
                    Rua das Academias, 123
                    <br />
                    Sao Paulo - SP, 01234-567
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                    <Phone size={24} className="text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-black mb-1">Telefone</h3>
                  <p className="text-gray-600">
                    <a href="tel:+5511999999999" className="hover:text-yellow-500">
                      (11) 99999-9999
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                    <Mail size={24} className="text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-black mb-1">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:contato@academiapro.com.br" className="hover:text-yellow-500">
                      contato@academiapro.com.br
                    </a>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="font-bold text-black mb-3">Horario de Funcionamento</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Segunda a Sexta: 06:00 - 23:00</p>
                  <p>Sabado: 08:00 - 20:00</p>
                  <p>Domingo: 08:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-black mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-black mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Enviar pelo WhatsApp
              </button>

              <p className="text-xs text-gray-500 text-center">
                Responderemos em ate 1 hora durante o horario comercial
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
