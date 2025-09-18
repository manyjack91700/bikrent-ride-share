import { useState } from "react";
import { Menu, X, User, Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">
              Bik<span className="text-secondary">Rent</span>
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-primary hover:text-secondary transition-colors font-medium">
              Louer
            </a>
            <a href="#" className="text-primary hover:text-secondary transition-colors font-medium">
              Proposer
            </a>
            <a href="#" className="text-primary hover:text-secondary transition-colors font-medium">
              Comment ça marche
            </a>
            <a href="#" className="text-primary hover:text-secondary transition-colors font-medium">
              Blog
            </a>
          </nav>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 text-primary hover:text-secondary transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 text-primary hover:text-secondary transition-colors">
              <MessageCircle className="w-5 h-5" />
            </button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <User className="w-4 h-4 mr-2" />
              Connexion
            </Button>
            <Button className="btn-hero">
              S'inscrire
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-white/95 backdrop-blur-sm">
            <nav className="py-4 space-y-4">
              <a href="#" className="block text-primary hover:text-secondary transition-colors font-medium">
                Louer une moto
              </a>
              <a href="#" className="block text-primary hover:text-secondary transition-colors font-medium">
                Proposer ma moto
              </a>
              <a href="#" className="block text-primary hover:text-secondary transition-colors font-medium">
                Comment ça marche
              </a>
              <a href="#" className="block text-primary hover:text-secondary transition-colors font-medium">
                Blog
              </a>
              <div className="flex gap-3 pt-4 border-t border-border">
                <Button variant="outline" className="flex-1 border-primary text-primary hover:bg-primary hover:text-white">
                  Connexion
                </Button>
                <Button className="flex-1 btn-hero">
                  S'inscrire
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;