import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useProfile } from '@/hooks/useProfile';
import { useToast } from '@/hooks/use-toast';

interface DrivingLicenseFormProps {
  onClose: () => void;
}

export const DrivingLicenseForm = ({ onClose }: DrivingLicenseFormProps) => {
  const { profile, updateProfile, loading } = useProfile();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    license_number: '',
    license_type_a: false,
    license_type_a1: false,
    license_type_a2: false,
    license_type_b: false,
  });

  useEffect(() => {
    if (profile) {
      setFormData({
        license_number: profile.license_number || '',
        license_type_a: profile.license_type_a,
        license_type_a1: profile.license_type_a1,
        license_type_a2: profile.license_type_a2,
        license_type_b: profile.license_type_b,
      });
    }
  }, [profile]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const { error } = await updateProfile(formData);
    
    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour les informations du permis",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Succès",
        description: "Informations du permis mises à jour avec succès",
      });
      onClose();
    }
  };

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="license_number">Numéro de permis</Label>
          <Input
            id="license_number"
            value={formData.license_number}
            onChange={(e) => setFormData({ ...formData, license_number: e.target.value })}
            placeholder="Entrez votre numéro de permis"
          />
        </div>

        <div className="space-y-4">
          <Label className="text-base font-semibold">Types de permis possédés</Label>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="license_type_a"
                checked={formData.license_type_a}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, license_type_a: !!checked })
                }
              />
              <Label htmlFor="license_type_a" className="text-sm">
                Permis A - Motos (toutes cylindrées)
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="license_type_a2"
                checked={formData.license_type_a2}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, license_type_a2: !!checked })
                }
              />
              <Label htmlFor="license_type_a2" className="text-sm">
                Permis A2 - Motos (35kW maximum)
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="license_type_a1"
                checked={formData.license_type_a1}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, license_type_a1: !!checked })
                }
              />
              <Label htmlFor="license_type_a1" className="text-sm">
                Permis A1 - Motos légères (125cc)
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="license_type_b"
                checked={formData.license_type_b}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, license_type_b: !!checked })
                }
              />
              <Label htmlFor="license_type_b" className="text-sm">
                Permis B - Voitures
              </Label>
            </div>
          </div>
        </div>

        <div className="flex gap-2 pt-4">
          <Button type="submit" disabled={loading}>
            Sauvegarder
          </Button>
          <Button type="button" variant="outline" onClick={onClose}>
            Annuler
          </Button>
        </div>
      </form>
    </div>
  );
};