import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { features } from "@/data/features";

export const Features = () => {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-background py-24 text-foreground transition-colors sm:py-32"
    >
      {/* Elemento decorativo */}
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-secondary blur-3xl" />

      <div className="container relative">
        {/* Cabeçalho */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
            Tudo em um só lugar
          </span>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-foreground md:text-4xl lg:text-5xl">
            Organize cada detalhe
            <span className="block text-primary">sem complicar.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Ferramentas pensadas para deixar a organização do retiro mais
            simples para você e sua equipe.
          </p>
        </div>

        {/* Recursos */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {features.map(({ number, title, description, image }) => (
            <Card
              key={title}
              className="group relative overflow-hidden rounded-[2rem] border-border bg-card/70 shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <CardHeader className="relative z-10 p-8 pb-4">
                <div className="mb-6 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-sm font-semibold text-primary">
                    {number}
                  </span>

                  <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Retiro
                  </span>
                </div>

                <CardTitle className="text-xl font-semibold text-card-foreground">
                  {title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative z-10 p-8 pt-2">
                <p className="leading-7 text-muted-foreground">{description}</p>

                <div className="relative mt-8 flex h-48 items-end justify-center overflow-hidden rounded-2xl bg-secondary">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10" />

                  <img
                    src={image}
                    alt=""
                    className="relative h-full w-full object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
