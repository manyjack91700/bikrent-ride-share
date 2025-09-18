import { Search, MessageCircle, Key, Star } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Trouvez",
    description: "Parcourez les motos disponibles dans votre ville selon vos critères : type, budget, dates.",
    color: "text-secondary"
  },
  {
    icon: MessageCircle,
    title: "Échangez",
    description: "Contactez le propriétaire, posez vos questions, planifiez la remise des clés.",
    color: "text-blue-600"
  },
  {
    icon: Key,
    title: "Roulez",
    description: "Récupérez votre moto, effectuez le paiement sécurisé et partez à l'aventure !",
    color: "text-green-600"
  },
  {
    icon: Star,
    title: "Partagez",
    description: "Laissez un avis après votre expérience pour aider la communauté à grandir.",
    color: "text-purple-600"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Comment ça <span className="text-secondary">marche</span> ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            En 4 étapes simples, vivez l'expérience moto de vos rêves
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Step Number */}
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-white to-muted rounded-full shadow-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-primary mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              
              {/* Connection Line (except last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-secondary/50 to-transparent transform translate-x-4" 
                     style={{ width: 'calc(100% - 2rem)' }} />
              )}
            </div>
          ))}
        </div>
        
        {/* Trust Section */}
        <div className="mt-20 bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold text-primary mb-4">
                Roulez en toute <span className="text-secondary">confiance</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Tous les propriétaires sont vérifiés, les motos assurées, et notre équipe vous accompagne 24h/24 en cas de besoin.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-primary">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-1 bg-white rounded-full" />
                  </div>
                  <span className="font-medium">Identité vérifiée</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-1 bg-white rounded-full" />
                  </div>
                  <span className="font-medium">Assurance incluse</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-1 bg-white rounded-full" />
                  </div>
                  <span className="font-medium">Support 24h/24</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-secondary mb-2">99%</div>
              <div className="text-lg text-muted-foreground">de satisfaction client</div>
              <button className="btn-hero mt-6">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;