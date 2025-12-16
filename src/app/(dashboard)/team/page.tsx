"use client";

import { useState } from "react";
import { Plus, Search, MoreHorizontal, Mail, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card } from "@/components/ui/card";

const members = [
  {
    id: 1,
    name: "Gabriel Silva",
    email: "gabriel@empresa.com",
    role: "Admin",
    status: "active",
    avatar: "GS",
  },
  {
    id: 2,
    name: "Ana Pereira",
    email: "ana@empresa.com",
    role: "User",
    status: "active",
    avatar: "AP",
  },
  {
    id: 3,
    name: "Carlos Souza",
    email: "carlos@empresa.com",
    role: "User",
    status: "invited",
    avatar: "CS",
  },
  {
    id: 4,
    name: "Fernanda Lima",
    email: "fernanda@empresa.com",
    role: "Manager",
    status: "inactive",
    avatar: "FL",
  },
];

export default function TeamPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Time
          </h2>
          <p className="text-muted-foreground">
            Gerencie os colaboradores da sua empresa.
          </p>
        </div>
        <Button className="font-bold shadow-lg shadow-primary/20 gap-2">
          <Plus className="w-4 h-4" />
          Convidar Membro
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por nome ou email..."
            className="pl-9 bg-card/50 border-border"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Card className="bg-card/50 backdrop-blur border-border overflow-hidden">
        <Table>
          <TableHeader className="bg-muted/20">
            <TableRow className="hover:bg-transparent border-border">
              <TableHead className="w-75">Colaborador</TableHead>
              <TableHead>Função</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((member) => (
              <TableRow
                key={member.id}
                className="hover:bg-muted/10 border-border"
              >
                <TableCell className="font-medium">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9 border border-border">
                      <AvatarImage
                        src={`https://api.dicebear.com/7.x/initials/svg?seed=${member.name}`}
                      />
                      <AvatarFallback>{member.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="text-foreground font-semibold">
                        {member.name}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Mail className="w-3 h-3" /> {member.email}
                      </span>
                    </div>
                  </div>
                </TableCell>

                <TableCell>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="w-4 h-4" />
                    {member.role}
                  </div>
                </TableCell>

                <TableCell>
                  <Badge
                    variant="outline"
                    className={`
                      capitalize border-0 px-3 py-1
                      ${
                        member.status === "active"
                          ? "bg-emerald-500/10 text-emerald-500"
                          : ""
                      }
                      ${
                        member.status === "invited"
                          ? "bg-amber-500/10 text-amber-500"
                          : ""
                      }
                      ${
                        member.status === "inactive"
                          ? "bg-red-500/10 text-red-500"
                          : ""
                      }
                    `}
                  >
                    {member.status === "invited" ? "Pendente" : member.status}
                  </Badge>
                </TableCell>

                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="h-8 w-8 p-0 hover:bg-white/10"
                      >
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="bg-card border-border"
                    >
                      <DropdownMenuLabel>Ações</DropdownMenuLabel>
                      <DropdownMenuItem>Editar Permissões</DropdownMenuItem>
                      <DropdownMenuItem>Ver Histórico</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-500 focus:text-red-500">
                        Remover do time
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
