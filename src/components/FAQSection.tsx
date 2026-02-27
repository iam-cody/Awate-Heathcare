import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageSquare } from "lucide-react";

const faqs = [
  {
    question: "How does Awate Healthcare help in hospital selection?",
    answer: "We analyze your medical reports and match you with 3-4 top hospitals based on your budget, preferred city, and the expertise of specialists available in those facilities."
  },
  {
    question: "Do I have to pay anything to Awate Healthcare for facilitation?",
    answer: "No, our primary facialiation services for patients are completely free. We work as partners with hospitals to ensure you get the best coordination support."
  },
  {
    question: "Is my medical data secure with you?",
    answer: "Absolutely. We follow strict data privacy protocols. Your medical records are only shared with relevant hospital specialists after your explicit consent."
  },
  {
    question: "Can you help with emergency hospitalizations?",
    answer: "Yes, our team is trained to handle urgent admissions by expediting the coordination between your local doctor and our partner hospital specialists."
  },
  {
    question: "Will I have a dedicated person assisting me at the hospital?",
    answer: "Yes, every patient is assigned a dedicated Care Coordinator who manages your appointments, discharge process, and insurance formalities."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="text-brand-red font-bold text-sm uppercase tracking-[0.3em]">Support Center</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary font-display leading-tight">
                Frequently Asked <br />Questions
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Everything you need to know about navigating your healthcare with us.
              Transparency and clarity are at the core of our service.
            </p>

            <div className="p-8 rounded-[2.5rem] bg-brand-blue/5 border border-brand-blue/10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue flex items-center justify-center text-white shadow-premium">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-primary font-display">Still have questions?</h4>
              <p className="text-sm text-muted-foreground font-medium">
                Our care coordinators are available 24/7 to help you with any medical queries or hospital coordination needs.
              </p>
              <button className="pt-2 text-brand-red font-bold text-sm uppercase tracking-widest hover:text-brand-red-dark transition-colors border-b-2 border-brand-red/20 pb-1">
                Speak to our care coordinator
              </button>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-10 rounded-[3rem] shadow-premium">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-brand-blue/5 py-2 last:border-0">
                  <AccordionTrigger className="text-left font-display font-bold text-primary hover:text-brand-red hover:no-underline text-lg transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
