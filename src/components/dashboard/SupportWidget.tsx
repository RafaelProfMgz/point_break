"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MessageCircle, HelpCircle, Mail, BookOpen } from "lucide-react";
import Link from "next/link";

export function SupportWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            size="icon"
            className="h-14 w-14 rounded-full shadow-[0_0_40px_-10px_rgba(139,92,246,0.5)] bg-primary hover:bg-primary/90 transition-all hover:scale-110 animate-bounce-slow"
          >
            <HelpCircle className="h-8 w-8 text-white" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="end"
          sideOffset={20}
          className="w-80 p-0 border-border bg-card/80 backdrop-blur-xl shadow-2xl rounded-2xl overflow-hidden"
        >
          <div className="bg-primary/20 p-4 border-b border-white/5">
            <h4 className="font-bold text-foreground flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Suporte Online
            </h4>
            <p className="text-xs text-muted-foreground mt-1">
              Geralmente respondemos em menos de 5 minutos.
            </p>
          </div>

          <div className="p-4 grid gap-2">
            <Button
              variant="ghost"
              className="justify-start gap-3 h-12 border border-white/5 hover:bg-white/5"
              asChild
            >
              <Link href="https://wa.me/5511999999999" target="_blank">
                <MessageCircle className="w-5 h-5 text-green-500" />
                <div className="text-left">
                  <span className="block text-sm font-semibold text-foreground">
                    WhatsApp
                  </span>
                  <span className="block text-[10px] text-muted-foreground">
                    Falar com atendente
                  </span>
                </div>
              </Link>
            </Button>

            <Button
              variant="ghost"
              className="justify-start gap-3 h-12 border border-white/5 hover:bg-white/5"
              asChild
            >
              <Link href="mailto:suporte@pointbreak.com">
                <Mail className="w-5 h-5 text-blue-500" />
                <div className="text-left">
                  <span className="block text-sm font-semibold text-foreground">
                    Email / Ticket
                  </span>
                  <span className="block text-[10px] text-muted-foreground">
                    Para problemas técnicos
                  </span>
                </div>
              </Link>
            </Button>

            <div className="pt-2">
              <Button
                variant="secondary"
                className="w-full text-xs h-8 gap-2 hover:bg-primary/10 hover:text-primary transition-colors"
                asChild
              >
                <Link href="/docs">
                  <BookOpen className="w-3 h-3" />
                  Acessar Documentação
                </Link>
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
