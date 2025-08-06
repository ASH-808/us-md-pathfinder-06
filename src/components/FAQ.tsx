import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the Medico International MBBS-MD U.S. Pathway?",
      answer: "The Medico International MBBS-MD U.S. Pathway is a comprehensive program that combines Caribbean medical education with guaranteed U.S. clinical rotations, USMLE preparation, and residency match support to help students become licensed physicians in the United States."
    },
    {
      question: "How is this different from studying MBBS in India?",
      answer: "Unlike Indian MBBS programs, our pathway provides direct access to U.S. clinical experience, American medical licensing preparation, and a proven route to U.S. residency programs. Students get hands-on training in top U.S. hospitals from day one of clinical rotations."
    },
    {
      question: "What are the eligibility requirements for NEET qualifiers?",
      answer: "NEET qualified students need to have completed 12th grade with Physics, Chemistry, and Biology. A minimum NEET score and English proficiency are required. We accept students who didn't secure seats in Indian medical colleges but are passionate about pursuing medicine."
    },
    {
      question: "How long does the complete program take?",
      answer: "The complete pathway typically takes 7-8 years: 20 months for pre-med prerequisites, 4 years for the MD degree, 1-2 years for U.S. clinical rotations and USMLE preparation, followed by 3-7 years of residency training depending on your chosen specialty."
    },
    {
      question: "What is the cost of the program?",
      answer: "Program costs vary depending on the medical school and duration of clinical rotations. Total investment typically ranges from $200,000-$300,000 for the entire medical education. We offer various financing options and scholarship opportunities for qualifying students."
    },
    {
      question: "Are graduates eligible for U.S. medical licensing?",
      answer: "Yes, absolutely. Our Caribbean partner medical schools are recognized by the U.S. Department of Education and listed in the World Directory of Medical Schools. Graduates are eligible to take USMLE exams and apply for U.S. residency programs."
    },
    {
      question: "What is the residency match rate for your students?",
      answer: "Our students achieve a 95% residency match rate, significantly higher than the average for international medical graduates. This is due to our comprehensive preparation, U.S. clinical experience, and dedicated residency support services."
    },
    {
      question: "Can I specialize in any medical field?",
      answer: "Yes, our graduates have matched into various specialties including Internal Medicine, Family Medicine, Pediatrics, Surgery, Emergency Medicine, Radiology, Psychiatry, and more. The choice depends on your interests, performance, and competitiveness in that specialty."
    },
    {
      question: "Do you provide USMLE preparation support?",
      answer: "Yes, comprehensive USMLE preparation is integrated into our program. We provide dedicated coaching, practice materials, mock exams, and one-on-one tutoring to ensure students are well-prepared for all three steps of the USMLE."
    },
    {
      question: "What support do you provide for residency applications?",
      answer: "We offer complete residency application support including personal statement writing, CV optimization, interview preparation, hospital selection guidance, and connections with program directors. Our dedicated team works with you throughout the entire Match process."
    },
    {
      question: "Can parents visit during the program?",
      answer: "Yes, we encourage family involvement. Parents can visit during orientation, white coat ceremonies, and graduation. We also provide regular updates to families and organize parent information sessions to keep them informed about their child's progress."
    },
    {
      question: "What happens if I don't match into a residency program?",
      answer: "While our match rate is 95%, we provide additional support for students who don't match initially. This includes gap year guidance, research opportunities, additional clinical experience, and preparation for the next Match cycle. We remain committed to your success until you achieve your goal."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about the Medico International MBBS-MD U.S. Pathway program
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-border shadow-lg">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-border">
                    <AccordionTrigger className="text-left hover:text-primary transition-smooth">
                      <span className="font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Contact for more questions */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have questions? Our admissions counselors are here to help.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm">
              <div className="flex items-center">
                <span className="font-medium text-foreground">Call:</span>
                <span className="ml-2 text-primary">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-foreground">Email:</span>
                <span className="ml-2 text-primary">admissions@medicointl.com</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-foreground">WhatsApp:</span>
                <span className="ml-2 text-primary">+1 (555) 987-6543</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;