interface PricingProps {
  title: string;
  popular?: boolean;
  price: string;
  description: string;
  buttonText: string;
  benefitList: string[];
}

export const pricingList: PricingProps[] = [
  {
    title: "Essencial",
    popular: false,
    price: "R$ 0",
    description: "Tudo o que você precisa para começar a organizar seu retiro.",
    buttonText: "Começar agora",
    benefitList: [
      "Criar retiros e eventos",
      "Gerenciar participantes",
      "Página de inscrição",
      "Acompanhamento das inscrições",
    ],
  },
  {
    title: "Completo",
    popular: true,
    price: "R$ 99,90",
    description:
      "Mais recursos para equipes que querem simplificar toda a organização.",
    buttonText: "Começar agora",
    benefitList: [
      "Tudo do plano Essencial",
      "Gestão de pagamentos",
      "Controle completo dos participantes",
      "Mais recursos para sua equipe",
    ],
  },
];
