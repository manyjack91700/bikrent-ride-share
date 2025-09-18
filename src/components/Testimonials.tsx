import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marc",
    location: "Paris",
    rating: 5,
    text: "J'ai loué une Harley pour mon week-end en Normandie. Le propriétaire était top, la moto impeccable. Une expérience inoubliable !",
    avatar: "M"
  },
  {
    name: "Sarah",
    location: "Lyon",
    rating: 5,
    text: "Première fois que je testais une moto trail. Grâce à BikRent, j'ai pu découvrir ma passion sans m'engager dans un achat.",
    avatar: "S"
  },
  {
    name: "Thomas",
    location: "Marseille",
    rating: 5,
    text: "Je loue ma sportive via BikRent depuis 6 mois. Les locataires sont respectueux et ça me permet de financer ma passion !",
    avatar: "T"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Ils ont testé, ils <span className="text-secondary">adorent</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Rejoignez des milliers de motards qui font confiance à BikRent
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-gradient p-8 relative">
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-secondary/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-8 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-secondary/10 to-orange-500/10 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-primary mb-4">
              Prêt à vivre votre propre aventure ?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Rejoignez la communauté BikRent et découvrez la liberté à deux roues
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero">
                Louer une moto
              </button>
              <button className="px-8 py-4 border-2 border-secondary text-secondary font-semibold rounded-xl hover:bg-secondary hover:text-white transition-all duration-300">
                Proposer ma moto
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;