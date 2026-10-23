import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { FAQList } from "@/data/FAQList";

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-background py-24 text-foreground transition-colors sm:py-32"
    >
      <div className="container">
        <div className="mx-auto max-w-3xl">
          {/* Cabeçalho */}
          <div className="mb-10 text-center">
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              Dúvidas
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground md:text-4xl lg:text-5xl">
              Perguntas frequentes
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              Tudo o que você precisa saber antes de começar a organizar seu
              próximo retiro.
            </p>
          </div>

          {/* Perguntas */}
          <Accordion
            type="single"
            collapsible
            className="w-full rounded-2xl border border-border bg-card/60 px-6"
          >
            {FAQList.map(({ question, answer, value }) => (
              <AccordionItem
                key={value}
                value={value}
                className="border-border"
              >
                <AccordionTrigger className="py-6 text-left text-base font-medium text-card-foreground hover:no-underline">
                  {question}
                </AccordionTrigger>

                <AccordionContent className="max-w-2xl pb-6 leading-7 text-muted-foreground">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Ainda ficou com alguma dúvida?{" "}
            <a
              href="#contact"
              className="font-medium text-primary transition-colors hover:text-primary/80"
            >
              Fale com a gente.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
