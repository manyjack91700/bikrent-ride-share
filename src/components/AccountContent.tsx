import { useState } from 'react';
import { Settings, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProfileForm } from './ProfileForm';
import { DrivingLicenseForm } from './DrivingLicenseForm';

interface AccountContentProps {
  onClose: () => void;
}

export const AccountContent = ({ onClose }: AccountContentProps) => {
  const [activeSection, setActiveSection] = useState('profile');

  return (
    <div className="flex gap-6">
      <div className="w-64 border-r border-border pr-6">
        <nav className="space-y-2">
          <Button 
            variant={activeSection === 'profile' ? 'default' : 'ghost'}
            className="w-full justify-start text-left"
            onClick={() => setActiveSection('profile')}
          >
            <Settings className="w-4 h-4 mr-2" />
            Informations personnelles
          </Button>
          <Button 
            variant={activeSection === 'license' ? 'default' : 'ghost'}
            className="w-full justify-start text-left"
            onClick={() => setActiveSection('license')}
          >
            <FileText className="w-4 h-4 mr-2" />
            Permis de conduire
          </Button>
        </nav>
      </div>
      <div className="flex-1">
        {activeSection === 'profile' && (
          <ProfileForm onClose={onClose} />
        )}
        {activeSection === 'license' && (
          <DrivingLicenseForm onClose={onClose} />
        )}
      </div>
    </div>
  );
};