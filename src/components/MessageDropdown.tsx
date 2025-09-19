import { useState, useEffect } from "react";
import { MessageCircle, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

interface Message {
  id: string;
  from: string;
  content: string;
  time: string;
  unread: boolean;
}

interface MessageDropdownProps {
  unreadCount: number;
  onMessageRead: (messageId: string) => void;
}

export const MessageDropdown = ({ unreadCount, onMessageRead }: MessageDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      from: "Marie Dupont",
      content: "Bonjour, votre moto est-elle toujours disponible pour ce weekend ?",
      time: "Il y a 2h",
      unread: true
    },
    {
      id: "2", 
      from: "Pierre Martin",
      content: "Merci pour la location, tout s'est très bien passé !",
      time: "Il y a 5h",
      unread: true
    },
    {
      id: "3",
      from: "Sophie Bernard",
      content: "Est-ce que je peux prolonger la location d'une journée ?",
      time: "Hier",
      unread: false
    }
  ]);
  const navigate = useNavigate();

  const handleMessageClick = (messageId: string, conversationId: string) => {
    // Marquer le message comme lu localement
    setMessages(prev => 
      prev.map(msg => 
        msg.id === messageId ? { ...msg, unread: false } : msg
      )
    );
    
    // Notifier le parent pour mettre à jour le compteur
    onMessageRead(messageId);
    setIsOpen(false);
    navigate(`/messages?conversation=${conversationId}`);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button className="relative p-2 text-primary hover:text-secondary transition-colors">
          <MessageCircle className="w-5 h-5" />
          {unreadCount > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
            >
              {unreadCount}
            </Badge>
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-3">Messages récents</h3>
          
          {messages.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <MessageCircle className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>Aucun message</p>
            </div>
          ) : (
            <div className="space-y-3">
              {messages.map((message, index) => (
                <div 
                  key={message.id} 
                  className="flex items-start gap-3 p-2 hover:bg-accent rounded-lg cursor-pointer"
                  onClick={() => handleMessageClick(message.id, String(index + 1))}
                >
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-secondary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-medium text-sm truncate">{message.from}</p>
                      <span className="text-xs text-muted-foreground">{message.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{message.content}</p>
                    {message.unread && (
                      <div className="w-2 h-2 bg-primary rounded-full mt-1"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <Separator className="my-3" />
          
          <Link to="/messages" onClick={() => setIsOpen(false)}>
            <Button variant="outline" className="w-full">
              Voir tous mes messages
            </Button>
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
};