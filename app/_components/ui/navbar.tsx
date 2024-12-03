"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { SidebarTrigger } from "./sidebar";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between border-b border-solid px-8 py-4">
      <div className="flex items-center gap-10">
        <SidebarTrigger />
        <Image
          src="/grupo in hub.png"
          alt="logo grupo in hub"
          width={70}
          height={20}
        />
        <Link
          href="/"
          className={
            pathname === "/"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Dashboard
        </Link>
        <Link
          href="/eventos"
          className={
            pathname === "/eventos"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Eventos
        </Link>
        <Link
          href="/transactions"
          className={
            pathname === "/transactions"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Transações
        </Link>
        <Link
          href="/relatorios"
          className={
            pathname === "/relatórios"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Relatórios
        </Link>
      </div>

      <div className="flex h-full items-center justify-center">
        <UserButton showName />
      </div>
    </nav>
  );
};

export default Navbar;