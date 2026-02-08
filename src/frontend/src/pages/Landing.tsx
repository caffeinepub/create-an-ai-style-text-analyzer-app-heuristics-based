import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, MessageSquare, Mic, Volume2, Image, Video, Sparkles } from 'lucide-react';

export default function Landing() {
  const { login, isLoggingIn } = useInternetIdentity();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Sparkles className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold">AI Master</span>
          </div>
          <Button onClick={login} disabled={isLoggingIn} size="lg">
            {isLoggingIn ? 'Connecting...' : 'Sign In'}
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <Shield className="h-4 w-4" />
              Privacy-First AI Platform
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Your Personal AI Assistant
              <span className="block text-primary mt-2">Secure. Private. Powerful.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Chat with AI in Hindi or English, use voice commands, and explore advanced features—all while keeping your data completely private and secure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={login} disabled={isLoggingIn} size="lg" className="text-lg px-8">
                {isLoggingIn ? 'Connecting...' : 'Get Started Free'}
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8" asChild>
                <a href="#features">Learn More</a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/assets/generated/ai-master-hero.dim_1600x900.png"
              alt="AI Master Hero"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Privacy Banner */}
      <section className="bg-primary/5 border-y border-primary/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <img
              src="/assets/generated/ai-master-lock.dim_512x512.png"
              alt="Privacy Lock"
              className="h-24 w-24"
            />
            <div className="space-y-2">
              <h2 className="text-2xl font-bold flex items-center justify-center md:justify-start gap-2">
                <Lock className="h-6 w-6 text-primary" />
                Privacy & Safety — Rule No. 1
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Your data is private by default. Each user has a separate account. No one can access your chats or media. You have full control to delete your data anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Available Now & Coming Soon</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore what's available today and what's on the roadmap for the future.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Phase 1 - Available */}
          <Card className="border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                <span className="text-xs font-semibold text-primary uppercase">Available Now</span>
              </div>
              <CardTitle>Chat AI</CardTitle>
              <CardDescription>Hindi + English support</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Intelligent chat assistant that understands both Hindi and English. Get instant responses to your questions.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Mic className="h-5 w-5 text-primary" />
                <span className="text-xs font-semibold text-primary uppercase">Available Now</span>
              </div>
              <CardTitle>Voice Input</CardTitle>
              <CardDescription>Speak your messages</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Use your voice to send messages. Just click the microphone and start speaking.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Volume2 className="h-5 w-5 text-primary" />
                <span className="text-xs font-semibold text-primary uppercase">Available Now</span>
              </div>
              <CardTitle>Voice Output</CardTitle>
              <CardDescription>AI speaks to you</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Listen to AI responses read aloud. Perfect for hands-free interaction.
              </p>
            </CardContent>
          </Card>

          {/* Phase 2 - Coming Soon */}
          <Card className="border-muted">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Image className="h-5 w-5 text-muted-foreground" />
                <span className="text-xs font-semibold text-muted-foreground uppercase">Coming Soon</span>
              </div>
              <CardTitle className="text-muted-foreground">Image Generation</CardTitle>
              <CardDescription>Create images with AI</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Generate custom images based on your descriptions. Part of Phase 2 Media AI features.
              </p>
            </CardContent>
          </Card>

          <Card className="border-muted">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Image className="h-5 w-5 text-muted-foreground" />
                <span className="text-xs font-semibold text-muted-foreground uppercase">Coming Soon</span>
              </div>
              <CardTitle className="text-muted-foreground">Photo Upload</CardTitle>
              <CardDescription>Analyze your images</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Upload photos for AI analysis and insights. Your consent required before any use.
              </p>
            </CardContent>
          </Card>

          {/* Phase 3 - Future */}
          <Card className="border-muted">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Video className="h-5 w-5 text-muted-foreground" />
                <span className="text-xs font-semibold text-muted-foreground uppercase">Future</span>
              </div>
              <CardTitle className="text-muted-foreground">Advanced Video AI</CardTitle>
              <CardDescription>Photo to talking video & more</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Transform photos into talking videos, motion transfer, and style-based video generation.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 border-t border-primary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Sign in with Internet Identity to access your private, secure AI assistant.
          </p>
          <Button onClick={login} disabled={isLoggingIn} size="lg" className="text-lg px-8">
            {isLoggingIn ? 'Connecting...' : 'Sign In Now'}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
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
    </div>
  );
}
