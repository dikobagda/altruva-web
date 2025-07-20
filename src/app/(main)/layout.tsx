
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingAISkinAnalysisButton from '@/components/layout/FloatingAISkinAnalysisButton';
import FloatingWhatsAppButton from '@/components/layout/FloatingWhatsAppButton';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <FloatingWhatsAppButton />
      <FloatingAISkinAnalysisButton />
    </div>
  );
}
