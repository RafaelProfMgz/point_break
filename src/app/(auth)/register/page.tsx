"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Building2, User } from "lucide-react";
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
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

const registerSchema = z.object({
  companyName: z.string().min(3, "Nome da empresa muito curto"),
  name: z.string().min(3, "Nome muito curto"),
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});

type RegisterForm = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      companyName: "",
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: RegisterForm) => {
    setLoading(true);
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Registro realizado com sucesso!", {
          description: "Redirecionando para o login...",
        });
        router.push("/login");
      } else {
        const errorData = await response.json();
        toast.error("Erro ao criar conta", {
          description: errorData.error || "Verifique seus dados.",
        });
      }
    } catch (error) {
      console.error(error);
      alert("Erro de conexão");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full bg-card/50 backdrop-blur-md border-border shadow-xl">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold tracking-tight text-foreground">
          Comece Gratuitamente
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Crie sua organização e gerencie seu time hoje mesmo.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                <Building2 className="w-4 h-4" />
                <h3>Dados da Empresa</h3>
              </div>

              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome da Empresa</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ex: Tech Solutions Ltda"
                        className="bg-background/50 border-white/10"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Separator className="bg-border" />

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                <User className="w-4 h-4" />
                <h3>Seus Dados (Admin)</h3>
              </div>

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Seu Nome Completo</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ex: Gabriel Silva"
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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Corporativo</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="voce@empresa.com"
                        type="email"
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
                    <FormLabel>Senha de Acesso</FormLabel>
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
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full font-bold shadow-lg shadow-primary/20 h-11 text-base"
            >
              {loading ? "Criando conta..." : "Criar minha Company"}
            </Button>
          </form>
        </Form>
      </CardContent>

      <CardFooter className="text-center justify-center">
        <div className="text-sm text-muted-foreground">
          Já possui uma conta?{" "}
          <Link
            href="/login"
            className="text-primary hover:underline font-medium"
          >
            Fazer Login
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
