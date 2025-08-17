'use client';

import { useRouter } from 'next/navigation';
import DonationContent from '@/components/DonationContent';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export default function DonateModal() {
  const router = useRouter();

  return (
    <Dialog open onOpenChange={(open) => { if (!open) router.back(); }}>
      <DialogContent className="sm:max-w-[720px]">
        <DialogHeader>
          <DialogTitle className="glow-green">Donate</DialogTitle>
        </DialogHeader>
        <div className="max-h-[75vh] overflow-y-auto pr-1">
          <DonationContent hideHeader headingClassName="text-xl" />
        </div>
      </DialogContent>
    </Dialog>
  );
}


