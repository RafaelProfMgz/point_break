"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Code2,
  Layers,
  ArrowLeft,
  Menu,
  FileJson,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const docRoutes = [
    {
      title: "Começando",
      items: [
        { href: "/docs", label: "Introdução", icon: BookOpen },
        { href: "/docs/installation", label: "Instalação", icon: Layers },
      ],
    },
    {
      title: "Desenvolvimento",
      items: [
        { href: "/docs/architecture", label: "Arquitetura", icon: Code2 },
        { href: "/docs/theming", label: "Theming & UI", icon: Layers },
        { href: "/docs/api", label: "API Reference", icon: FileJson },
      ],
    },
  ];

  const SidebarLink = ({ href, label, icon: Icon }: any) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive
            ? "bg-primary/10 text-primary border border-primary/20"
            : "text-muted-foreground hover:text-foreground hover:bg-white/5"
        }`}
      >
        <Icon className="w-4 h-4" />
        {label}
      </Link>
    );
  };

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <aside className="hidden md:flex flex-col w-64 border-r border-border bg-background/50 backdrop-blur-xl h-screen fixed left-0 top-0 z-30">
        <div className="h-16 flex items-center px-6 border-b border-border gap-2">
          <Link href="/" className="font-bold text-lg flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center text-white text-xs font-bold">
              P
            </div>
            Point Docs
          </Link>
        </div>

        <ScrollArea className="flex-1">
          <div className="py-6 px-4">
            {docRoutes.map((group, i) => (
              <div key={i} className="mb-6">
                <h4 className="mb-2 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {group.title}
                </h4>
                <div className="space-y-1">
                  {group.items.map((item) => (
                    <SidebarLink key={item.href} {...item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="p-4 border-t border-border">
          <Button
            asChild
            variant="ghost"
            className="w-full justify-start gap-2 text-muted-foreground"
          >
            <Link href="/">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao App
            </Link>
          </Button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col md:ml-64">
        <header className="md:hidden h-14 border-b border-border flex items-center px-4 sticky top-0 bg-background/80 backdrop-blur z-20">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-64 p-0 bg-background border-r border-border"
            >
              <ScrollArea className="h-full">
                <div className="py-6 px-4">
                  {docRoutes.map((group, i) => (
                    <div key={i} className="mb-6">
                      <h4 className="mb-2 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        {group.title}
                      </h4>
                      <div className="space-y-1">
                        {group.items.map((item) => (
                          <SidebarLink key={item.href} {...item} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
          <span className="font-bold ml-4">Documentação</span>
        </header>

        <main className="flex-1 max-w-4xl w-full mx-auto p-6 md:p-12 animate-fade-in">
          {children}
        </main>
      </div>
    </div>
  );
}
