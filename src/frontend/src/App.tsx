import { useInternetIdentity } from './hooks/useInternetIdentity';
import { useGetCallerUserProfile } from './hooks/useCurrentUserProfile';
import { useState, useEffect } from 'react';
import Landing from './pages/Landing';
import Chat from './pages/Chat';
import PrivacySafety from './pages/PrivacySafety';
import FeaturePlan from './pages/FeaturePlan';
import Settings from './pages/Settings';
import AppHeader from './components/Layout/AppHeader';
import ProfileSetupModal from './components/Auth/ProfileSetupModal';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from 'next-themes';

type View = 'chat' | 'privacy' | 'features' | 'settings';

export default function App() {
  const { identity, isInitializing } = useInternetIdentity();
  const { data: userProfile, isLoading: profileLoading, isFetched } = useGetCallerUserProfile();
  const [currentView, setCurrentView] = useState<View>('chat');

  const isAuthenticated = !!identity;

  // Show profile setup modal only when authenticated, actor is ready, and profile is null
  const showProfileSetup = isAuthenticated && !profileLoading && isFetched && userProfile === null;

  // Reset to chat view when logging out
  useEffect(() => {
    if (!isAuthenticated) {
      setCurrentView('chat');
    }
  }, [isAuthenticated]);

  if (isInitializing) {
    return (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="flex h-screen items-center justify-center bg-background">
          <div className="text-center">
            <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto" />
            <p className="text-muted-foreground">Initializing...</p>
          </div>
        </div>
        <Toaster />
      </ThemeProvider>
    );
  }

  if (!isAuthenticated) {
    return (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Landing />
        <Toaster />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex min-h-screen flex-col bg-background">
        <AppHeader currentView={currentView} onNavigate={setCurrentView} />
        <main className="flex-1">
          {currentView === 'chat' && <Chat />}
          {currentView === 'privacy' && <PrivacySafety />}
          {currentView === 'features' && <FeaturePlan />}
          {currentView === 'settings' && <Settings />}
        </main>
        <footer className="border-t border-border bg-card py-6">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            © 2026. Built with ❤️ using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:text-primary transition-colors"
            >
              caffeine.ai
            </a>
          </div>
        </footer>
        {showProfileSetup && <ProfileSetupModal />}
      </div>
      <Toaster />
    </ThemeProvider>
  );
}
