import TermsOfService from '@/app/markdown/components/TermsOfService';


export default function TermsPage() {
  return (
    <div className="py-8 min-h-screen container mx-auto prose prose-headings:font-display">
      <div className="py-4 text-5xl font-bold font-display">Terms of Service</div>
      <TermsOfService />
    </div>
  );
}