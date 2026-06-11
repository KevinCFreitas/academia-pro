import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Dumbbell, Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState<"client" | "trainer" | "staff">("client");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simulação de autenticação
    if (!email || !password) {
      setError("Por favor, preencha todos os campos");
      setLoading(false);
      return;
    }

    // Armazenar dados de sessão no localStorage
    const userData = {
      email,
      userType,
      name: email.split("@")[0],
      loginTime: new Date().toISOString(),
    };

    localStorage.setItem("currentUser", JSON.stringify(userData));
    localStorage.setItem("isAuthenticated", "true");

    // Redirecionar baseado no tipo de usuário
    setTimeout(() => {
      if (userType === "client") {
        setLocation("/dashboard/cliente");
      } else if (userType === "trainer") {
        setLocation("/dashboard/personal");
      } else {
        setLocation("/dashboard/funcionario");
      }
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full opacity-10 blur-3xl" />

      <Card className="w-full max-w-md relative z-10 bg-white/95 backdrop-blur border-0 shadow-2xl">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-center mb-8">
            <div className="bg-yellow-400 p-3 rounded-full">
              <Dumbbell className="w-8 h-8 text-black" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-center text-black mb-2">
            Academia Pro
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Acesse sua área personalizada
          </p>

          {/* User Type Selection */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { type: "client", label: "Cliente", icon: "👤" },
              { type: "trainer", label: "Personal", icon: "💪" },
              { type: "staff", label: "Funcionário", icon: "👨‍💼" },
            ].map((option) => (
              <button
                key={option.type}
                onClick={() => setUserType(option.type as any)}
                className={`p-3 rounded-lg font-semibold transition-all duration-300 text-sm ${
                  userType === option.type
                    ? "bg-yellow-400 text-black shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <div className="text-xl mb-1">{option.icon}</div>
                {option.label}
              </button>
            ))}
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-gray-50 border-gray-300 focus:border-yellow-400 focus:ring-yellow-400"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 pr-10 bg-gray-50 border-gray-300 focus:border-yellow-400 focus:ring-yellow-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              {loading ? "Entrando..." : "Entrar"}
            </Button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-xs font-bold text-blue-900 mb-2">Demo:</p>
            <p className="text-xs text-blue-800">
              Email: <span className="font-mono">demo@academia.com</span>
            </p>
            <p className="text-xs text-blue-800">
              Senha: <span className="font-mono">123456</span>
            </p>
          </div>

          {/* Back Link */}
          <div className="mt-6 text-center">
            <a
              href="/"
              className="text-sm text-gray-600 hover:text-yellow-500 transition-colors"
            >
              ← Voltar para o site
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
}
