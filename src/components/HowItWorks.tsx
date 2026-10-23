import { CalendarCheck, ClipboardList, CreditCard, Users } from "lucide-react";

interface FeatureProps {
  number: string;
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    number: "01",
    icon: <CalendarCheck />,
    title: "Crie seu retiro",
    description:
      "Defina as informações do evento, datas, valores e tudo que sua equipe precisa.",
  },
  {
    number: "02",
    icon: <ClipboardList />,
    title: "Abra as inscrições",
    description:
      "Compartilhe sua página de inscrição e reúna os dados dos participantes em um só lugar.",
  },
  {
    number: "03",
    icon: <CreditCard />,
    title: "Acompanhe os pagamentos",
    description:
      "Tenha uma visão clara das inscrições e dos pagamentos realizados pelos participantes.",
  },
  {
    number: "04",
    icon: <Users />,
    title: "Cuide das pessoas",
    description:
      "Com a organização em ordem, sua equipe pode dedicar mais atenção ao que realmente importa.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="relative overflow-hidden bg-background py-24 text-foreground transition-colors sm:py-32"
    >
      <div className="container relative">
        {/* Cabeçalho */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
            Como funciona
          </span>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground md:text-4xl lg:text-5xl">
            Do planejamento ao retiro,
            <span className="block text-primary">tudo mais simples.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Uma forma simples de organizar as principais etapas do seu retiro
            sem depender de planilhas e informações espalhadas.
          </p>
        </div>

        {/* Etapas */}
        <div className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Linha de conexão */}
          <div className="absolute left-[12%] right-[12%] top-7 hidden h-px bg-border lg:block" />

          {features.map(({ number, icon, title, description }) => (
            <div key={number} className="relative">
              <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-background text-primary transition-colors">
                {icon}
              </div>

              <div className="mt-6 text-center">
                <span className="text-xs font-semibold tracking-[0.15em] text-muted-foreground">
                  {number}
                </span>

                <h3 className="mt-2 text-lg font-semibold text-foreground">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
