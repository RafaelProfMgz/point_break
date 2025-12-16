"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  Settings,
  LogOut,
  Clock,
  Menu,
  User as UserIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { SupportWidget } from "@/components/dashboard/SupportWidget";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navItems = [
    { href: "/home", label: "Home", icon: Home },
    { href: "/team", label: "Time", icon: Users },
    { href: "/settings", label: "Configurações", icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <aside className="hidden md:flex flex-col w-64 border-r border-border bg-card/30 backdrop-blur-xl h-screen fixed left-0 top-0 z-30">
        <div className="h-16 flex items-center px-6 border-b border-border">
          <Link
            href="/home"
            className="flex items-center gap-2 font-bold text-xl text-primary"
          >
            <Clock className="w-6 h-6" />
            <span>Point Break</span>
          </Link>
        </div>

        <nav className="flex-1 flex flex-col gap-2 p-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
                  isActive
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border">
          <div className="px-4 py-3 rounded-xl bg-primary/5 border border-primary/10">
            <p className="text-xs text-muted-foreground uppercase font-bold mb-1">
              Empresa
            </p>
            <p className="font-semibold text-sm truncate">
              Tech Solutions Ltda
            </p>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col md:ml-64 transition-all duration-300">
        <header className="h-16 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-20 px-4 md:px-8 flex items-center justify-between">
          <div className="md:hidden">
            {!isMounted ? (
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            ) : (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="bg-background border-r border-border"
                >
                  <div className="flex flex-col h-full mt-6">
                    <nav className="flex flex-col gap-2">
                      {navItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5"
                        >
                          <item.icon className="w-5 h-5 text-primary" />
                          {item.label}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>

          <h1 className="text-lg font-semibold capitalize hidden md:block">
            {pathname.replace("/", "")}
          </h1>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium leading-none">Gabriel Silva</p>
              <p className="text-xs text-muted-foreground">Admin</p>
            </div>

            {!isMounted ? (
              <Button
                variant="ghost"
                className="relative h-10 w-10 rounded-full ring-2 ring-primary/20"
              >
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@gabriel"
                  />
                  <AvatarFallback>GS</AvatarFallback>
                </Avatar>
              </Button>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-10 w-10 rounded-full ring-2 ring-primary/20 hover:ring-primary/50 transition-all"
                  >
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@gabriel"
                      />
                      <AvatarFallback>GS</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Gabriel Silva
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        gabriel@empresa.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />

                  <DropdownMenuItem asChild>
                    <Link
                      href="/profile"
                      className="cursor-pointer w-full flex items-center"
                    >
                      <UserIcon className="mr-2 h-4 w-4" />
                      <span>Perfil</span>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link
                      href="/profile/config"
                      className="cursor-pointer w-full flex items-center"
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Configurações</span>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem
                    asChild
                    className="text-red-500 focus:text-red-500 focus:bg-red-500/10"
                  >
                    <Link
                      href="/login"
                      className="cursor-pointer w-full flex items-center"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Sair</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </header>

        <main className="flex-1 p-4 md:p-8 overflow-y-auto relative">
          <div className="fixed inset-0 z-[-1] pointer-events-none opacity-50">
            <div className="absolute top-[20%] right-[10%] w-100 h-100 bg-primary/10 rounded-full blur-[100px]" />
          </div>

          <div className="max-w-6xl mx-auto animate-fade-in">{children}</div>
          <SupportWidget />
        </main>
      </div>
    </div>
  );
}
