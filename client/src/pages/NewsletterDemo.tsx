import { useEffect, useState } from "react";
import { Mail } from "lucide-react";

export default function NewsletterDemo() {
  const [emails, setEmails] = useState<string[]>([]);

  useEffect(() => {
    const storedEmails = localStorage.getItem("newsletterEmails");
    if (storedEmails) {
      setEmails(JSON.parse(storedEmails));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <Mail size={32} className="text-yellow-400" />
            <h1 className="text-3xl font-bold text-black">Emails da Newsletter</h1>
          </div>

          {emails.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                Nenhum email inscrito ainda. Volte para a pagina principal e inscreva-se!
              </p>
            </div>
          ) : (
            <div>
              <p className="text-gray-600 mb-6">
                Total de inscritos: <span className="font-bold text-yellow-500">{emails.length}</span>
              </p>
              <div className="space-y-3">
                {emails.map((email, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border-l-4 border-yellow-400"
                  >
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Mail size={20} className="text-yellow-600" />
                    </div>
                    <span className="text-gray-800 font-medium">{email}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 pt-8 border-t border-gray-200">
            <a
              href="/"
              className="inline-block px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Voltar para Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
