import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { UserProfileDropdown } from "./UserProfileDropdown";
import { MessageDropdown } from "./MessageDropdown";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [unreadMessages, setUnreadMessages] = useState(3);
  const { user } = useAuth();
  
  const handleMessageRead = (messageId: string) => {
    setUnreadMessages(prev => Math.max(0, prev - 1));
  };
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-2xl font-bold text-primary cursor-pointer hover:text-secondary transition-colors">
                Bik<span className="text-secondary">Rent</span>
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/louer" className="text-primary hover:text-secondary transition-colors font-medium">
              Louer
            </Link>
            <Link to="/proposer" className="text-primary hover:text-secondary transition-colors font-medium">
              Proposer
            </Link>
            <a href="#how-it-works" className="text-primary hover:text-secondary transition-colors font-medium">
              Comment ça marche
            </a>
          </nav>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <MessageDropdown unreadCount={unreadMessages} onMessageRead={handleMessageRead} />
            {user ? (
              <UserProfileDropdown />
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
              <Link to="/louer" className="block text-primary hover:text-secondary transition-colors font-medium">
                Louer une moto
              </Link>
              <Link to="/proposer" className="block text-primary hover:text-secondary transition-colors font-medium">
                Proposer ma moto
              </Link>
              <a href="#how-it-works" className="block text-primary hover:text-secondary transition-colors font-medium">
                Comment ça marche
              </a>
              <div className="flex gap-3 pt-4 border-t border-border">
                {user ? (
                  <UserProfileDropdown />
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