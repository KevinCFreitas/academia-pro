import { useEffect, useRef, useState } from "react";
import { CheckCircle, Mail } from "lucide-react";

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
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const validateEmail = (value: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Por favor, insira seu e-mail.");
      return;
    }
    if (!validateEmail(email)) {
      setError("E-mail inválido. Verifique e tente novamente.");
      return;
    }

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      const stored = localStorage.getItem("newsletterEmails");
      const emails: string[] = stored ? (JSON.parse(stored) as string[]) : [];
      if (emails.includes(email)) {
        setError("Este e-mail já está inscrito.");
        return;
      }
      emails.push(email);
      localStorage.setItem("newsletterEmails", JSON.stringify(emails));
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch {
      setError("Não foi possível concluir a inscrição. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="newsletter"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0E1012] py-24 text-[#F8FAFC]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(163,230,53,0.15),transparent_35%)]" />
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl">
          <div
            className={`text-center transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#A3E635]/15 text-[#A3E635]">
              <Mail size={26} />
            </div>
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#A3E635]">
              Comunidade Academia Pro
            </span>
            <h2 className="mt-3 font-display text-4xl font-extrabold text-white lg:text-5xl">
              Receba dicas e novidades
            </h2>
            <p className="mt-4 text-lg text-[#A1A1AA]">
              Conteúdos sobre treino, performance e bem-estar, além de condições especiais para alunos e novos membros.
            </p>
          </div>

          <div
            className={`mt-10 transition-all duration-700 delay-150 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {isSubmitted ? (
              <div className="rounded-3xl border border-[#A3E635]/30 bg-[#A3E635]/10 p-8 text-center animate-scaleIn">
                <CheckCircle size={44} className="mx-auto text-[#A3E635]" />
                <h3 className="mt-4 font-display text-2xl font-bold text-white">
                  Inscrição realizada com sucesso!
                </h3>
                <p className="mt-2 text-[#D4D4D8]">
                  Em breve você receberá nossos conteúdos e novidades no seu e-mail.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Seu e-mail
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    placeholder="Seu melhor e-mail"
                    className="flex-1 rounded-full border border-white/15 bg-[#171A1F] px-5 py-3.5 text-white placeholder:text-[#71717A] focus:border-[#A3E635] focus:outline-none focus:ring-2 focus:ring-[#A3E635]/30"
                    disabled={isLoading}
                    autoComplete="email"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="rounded-full bg-[#A3E635] px-7 py-3.5 font-bold text-[#0E1012] transition-all hover:bg-[#84CC16] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isLoading ? "Inscrevendo..." : "Inscrever-se"}
                  </button>
                </div>
                {error && <p className="mt-3 text-sm font-medium text-red-400 animate-fadeInUp">{error}</p>}
                <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[#A1A1AA]">
                  <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#A3E635]" />Dicas de treino</span>
                  <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#A3E635]" />Novidades e ofertas</span>
                  <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#A3E635]" />Sem spam</span>
                </div>
              </form>
            )}
            <p className="mt-6 text-center text-xs text-[#71717A]">
              Respeitamos sua privacidade. Você pode cancelar a inscrição quando quiser.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
