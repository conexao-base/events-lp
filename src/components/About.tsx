import pilot from "../assets/pilot.png";
import { Statistics } from "./Statistics";

export const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background py-24 text-foreground transition-colors sm:py-32"
    >
      {/* Elementos decorativos */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-secondary blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative">
        <div className="overflow-hidden rounded-[2rem] border border-border bg-card/60 transition-colors">
          <div className="grid items-center gap-12 px-6 py-10 sm:px-10 sm:py-12 md:grid-cols-[0.8fr_1.2fr] md:px-14 md:py-16 lg:gap-20">
            {/* Imagem */}
            <div className="relative flex justify-center">
              <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-secondary" />

              <div className="relative overflow-hidden rounded-[1.5rem] bg-secondary">
                <img
                  src={pilot}
                  alt=""
                  className="w-full max-w-[360px] object-contain"
                />
              </div>
            </div>

            {/* Conteúdo */}
            <div className="flex flex-col">
              <span className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-primary">
                Feito para retiros
              </span>

              <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-foreground md:text-4xl lg:text-5xl">
                Menos tempo organizando.
                <span className="block text-primary">Mais tempo cuidando.</span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                Reunimos inscrições, participantes e pagamentos em um só lugar
                para simplificar a organização do seu retiro.
              </p>

              <p className="mt-4 max-w-xl leading-7 text-muted-foreground/80">
                Sua equipe acompanha tudo de forma simples e organizada,
                enquanto você pode dedicar mais atenção às pessoas e àquilo que
                realmente importa.
              </p>

              <div className="mt-10 border-t border-border pt-8">
                <Statistics />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
