import { Zap, Mountain, Shield, Wind } from "lucide-react";

const categories = [
  {
    name: "Custom",
    icon: Shield,
    description: "Style authentique et caractère unique",
    count: 120,
    color: "bg-gradient-to-br from-amber-500 to-orange-600"
  },
  {
    name: "Sportive",
    icon: Zap,
    description: "Performance et sensations extrêmes",
    count: 85,
    color: "bg-gradient-to-br from-red-500 to-rose-600"
  },
  {
    name: "Trail",
    icon: Mountain,
    description: "Aventure et tout-terrain",
    count: 95,
    color: "bg-gradient-to-br from-green-500 to-emerald-600"
  },
  {
    name: "Urbain",
    icon: Wind,
    description: "Agilité et praticité en ville",
    count: 150,
    color: "bg-gradient-to-br from-blue-500 to-cyan-600"
  }
];

const Categories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Trouvez votre <span className="text-secondary">style</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Chaque moto raconte une histoire. Quelle sera la vôtre ?
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div 
              key={category.name} 
              className="group relative overflow-hidden rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              {/* Background */}
              <div className={`${category.color} h-64 relative`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                
                {/* Icon */}
                <div className="absolute top-6 left-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                {/* Count Badge */}
                <div className="absolute top-6 right-6">
                  <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {category.count}+
                  </div>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-white/90 text-sm">{category.description}</p>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Pas sûr de votre choix ? Notre équipe vous aide à trouver la moto parfaite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-hero">
              Être conseillé
            </button>
            <button className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-300">
              Parcourir toutes les catégories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;