import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

import { pricingList } from "@/data/pricingList";

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-background py-24 text-foreground transition-colors sm:py-32"
    >
      <div className="container relative">
        {/* Cabeçalho */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
            Planos
          </span>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground md:text-4xl lg:text-5xl">
            Simples para começar.
            <span className="block text-primary">Justo para crescer.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Escolha o plano que combina com o momento do seu retiro e tenha tudo
            organizado em um só lugar.
          </p>
        </div>

        {/* Planos */}
        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          {pricingList.map((pricing) => (
            <Card
              key={pricing.title}
              className={`relative overflow-hidden rounded-3xl border-border bg-card/70 shadow-none ${
                pricing.popular
                  ? "border-primary/40 shadow-xl shadow-primary/10"
                  : ""
              }`}
            >
              {pricing.popular && (
                <div className="absolute right-6 top-6">
                  <Badge className="rounded-full bg-secondary px-3 py-1 text-secondary-foreground hover:bg-secondary">
                    Mais escolhido
                  </Badge>
                </div>
              )}

              <CardHeader className="p-8">
                <CardTitle className="text-xl font-semibold text-card-foreground">
                  {pricing.title}
                </CardTitle>

                <CardDescription className="mt-3 max-w-sm leading-6 text-muted-foreground">
                  {pricing.description}
                </CardDescription>

                <div className="pt-6">
                  <span className="text-4xl font-semibold tracking-tight text-card-foreground">
                    {pricing.price}
                  </span>

                  {pricing.price !== "R$ 0" && (
                    <span className="ml-1 text-sm text-muted-foreground">
                      / mês
                    </span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="px-8">
                <Button
                  className={`h-12 w-full rounded-xl ${
                    pricing.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-border bg-transparent text-foreground hover:bg-secondary"
                  }`}
                  variant={pricing.popular ? "default" : "outline"}
                >
                  {pricing.buttonText}
                </Button>
              </CardContent>

              <div className="mx-8 border-t border-border" />

              <CardFooter className="flex flex-col items-start gap-4 p-8">
                <span className="text-sm font-medium text-card-foreground">
                  O que está incluído:
                </span>

                <div className="space-y-3">
                  {pricing.benefitList.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
