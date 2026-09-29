'use client';

import { useRouter } from 'next/navigation';
import DonationModal from '@/components/donation-modal';

export default function DonateModal() {
  const router = useRouter();

  return (
    <DonationModal
      open
      onClose={() => router.back()}
      title="Support Set Free Digital Disciples"
      subtitle="Your gift helps carry a faith-rooted mission into the places and spaces where people need hope."
      logoSrc="/SetFreeDigitalDisciplesPortal.png"
      presetAmounts={[10,20,50,100,250,500]}
      paypalEmail="petrovkristian@ymail.com"
      cashAppTag="KristianPetrov"
    />
  );
}

