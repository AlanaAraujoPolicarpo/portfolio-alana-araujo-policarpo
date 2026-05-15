import { useState, useEffect, useRef } from 'react';
import { loadJitsiScript, initializeJitsiMeet, generateRoomName, JitsiConfig } from '@/lib/jitsi';

export interface UseJitsiCallOptions {
  userId: string;
  professionalId: string;
  professionalName: string;
  professionalSpecialty: string;
  userName: string;
  onCallEnd?: () => void;
}

export const useJitsiCall = (options: UseJitsiCallOptions) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isCallActive, setIsCallActive] = useState(false);
  const jitsiApiRef = useRef<any>(null);

  useEffect(() => {
    const initializeCall = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Wait for container to exist
        let container = document.getElementById('jitsi-container');
        let attempts = 0;
        while (!container && attempts < 10) {
          await new Promise(resolve => setTimeout(resolve, 100));
          container = document.getElementById('jitsi-container');
          attempts++;
        }

        if (!container) {
          setError('Container do Jitsi nao encontrado');
          setIsLoading(false);
          return;
        }

        // Load Jitsi script
        await loadJitsiScript();

        // Generate unique room name
        const roomName = generateRoomName(options.userId, options.professionalId);

        // Initialize Jitsi Meet
        const config: JitsiConfig = {
          roomName,
          displayName: options.userName,
          onReady: () => {
            setIsCallActive(true);
          },
          onDispose: () => {
            setIsCallActive(false);
            if (options.onCallEnd) {
              options.onCallEnd();
            }
          },
        };

        const api = initializeJitsiMeet('jitsi-container', config);
        jitsiApiRef.current = api;

        if (!api) {
          setError('Falha ao inicializar Jitsi Meet');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao conectar à chamada');
        console.error('Error initializing Jitsi call:', err);
      } finally {
        setIsLoading(false);
      }
    };

    initializeCall();

    return () => {
      if (jitsiApiRef.current) {
        try {
          jitsiApiRef.current.dispose();
        } catch (err) {
          console.error('Error disposing Jitsi API:', err);
        }
      }
    };
  }, [options]);

  const endCall = () => {
    if (jitsiApiRef.current) {
      try {
        jitsiApiRef.current.executeCommand('hangup');
      } catch (err) {
        console.error('Error ending call:', err);
      }
    }
  };

  return {
    isLoading,
    error,
    isCallActive,
    endCall,
  };
};
