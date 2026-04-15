import { useEffect, useRef, useState } from "react";
import { Mail, CheckCircle } from "lucide-react";

export default function NewsletterSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
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

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Por favor, insira seu email");
      return;
    }

    if (!validateEmail(email)) {
      setError("Email invalido. Por favor, tente novamente");
      return;
    }

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const storedEmails = localStorage.getItem("newsletterEmails");
      const emails = storedEmails ? JSON.parse(storedEmails) : [];

      if (emails.includes(email)) {
        setError("Este email ja esta inscrito");
        setIsLoading(false);
        return;
      }

      emails.push(email);
      localStorage.setItem("newsletterEmails", JSON.stringify(emails));

      setIsSubmitted(true);
      setEmail("");

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError("Erro ao inscrever. Tente novamente");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="newsletter"
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-black to-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full opacity-5 blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-block mb-4">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                <Mail size={32} className="text-black" />
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">
              Receba dicas exclusivas
            </h2>
            <p className="text-gray-300 mt-4 text-lg">
              Inscreva-se em nossa newsletter e receba dicas de treino, nutricao e
              motivacao direto no seu email. Alem disso, ganhe um desconto especial
              para sua primeira aula!
            </p>
          </div>

          {/* Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {isSubmitted ? (
              <div className="bg-green-500/20 border-2 border-green-500 rounded-2xl p-8 text-center animate-scaleIn">
                <div className="flex justify-center mb-4">
                  <CheckCircle size={48} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Inscricao realizada com sucesso!
                </h3>
                <p className="text-gray-300">
                  Verifique seu email para confirmar a inscricao e receber seu desconto
                  especial de 10% na primeira aula.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    placeholder="Seu melhor email"
                    className="flex-1 px-6 py-4 rounded-lg bg-white/10 border-2 border-white/20 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-all duration-300"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {isLoading ? "Inscrevendo..." : "Inscrever-se"}
                  </button>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="text-red-400 text-sm font-medium animate-fadeInUp">
                    {error}
                  </div>
                )}

                {/* Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                    Dicas semanais
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                    Promocoes exclusivas
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                    Sem spam
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Privacy Notice */}
          <p className="text-center text-gray-400 text-xs mt-8">
            Respeitamos sua privacidade. Desinscreva-se a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
}
