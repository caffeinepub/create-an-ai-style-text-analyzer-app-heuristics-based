import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Eye, Trash2, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function PrivacySafety() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8 text-center">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
          <Shield className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold mb-2">Privacy & Safety</h1>
        <p className="text-xl text-primary font-semibold">Rule No. 1</p>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5 text-primary" />
            Core Privacy Principles
          </CardTitle>
          <CardDescription>These guarantees are active from day one</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold mb-1">Separate Accounts</h3>
              <p className="text-sm text-muted-foreground">
                Every user has their own isolated account. Your data is completely separate from all other users.
              </p>
            </div>
          </div>

          <Separator />

          <div className="flex gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold mb-1">Isolated Data</h3>
              <p className="text-sm text-muted-foreground">
                No one can access your chats, photos, or videos. Not other users, not even administrators without your explicit permission.
              </p>
            </div>
          </div>

          <Separator />

          <div className="flex gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold mb-1">Password Encrypted</h3>
              <p className="text-sm text-muted-foreground">
                Your authentication uses industry-standard encryption. Your identity is secured with Internet Identity technology.
              </p>
            </div>
          </div>

          <Separator />

          <div className="flex gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold mb-1">User-Controlled Deletion</h3>
              <p className="text-sm text-muted-foreground">
                You have the full right to delete all your data at any time. Go to Settings to permanently remove your account data.
              </p>
            </div>
          </div>

          <Separator />

          <div className="flex gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold mb-1">Consent Required</h3>
              <p className="text-sm text-muted-foreground">
                Your photos and videos will never be used without your explicit permission. You control how your media is processed.
              </p>
            </div>
          </div>

          <Separator />

          <div className="flex gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold mb-1">Private by Default</h3>
              <p className="text-sm text-muted-foreground">
                All generated content is private by default. Nothing is shared publicly unless you explicitly choose to do so.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5 text-primary" />
            What We Store
          </CardTitle>
          <CardDescription>Transparency about your data</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="text-sm">
            <p className="font-medium mb-2">We store:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
              <li>Your username and consent preferences</li>
              <li>Your chat history (messages you send and receive)</li>
              <li>Minimal system events for security auditing (no content included)</li>
            </ul>
          </div>
          <div className="text-sm">
            <p className="font-medium mb-2">We do NOT store:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
              <li>Your password (handled by Internet Identity)</li>
              <li>Any data from other users</li>
              <li>Analytics or tracking data</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trash2 className="h-5 w-5 text-primary" />
            Your Data Rights
          </CardTitle>
          <CardDescription>Full control over your information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">
            You have the right to delete all your data at any time. This includes:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
            <li>All chat messages and history</li>
            <li>Your user profile and preferences</li>
            <li>Any uploaded media (when available)</li>
          </ul>
          <p className="text-sm text-muted-foreground">
            To delete your data, go to <strong>Settings</strong> and use the "Delete My Data" option. This action is permanent and cannot be undone.
          </p>
        </CardContent>
      </Card>

      <Card className="border-muted">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-muted-foreground" />
            Future Features
          </CardTitle>
          <CardDescription>Coming soon with the same privacy standards</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">
            When we add new features like image generation, photo upload, and advanced video AI, they will follow the same strict privacy rules:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
            <li>Your consent will be required before any media processing</li>
            <li>All generated content will be private by default</li>
            <li>You will have full control to delete any media</li>
            <li>No sharing without your explicit permission</li>
          </ul>
          <p className="text-sm font-medium text-foreground mt-4">
            Privacy & Safety will always be Rule No. 1, no matter what features we add.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
