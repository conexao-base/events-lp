import { ArrowRight } from "lucide-react";

import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-background">
      {/* Background */}
      <div className="container relative flex min-h-[820px] flex-col items-center justify-center px-6 py-28 text-center">
        {/* Headline */}
        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] text-foreground md:text-6xl lg:text-7xl">
          Organize o retiro.
          <span className="mt-2 block text-primary">Cuide das pessoas.</span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
          Inscrições, participantes e pagamentos em um só lugar, para que sua
          equipe tenha menos preocupação com organização e mais tempo para
          servir.
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button className="h-12 rounded-xl bg-primary px-7 text-base font-medium text-primary-foreground shadow-md shadow-primary/10 transition-all hover:bg-primary/90 hover:shadow-lg">
            Organizar meu retiro
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            className="h-12 rounded-xl px-7 text-base font-medium text-primary transition-colors hover:bg-secondary"
          >
            Conhecer a plataforma
          </Button>
        </div>

        {/* Indicador inferior */}
        <div className="absolute bottom-12 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          <span className="h-px w-8 bg-border" />
          Organize · Sirva · Cuide
          <span className="h-px w-8 bg-border" />
        </div>
      </div>
    </section>
  );
};
