import { useState } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ArrowRight, Menu } from "lucide-react";
import { LogoIcon } from "./Icons";
import { ModeToggle } from "./mode-toggle";
import { buttonVariants } from "./ui/button";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#features",
    label: "Recursos",
  },
  {
    href: "#howItWorks",
    label: "Como funciona",
  },
  {
    href: "#pricing",
    label: "Planos",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 text-foreground backdrop-blur transition-colors">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container flex h-14 w-screen items-center justify-between px-4">
          {/* Logo */}
          <NavigationMenuItem className="flex font-bold">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 flex items-center gap-2 text-xl font-bold text-foreground"
            >
              <LogoIcon />
              Retiro
            </a>
          </NavigationMenuItem>

          {/* Mobile */}
          <span className="flex items-center md:hidden">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu className="h-5 w-5">
                  <span className="sr-only">Abrir menu</span>
                </Menu>
              </SheetTrigger>

              <SheetContent
                side="left"
                className="bg-background text-foreground"
              >
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2 text-xl font-bold text-foreground">
                    <LogoIcon />
                    Retiro
                  </SheetTitle>
                </SheetHeader>

                <nav className="mt-6 flex flex-col items-center gap-2">
                  {routeList.map(({ href, label }) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({
                        variant: "ghost",
                      })}
                    >
                      {label}
                    </a>
                  ))}

                  <a
                    href="#pricing"
                    onClick={() => setIsOpen(false)}
                    className={buttonVariants({
                      variant: "default",
                    })}
                  >
                    Acessar plataforma
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* Desktop */}
          <nav className="hidden gap-2 md:flex">
            {routeList.map((route) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={route.label}
                className={`text-[15px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="#pricing"
              className={buttonVariants({
                variant: "default",
              })}
            >
              Acessar plataforma
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>

            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
