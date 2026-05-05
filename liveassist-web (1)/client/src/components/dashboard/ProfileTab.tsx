import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import { User, Mail, Calendar, Award } from 'lucide-react';

export default function ProfileTab() {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateProfile(formData);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <User className="h-8 w-8 text-blue-500" />
          Meu Perfil
        </h2>
        <p className="text-gray-600">
          Gerencie suas informações pessoais e preferências
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="lg:col-span-2 p-8">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-4xl">👤</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{user?.name}</h3>
            <p className="text-gray-600">
              {user?.role === 'professional' ? '👨‍⚕️ Profissional' : '👤 Usuário'}
            </p>
          </div>

          {!isEditing ? (
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Mail className="h-5 w-5 text-gray-600" />
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-semibold text-gray-900">{user?.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Calendar className="h-5 w-5 text-gray-600" />
                <div>
                  <p className="text-sm text-gray-600">Membro desde</p>
                  <p className="font-semibold text-gray-900">
                    {user?.createdAt ? new Date(user.createdAt).toLocaleDateString('pt-BR') : '-'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Award className="h-5 w-5 text-gray-600" />
                <div>
                  <p className="text-sm text-gray-600">Tipo de Conta</p>
                  <p className="font-semibold text-gray-900">
                    {user?.role === 'professional' ? 'Profissional' : 'Usuário Regular'}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="flex gap-3">
                <Button type="submit" className="flex-1">
                  Salvar Alterações
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    setIsEditing(false);
                    setFormData({
                      name: user?.name || '',
                      email: user?.email || '',
                    });
                  }}
                >
                  Cancelar
                </Button>
              </div>
            </form>
          )}

          {!isEditing && (
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setIsEditing(true)}
            >
              ✏️ Editar Perfil
            </Button>
          )}
        </Card>

        {/* Stats Card */}
        <Card className="p-6">
          <h3 className="font-bold text-gray-900 mb-4">Atividades</h3>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600">12</div>
              <p className="text-sm text-gray-600">Receitas Favoritas</p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-600">8</div>
              <p className="text-sm text-gray-600">Treinos Salvos</p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-600">3</div>
              <p className="text-sm text-gray-600">Consultas Agendadas</p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-orange-600">24</div>
              <p className="text-sm text-gray-600">Dias de Sequência</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Preferences */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Preferências</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Notificações por Email</p>
              <p className="text-sm text-gray-600">Receba atualizações sobre receitas e treinos</p>
            </div>
            <input type="checkbox" defaultChecked className="h-4 w-4" />
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Lembretes de Treino</p>
              <p className="text-sm text-gray-600">Receba lembretes para seus treinos agendados</p>
            </div>
            <input type="checkbox" defaultChecked className="h-4 w-4" />
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Compartilhar Progresso</p>
              <p className="text-sm text-gray-600">Permita que profissionais vejam seu progresso</p>
            </div>
            <input type="checkbox" className="h-4 w-4" />
          </div>
        </div>
      </Card>

      {/* Danger Zone */}
      <Card className="p-6 border-red-200 bg-red-50">
        <h3 className="text-xl font-bold text-red-900 mb-4">Zona de Perigo</h3>
        <p className="text-sm text-red-700 mb-4">
          Essas ações são irreversíveis. Tenha cuidado.
        </p>
        <Button variant="destructive" className="w-full">
          🗑️ Deletar Conta
        </Button>
      </Card>
    </div>
  );
}
