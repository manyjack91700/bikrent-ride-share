import { Link } from "react-router-dom";
import { ArrowLeft, Upload, Camera, MapPin, Euro, Calendar, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Proposer = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header avec bannière */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link to="/">
                <h1 className="text-2xl font-bold text-primary cursor-pointer hover:text-secondary transition-colors">
                  Bik<span className="text-secondary">Rent</span>
                </h1>
              </Link>
            </div>
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour à l'accueil
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Proposer ma moto</h1>
            <p className="text-muted-foreground">Mettez votre moto en location et générez des revenus</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Formulaire principal */}
            <div className="lg:col-span-2 space-y-6">
              {/* Informations de base */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="w-5 h-5" />
                    Informations de base
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="brand">Marque</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner la marque" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yamaha">Yamaha</SelectItem>
                          <SelectItem value="honda">Honda</SelectItem>
                          <SelectItem value="kawasaki">Kawasaki</SelectItem>
                          <SelectItem value="suzuki">Suzuki</SelectItem>
                          <SelectItem value="ktm">KTM</SelectItem>
                          <SelectItem value="bmw">BMW</SelectItem>
                          <SelectItem value="ducati">Ducati</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="model">Modèle</Label>
                      <Input id="model" placeholder="Ex: MT-07, CBR600RR..." />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="year">Année</Label>
                      <Input id="year" type="number" placeholder="2020" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="type">Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Type de moto" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sport">Sport</SelectItem>
                          <SelectItem value="roadster">Roadster</SelectItem>
                          <SelectItem value="trail">Trail</SelectItem>
                          <SelectItem value="custom">Custom</SelectItem>
                          <SelectItem value="scooter">Scooter</SelectItem>
                          <SelectItem value="touring">Touring</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Décrivez votre moto, ses caractéristiques, son état..."
                      className="min-h-[100px]"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Photos */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Camera className="w-5 h-5" />
                    Photos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="font-medium mb-2">Ajoutez des photos de votre moto</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Glissez-déposez vos photos ou cliquez pour sélectionner
                    </p>
                    <Button variant="outline">
                      Choisir des photos
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Localisation et tarifs */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Localisation et tarifs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Adresse</Label>
                    <Input id="address" placeholder="Adresse de récupération" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="daily-price">Prix par jour (€)</Label>
                      <div className="relative">
                        <Euro className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input id="daily-price" type="number" placeholder="45" className="pl-10" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="deposit">Caution (€)</Label>
                      <div className="relative">
                        <Euro className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input id="deposit" type="number" placeholder="500" className="pl-10" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Disponibilités */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Disponibilités
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="start-date">Disponible à partir du</Label>
                      <Input id="start-date" type="date" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="end-date">Jusqu'au</Label>
                      <Input id="end-date" type="date" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button className="w-full" size="lg">
                Publier mon annonce
              </Button>
            </div>

            {/* Sidebar avec conseils */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Conseils pour une annonce réussie</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">📸 Photos de qualité</h4>
                    <p className="text-sm text-muted-foreground">
                      Ajoutez au moins 5 photos sous différents angles
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">💰 Prix compétitif</h4>
                    <p className="text-sm text-muted-foreground">
                      Consultez les annonces similaires pour fixer le bon prix
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">📝 Description détaillée</h4>
                    <p className="text-sm text-muted-foreground">
                      Décrivez l'état, les équipements et particularités
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">⚡ Réactivité</h4>
                    <p className="text-sm text-muted-foreground">
                      Répondez rapidement aux demandes de location
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Estimez vos revenus</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-primary">~850€</div>
                    <p className="text-sm text-muted-foreground">par mois en moyenne</p>
                    <p className="text-xs text-muted-foreground">
                      Basé sur 15 jours de location à 45€/jour
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Proposer;