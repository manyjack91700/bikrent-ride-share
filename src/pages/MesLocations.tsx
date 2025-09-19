import { useState } from 'react';
import { Calendar, CheckCircle, XCircle, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';

const MesLocations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Mes locations</h1>
            <p className="text-muted-foreground">Gérez toutes vos locations de motos</p>
          </div>

          <Tabs defaultValue="en-cours" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="en-cours" className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                En cours
              </TabsTrigger>
              <TabsTrigger value="terminees" className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Terminées
              </TabsTrigger>
              <TabsTrigger value="annulees" className="flex items-center gap-2">
                <XCircle className="w-4 h-4" />
                Annulées
              </TabsTrigger>
            </TabsList>

            <TabsContent value="en-cours" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Locations en cours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Aucune location en cours pour le moment.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="terminees" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Locations terminées
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Aucune location terminée pour le moment.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="annulees" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    Locations annulées
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Aucune location annulée pour le moment.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default MesLocations;