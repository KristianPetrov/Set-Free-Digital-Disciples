import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import CalButton from "@/components/CalButton";

export default function SiteHeader() {
  return (
    <header className="content-layer sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
        <div />
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
        <div className="ml-auto flex items-center gap-2">
          <Button asChild size="sm">
            <Link href="/donate">Donate</Link>
          </Button>
          <CalButton variant="secondary">Schedule</CalButton>
        </div>
      </div>
    </header>
  );
}