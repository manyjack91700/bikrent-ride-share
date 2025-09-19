import { Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';

const MesFavoris = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Mes favoris</h1>
            <p className="text-muted-foreground">Retrouvez toutes vos motos favorites</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Vos motos favorites
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Heart className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">Aucune moto favorite</h3>
                <p className="text-muted-foreground">
                  Ajoutez des motos à vos favoris en cliquant sur le cœur lors de vos recherches
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default MesFavoris;