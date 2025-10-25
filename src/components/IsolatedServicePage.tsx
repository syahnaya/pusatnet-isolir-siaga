import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, MessageCircle } from "lucide-react";

const IsolatedServicePage = () => {
  const whatsappLink = "https://wa.me/6281218000343?text=Halo%20admin%20PusatNet,%20koneksi%20saya%20terisolir.%20Mohon%20bantuan%20aktivasi.%20ID%20Pelanggan:%20_____";
  const phoneLink = "tel:+6281218000343";

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-background to-accent/10">
      <Card className="max-w-2xl w-full p-8 md:p-12 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow duration-300 border-2 border-primary/10">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src="/logo.svg" 
            alt="Logo PusatNet" 
            className="h-12 md:h-14"
          />
        </div>

        {/* Main Content */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Internet Anda Sedang Diisolir
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-4 font-medium">
            Layanan diblokir karena tagihan belum dibayar.
          </p>
          <p className="text-base text-foreground/80 leading-relaxed max-w-xl mx-auto">
            Silakan selesaikan pembayaran dan hubungi admin agar layanan segera diaktifkan kembali. 
            Proses reaktivasi biasanya memerlukan 5–15 menit setelah verifikasi pada jam operasional.
          </p>
        </div>

        {/* Contact Info */}
        <div className="bg-accent/20 rounded-lg p-4 mb-8 text-center border border-accent/30">
          <p className="text-sm text-muted-foreground mb-1">Hubungi Admin</p>
          <a 
            href={phoneLink}
            className="text-2xl md:text-3xl font-bold text-primary hover:text-primary/80 transition-colors"
            aria-label="Telepon admin PusatNet"
          >
            081218000343
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-3 mb-10">
          <Button 
            asChild
            size="lg"
            className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-250"
            aria-label="Chat dengan admin via WhatsApp"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat Admin via WhatsApp
            </a>
          </Button>
          
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="w-full h-12 text-base font-medium border-2 border-secondary hover:bg-secondary/20 hover:border-secondary transition-all duration-250"
            aria-label="Telepon admin PusatNet"
          >
            <a href={phoneLink}>
              <Phone className="mr-2 h-4 w-4" />
              Telepon Admin
            </a>
          </Button>
        </div>

        {/* FAQ Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-foreground mb-4 text-center">
            Pertanyaan Umum
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-border/50">
              <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors">
                Mengapa diisolir?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sistem kami mendeteksi tagihan belum dibayar.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-b border-border/50">
              <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors">
                Bagaimana cara membayar?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Ikuti instruksi admin (transfer/QRIS), lalu kirim bukti pembayaran.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-none">
              <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors">
                Kapan aktif kembali?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Umumnya 5–15 menit setelah verifikasi pada jam operasional.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Footer */}
        <div className="text-center pt-6 border-t border-border/30">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PusatNet
          </p>
          <p className="text-xs text-muted-foreground/70 mt-1">
            Halaman ini ditampilkan karena sistem mendeteksi pembayaran belum terverifikasi
          </p>
        </div>
      </Card>
    </div>
  );
};

export default IsolatedServicePage;
