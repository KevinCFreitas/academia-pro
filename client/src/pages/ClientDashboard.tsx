import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  LogOut,
  Dumbbell,
  Calendar,
  TrendingUp,
  User,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

interface Workout {
  id: string;
  name: string;
  date: string;
  exercises: number;
  duration: number;
  completed: boolean;
}

interface ClientData {
  name: string;
  email: string;
  personalTrainer: string;
  joinDate: string;
  weight: number;
  height: number;
  goal: string;
}

export default function ClientDashboard() {
  const [, setLocation] = useLocation();
  const [clientData, setClientData] = useState<ClientData | null>(null);
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [activeTab, setActiveTab] = useState<"treinos" | "perfil" | "progresso">(
    "treinos"
  );

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (!user) {
      setLocation("/login");
      return;
    }

    const userData = JSON.parse(user);
    setClientData({
      name: userData.name,
      email: userData.email,
      personalTrainer: "Carlos Santos",
      joinDate: "2024-01-15",
      weight: 75,
      height: 180,
      goal: "Ganhar massa muscular",
    });

    // Mock workouts
    setWorkouts([
      {
        id: "1",
        name: "Peito e Tríceps",
        date: "2024-04-15",
        exercises: 8,
        duration: 60,
        completed: true,
      },
      {
        id: "2",
        name: "Costas e Bíceps",
        date: "2024-04-16",
        exercises: 7,
        duration: 55,
        completed: true,
      },
      {
        id: "3",
        name: "Pernas",
        date: "2024-04-17",
        exercises: 6,
        duration: 50,
        completed: false,
      },
      {
        id: "4",
        name: "Ombros",
        date: "2024-04-18",
        exercises: 5,
        duration: 45,
        completed: false,
      },
    ]);
  }, [setLocation]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("isAuthenticated");
    setLocation("/login");
  };

  if (!clientData) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      {/* Header */}
      <div className="bg-black border-b border-yellow-400/30 sticky top-0 z-50">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-400 p-2 rounded-lg">
              <Dumbbell className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-white font-bold">Academia Pro</h1>
              <p className="text-xs text-gray-400">Dashboard do Cliente</p>
            </div>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="text-red-400 border-red-400 hover:bg-red-400/10"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>
      </div>

      <div className="container py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            Bem-vindo, {clientData.name}! 💪
          </h2>
          <p className="text-gray-400">
            Acompanhe seus treinos e evolua com seu personal trainer
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gray-800 border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Treinos Completos</p>
                <p className="text-3xl font-bold text-yellow-400">2</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
          </Card>

          <Card className="bg-gray-800 border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Próximos Treinos</p>
                <p className="text-3xl font-bold text-yellow-400">2</p>
              </div>
              <Calendar className="w-8 h-8 text-blue-400" />
            </div>
          </Card>

          <Card className="bg-gray-800 border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Peso Atual</p>
                <p className="text-3xl font-bold text-yellow-400">{clientData.weight}kg</p>
              </div>
              <TrendingUp className="w-8 h-8 text-purple-400" />
            </div>
          </Card>

          <Card className="bg-gray-800 border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Objetivo</p>
                <p className="text-sm font-bold text-yellow-400">{clientData.goal}</p>
              </div>
              <AlertCircle className="w-8 h-8 text-orange-400" />
            </div>
          </Card>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-gray-700">
          {[
            { id: "treinos", label: "Meus Treinos", icon: Dumbbell },
            { id: "perfil", label: "Meu Perfil", icon: User },
            { id: "progresso", label: "Progresso", icon: TrendingUp },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-3 font-semibold transition-all ${
                  activeTab === tab.id
                    ? "text-yellow-400 border-b-2 border-yellow-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        {activeTab === "treinos" && (
          <div className="space-y-4">
            {workouts.map((workout) => (
              <Card
                key={workout.id}
                className="bg-gray-800 border-gray-700 p-6 hover:border-yellow-400 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white">
                        {workout.name}
                      </h3>
                      {workout.completed ? (
                        <span className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          Completo
                        </span>
                      ) : (
                        <span className="bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full">
                          Próximo
                        </span>
                      )}
                    </div>
                    <div className="flex gap-6 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(workout.date).toLocaleDateString("pt-BR")}
                      </span>
                      <span className="flex items-center gap-1">
                        <Dumbbell className="w-4 h-4" />
                        {workout.exercises} exercícios
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {workout.duration} min
                      </span>
                    </div>
                  </div>
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
                    Ver Detalhes
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "perfil" && (
          <Card className="bg-gray-800 border-gray-700 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-white mb-4">
                  Informações Pessoais
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm">Nome</p>
                    <p className="text-white font-semibold">{clientData.name}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-semibold">{clientData.email}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Membro desde</p>
                    <p className="text-white font-semibold">
                      {new Date(clientData.joinDate).toLocaleDateString("pt-BR")}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-4">
                  Dados Físicos
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm">Peso</p>
                    <p className="text-white font-semibold">{clientData.weight} kg</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Altura</p>
                    <p className="text-white font-semibold">{clientData.height} cm</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Personal Trainer</p>
                    <p className="text-white font-semibold">
                      {clientData.personalTrainer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        )}

        {activeTab === "progresso" && (
          <Card className="bg-gray-800 border-gray-700 p-8">
            <div className="text-center py-12">
              <TrendingUp className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                Seu Progresso
              </h3>
              <p className="text-gray-400 mb-6">
                Acompanhe sua evolução ao longo do tempo
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-700 rounded-lg p-4">
                  <p className="text-gray-400 text-sm">Treinos Realizados</p>
                  <p className="text-3xl font-bold text-yellow-400">2</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-4">
                  <p className="text-gray-400 text-sm">Horas de Treino</p>
                  <p className="text-3xl font-bold text-yellow-400">1.9h</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-4">
                  <p className="text-gray-400 text-sm">Consistência</p>
                  <p className="text-3xl font-bold text-yellow-400">100%</p>
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
