import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings as SettingsIcon } from 'lucide-react';
import DeleteMyDataCard from '../components/Settings/DeleteMyDataCard';
import { useGetCallerUserProfile } from '../hooks/useCurrentUserProfile';
import { Skeleton } from '@/components/ui/skeleton';

export default function Settings() {
  const { data: userProfile, isLoading } = useGetCallerUserProfile();

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <SettingsIcon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="text-muted-foreground">Manage your account and data</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Profile Info */}
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Your account details</CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-48" />
              </div>
            ) : userProfile ? (
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Username</p>
                  <p className="text-lg font-semibold">{userProfile.username}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Consent Status</p>
                  <p className="text-sm">
                    {userProfile.consentGiven ? (
                      <span className="text-green-600 dark:text-green-400">✓ Consent given for media processing</span>
                    ) : (
                      <span className="text-muted-foreground">No consent given</span>
                    )}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No profile information available</p>
            )}
          </CardContent>
        </Card>

        {/* Delete Data */}
        <DeleteMyDataCard />
      </div>
    </div>
  );
}
