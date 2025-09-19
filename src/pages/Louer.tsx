import { Link } from "react-router-dom";
import { ArrowLeft, Search, MapPin, Calendar, Star, Fuel, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Louer = () => {
  // Motos simulées pour la démo
  const availableBikes = [
    {
      id: 1,
      name: "Yamaha MT-07",
      image: "/src/assets/bike-sport.jpg",
      price: 45,
      location: "Paris 11ème",
      rating: 4.8,
      reviews: 23,
      type: "Sport",
      fuel: "Essence",
      seats: 2
    },
    {
      id: 2,
      name: "Honda CB650R",
      image: "/src/assets/bike-custom.jpg", 
      price: 50,
      location: "Paris 15ème",
      rating: 4.9,
      reviews: 31,
      type: "Roadster",
      fuel: "Essence",
      seats: 2
    },
    {
      id: 3,
      name: "KTM 390 Adventure",
      image: "/src/assets/bike-trail.jpg",
      price: 40,
      location: "Paris 20ème", 
      rating: 4.7,
      reviews: 18,
      type: "Trail",
      fuel: "Essence",
      seats: 2
    }
  ];

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
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Section de recherche */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Louer une moto</h1>
            <p className="text-muted-foreground mb-6">Trouvez la moto parfaite pour votre prochaine aventure</p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-card rounded-lg border border-border">
              <div className="space-y-2">
                <label className="text-sm font-medium">Où ?</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input placeholder="Ville, quartier..." className="pl-10" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Date de début</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input type="date" className="pl-10" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Date de fin</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input type="date" className="pl-10" />
                </div>
              </div>
              
              <div className="flex items-end">
                <Button className="w-full">
                  <Search className="w-4 h-4 mr-2" />
                  Rechercher
                </Button>
              </div>
            </div>
          </div>

          {/* Liste des motos disponibles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableBikes.map((bike) => (
              <Card key={bike.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative">
                    <img 
                      src={bike.image} 
                      alt={bike.name}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-2 left-2" variant="secondary">
                      {bike.type}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{bike.name}</h3>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{bike.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{bike.rating}</span>
                      <span className="text-sm text-muted-foreground">({bike.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Fuel className="w-4 h-4" />
                      <span>{bike.fuel}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{bike.seats} places</span>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="p-4 pt-0 flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary">{bike.price}€</span>
                    <span className="text-sm text-muted-foreground">/jour</span>
                  </div>
                  <Button>Réserver</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Louer;