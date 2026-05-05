import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState<'user' | 'professional'>('user');
  const [error, setError] = useState('');
  
  const { login, signup, isLoading } = useAuth();
  const [, setLocation] = useLocation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      if (isSignup) {
        if (!name.trim()) {
          setError('Nome é obrigatório');
          return;
        }
        await signup(email, password, name, role);
      } else {
        await login(email, password);
      }
      setLocation('/dashboard');
    } catch (err) {
      setError('Erro ao autenticar. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl">
        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">LiveAssist</h1>
            <p className="text-gray-600">
              {isSignup ? 'Crie sua conta' : 'Bem-vindo de volta'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
                disabled={isLoading}
              />
            </div>

            {/* Nome (apenas signup) */}
            {isSignup && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo
                </label>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  required
                  disabled={isLoading}
                />
              </div>
            )}

            {/* Senha */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Senha
              </label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                disabled={isLoading}
              />
            </div>

            {/* Tipo de Conta (apenas signup) */}
            {isSignup && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Conta
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="user"
                      checked={role === 'user'}
                      onChange={(e) => setRole(e.target.value as 'user' | 'professional')}
                      className="mr-2"
                      disabled={isLoading}
                    />
                    <span className="text-gray-700">👤 Usuário (Aluno/Cliente)</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="professional"
                      checked={role === 'professional'}
                      onChange={(e) => setRole(e.target.value as 'user' | 'professional')}
                      className="mr-2"
                      disabled={isLoading}
                    />
                    <span className="text-gray-700">👨‍⚕️ Profissional (Nutricionista/Trainer)</span>
                  </label>
                </div>
              </div>
            )}

            {/* Erro */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            {/* Botão Submit */}
            <Button
              type="submit"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processando...
                </>
              ) : (
                isSignup ? 'Criar Conta' : 'Entrar'
              )}
            </Button>
          </form>

          {/* Toggle */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              {isSignup ? 'Já tem conta?' : 'Não tem conta?'}{' '}
              <button
                onClick={() => {
                  setIsSignup(!isSignup);
                  setError('');
                }}
                className="text-blue-600 hover:text-blue-700 font-medium"
                disabled={isLoading}
              >
                {isSignup ? 'Entrar' : 'Cadastrar'}
              </button>
            </p>
          </div>

          {/* Demo */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center mb-3">Demo: Use qualquer email/senha</p>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                setEmail('demo@liveassist.com');
                setPassword('demo123');
                setName('Usuário Demo');
              }}
              disabled={isLoading}
            >
              Usar Conta Demo
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
