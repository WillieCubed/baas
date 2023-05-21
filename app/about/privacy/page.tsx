import PrivacyPolicy from '@/app/markdown/components/PrivacyPolicy';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Bagelpalooza',
  description: '',
};

export default function PrivacyPage() {
  return (
    <div className="py-8 min-h-screen container mx-auto prose prose-headings:font-display">
      <div className="py-4 text-5xl font-bold font-display">Privacy Policy</div>
      <PrivacyPolicy />
    </div>
  );
}