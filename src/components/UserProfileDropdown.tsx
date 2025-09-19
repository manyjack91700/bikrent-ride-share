import { useState } from 'react';
import { User, Settings, FileText, ChevronDown, Car, Heart, HelpCircle, Calendar, CheckCircle, XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AccountContent } from './AccountContent';
import { useProfile } from '@/hooks/useProfile';
import { useAuth } from '@/hooks/useAuth';

export const UserProfileDropdown = () => {
  const { user, signOut } = useAuth();
  const { profile } = useProfile();
  const navigate = useNavigate();
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const displayName = profile?.first_name || user?.email || 'Utilisateur';

  const handleNavigation = (path: string) => {
    navigate(path);
  };

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
        <Dialog open={isAccountOpen} onOpenChange={setIsAccountOpen}>
          <DialogTrigger asChild>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              <Settings className="w-4 h-4 mr-2" />
              Mon compte
            </DropdownMenuItem>
          </DialogTrigger>
          <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-background">
            <DialogHeader>
              <DialogTitle>Mon compte</DialogTitle>
            </DialogHeader>
            <div className="flex gap-6">
              <div className="flex-1">
                <AccountContent onClose={() => setIsAccountOpen(false)} />
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <DropdownMenuItem onClick={() => handleNavigation('/mes-locations')}>
          <Calendar className="w-4 h-4 mr-2" />
          Mes locations
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => handleNavigation('/mes-annonces')}>
          <Car className="w-4 h-4 mr-2" />
          Mes annonces
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => handleNavigation('/mes-favoris')}>
          <Heart className="w-4 h-4 mr-2" />
          Mes favoris
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => handleNavigation('/centre-aide')}>
          <HelpCircle className="w-4 h-4 mr-2" />
          Centre d'aide
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        
        <DropdownMenuItem onClick={signOut}>
          <User className="w-4 h-4 mr-2" />
          Déconnexion
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};