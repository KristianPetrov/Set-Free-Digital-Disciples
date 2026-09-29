import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import ContactActions from "@/components/ContactActions";

export default function SiteHeader() {
  return (
    <header className="content-layer sticky top-0 z-20 border-b border-border backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-3 gap-y-2 px-4 py-3 md:flex-nowrap">
        <Link href="/" className="order-1 shrink-0 text-sm font-semibold tracking-wide glow-green">
          Set Free
        </Link>
        <NavigationMenu className="order-3 w-full max-w-none flex-none justify-start md:order-2 md:w-auto md:flex-1">
          <NavigationMenuList className="justify-start md:justify-center">
            <NavigationMenuItem>
              <NavigationMenuLink asChild className="px-2 py-2 text-sm hover:text-primary sm:px-3">
                <Link href="/#services">Services</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className="px-2 py-2 text-sm hover:text-primary sm:px-3">
                <Link href="/#work">The work</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className="px-2 py-2 text-sm hover:text-primary sm:px-3">
                <Link href="/#contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="order-2 ml-auto flex items-center gap-2 md:order-3 md:ml-0">
          <Button asChild size="sm">
            <Link href="/donate">Donate</Link>
          </Button>
          <ContactActions
            size="sm"
            textVariant="secondary"
            emailVariant="secondary"
            textLabel="Text me"
            emailLabel="Email"
            emailClassName="hidden sm:inline-flex"
          />
        </div>
      </div>
    </header>
  );
}
