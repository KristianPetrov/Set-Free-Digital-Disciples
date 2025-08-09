"use client";

import Link from "next/link";
import Image from "next/image";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";

export default function SiteHeader() {
  return (
    <header className="content-layer sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative size-10">
            <Image src="/logo.png" alt="Set Free Digital Disciples" fill className="object-contain" />
          </div>
          <span className="text-lg font-semibold glow-cyan">Set Free Digital Disciples</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="#services" legacyBehavior passHref>
                <NavigationMenuLink className="px-3 py-2 text-sm hover:text-primary">
                  Services
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#work" legacyBehavior passHref>
                <NavigationMenuLink className="px-3 py-2 text-sm hover:text-primary">
                  Work
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#contact" legacyBehavior passHref>
                <NavigationMenuLink className="px-3 py-2 text-sm hover:text-primary">
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}