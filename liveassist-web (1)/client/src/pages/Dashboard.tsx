import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LogOut, User, Utensils, Dumbbell, Users } from 'lucide-react';
import RecipesTab from '@/components/dashboard/RecipesTab';
import WorkoutsTab from '@/components/dashboard/WorkoutsTab';
import ProfessionalsTab from '@/components/dashboard/ProfessionalsTab';
import ProfileTab from '@/components/dashboard/ProfileTab';

export default function Dashboard() {
  const { user, logout, isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState('recipes');

  if (!isAuthenticated) {
    setLocation('/login');
    return null;
  }

  const handleLogout = () => {
    logout();
    setLocation('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">LA</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">LiveAssist</h1>
              <p className="text-sm text-gray-500">Dashboard</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">{user?.name}</p>
              <p className="text-xs text-gray-500">
                {user?.role === 'professional' ? '👨‍⚕️ Profissional' : '👤 Usuário'}
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="gap-2"
            >
              <LogOut className="h-4 w-4" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Tabs Navigation */}
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="recipes" className="gap-2">
              <Utensils className="h-4 w-4" />
              <span className="hidden sm:inline">Receitas</span>
            </TabsTrigger>
            <TabsTrigger value="workouts" className="gap-2">
              <Dumbbell className="h-4 w-4" />
              <span className="hidden sm:inline">Treinos</span>
            </TabsTrigger>
            <TabsTrigger value="professionals" className="gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Profissionais</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Perfil</span>
            </TabsTrigger>
          </TabsList>

          {/* Recipes Tab */}
          <TabsContent value="recipes">
            <RecipesTab />
          </TabsContent>

          {/* Workouts Tab */}
          <TabsContent value="workouts">
            <WorkoutsTab />
          </TabsContent>

          {/* Professionals Tab */}
          <TabsContent value="professionals">
            <ProfessionalsTab />
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <ProfileTab />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
