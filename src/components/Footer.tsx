import { Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-border/50 bg-secondary/30 mt-24">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Asisteye
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Flow kampanyaları ile müşterilerinizi geri kazanın. AI destekli otomasyon platformu.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300 group"
              >
                <Twitter className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300 group"
              >
                <Linkedin className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="mailto:info@asisteye.com" 
                className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300 group"
              >
                <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm text-foreground">Ürün</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                  Özellikler
                </a>
              </li>
              <li>
                <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                  Flow Kampanyaları
                </a>
              </li>
              <li>
                <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                  Entegrasyonlar
                </a>
              </li>
              <li>
                <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                  Fiyatlandırma
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm text-foreground">Sektörler</h4>
            <ul className="space-y-3">
              <li>
                <a href="#sectors" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                  E-ticaret & Perakende
                </a>
              </li>
              <li>
                <a href="#sectors" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                  Otelcilik & Konaklama
                </a>
              </li>
              <li>
                <a href="#sectors" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                  Güzellik & Sağlık
                </a>
              </li>
              <li>
                <a href="#sectors" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                  Hizmet Sektörü
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm text-foreground">Destek</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                  Dokümantasyon
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                  KVKK
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                  Gizlilik Politikası
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                  Kullanım Şartları
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Asisteye. Tüm hakları saklıdır.
            </p>
            <p className="text-sm text-muted-foreground">
              KVKK uyumlu güvenli altyapı
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;