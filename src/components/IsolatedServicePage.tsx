import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";

const IsolatedServicePage = () => {
  const whatsappLink = "https://wa.me/6281218000343?text=Halo%20admin%20PusatNet,%20koneksi%20saya%20terisolir.%20Mohon%20bantuan%20aktivasi.%20ID%20Pelanggan:%20_____";

  return (
    <div className="min-h-screen flex items-center justify-center p-3 sm:p-4 md:p-6 bg-gradient-to-b from-background to-accent/10">
      <Card className="max-w-2xl w-full p-5 sm:p-6 md:p-10 lg:p-12 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow duration-300 border-2 border-primary/10">
        {/* Logo */}
        <div className="flex justify-center mb-5 sm:mb-6 md:mb-8">
          <img 
            src="/logo.svg" 
            alt="Logo PusatNet" 
            className="h-10 sm:h-12 md:h-14"
          />
        </div>

        {/* Main Content */}
        <div className="text-center mb-6 sm:mb-7 md:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3 leading-tight">
            Internet Anda Sedang Diisolir
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-3 sm:mb-4 font-medium">
            Layanan diblokir karena tagihan belum dibayar.
          </p>
          <p className="text-sm sm:text-base text-foreground/80 leading-relaxed max-w-xl mx-auto px-2">
            Silakan selesaikan pembayaran dan hubungi admin agar layanan segera diaktifkan kembali. 
            Proses reaktivasi biasanya memerlukan 5–15 menit setelah verifikasi pada jam operasional.
          </p>
        </div>

        {/* Contact Info */}
        <div className="bg-accent/20 rounded-lg p-3 sm:p-4 mb-6 sm:mb-7 md:mb-8 text-center border border-accent/30">
          <p className="text-xs sm:text-sm text-muted-foreground mb-1">Hubungi Admin</p>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
            081218000343
          </p>
        </div>

        {/* CTA Button */}
        <div className="mb-8 sm:mb-9 md:mb-10">
          <Button 
            asChild
            size="lg"
            className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-250 active:scale-[0.98]"
            aria-label="Chat dengan admin via WhatsApp"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
              Chat Admin via WhatsApp
            </a>
          </Button>
        </div>

        {/* FAQ Section */}
        <div className="mb-5 sm:mb-6">
          <h2 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 text-center">
            Pertanyaan Umum
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-border/50">
              <AccordionTrigger className="text-left text-sm sm:text-base font-semibold hover:text-primary transition-colors py-3 sm:py-4">
                Mengapa diisolir?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base pb-3 sm:pb-4">
                Sistem kami mendeteksi tagihan belum dibayar.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-b border-border/50">
              <AccordionTrigger className="text-left text-sm sm:text-base font-semibold hover:text-primary transition-colors py-3 sm:py-4">
                Bagaimana cara membayar?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base pb-3 sm:pb-4">
                Ikuti instruksi admin (transfer/QRIS), lalu kirim bukti pembayaran.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-none">
              <AccordionTrigger className="text-left text-sm sm:text-base font-semibold hover:text-primary transition-colors py-3 sm:py-4">
                Kapan aktif kembali?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base pb-3 sm:pb-4">
                Umumnya 5–15 menit setelah verifikasi pada jam operasional.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Footer */}
        <div className="text-center pt-4 sm:pt-5 md:pt-6 border-t border-border/30">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {new Date().getFullYear()} PusatNet
          </p>
          <p className="text-[11px] sm:text-xs text-muted-foreground/70 mt-1 px-2">
            Halaman ini ditampilkan karena sistem mendeteksi pembayaran belum terverifikasi
          </p>
        </div>
      </Card>
    </div>
  );
};

export default IsolatedServicePage;
