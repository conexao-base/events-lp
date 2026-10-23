import image from "../assets/growth.png";
import image4 from "../assets/looking-ahead.png";
import image3 from "../assets/reflecting.png";

interface FeatureProps {
  number: string;
  title: string;
  description: string;
  image: string;
}

export const features: FeatureProps[] = [
  {
    number: "01",
    title: "Inscrições organizadas",
    description:
      "Crie uma experiência simples para os participantes se inscreverem e mantenha todas as informações organizadas.",
    image: image4,
  },
  {
    number: "02",
    title: "Participantes em um só lugar",
    description:
      "Tenha uma visão clara de quem está participando, acompanhe informações e facilite o trabalho da sua equipe.",
    image: image3,
  },
  {
    number: "03",
    title: "Pagamentos simplificados",
    description:
      "Acompanhe os pagamentos das inscrições sem depender de planilhas espalhadas ou controles manuais.",
    image: image,
  },
];
