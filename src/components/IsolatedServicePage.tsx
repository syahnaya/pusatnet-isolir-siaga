import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Copy, Check, Download } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import bankMandiri from "@/assets/bank-mandiri.png";
import bankBRI from "@/assets/bank-bri.png";
import bankBNI from "@/assets/bank-bni.png";
import bankBCA from "@/assets/bank-bca.png";
import qrisPusatnet from "@/assets/qr-pusatnet.jpg";

const IsolatedServicePage = () => {
  const { toast } = useToast();
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const whatsappLink = "https://wa.me/6281218000343?text=Halo%20admin%20PusatNet,%20koneksi%20saya%20terisolir.%20Mohon%20bantuan%20aktivasi.%20ID%20Pelanggan:%20_____";

  const copyToClipboard = (text: string, id: string) => {
    // Fallback method untuk HTTP context
    const fallbackCopy = (text: string) => {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        document.execCommand('copy');
        textArea.remove();
        return true;
      } catch (err) {
        console.error('Fallback copy failed:', err);
        textArea.remove();
        return false;
      }
    };

    // Cobagunakan Clipboard API dulu, fallback ke method lama
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text)
        .then(() => {
          setCopiedId(id);
          toast({
            description: "Nomor rekening berhasil disalin",
            duration: 2000,
          });
          setTimeout(() => setCopiedId(null), 2000);
        })
        .catch(() => {
          // Jika Clipboard API gagal, gunakan fallback
          if (fallbackCopy(text)) {
            setCopiedId(id);
            toast({
              description: "Nomor rekening berhasil disalin",
              duration: 2000,
            });
            setTimeout(() => setCopiedId(null), 2000);
          } else {
            toast({
              description: "Gagal menyalin. Silakan salin manual.",
              duration: 2000,
              variant: "destructive",
            });
          }
        });
    } else {
      // Langsung gunakan fallback jika Clipboard API tidak tersedia
      if (fallbackCopy(text)) {
        setCopiedId(id);
        toast({
          description: "Nomor rekening berhasil disalin",
          duration: 2000,
        });
        setTimeout(() => setCopiedId(null), 2000);
      } else {
        toast({
          description: "Gagal menyalin. Silakan salin manual.",
          duration: 2000,
          variant: "destructive",
        });
      }
    }
  };

  const downloadQRIS = () => {
    const link = document.createElement('a');
    link.href = qrisPusatnet;
    link.download = 'QRIS-Pusatnet.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast({
      description: "QRIS sedang diunduh",
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-3 sm:p-4 md:p-6 bg-gradient-to-b from-background to-accent/10">
      <Card className="max-w-2xl w-full p-5 sm:p-6 md:p-10 lg:p-12 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow duration-300 border-2 border-primary/10">
        {/* Logo */}
        <div className="flex justify-center mb-5 sm:mb-6 md:mb-8">
          <img 
            src="/logo-pusatnet.png" 
            alt="Logo PusatNet" 
            className="h-12 sm:h-14 md:h-16 w-auto object-contain"
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
                Bagaimana cara membayar dengan Transfer?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base pb-3 sm:pb-4">
                <p className="mb-3 text-foreground/90">Silakan transfer ke salah satu rekening berikut:</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-accent/10 rounded-lg border border-accent/20">
                    <img src={bankMandiri} alt="Bank Mandiri" className="w-8 h-8 sm:w-10 sm:h-10 object-contain flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground">Bank Mandiri</p>
                      <p className="text-sm">Mukti Kismanto</p>
                      <p className="text-sm font-mono font-medium text-primary">1350010074456</p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard("1350010074456", "mandiri")}
                      className="flex-shrink-0 h-8 text-xs"
                    >
                      {copiedId === "mandiri" ? (
                        <><Check className="w-3 h-3 mr-1" /> Tersalin</>
                      ) : (
                        <><Copy className="w-3 h-3 mr-1" /> Salin Rek</>
                      )}
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-accent/10 rounded-lg border border-accent/20">
                    <img src={bankBRI} alt="Bank BRI" className="w-8 h-8 sm:w-10 sm:h-10 object-contain flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground">BRI</p>
                      <p className="text-sm">Mukti Kismanto</p>
                      <p className="text-sm font-mono font-medium text-primary">594001025547537</p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard("594001025547537", "bri")}
                      className="flex-shrink-0 h-8 text-xs"
                    >
                      {copiedId === "bri" ? (
                        <><Check className="w-3 h-3 mr-1" /> Tersalin</>
                      ) : (
                        <><Copy className="w-3 h-3 mr-1" /> Salin Rek</>
                      )}
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-accent/10 rounded-lg border border-accent/20">
                    <img src={bankBNI} alt="Bank BNI" className="w-8 h-8 sm:w-10 sm:h-10 object-contain flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground">BNI</p>
                      <p className="text-sm">Mukti Kismanto</p>
                      <p className="text-sm font-mono font-medium text-primary">1687262582</p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard("1687262582", "bni")}
                      className="flex-shrink-0 h-8 text-xs"
                    >
                      {copiedId === "bni" ? (
                        <><Check className="w-3 h-3 mr-1" /> Tersalin</>
                      ) : (
                        <><Copy className="w-3 h-3 mr-1" /> Salin Rek</>
                      )}
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-accent/10 rounded-lg border border-accent/20">
                    <img src={bankBCA} alt="Bank BCA" className="w-8 h-8 sm:w-10 sm:h-10 object-contain flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground">BCA</p>
                      <p className="text-sm">Mukti Kismanto</p>
                      <p className="text-sm font-mono font-medium text-primary">0980758630</p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard("0980758630", "bca")}
                      className="flex-shrink-0 h-8 text-xs"
                    >
                      {copiedId === "bca" ? (
                        <><Check className="w-3 h-3 mr-1" /> Tersalin</>
                      ) : (
                        <><Copy className="w-3 h-3 mr-1" /> Salin Rek</>
                      )}
                    </Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="qris" className="border-b border-border/50">
              <AccordionTrigger className="text-left text-sm sm:text-base font-semibold hover:text-primary transition-colors py-3 sm:py-4">
                Bagaimana cara membayar dengan QRIS?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base pb-3 sm:pb-4">
                <div className="space-y-6">
                  <div className="flex flex-col items-center gap-4">
                    <img 
                      src={qrisPusatnet} 
                      alt="QRIS Pusatnet Payment" 
                      className="w-full max-w-md rounded-lg border shadow-sm"
                    />
                    <Button 
                      onClick={downloadQRIS}
                      className="w-full max-w-md"
                      variant="default"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download QRIS
                    </Button>
                  </div>
                  
                  <div className="bg-muted/50 rounded-lg p-4 sm:p-6">
                    <p className="font-semibold text-foreground mb-4 text-base">
                      Selesaikan pembayaran Anda dengan 4 langkah mudah:
                    </p>
                    <ol className="space-y-3">
                      <li className="flex gap-3">
                        <span className="font-bold text-primary min-w-6">1.</span>
                        <span>Simpan gambar QRIS di HP Anda</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-primary min-w-6">2.</span>
                        <span>Buka aplikasi dompet digital Anda</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-primary min-w-6">3.</span>
                        <span>Pilih fitur Scan QR atau Upload QR</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-primary min-w-6">4.</span>
                        <span>Upload gambar QRIS ini, lalu ikuti instruksi untuk menyelesaikan pembayaran</span>
                      </li>
                    </ol>
                  </div>
                </div>
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
