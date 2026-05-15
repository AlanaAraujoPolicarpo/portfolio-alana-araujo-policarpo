/**
 * Jitsi Meet Integration Utilities
 * Provides functions to initialize and manage Jitsi Meet video conferences
 */

export interface JitsiConfig {
  roomName: string;
  displayName: string;
  email?: string;
  avatarUrl?: string;
  onReady?: () => void;
  onDispose?: () => void;
}

/**
 * Load Jitsi Meet external API script
 */
export const loadJitsiScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if ((window as any).JitsiMeetExternalAPI) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://meet.jit.si/external_api.js';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Jitsi Meet API'));
    document.head.appendChild(script);
  });
};

/**
 * Initialize Jitsi Meet conference
 */
export const initializeJitsiMeet = (
  containerId: string,
  config: JitsiConfig
): any => {
  if (!(window as any).JitsiMeetExternalAPI) {
    console.error('Jitsi Meet API not loaded');
    return null;
  }

  const options = {
    roomName: config.roomName,
    width: '100%',
    height: '100%',
    parentNode: document.getElementById(containerId),
    userInfo: {
      displayName: config.displayName,
      email: config.email,
    },
    configOverwrite: {
      startWithAudioMuted: false,
      startWithVideoMuted: false,
      disableSimulcast: false,
      enableWelcomePage: false,
      enableClosePage: false,
    },
    interfaceConfigOverwrite: {
      DISABLE_JOIN_LEAVE_NOTIFICATIONS: false,
      DISABLE_PRESENCE_STATUS: false,
      TOOLBAR_BUTTONS: [
        'microphone',
        'camera',
        'desktop',
        'fullscreen',
        'fodeviceselection',
        'hangup',
        'chat',
        'recording',
        'livestream',
        'etherpad',
        'sharedvideo',
        'settings',
        'raisehand',
        'videoquality',
        'filmstrip',
        'feedback',
        'stats',
        'shortcuts',
        'tileview',
        'download',
        'help',
        'mute-everyone',
        'e2ee',
      ],
      LANG_DETECTION: true,
      DEFAULT_LANGUAGE: 'pt-BR',
      SHOW_JITSI_WATERMARK: true,
      MOBILE_APP_PROMO: false,
    },
  };

  try {
    const api = new (window as any).JitsiMeetExternalAPI('meet.jit.si', options);

    // Handle events
    api.addEventListener('videoConferenceJoined', () => {
      console.log('User joined the conference');
      if (config.onReady) config.onReady();
    });

    api.addEventListener('videoConferenceLocked', () => {
      console.log('Conference locked');
    });

    api.addEventListener('videoConferenceLeft', () => {
      console.log('User left the conference');
      if (config.onDispose) config.onDispose();
    });

    api.addEventListener('readyToClose', () => {
      console.log('Ready to close');
      if (config.onDispose) config.onDispose();
    });

    return api;
  } catch (error) {
    console.error('Error initializing Jitsi Meet:', error);
    return null;
  }
};

/**
 * Generate a unique room name for a call between user and professional
 */
export const generateRoomName = (userId: string, professionalId: string): string => {
  const timestamp = Date.now();
  const roomId = `liveassist-${userId}-${professionalId}-${timestamp}`;
  return roomId.toLowerCase().replace(/[^a-z0-9-]/g, '');
};

/**
 * Format professional info for Jitsi display
 */
export const formatProfessionalName = (name: string, specialty: string): string => {
  return `${name} (${specialty})`;
};
