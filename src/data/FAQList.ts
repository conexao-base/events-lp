interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

export const FAQList: FAQProps[] = [
  {
    question: "Preciso instalar algum aplicativo?",
    answer:
      "Não. A plataforma funciona diretamente pelo navegador, tanto no computador quanto no celular.",
    value: "item-1",
  },
  {
    question: "Posso organizar mais de um retiro?",
    answer:
      "Sim. Você poderá organizar seus diferentes retiros e eventos dentro da mesma conta, mantendo as informações de cada um separadas.",
    value: "item-2",
  },
  {
    question: "Como funciona o pagamento das inscrições?",
    answer:
      "Os participantes podem realizar os pagamentos através da integração de pagamento disponível na plataforma. Sua equipe consegue acompanhar as inscrições e os respectivos pagamentos em um só lugar.",
    value: "item-3",
  },
  {
    question: "Os participantes precisam criar uma conta?",
    answer:
      "Não. A inscrição pode ser feita através da página do retiro, sem exigir que o participante tenha uma conta na plataforma.",
    value: "item-4",
  },
  {
    question: "Minha equipe pode ajudar na organização?",
    answer:
      "Sim. A plataforma foi pensada para facilitar o trabalho da equipe, permitindo que as pessoas responsáveis pela organização tenham acesso às informações necessárias.",
    value: "item-5",
  },
  {
    question: "Posso começar gratuitamente?",
    answer:
      "Sim. Você pode começar pelo plano gratuito e conhecer a plataforma antes de decidir se precisa de recursos adicionais.",
    value: "item-6",
  },
];