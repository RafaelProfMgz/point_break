"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

const loginSchema = z.object({
  email: z.string().email("Digite um email válido"),
  password: z.string().min(1, "A senha é obrigatória"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginForm) => {
    setLoading(true);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Login realizado com sucesso!", {
          description: "Redirecionando para o painel...",
        });
        router.push("/home");
        router.refresh();
      } else {
        const errorData = await response.json();
        toast.error("Falha ao entrar", {
          description: errorData.error || "Verifique suas credenciais.",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro de conexão", {
        description: "Não foi possível conectar ao servidor.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full bg-card/50 backdrop-blur-md border-border shadow-xl">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold tracking-tight text-foreground">
          Bem-vindo de volta
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Digite suas credenciais para acessar o painel
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="nome@empresa.com"
                      type="email"
                      className="bg-background/50 border-white/10 focus-visible:ring-primary"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Senha</FormLabel>
                    <Link
                      href="/forgot-password"
                      className="text-xs text-primary hover:underline hover:text-primary/80"
                    >
                      Esqueceu a senha?
                    </Link>
                  </div>
                  <FormControl>
                    <Input
                      type="password"
                      className="bg-background/50 border-white/10 focus-visible:ring-primary"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={loading}
              className="w-full font-bold shadow-lg shadow-primary/20 mt-2"
            >
              {loading ? "Entrando..." : "Entrar"}
            </Button>
          </form>
        </Form>
      </CardContent>

      <CardFooter className="flex flex-col gap-4 text-center">
        <div className="text-sm text-muted-foreground">
          Não tem uma conta?{" "}
          <Link
            href="/register"
            className="text-primary hover:underline font-medium"
          >
            Crie sua empresa
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
