"use client";

import Link from "next/link";
import Image from "next/image";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";

export default function SiteHeader() {
  return (
    <header className="content-layer sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative h-8 w-[220px] md:h-10 md:w-[280px]">
            <Image src="/digital-disciples-text.png" alt="Set Free Digital Disciples" fill className="object-contain" priority />
          </div>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className="px-3 py-2 text-sm hover:text-primary">
                <Link href="#services">Services</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className="px-3 py-2 text-sm hover:text-primary">
                <Link href="/work">Work</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className="px-3 py-2 text-sm hover:text-primary">
                <Link href="#contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}