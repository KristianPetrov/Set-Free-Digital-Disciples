import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-sans min-h-screen">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
