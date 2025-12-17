"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Settings, User, Home, Users, FileText, LogOut } from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

interface SearchCommandProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function SearchCommand({ open, setOpen }: SearchCommandProps) {
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, setOpen]);

  const runCommand = React.useCallback(
    (command: () => unknown) => {
      setOpen(false);
      command();
    },
    [setOpen]
  );

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Digite um comando ou busque..." />
      <CommandList>
        <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>

        <CommandGroup heading="Navegação">
          <CommandItem onSelect={() => runCommand(() => router.push("/home"))}>
            <Home className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/team"))}>
            <Users className="mr-2 h-4 w-4" />
            <span>Time</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => router.push("/profile"))}
          >
            <User className="mr-2 h-4 w-4" />
            <span>Perfil</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => router.push("/docs"))}>
            <FileText className="mr-2 h-4 w-4" />
            <span>Documentação</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Configurações">
          <CommandItem
            onSelect={() => runCommand(() => router.push("/profile/config"))}
          >
            <User className="mr-2 h-4 w-4" />
            <span>Editar Perfil</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => router.push("/settings"))}
          >
            <Settings className="mr-2 h-4 w-4" />
            <span>Configurações da Empresa</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Sistema">
          <CommandItem onSelect={() => runCommand(() => router.push("/login"))}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sair</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
