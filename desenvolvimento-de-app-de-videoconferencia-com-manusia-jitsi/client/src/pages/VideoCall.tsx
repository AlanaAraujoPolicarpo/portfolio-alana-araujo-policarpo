import React, { useEffect } from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';
import { useJitsiCall } from '@/hooks/useJitsiCall';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Loader2, PhoneOff, ArrowLeft } from 'lucide-react';

export default function VideoCall() {
  const [, setLocation] = useLocation();
  const { user } = useAuth();

  // Get professional info from URL params
  const params = new URLSearchParams(window.location.search);
  const professionalId = params.get('professionalId') || 'prof-default';
  const professionalName = params.get('professionalName') || 'Profissional';
  const professionalSpecialty = params.get('specialty') || 'Especialista';

  // Always call the hook unconditionally
  const { isLoading, error, isCallActive, endCall } = useJitsiCall({
    userId: user?.id || 'user-default',
    professionalId,
    professionalName,
    professionalSpecialty,
    userName: user?.name || 'Usuario',
    onCallEnd: () => {
      // Redirect back to dashboard after call ends
      setTimeout(() => {
        setLocation('/dashboard?tab=professionals');
      }, 2000);
    },
  });

  if (!user) {
    setLocation('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur border-b border-gray-700 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLocation('/dashboard?tab=professionals')}
              className="text-white hover:bg-gray-800"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
            <div>
              <h1 className="text-white font-bold">
                Chamada com {professionalName}
              </h1>
              <p className="text-sm text-gray-400">{professionalSpecialty}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-white text-sm">
              {isCallActive ? '🟢 Conectado' : '🔴 Conectando...'}
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        {error ? (
          <Card className="p-8 max-w-md text-center bg-red-50 border-red-200">
            <div className="text-4xl mb-4">❌</div>
            <h2 className="text-xl font-bold text-red-900 mb-2">Erro na Chamada</h2>
            <p className="text-red-700 mb-4">{error}</p>
            <Button
              onClick={() => setLocation('/dashboard?tab=professionals')}
              className="w-full"
            >
              Voltar ao Dashboard
            </Button>
          </Card>
        ) : isLoading ? (
          <Card className="p-8 max-w-md text-center">
            <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Conectando à chamada...
            </h2>
            <p className="text-gray-600">
              Aguarde enquanto estabelecemos a conexão com {professionalName}
            </p>
          </Card>
        ) : (
          <>
            {/* Jitsi Container */}
            <div
              id="jitsi-container"
              className="w-full h-full flex-1"
              style={{
                minHeight: '500px',
                backgroundColor: '#000',
              }}
            />

            {/* Call Controls */}
            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
              <Button
                variant="destructive"
                size="lg"
                onClick={endCall}
                className="gap-2 rounded-full px-8"
              >
                <PhoneOff className="h-5 w-5" />
                Encerrar Chamada
              </Button>
            </div>
          </>
        )}
      </main>

      {/* Info Footer */}
      {!error && !isLoading && (
        <footer className="bg-black/50 backdrop-blur border-t border-gray-700 p-4">
          <div className="max-w-7xl mx-auto text-center text-sm text-gray-400">
            <p>
              💡 Dica: Use os controles de vídeo/áudio na parte superior da tela para gerenciar sua chamada
            </p>
          </div>
        </footer>
      )}
    </div>
  );
}
