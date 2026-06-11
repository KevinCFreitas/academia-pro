import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  LogOut,
  Dumbbell,
  Users,
  BarChart3,
  Settings,
  TrendingUp,
  Calendar,
} from "lucide-react";

interface AcademyStats {
  totalClients: number;
  activeTrainers: number;
  monthlyRevenue: number;
  occupancyRate: number;
}

export default function StaffDashboard() {
  const [, setLocation] = useLocation();
  const [staffName, setStaffName] = useState("");
  const [stats, setStats] = useState<AcademyStats>({
    totalClients: 156,
    activeTrainers: 8,
    monthlyRevenue: 45000,
    occupancyRate: 78,
  });
  const [activeTab, setActiveTab] = useState<"dashboard" | "usuarios" | "relatorios">(
    "dashboard"
  );

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (!user) {
      setLocation("/login");
      return;
    }

    const userData = JSON.parse(user);
    setStaffName(userData.name);
  }, [setLocation]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("isAuthenticated");
    setLocation("/login");
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
              <p className="text-xs text-gray-400">Dashboard Administrativo</p>
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
            Bem-vindo, {staffName}! 📊
          </h2>
          <p className="text-gray-400">
            Gerencie a academia e acompanhe métricas importantes
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-blue-600 to-blue-800 border-0 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-200 text-sm">Total de Clientes</p>
                <p className="text-3xl font-bold text-white">{stats.totalClients}</p>
              </div>
              <Users className="w-8 h-8 text-blue-300" />
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-green-600 to-green-800 border-0 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-200 text-sm">Personals Ativos</p>
                <p className="text-3xl font-bold text-white">
                  {stats.activeTrainers}
                </p>
              </div>
              <Dumbbell className="w-8 h-8 text-green-300" />
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-purple-600 to-purple-800 border-0 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-200 text-sm">Receita Mensal</p>
                <p className="text-3xl font-bold text-white">
                  R$ {(stats.monthlyRevenue / 1000).toFixed(0)}k
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-purple-300" />
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-orange-600 to-orange-800 border-0 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-200 text-sm">Taxa de Ocupação</p>
                <p className="text-3xl font-bold text-white">
                  {stats.occupancyRate}%
                </p>
              </div>
              <BarChart3 className="w-8 h-8 text-orange-300" />
            </div>
          </Card>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-gray-700">
          {[
            { id: "dashboard", label: "Dashboard", icon: BarChart3 },
            { id: "usuarios", label: "Usuários", icon: Users },
            { id: "relatorios", label: "Relatórios", icon: Calendar },
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
        {activeTab === "dashboard" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Revenue Chart */}
            <Card className="bg-gray-800 border-gray-700 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Receita Últimos 6 Meses</h3>
              <div className="space-y-3">
                {[
                  { month: "Jan", value: 35000 },
                  { month: "Fev", value: 38000 },
                  { month: "Mar", value: 42000 },
                  { month: "Abr", value: 45000 },
                  { month: "Mai", value: 48000 },
                  { month: "Jun", value: 45000 },
                ].map((item) => (
                  <div key={item.month} className="flex items-center gap-4">
                    <span className="text-gray-400 w-10">{item.month}</span>
                    <div className="flex-1 bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{
                          width: `${(item.value / 50000) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="text-white font-semibold w-20 text-right">
                      R$ {(item.value / 1000).toFixed(0)}k
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gray-800 border-gray-700 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Ações Rápidas</h3>
              <div className="space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Adicionar Novo Cliente
                </Button>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white justify-start">
                  <Dumbbell className="w-4 h-4 mr-2" />
                  Contratar Personal Trainer
                </Button>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  Configurações da Academia
                </Button>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white justify-start">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Gerar Relatório
                </Button>
              </div>
            </Card>
          </div>
        )}

        {activeTab === "usuarios" && (
          <Card className="bg-gray-800 border-gray-700 p-6">
            <h3 className="text-lg font-bold text-white mb-4">Gerenciar Usuários</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 text-gray-400">Nome</th>
                    <th className="text-left py-3 px-4 text-gray-400">Tipo</th>
                    <th className="text-left py-3 px-4 text-gray-400">Status</th>
                    <th className="text-left py-3 px-4 text-gray-400">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "João Silva", type: "Cliente", status: "Ativo" },
                    { name: "Carlos Santos", type: "Personal", status: "Ativo" },
                    { name: "Maria Santos", type: "Cliente", status: "Inativo" },
                    { name: "Pedro Costa", type: "Personal", status: "Ativo" },
                  ].map((user, idx) => (
                    <tr key={idx} className="border-b border-gray-700">
                      <td className="py-3 px-4 text-white">{user.name}</td>
                      <td className="py-3 px-4 text-gray-400">{user.type}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            user.status === "Ativo"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-red-500/20 text-red-400"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <Button size="sm" variant="outline" className="text-xs">
                          Editar
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {activeTab === "relatorios" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gray-800 border-gray-700 p-6">
              <h3 className="text-lg font-bold text-white mb-4">
                Relatório de Clientes
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Novos este mês</span>
                  <span className="text-yellow-400 font-bold">+12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Cancelamentos</span>
                  <span className="text-red-400 font-bold">-3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Taxa de retenção</span>
                  <span className="text-green-400 font-bold">94%</span>
                </div>
              </div>
            </Card>

            <Card className="bg-gray-800 border-gray-700 p-6">
              <h3 className="text-lg font-bold text-white mb-4">
                Relatório de Treinos
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Treinos realizados</span>
                  <span className="text-yellow-400 font-bold">487</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Taxa de conclusão</span>
                  <span className="text-green-400 font-bold">89%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Média por cliente</span>
                  <span className="text-blue-400 font-bold">3.1</span>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
