"use client";

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Card, CardBody } from "@nextui-org/card";

// Array di oggetti contenente le domande frequenti e le relative risposte
const faqData = [
  {
    question: "Come posso prenotare un campo?",
    answer: "Per prenotare un campo, seleziona lo sport desiderato dalla homepage, scegli il campo che preferisci, seleziona data e ora disponibili, e completa il processo di prenotazione inserendo i tuoi dati."
  },
  {
    question: "Posso cancellare una prenotazione?",
    answer: "Sì, puoi cancellare una prenotazione contattando il nostro servizio di assistenza via WhatsApp al numero +39 123 456 7890. Ti preghiamo di farlo con almeno 24 ore di anticipo per evitare eventuali penali."
  },
  {
    question: "Quali metodi di pagamento accettate?",
    answer: "Accettiamo pagamenti con carte di credito/debito (Visa, MasterCard, American Express), PayPal e bonifico bancario."
  },
  {
    question: "Cosa succede in caso di maltempo?",
    answer: "In caso di condizioni meteorologiche avverse che rendano impossibile l'utilizzo del campo, ti contatteremo per riprogrammare la tua prenotazione o offrirti un rimborso completo."
  }
];

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Titolo principale della pagina */}
      <h1 className="text-4xl font-bold text-center mb-8 text-myPrimary">Domande Frequenti</h1>
      
      {/* Card contenente l'accordion delle FAQ */}
      <Card className="max-w-3xl mx-auto">
        <CardBody>
          {/* Accordion per visualizzare le domande e risposte in modo interattivo */}
          <Accordion variant="splitted">
            {/* Ciclo faqData per creare gli elementi AccordionItem con le domande e risposte */}
            {faqData.map((faq, index) => (
              <AccordionItem key={index} aria-label={faq.question} title={faq.question}>
                <p className="text-gray-600">{faq.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </CardBody>
      </Card>

      {/* Sezione di contatto per ulteriori domande */}
      <div className="mt-12 text-center">
        <p className="text-lg text-gray-600">
          Non hai trovato la risposta che cercavi?
        </p>
        <p className="text-lg font-semibold text-myPrimary mt-2">
          Contattaci al +39 123 456 7890
        </p>
      </div>
    </div>
  );
}