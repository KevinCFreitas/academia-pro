import { MessageCircle, X } from "lucide-react";
import type { Plan } from "@/data/academyData";
import { contactInfo, whatsappLink } from "@/data/academyData";

interface EnrollmentModalProps {
  plan: Plan | null;
  open: boolean;
  onClose: () => void;
}

export default function EnrollmentModal({ plan, open, onClose }: EnrollmentModalProps) {
  if (!open || !plan) return null;

  const message = `Olá, Academia Pro! Tenho interesse no plano ${plan.name} (${plan.price} ${plan.period}). Gostaria de iniciar minha matrícula e receber mais informações.`;
  const href = whatsappLink(message);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Matrícula no plano ${plan.name}`}
    >
      <button
        type="button"
        className="absolute inset-0 bg-[#0E1012]/70 backdrop-blur-sm animate-fadeInUp"
        style={{ animationDuration: "0.2s" }}
        onClick={onClose}
        aria-label="Fechar modal"
      />
      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-[#E4E4E0] bg-[#F6F6F4] shadow-2xl animate-scaleIn">
        <div className="flex items-start justify-between border-b border-[#E4E4E0] bg-white px-6 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#65A30D]">
              Matrícula
            </p>
            <h3 className="mt-1 font-display text-2xl font-bold text-[#0E1012]">
              Plano {plan.name}
            </h3>
            <p className="mt-1 text-sm text-[#5B616E]">
              {plan.price} <span className="text-[#5B616E]">{plan.period}</span>
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-[#5B616E] transition-colors hover:bg-[#F6F6F4] hover:text-[#0E1012]"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-5 px-6 py-6">
          <div className="rounded-2xl border border-[#E4E4E0] bg-white p-4">
            <p className="text-sm font-semibold text-[#0E1012]">O que está incluído</p>
            <ul className="mt-3 space-y-2 text-sm text-[#5B616E]">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#A3E635]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#A3E635]/30 bg-[#A3E635]/10 p-4 text-sm text-[#2F3A12]">
            <p className="font-semibold text-[#0E1012]">Atendimento rápido</p>
            <p className="mt-1">
              Fale com nossa equipe no WhatsApp para concluir sua matrícula, tirar dúvidas e agendar sua aula experimental.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#A3E635] px-5 py-3 font-bold text-[#0E1012] transition-all hover:bg-[#84CC16]"
            >
              <MessageCircle size={18} />
              Continuar no WhatsApp
            </a>
            <a
              href={contactInfo.phoneHref}
              className="inline-flex items-center justify-center rounded-full border border-[#D7D9D2] bg-white px-5 py-3 font-semibold text-[#0E1012] transition-colors hover:border-[#A3E635]"
            >
              Ligar agora
            </a>
          </div>
          <p className="text-center text-xs text-[#5B616E]">
            Mensagem pré-preenchida com o plano selecionado para agilizar seu atendimento.
          </p>
        </div>
      </div>
    </div>
  );
}
