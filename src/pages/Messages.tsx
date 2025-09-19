import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, Send, User, Phone, MoreVertical, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";

interface Message {
  id: string;
  from: string;
  to: string;
  content: string;
  timestamp: string;
  isFromMe: boolean;
  unread?: boolean;
}

interface Conversation {
  id: string;
  participant: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  avatar?: string;
}

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Données simulées pour les conversations
  const conversations: Conversation[] = [
    {
      id: "1",
      participant: "Marie Dupont",
      lastMessage: "Bonjour, votre moto est-elle toujours disponible pour ce weekend ?",
      lastMessageTime: "Il y a 2h",
      unreadCount: 2
    },
    {
      id: "2",
      participant: "Pierre Martin", 
      lastMessage: "Merci pour la location, tout s'est très bien passé !",
      lastMessageTime: "Il y a 5h",
      unreadCount: 1
    },
    {
      id: "3",
      participant: "Sophie Bernard",
      lastMessage: "Est-ce que je peux prolonger la location d'une journée ?",
      lastMessageTime: "Hier",
      unreadCount: 0
    },
    {
      id: "4",
      participant: "Lucas Petit",
      lastMessage: "Parfait, à demain alors !",
      lastMessageTime: "2 jours",
      unreadCount: 0
    }
  ];

  // Messages pour la conversation sélectionnée
  const messages: Message[] = [
    {
      id: "1",
      from: "Marie Dupont",
      to: "Moi",
      content: "Bonjour ! Je suis intéressée par votre Yamaha MT-07. Est-elle disponible ce weekend ?",
      timestamp: "14:30",
      isFromMe: false
    },
    {
      id: "2",
      from: "Moi",
      to: "Marie Dupont", 
      content: "Bonjour Marie ! Oui elle est disponible. Pour combien de jours souhaitez-vous la louer ?",
      timestamp: "14:35",
      isFromMe: true
    },
    {
      id: "3",
      from: "Marie Dupont",
      to: "Moi",
      content: "Pour 2 jours, samedi et dimanche. Quel est le tarif ?",
      timestamp: "14:37",
      isFromMe: false
    },
    {
      id: "4",
      from: "Moi", 
      to: "Marie Dupont",
      content: "C'est 80€ par jour, soit 160€ pour le weekend. La caution est de 500€.",
      timestamp: "14:40",
      isFromMe: true
    },
    {
      id: "5",
      from: "Marie Dupont",
      to: "Moi",
      content: "Parfait ! Comment procède-t-on pour la réservation ?",
      timestamp: "16:15",
      isFromMe: false,
      unread: true
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Ici on ajouterait la logique pour envoyer le message
      console.log("Envoyer message:", newMessage);
      setNewMessage("");
    }
  };

  const filteredConversations = conversations.filter(conv =>
    conv.participant.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Mes Messages</h1>
            <p className="text-muted-foreground">Gérez vos conversations avec les autres utilisateurs</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[700px]">
            {/* Liste des conversations */}
            <div className="lg:col-span-1 border border-border rounded-lg bg-card">
              <div className="p-4 border-b border-border">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Rechercher une conversation..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="overflow-y-auto h-[calc(700px-80px)]">
                {filteredConversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={`p-4 border-b border-border cursor-pointer hover:bg-accent transition-colors ${
                      selectedConversation === conversation.id ? 'bg-accent' : ''
                    }`}
                    onClick={() => setSelectedConversation(conversation.id)}
                  >
                    <div className="flex items-start gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback>
                          <User className="w-5 h-5" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-medium text-sm truncate">{conversation.participant}</h3>
                          <span className="text-xs text-muted-foreground">{conversation.lastMessageTime}</span>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-1">
                          {conversation.lastMessage}
                        </p>
                        {conversation.unreadCount > 0 && (
                          <Badge variant="default" className="text-xs">
                            {conversation.unreadCount} nouveau{conversation.unreadCount > 1 ? 'x' : ''}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Zone de conversation */}
            <div className="lg:col-span-2 border border-border rounded-lg bg-card flex flex-col">
              {selectedConversation ? (
                <>
                  {/* Header de la conversation */}
                  <div className="p-4 border-b border-border flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback>
                          <User className="w-5 h-5" />
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">
                          {conversations.find(c => c.id === selectedConversation)?.participant}
                        </h3>
                        <p className="text-sm text-muted-foreground">En ligne</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isFromMe ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[70%] rounded-lg p-3 ${
                            message.isFromMe
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted text-muted-foreground'
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <p className={`text-xs mt-1 ${
                            message.isFromMe ? 'text-primary-foreground/70' : 'text-muted-foreground/70'
                          }`}>
                            {message.timestamp}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Zone de saisie */}
                  <div className="p-4 border-t border-border">
                    <div className="flex gap-2">
                      <Textarea
                        placeholder="Tapez votre message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSendMessage();
                          }
                        }}
                        className="min-h-[60px] resize-none"
                      />
                      <Button onClick={handleSendMessage} size="sm" className="self-end">
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center text-center">
                  <div>
                    <MessageCircle className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
                    <h3 className="text-lg font-medium mb-2">Sélectionnez une conversation</h3>
                    <p className="text-muted-foreground">
                      Choisissez une conversation dans la liste pour commencer à discuter
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Messages;