"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
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
import { UserCheck } from "lucide-react";
import { toast } from "sonner";

const joinSchema = z.object({
  name: z.string().min(3, "Nome é obrigatório"),
  email: z.string().email(),
  password: z.string().min(6, "Mínimo 6 caracteres"),
});

type JoinForm = z.infer<typeof joinSchema>;

export default function JoinPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = use(params);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<JoinForm>({
    resolver: zodResolver(joinSchema),
    defaultValues: {
      name: "",
      email: "email.do.convite@exemplo.com",
      password: "",
    },
  });

  const onSubmit = async (data: JoinForm) => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, token }),
      });

      if (res.ok) {
        toast.success("Registro realizado com sucesso!", {
          description: "Redirecionando para o login...",
        });
        router.push("/login");
      } else {
        toast.error("Convite inválido ou expirado.");
      }
    } catch (error) {
      alert("Erro ao criar conta.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full bg-card/50 backdrop-blur-md border-border shadow-xl">
      <CardHeader className="text-center">
        <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
          <UserCheck className="w-6 h-6 text-primary" />
        </div>
        <CardTitle className="text-2xl font-bold tracking-tight text-foreground">
          Junte-se à Equipe
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Complete seu cadastro para entrar na empresa.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email (Convite)</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled
                      className="bg-muted/20 border-white/5 text-muted-foreground cursor-not-allowed"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Seu Nome</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ex: João Silva"
                      className="bg-background/50 border-white/10"
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
                  <FormLabel>Crie uma Senha</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="bg-background/50 border-white/10"
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
              {loading ? "Entrando..." : "Aceitar e Entrar"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
