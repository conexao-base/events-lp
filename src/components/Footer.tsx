import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="border-t border-border bg-background text-foreground transition-colors"
    >
      <section className="container grid grid-cols-2 gap-x-12 gap-y-8 py-20 md:grid-cols-4 xl:grid-cols-6">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-foreground"
          >
            <LogoIcon />
            Retiro
          </a>

          <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
            Uma forma simples de organizar retiros, inscrições, participantes e
            pagamentos em um só lugar.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-foreground">Redes sociais</h3>

          <a
            rel="noreferrer noopener"
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Instagram
          </a>

          <a
            rel="noreferrer noopener"
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            WhatsApp
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-foreground">Plataforma</h3>

          <a
            href="#features"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Recursos
          </a>

          <a
            href="#howItWorks"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Como funciona
          </a>

          <a
            href="#pricing"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Planos
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-foreground">Sobre</h3>

          <a
            href="#about"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Sobre nós
          </a>

          <a
            href="#faq"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Perguntas frequentes
          </a>

          <a
            href="#contact"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Contato
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-foreground">Comece agora</h3>

          <a
            href="#pricing"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Criar conta
          </a>

          <a
            href="#pricing"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Começar gratuitamente
          </a>
        </div>
      </section>

      <section className="container border-t border-border py-8 text-center">
        <p className="text-sm text-muted-foreground">
          © 2026 Retiro. Todos os direitos reservados.
        </p>
      </section>
    </footer>
  );
};
