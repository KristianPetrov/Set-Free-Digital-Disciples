"use client";

import Link from "next/link";
// import Image from "next/image";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";

export default function SiteHeader() {
  return (
    <header className="content-layer sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-center">
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
              <Link href="/work" legacyBehavior passHref>
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