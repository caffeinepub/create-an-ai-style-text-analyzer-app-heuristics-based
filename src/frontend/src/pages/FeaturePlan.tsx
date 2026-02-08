import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MessageSquare, Mic, Volume2, Lock, Image, Camera, Brain, Video, Film, Palette, AlertCircle, CheckCircle2, Clock } from 'lucide-react';

export default function FeaturePlan() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-8 text-center">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
          <Brain className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold mb-2">AI Master — Feature Plan</h1>
        <p className="text-muted-foreground text-lg">Full roadmap: What's available now and what's coming next</p>
      </div>

      {/* Phase 0 */}
      <Card className="mb-6 border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center">
              <span className="text-green-600 dark:text-green-400 font-bold">0</span>
            </div>
            <div>
              <CardTitle className="text-2xl">Phase 0 — Planning</CardTitle>
              <CardDescription>Transparency from day one</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Full feature list visible</p>
              <p className="text-sm text-muted-foreground">You can see everything we're planning to build</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">"Coming Soon" tags for future features</p>
              <p className="text-sm text-muted-foreground">Clear indication of what's available now vs. later</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">User knows what's coming</p>
              <p className="text-sm text-muted-foreground">No surprises — you know the roadmap from the start</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Phase 1 */}
      <Card className="mb-6 border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center">
              <span className="text-green-600 dark:text-green-400 font-bold">1</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <CardTitle className="text-2xl">Phase 1 — Core</CardTitle>
                <Badge variant="default" className="bg-green-600 dark:bg-green-500">Available Now</Badge>
              </div>
              <CardDescription>Essential features — live today</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3 p-3 rounded-lg border border-primary/10 bg-primary/5">
              <MessageSquare className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Chat AI</p>
                <p className="text-sm text-muted-foreground">Hindi + English support</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg border border-primary/10 bg-primary/5">
              <Mic className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Voice Input</p>
                <p className="text-sm text-muted-foreground">Speak your messages</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg border border-primary/10 bg-primary/5">
              <Volume2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Voice Output</p>
                <p className="text-sm text-muted-foreground">AI speaks to you</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg border border-primary/10 bg-primary/5">
              <Lock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Login / Logout</p>
                <p className="text-sm text-muted-foreground">Secure authentication</p>
              </div>
            </div>
          </div>
          <Separator />
          <div className="flex items-start gap-3 p-3 rounded-lg border border-primary/10 bg-primary/5">
            <Lock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Complete Privacy & Security System</p>
              <p className="text-sm text-muted-foreground">
                Separate accounts, isolated data, encrypted passwords, user-controlled deletion, consent-based media use, private by default
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Phase 2 */}
      <Card className="mb-6 border-muted">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-full bg-yellow-500/10 flex items-center justify-center">
              <span className="text-yellow-600 dark:text-yellow-400 font-bold">2</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <CardTitle className="text-2xl">Phase 2 — Media AI</CardTitle>
                <Badge variant="outline" className="border-yellow-600 dark:border-yellow-400 text-yellow-600 dark:text-yellow-400">
                  Coming Soon
                </Badge>
              </div>
              <CardDescription>Image and study features</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3 p-3 rounded-lg border border-muted bg-muted/30">
              <Image className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-muted-foreground">Image Generation</p>
                <p className="text-sm text-muted-foreground">Create images with AI</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg border border-muted bg-muted/30">
              <Camera className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-muted-foreground">Photo Upload</p>
                <p className="text-sm text-muted-foreground">Analyze your images</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg border border-muted bg-muted/30">
              <Brain className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-muted-foreground">Study AI</p>
                <p className="text-sm text-muted-foreground">Learning assistance</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg border border-muted bg-muted/30">
              <Clock className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-muted-foreground">User History</p>
                <p className="text-sm text-muted-foreground">Save your interactions</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Phase 3 */}
      <Card className="mb-6 border-muted">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center">
              <span className="text-blue-600 dark:text-blue-400 font-bold">3</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <CardTitle className="text-2xl">Phase 3 — Advanced</CardTitle>
                <Badge variant="outline" className="border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400">
                  Future
                </Badge>
              </div>
              <CardDescription>Cutting-edge video AI features</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3 p-3 rounded-lg border border-muted bg-muted/30">
              <Video className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-muted-foreground">Photo → Talking Video</p>
                <p className="text-sm text-muted-foreground">Animate still images</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg border border-muted bg-muted/30">
              <Film className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-muted-foreground">Photo + Video → Motion Transfer</p>
                <p className="text-sm text-muted-foreground">Transfer motion between media</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg border border-muted bg-muted/30">
              <Palette className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-muted-foreground">Style-Based Video</p>
                <p className="text-sm text-muted-foreground">Apply artistic styles</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg border border-muted bg-muted/30">
              <AlertCircle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-muted-foreground">Consent + Warning System</p>
                <p className="text-sm text-muted-foreground">Ethical AI safeguards</p>
              </div>
            </div>
          </div>
          <Separator />
          <div className="p-4 rounded-lg border border-blue-600/20 dark:border-blue-400/20 bg-blue-500/5">
            <p className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
              ⚠️ Advanced Video AI — Coming Soon
            </p>
            <p className="text-sm text-muted-foreground">
              These powerful video features are planned for the future. They will include strict consent requirements and warning systems to ensure ethical use.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Platform Note */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            Platform Availability
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Web App (Available Now)</p>
              <p className="text-sm text-muted-foreground">Access from any browser on desktop or mobile</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Same Login System</p>
              <p className="text-sm text-muted-foreground">One account across all platforms</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Same Privacy Rules</p>
              <p className="text-sm text-muted-foreground">Privacy & Safety guaranteed everywhere</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
