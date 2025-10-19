import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Phone, MessageSquare, Users, ShoppingBag, Sparkles, CheckCircle2, ArrowRight, Zap, TrendingUp, Target, Repeat, Gift, Heart, Star, ShoppingCart, Calendar, Mail, Check, Briefcase, Play, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-blue-50/30 via-white to-purple-50/20" />
      
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                AI Destekli Otomasyon
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
              Flow Kampanyaları ile
              <br />
              <span className="text-gradient">Müşterini Geri Kazan</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Sepeti terk eden, inaktif olan, ilk alışverişini yapan her müşteri için 
              otomatik flow'lar. Müşteri değerini artır, gelirini katla.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button size="lg" className="button-gradient text-lg px-8 py-6 rounded-xl font-semibold group">
                <Zap className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Hemen Başla
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-xl border-2 hover:bg-secondary font-semibold">
                <Play className="w-5 h-5 mr-2" />
                Demo İzle
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-4xl mx-auto">
              <div className="glass glass-hover p-6 rounded-2xl text-center">
                <div className="text-5xl font-bold text-primary mb-2">%45</div>
                <div className="text-foreground font-semibold">Daha Az İş Yükü</div>
                <div className="text-sm text-muted-foreground mt-1">Flow'lar otomatik çalışır</div>
              </div>
              <div className="glass glass-hover p-6 rounded-2xl text-center">
                <div className="text-5xl font-bold text-primary mb-2">%28</div>
                <div className="text-foreground font-semibold">Müşteri Değeri Artışı</div>
                <div className="text-sm text-muted-foreground mt-1">Her flow müşteriyi geri kazanır</div>
              </div>
              <div className="glass glass-hover p-6 rounded-2xl text-center">
                <div className="text-5xl font-bold text-primary mb-2">%25</div>
                <div className="text-foreground font-semibold">LTV Artışı</div>
                <div className="text-sm text-muted-foreground mt-1">Sadık müşteri yaratır</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flow Types Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Her Senaryoya Özel
              <br />
              <span className="text-gradient">Flow Kampanyaları</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AI destekli flow'lar, her müşteri davranışına otomatik yanıt verir
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: ShoppingCart,
                title: "Sepet Kurtarma Flow",
                description: "Sepeti terk eden müşterilere otomatik hatırlatma ve özel indirim",
                metric: "%30 sepet kurtarma oranı",
              },
              {
                icon: Users,
                title: "Winback Flow",
                description: "60+ gün inaktif müşterileri geri kazanma kampanyası",
                metric: "%22 geri dönüş oranı",
              },
              {
                icon: Gift,
                title: "İlk Alışveriş Flow",
                description: "Yeni müşterilere özel karşılama ve teşvik mesajları",
                metric: "%35 ikinci sipariş",
              },
              {
                icon: Heart,
                title: "Sadakat Flow",
                description: "Sadık müşterilere özel ödüller ve VIP avantajlar",
                metric: "%40 LTV artışı",
              },
              {
                icon: Calendar,
                title: "Doğum Günü Flow",
                description: "Müşterilere özel gün kutlaması ve hediye kampanyaları",
                metric: "%45 açılma oranı",
              },
              {
                icon: Star,
                title: "Yeniden Satın Alma Flow",
                description: "Ürün tükenme tahmini ile otomatik hatırlatma",
                metric: "%28 tekrar satış",
              },
            ].map((flow, index) => (
              <div 
                key={index} 
                className="glass glass-hover p-6 rounded-2xl group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <flow.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{flow.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{flow.description}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">{flow.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              <span className="text-gradient">Tek Platform</span>, Tüm Kanallar
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              WhatsApp, SMS ve Email ile müşterilerine her kanaldan ulaş
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="glass glass-hover p-8 rounded-2xl space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <MessageSquare className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">WhatsApp Business</h3>
                  <p className="text-muted-foreground text-sm">Resmi API entegrasyonu</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Resmi Business API ile güvenli iletişim",
                  "Otomatik yanıtlayıcı ve chatbot desteği",
                  "Multimedya mesaj gönderimi",
                  "Anlık teslimat ve okundu bilgisi"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass glass-hover p-8 rounded-2xl space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">SMS & Email</h3>
                  <p className="text-muted-foreground text-sm">Çoklu kanal yönetimi</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Toplu SMS gönderimi ve raporlama",
                  "Profesyonel email şablonları",
                  "A/B test ve optimizasyon",
                  "Anlık istatistik ve analizler"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Tüm <span className="text-gradient">E-ticaret</span> Platformlarıyla
              <br />
              <span className="text-gradient">Entegre</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kullandığın sisteme dakikalar içinde bağlan
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Shopify",
              "WooCommerce", 
              "Magento",
              "PrestaShop",
              "OpenCart",
              "İdeasoft",
              "Ticimax",
              "T-Soft",
            ].map((platform, index) => (
              <div 
                key={index}
                className="glass glass-hover p-6 rounded-xl text-center group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 mx-auto mb-3 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground text-sm">{platform}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectoral Solutions */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              <span className="text-gradient">Sektörel</span> Çözümler
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Her sektörün ihtiyacına özel flow kampanyaları
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: ShoppingBag,
                title: "E-Ticaret & Perakende",
                features: [
                  "Sepet kurtarma flow'ları",
                  "Ürün tavsiye otomasyonu",
                  "Stok bildirim sistemi",
                  "Sezonluk kampanya yönetimi"
                ]
              },
              {
                icon: Briefcase,
                title: "Hizmet & Profesyonel",
                features: [
                  "Randevu hatırlatma sistemi",
                  "Müşteri geri kazanma flow'u",
                  "Referans ödül programı",
                  "Özel gün kutlama otomasyonu"
                ]
              }
            ].map((sector, index) => (
              <div key={index} className="glass glass-hover p-8 rounded-2xl space-y-6 group">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <sector.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{sector.title}</h3>
                </div>
                <ul className="space-y-3">
                  {sector.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto max-w-4xl">
          <div className="glass p-12 rounded-2xl text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Müşteri Değerini
              <br />
              <span className="text-gradient">Bugün Artır</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flow kampanyaları ile her tipte müşteriyi geri kazan. %30 daha fazla gelir, %45 daha az iş yükü.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="button-gradient text-lg px-10 py-6 rounded-xl font-semibold group">
                <Rocket className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Ücretsiz Dene
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-6 rounded-xl border-2 hover:bg-secondary font-semibold">
                <Users className="w-5 h-5 mr-2" />
                Demo Talep Et
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
