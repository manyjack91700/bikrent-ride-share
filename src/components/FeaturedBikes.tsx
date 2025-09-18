import { Star, MapPin, Fuel, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import bikeCustom from "@/assets/bike-custom.jpg";
import bikeSport from "@/assets/bike-sport.jpg";
import bikeTrail from "@/assets/bike-trail.jpg";

const featuredBikes = [
  {
    id: 1,
    name: "Harley Davidson Iron 883",
    type: "Custom",
    location: "Paris 11ème",
    price: 89,
    rating: 4.9,
    reviews: 23,
    image: bikeCustom,
    features: ["Permis A2", "Casque inclus", "Assurance"]
  },
  {
    id: 2,
    name: "Yamaha YZF-R1",
    type: "Sportive",
    location: "Lyon 3ème",
    price: 120,
    rating: 4.8,
    reviews: 31,
    image: bikeSport,
    features: ["Haute performance", "Circuit possible", "Équipement racing"]
  },
  {
    id: 3,
    name: "BMW R1250 GS",
    type: "Trail",
    location: "Marseille",
    price: 95,
    rating: 5.0,
    reviews: 18,
    image: bikeTrail,
    features: ["Tout-terrain", "GPS inclus", "Sacoches"]
  }
];

const FeaturedBikes = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Motos coup de <span className="text-secondary">cœur</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez une sélection de motos exceptionnelles, testées et approuvées par notre communauté
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {featuredBikes.map((bike) => (
            <div key={bike.id} className="bike-card group">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={bike.image} 
                  alt={bike.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {bike.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">{bike.rating}</span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{bike.name}</h3>
                
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{bike.location}</span>
                  <Users className="w-4 h-4 ml-2" />
                  <span className="text-sm">{bike.reviews} avis</span>
                </div>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {bike.features.map((feature, index) => (
                    <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                      {feature}
                    </span>
                  ))}
                </div>
                
                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary">{bike.price}€</span>
                    <span className="text-muted-foreground">/jour</span>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Réserver
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white">
            Voir toutes les motos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBikes;