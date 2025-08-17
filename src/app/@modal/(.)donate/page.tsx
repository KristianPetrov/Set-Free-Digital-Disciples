'use client';
'use client';

import { useRouter } from 'next/navigation';
import DonationModal from '@/components/donation-modal';

export default function DonateModal() {
  const router = useRouter();

  return (
    <DonationModal
      open
      onClose={() => router.back()}
      title="Donate to Set Free Digital Disciples"
      subtitle="This ain’t about building fancy websites—it’s about building the Kingdom."
      logoSrc="/SetFreeDigitalDisciplesPortal.png"
      presetAmounts={[10,20,50,100,250,500]}
      paypalEmail="petrovkristian@ymail.com"
      cashAppTag="KristianPetrov"
    />
  );
}


