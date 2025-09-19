import { HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Header from '@/components/Header';

const CentreAide = () => {
  const faqItems = [
    {
      question: "Comment louer une moto ?",
      answer: "Pour louer une moto, recherchez le véhicule qui vous convient, vérifiez sa disponibilité, et procédez à la réservation en ligne. N'oubliez pas de vérifier que vous avez le permis adapté."
    },
    {
      question: "Quels documents sont nécessaires ?",
      answer: "Vous devez présenter un permis de conduire valide, une pièce d'identité et un moyen de paiement. Certains propriétaires peuvent demander des documents supplémentaires."
    },
    {
      question: "Comment mettre ma moto en location ?",
      answer: "Créez une annonce avec des photos de qualité, décrivez votre moto en détail, fixez vos tarifs et conditions de location. Votre moto sera visible par tous les utilisateurs."
    },
    {
      question: "Que faire en cas de problème ?",
      answer: "Contactez immédiatement notre service client via le chat, téléphone ou email. Nous sommes là pour vous aider à résoudre tout problème rapidement."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-primary mb-2">Centre d'aide</h1>
            <p className="text-muted-foreground">Trouvez des réponses à vos questions ou contactez-nous</p>
          </div>

          <div className="grid gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5" />
                  Questions fréquentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent>{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Nous contacter</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <Button variant="outline" className="flex items-center gap-2 h-auto py-4">
                    <MessageCircle className="w-5 h-5" />
                    <div className="text-left">
                      <div className="font-medium">Chat en direct</div>
                      <div className="text-sm text-muted-foreground">Réponse immédiate</div>
                    </div>
                  </Button>
                  
                  <Button variant="outline" className="flex items-center gap-2 h-auto py-4">
                    <Phone className="w-5 h-5" />
                    <div className="text-left">
                      <div className="font-medium">01 23 45 67 89</div>
                      <div className="text-sm text-muted-foreground">Lun-Ven 9h-18h</div>
                    </div>
                  </Button>
                  
                  <Button variant="outline" className="flex items-center gap-2 h-auto py-4">
                    <Mail className="w-5 h-5" />
                    <div className="text-left">
                      <div className="font-medium">support@bikrent.fr</div>
                      <div className="text-sm text-muted-foreground">Réponse sous 24h</div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CentreAide;