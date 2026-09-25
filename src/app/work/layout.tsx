import MatrixRain from "@/components/MatrixRain";
import SiteHeader from "@/components/SiteHeader";

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-sans min-h-screen">
      <MatrixRain />
      <SiteHeader />
      {children}
    </div>
  );
}
