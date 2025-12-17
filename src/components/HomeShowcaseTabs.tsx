"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import SetFreeAnaheimShowcase from "@/components/SetFreeAnaheimShowcase";
import LemontedEditionShowcase from "@/components/LemontedEditionShowcase";
import FromAshesShowcase from "@/components/FromAshesShowcase";
import RootedInTraditionShowcase from "@/components/RootedInTraditionShowcase";
import RealLoveShowcase from "@/components/RealLoveShowcase";

export default function HomeShowcaseTabs() {
  return (
    <div className="mt-8">
      <Tabs defaultValue="anaheim" className="w-full">
        <TabsList className="h-14 flex-wrap p-1.5 text-lg">
          <TabsTrigger value="anaheim" className="px-5 py-2.5 text-lg">Set Free Anaheim</TabsTrigger>
          <TabsTrigger value="rooted" className="px-5 py-2.5 text-lg">Rooted In Tradition</TabsTrigger>
          <TabsTrigger value="real-love" className="px-5 py-2.5 text-lg">Real Love Studio</TabsTrigger>
          <TabsTrigger value="from-ashes" className="px-5 py-2.5 text-lg">From Ashes To Angels</TabsTrigger>
          <TabsTrigger value="lemonted" className="px-5 py-2.5 text-lg">Lemonted Edition</TabsTrigger>
        </TabsList>
        <div className="mt-4">
          <TabsContent value="anaheim">
            <SetFreeAnaheimShowcase />
          </TabsContent>
          <TabsContent value="rooted">
            <RootedInTraditionShowcase />
          </TabsContent>
          <TabsContent value="real-love">
            <RealLoveShowcase />
          </TabsContent>
          <TabsContent value="from-ashes">
            <FromAshesShowcase />
          </TabsContent>
          <TabsContent value="lemonted">
            <LemontedEditionShowcase />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}


