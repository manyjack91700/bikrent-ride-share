import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, User, Heart, MessageCircle, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible de se déconnecter",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Déconnexion",
        description: "Vous êtes maintenant déconnecté",
      });
      navigate('/');
    }
  };
  
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
            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-primary font-medium">
                  Bonjour, {user.email}
                </span>
                <Button variant="outline" onClick={handleSignOut} className="border-primary text-primary hover:bg-primary hover:text-white">
                  <LogOut className="w-4 h-4 mr-2" />
                  Déconnexion
                </Button>
              </div>
            ) : (
              <>
                <Link to="/auth">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    <User className="w-4 h-4 mr-2" />
                    Connexion
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button className="btn-hero">
                    S'inscrire
                  </Button>
                </Link>
              </>
            )}
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
                {user ? (
                  <div className="w-full">
                    <div className="mb-3 text-primary font-medium">
                      Bonjour, {user.email}
                    </div>
                    <Button onClick={handleSignOut} variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                      <LogOut className="w-4 h-4 mr-2" />
                      Déconnexion
                    </Button>
                  </div>
                ) : (
                  <>
                    <Link to="/auth" className="flex-1">
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                        Connexion
                      </Button>
                    </Link>
                    <Link to="/auth" className="flex-1">
                      <Button className="w-full btn-hero">
                        S'inscrire
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;