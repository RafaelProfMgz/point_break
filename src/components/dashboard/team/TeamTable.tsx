"use client";

import { MoreHorizontal, Mail, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
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

export type Member = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "invited" | "inactive";
  avatar: string;
};

interface TeamTableProps {
  members: Member[];
  isLoading: boolean;
}

export function TeamTable({ members, isLoading }: TeamTableProps) {
  return (
    <Card className="bg-card/50 backdrop-blur border-border overflow-hidden min-h-75">
      <Table>
        <TableHeader className="bg-muted/20">
          <TableRow className="hover:bg-transparent border-border">
            <TableHead>Colaborador</TableHead>
            <TableHead>Função</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            [1, 2, 3].map((i) => (
              <TableRow key={i} className="border-border">
                <TableCell>
                  <div className="h-10 w-32 bg-muted/20 rounded animate-pulse" />
                </TableCell>
                <TableCell>
                  <div className="h-6 w-20 bg-muted/20 rounded animate-pulse" />
                </TableCell>
                <TableCell>
                  <div className="h-6 w-16 bg-muted/20 rounded animate-pulse" />
                </TableCell>
                <TableCell className="text-right">
                  <div className="h-8 w-8 bg-muted/20 rounded animate-pulse ml-auto" />
                </TableCell>
              </TableRow>
            ))
          ) : members.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={4}
                className="h-24 text-center text-muted-foreground"
              >
                Nenhum membro encontrado.
              </TableCell>
            </TableRow>
          ) : (
            members.map((member) => (
              <TableRow
                key={member.id}
                className="hover:bg-muted/10 border-border transition-colors"
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
                    <Shield className="w-4 h-4" /> {member.role}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={`capitalize border-0 px-3 py-1 ${
                      member.status === "active"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : "bg-amber-500/10 text-amber-500"
                    }`}
                  >
                    {member.status === "invited" ? "Pendente" : "Ativo"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="h-8 w-8 p-0 hover:bg-white/10"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="bg-card border-border"
                    >
                      <DropdownMenuLabel>Ações</DropdownMenuLabel>
                      <DropdownMenuItem className="text-red-500 focus:text-red-500">
                        Remover
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </Card>
  );
}
