
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

const FaqSection = () => {
  const faqs = [
    {
      question: "Are there any bulk purchase discounts for teams?",
      answer: "Yes, I offer special pricing for team purchases of 5+ copies. Contact me at fran@fmvilas.me for details."
    },
    {
      question: "What formats are available?",
      answer: "Shift is available in PDF and ePub formats."
    },
    {
      question: "Is this book only relevant for those using specific technologies?",
      answer: "No, the principles and strategies in Shift are technology-agnostic. The focus is on architectural patterns, organizational change strategies, and adoption approaches that work across different technology stacks."
    },
    {
      question: "I'm new to event-driven architecture. Is this book right for me?",
      answer: "Shift assumes a foundational understanding of software architecture principles and distributed systems."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-book-lightGray">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 opacity-0 animate-slide-up">
          <h2 className="text-book-darkGray text-3xl font-bold tracking-tighter sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-book-darkGray/80 md:text-lg">
            Everything you need to know about the book and pre-ordering process
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto opacity-0 animate-slide-up animate-delay-300">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-medium text-book-darkGray py-4 hover:text-book-secondary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-book-darkGray/80 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center opacity-0 animate-slide-up animate-delay-600">
          <p className="text-book-darkGray/80">
            Have more questions? <a href="mailto:fran@fmvilas.me" className="text-book-secondary hover:underline">Contact me</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
