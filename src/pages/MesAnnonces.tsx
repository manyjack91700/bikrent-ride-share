import { Car, Plus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';

const MesAnnonces = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-primary mb-2">Mes annonces</h1>
              <p className="text-muted-foreground">Gérez vos motos mises en location</p>
            </div>
            <Button className="btn-hero">
              <Plus className="w-4 h-4 mr-2" />
              Créer une annonce
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="w-5 h-5" />
                Vos motos en location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Car className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">Aucune annonce pour le moment</h3>
                <p className="text-muted-foreground mb-6">
                  Commencez à gagner de l'argent en mettant votre moto en location
                </p>
                <Button className="btn-hero">
                  <Plus className="w-4 h-4 mr-2" />
                  Créer votre première annonce
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default MesAnnonces;