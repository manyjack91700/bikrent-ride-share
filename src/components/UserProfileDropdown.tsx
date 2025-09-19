import { useState } from 'react';
import { User, Settings, FileText, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ProfileForm } from './ProfileForm';
import { DrivingLicenseForm } from './DrivingLicenseForm';
import { useProfile } from '@/hooks/useProfile';
import { useAuth } from '@/hooks/useAuth';

export const UserProfileDropdown = () => {
  const { user, signOut } = useAuth();
  const { profile } = useProfile();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLicenseOpen, setIsLicenseOpen] = useState(false);

  const displayName = profile?.first_name || user?.email || 'Utilisateur';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2 text-primary hover:text-secondary">
          <User className="w-4 h-4" />
          <span className="font-medium">Bonjour, {displayName}</span>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="end" className="w-56 bg-background border border-border">
        <Dialog open={isProfileOpen} onOpenChange={setIsProfileOpen}>
          <DialogTrigger asChild>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              <Settings className="w-4 h-4 mr-2" />
              Mon profil
            </DropdownMenuItem>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background">
            <DialogHeader>
              <DialogTitle>Mon profil</DialogTitle>
            </DialogHeader>
            <ProfileForm onClose={() => setIsProfileOpen(false)} />
          </DialogContent>
        </Dialog>

        <Dialog open={isLicenseOpen} onOpenChange={setIsLicenseOpen}>
          <DialogTrigger asChild>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              <FileText className="w-4 h-4 mr-2" />
              Permis de conduire
            </DropdownMenuItem>
          </DialogTrigger>
          <DialogContent className="max-w-md bg-background">
            <DialogHeader>
              <DialogTitle>Permis de conduire</DialogTitle>
            </DialogHeader>
            <DrivingLicenseForm onClose={() => setIsLicenseOpen(false)} />
          </DialogContent>
        </Dialog>

        <DropdownMenuSeparator />
        
        <DropdownMenuItem onClick={signOut}>
          <User className="w-4 h-4 mr-2" />
          Déconnexion
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};