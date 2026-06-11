import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  LogOut,
  Dumbbell,
  Users,
  Plus,
  Edit,
  Trash2,
  CheckCircle,
  Clock,
} from "lucide-react";

interface ClientInfo {
  id: string;
  name: string;
  goal: string;
  weight: number;
  joinDate: string;
  workoutsCompleted: number;
}

export default function TrainerDashboard() {
  const [, setLocation] = useLocation();
  const [trainerName, setTrainerName] = useState("");
  const [clients, setClients] = useState<ClientInfo[]>([]);
  const [activeTab, setActiveTab] = useState<"clientes" | "criar" | "relatorios">(
    "clientes"
  );
  const [showNewWorkoutForm, setShowNewWorkoutForm] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (!user) {
      setLocation("/login");
      return;
    }

    const userData = JSON.parse(user);
    setTrainerName(userData.name);

    // Mock clients data
    setClients([
      {
        id: "1",
        name: "João Silva",
        goal: "Ganhar massa",
        weight: 75,
        joinDate: "2024-01-15",
        workoutsCompleted: 12,
      },
      {
        id: "2",
        name: "Maria Santos",
        goal: "Emagrecer",
        weight: 68,
        joinDate: "2024-02-20",
        workoutsCompleted: 8,
      },
      {
        id: "3",
        name: "Pedro Costa",
        goal: "Funcional",
        weight: 82,
        joinDate: "2024-03-10",
        workoutsCompleted: 5,
      },
    ]);
  }, [setLocation]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("isAuthenticated");
    setLocation("/login");
  };

  const handleDeleteClient = (id: string) => {
    setClients(clients.filter((c) => c.id !== id));
  };

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
              <p className="text-xs text-gray-400">Dashboard do Personal Trainer</p>
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
            Bem-vindo, {trainerName}! 🏋️
          </h2>
          <p className="text-gray-400">
            Gerencie seus clientes e crie treinos personalizados
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-gray-800 border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total de Clientes</p>
                <p className="text-3xl font-bold text-yellow-400">{clients.length}</p>
              </div>
              <Users className="w-8 h-8 text-blue-400" />
            </div>
          </Card>

          <Card className="bg-gray-800 border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Treinos Criados</p>
                <p className="text-3xl font-bold text-yellow-400">25</p>
              </div>
              <Dumbbell className="w-8 h-8 text-green-400" />
            </div>
          </Card>

          <Card className="bg-gray-800 border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Média de Progresso</p>
                <p className="text-3xl font-bold text-yellow-400">87%</p>
              </div>
              <CheckCircle className="w-8 h-8 text-purple-400" />
            </div>
          </Card>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-gray-700">
          {[
            { id: "clientes", label: "Meus Clientes", icon: Users },
            { id: "criar", label: "Criar Treino", icon: Plus },
            { id: "relatorios", label: "Relatórios", icon: Clock },
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
        {activeTab === "clientes" && (
          <div className="space-y-4">
            {clients.length === 0 ? (
              <Card className="bg-gray-800 border-gray-700 p-8 text-center">
                <Users className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400">Nenhum cliente adicionado ainda</p>
              </Card>
            ) : (
              clients.map((client) => (
                <Card
                  key={client.id}
                  className="bg-gray-800 border-gray-700 p-6 hover:border-yellow-400 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {client.name}
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400">
                        <div>
                          <p className="text-xs text-gray-500">Objetivo</p>
                          <p className="text-white font-semibold">{client.goal}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Peso</p>
                          <p className="text-white font-semibold">{client.weight} kg</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Membro desde</p>
                          <p className="text-white font-semibold">
                            {new Date(client.joinDate).toLocaleDateString("pt-BR")}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Treinos</p>
                          <p className="text-white font-semibold">
                            {client.workoutsCompleted}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-red-400 border-red-400 hover:bg-red-400/10"
                        onClick={() => handleDeleteClient(client.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        )}

        {activeTab === "criar" && (
          <Card className="bg-gray-800 border-gray-700 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Criar Novo Treino</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Nome do Treino
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Peito e Tríceps"
                    className="w-full bg-gray-700 border border-gray-600 text-white px-4 py-2 rounded-lg focus:border-yellow-400 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Selecione um Cliente
                  </label>
                  <select className="w-full bg-gray-700 border border-gray-600 text-white px-4 py-2 rounded-lg focus:border-yellow-400 outline-none">
                    <option>Selecione...</option>
                    {clients.map((client) => (
                      <option key={client.id} value={client.id}>
                        {client.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Descrição
                </label>
                <textarea
                  placeholder="Descreva o treino..."
                  rows={4}
                  className="w-full bg-gray-700 border border-gray-600 text-white px-4 py-2 rounded-lg focus:border-yellow-400 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Duração (minutos)
                  </label>
                  <input
                    type="number"
                    placeholder="60"
                    className="w-full bg-gray-700 border border-gray-600 text-white px-4 py-2 rounded-lg focus:border-yellow-400 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Número de Exercícios
                  </label>
                  <input
                    type="number"
                    placeholder="8"
                    className="w-full bg-gray-700 border border-gray-600 text-white px-4 py-2 rounded-lg focus:border-yellow-400 outline-none"
                  />
                </div>
              </div>

              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3">
                <Plus className="w-5 h-5 mr-2" />
                Criar Treino
              </Button>
            </form>
          </Card>
        )}

        {activeTab === "relatorios" && (
          <Card className="bg-gray-800 border-gray-700 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Relatórios</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-700 rounded-lg p-6">
                <h4 className="text-white font-bold mb-4">Clientes Ativos</h4>
                <p className="text-4xl font-bold text-yellow-400 mb-2">
                  {clients.length}
                </p>
                <p className="text-gray-400 text-sm">
                  {clients.reduce((acc, c) => acc + c.workoutsCompleted, 0)} treinos
                  realizados no total
                </p>
              </div>
              <div className="bg-gray-700 rounded-lg p-6">
                <h4 className="text-white font-bold mb-4">Taxa de Conclusão</h4>
                <p className="text-4xl font-bold text-green-400 mb-2">92%</p>
                <p className="text-gray-400 text-sm">
                  Média de treinos completados pelos clientes
                </p>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
