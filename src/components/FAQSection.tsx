import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What services does Awate Healthcare offer?",
    a: "We provide hospital selection assistance, doctor appointment booking, surgery & treatment coordination, second medical opinions, and post-treatment support across India.",
  },
  {
    q: "How do I schedule an appointment?",
    a: "You can book an appointment through our website form, call us directly, or reach us on WhatsApp. Our patient coordinators respond within 30 minutes.",
  },
  {
    q: "What treatments do you cover?",
    a: "We cover a wide range of specialties including Cardiology, Orthopedics, Neurology, Oncology, IVF & Fertility, Kidney Care, and Spine Surgery.",
  },
  {
    q: "Do you accept insurance?",
    a: "We work with most major insurance providers in India. Our team can help you understand your coverage and process cashless claims at partner hospitals.",
  },
  {
    q: "How much do your services cost?",
    a: "Our consultation and guidance services are free for patients. We earn through hospital partnerships, ensuring zero additional cost to you.",
  },
  {
    q: "Can I get a second medical opinion?",
    a: "Absolutely. We connect you with independent specialists who review your diagnosis and suggest alternative treatment options when available.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-max max-w-3xl">
        <div className="text-center mb-14">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about our healthcare guidance services.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card rounded-xl border border-border px-6 shadow-card"
            >
              <AccordionTrigger className="text-left text-sm font-semibold hover:no-underline hover:text-secondary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
