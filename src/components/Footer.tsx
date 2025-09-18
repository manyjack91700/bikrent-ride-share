import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-bold mb-4">
              Bik<span className="text-secondary">Rent</span>
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              La plateforme de location de motos entre passionnés. 
              Vivez la liberté, partagez la passion.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {["Louer une moto", "Proposer ma moto", "Comment ça marche", "Nos garanties", "Blog"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/80 hover:text-secondary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {["Centre d'aide", "Contact", "Conditions", "Confidentialité", "Assurance"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/80 hover:text-secondary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div className="text-white/80">
                  123 Avenue de la Liberté<br />
                  75001 Paris, France
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-white/80">01 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-white/80">hello@bikrent.fr</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60">
            © 2024 BikRent. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-secondary transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-white/60 hover:text-secondary transition-colors">
              CGU
            </a>
            <a href="#" className="text-white/60 hover:text-secondary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;