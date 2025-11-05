"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What types of properties do you sell?",
    answer:
      "We offer a wide range of properties including apartments, villas, plots, commercial spaces, and new project launches from verified developers across major cities in India.",
  },
  {
    question: "Is real estate a good investment?",
    answer:
      "Real estate has historically been a strong investment with consistent appreciation rates of 8-12% annually in premium locations, along with rental income potential.",
  },
  {
    question: "Do I need a home loan to buy property?",
    answer:
      "While not mandatory, many buyers opt for home loans which offer tax benefits and manageable EMI structures. We can connect you with certified financial advisors.",
  },
  {
    question: "What are the steps to purchase?",
    answer:
      "The process involves: property selection, documentation verification, legal clearance, site inspection, negotiation, agreement signing, and registry completion.",
  },
  {
    question: "Are all listings verified?",
    answer:
      "100% of our listings are verified by our team. We conduct thorough legal checks, ownership verification, and site inspections before listing any property.",
  },
]

export function FAQ() {
  return (
    <section className="py-16 px-4 bg-muted/20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
        <p className="text-foreground/70 mb-12">
          Find answers to common questions about buying and investing in properties
        </p>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border border-border rounded-lg mb-3 px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 pt-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
