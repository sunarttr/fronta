import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Sparkles, Zap, TrendingUp, Gift, Heart, Star, ShoppingCart, Calendar, Check, Play, Rocket, ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import ecommerceImg from "@/assets/ecommerce-workspace.jpg";
import whatsappImg from "@/assets/whatsapp-automation.jpg";
import crmImg from "@/assets/crm-dashboard.jpg";
import hotelImg from "@/assets/hotel-reception.jpg";
import beautyImg from "@/assets/beauty-salon.jpg";
import aiCallImg from "@/assets/ai-call-center.jpg";

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

      {/* Flow Types - Clean Grid */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl font-bold">
              Her Senaryoya Özel <span className="text-primary">Flow Kampanyaları</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI destekli otomatik kampanyalar, her müşteri davranışına anında yanıt verir
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: ShoppingCart,
                title: "Sepet Kurtarma",
                description: "Sepeti terk eden müşterilere otomatik hatırlatma ve özel indirim gönderin",
                metric: "%30 kurtarma",
                gradient: "from-purple-500/10 to-blue-500/10"
              },
              {
                icon: Heart,
                title: "Winback Flow",
                description: "60+ gün inaktif müşterileri geri kazanma kampanyası",
                metric: "%22 geri dönüş",
                gradient: "from-pink-500/10 to-rose-500/10"
              },
              {
                icon: Gift,
                title: "İlk Alışveriş",
                description: "Yeni müşterilere özel karşılama ve teşvik mesajları",
                metric: "%35 ikinci sipariş",
                gradient: "from-orange-500/10 to-amber-500/10"
              },
              {
                icon: Star,
                title: "Sadakat Flow",
                description: "Sadık müşterilere özel ödüller ve VIP avantajlar sunun",
                metric: "%40 LTV artışı",
                gradient: "from-yellow-500/10 to-orange-500/10"
              },
              {
                icon: Calendar,
                title: "Doğum Günü",
                description: "Müşterilere özel gün kutlaması ve hediye kampanyaları",
                metric: "%45 açılma",
                gradient: "from-blue-500/10 to-cyan-500/10"
              },
              {
                icon: TrendingUp,
                title: "Yeniden Satın Alma",
                description: "Ürün tükenme tahmini ile otomatik hatırlatma sistemi",
                metric: "%28 tekrar satış",
                gradient: "from-green-500/10 to-emerald-500/10"
              },
            ].map((flow, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="feature-card"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${flow.gradient} flex items-center justify-center mb-6`}>
                  <flow.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{flow.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{flow.description}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  <TrendingUp className="w-4 h-4" />
                  {flow.metric}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features - Image Showcase */}
      <section className="section-padding">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-5xl font-bold">
                <span className="text-primary">WhatsApp Business</span>
                <br />
                Resmi API Entegrasyonu
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Müşterilerinize en sevdikleri kanaldan ulaşın. WhatsApp Business API 
                ile güvenli, hızlı ve etkili iletişim.
              </p>

              <ul className="space-y-4">
                {[
                  "Resmi Business API ile güvenli iletişim",
                  "Otomatik yanıtlayıcı ve AI chatbot desteği",
                  "Multimedya mesaj gönderimi (görsel, video, dosya)",
                  "Anlık teslimat ve okundu bilgisi",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button size="lg" className="text-lg px-8 h-14 rounded-2xl group">
                Daha Fazla Bilgi
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={whatsappImg} alt="WhatsApp Automation" className="w-full h-auto" />
                <div className="image-overlay" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SMS & Email Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={crmImg} alt="CRM Dashboard" className="w-full h-auto" />
                <div className="image-overlay" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 order-1 lg:order-2"
            >
              <h2 className="text-5xl font-bold">
                <span className="text-primary">SMS & Email</span>
                <br />
                Çoklu Kanal Yönetimi
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Tüm iletişim kanallarını tek platformdan yönetin. Profesyonel 
                şablonlar ve detaylı analizlerle kampanyalarınızı optimize edin.
              </p>

              <ul className="space-y-4">
                {[
                  "Toplu SMS gönderimi ve detaylı raporlama",
                  "Profesyonel email şablonları ve editör",
                  "A/B test ve kampanya optimizasyonu",
                  "Anlık istatistik ve performans analizleri",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sectoral Solutions - Photo Grid */}
      <section className="section-padding">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl font-bold">
              Her Sektöre <span className="text-primary">Özel Çözümler</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              İşletmenizin ihtiyaçlarına göre özelleştirilmiş flow kampanyaları
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="feature-card"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                <img src={hotelImg} alt="Otel Resepsiyon" className="w-full h-full object-cover" />
                <div className="image-overlay" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-3xl font-bold text-white">Otelcilik & Konaklama</h3>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Rezervasyon hatırlatma ve onay sistemi",
                  "Misafir memnuniyeti takibi",
                  "Check-in/out otomasyonu",
                  "Özel gün kutlama kampanyaları"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="feature-card"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                <img src={beautyImg} alt="Güzellik Salonu" className="w-full h-full object-cover" />
                <div className="image-overlay" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-3xl font-bold text-white">Güzellik & Sağlık</h3>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "Randevu hatırlatma ve onaylama",
                  "Müşteri geri kazanma kampanyaları",
                  "Sadakat programı yönetimi",
                  "Sezonluk promosyon otomasyonu"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Call Center Showcase */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">AI Powered</span>
              </div>

              <h2 className="text-5xl font-bold">
                <span className="text-primary">AI Çağrı Merkezi</span>
                <br />
                Otomasyonu
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Yapay zeka destekli çağrı merkezi ile müşteri hizmetlerini 
                otomatikleştirin. 7/24 kesintisiz hizmet sunun.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">%60</div>
                  <div className="text-sm text-muted-foreground">Maliyet Azalması</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Kesintisiz Hizmet</div>
                </div>
              </div>

              <Button size="lg" className="text-lg px-8 h-14 rounded-2xl group">
                Daha Fazla Bilgi
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={aiCallImg} alt="AI Call Center" className="w-full h-auto" />
                <div className="image-overlay" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA - Clean & Minimal */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-16 text-center"
          >
            <div className="relative z-10 space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold">
                Müşteri Değerini
                <br />
                <span className="text-primary">Bugün Artır</span>
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Flow kampanyaları ile her tipte müşteriyi geri kazan. 
                Daha fazla gelir, daha az iş yükü.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button size="lg" className="text-lg px-10 h-14 rounded-2xl group">
                  <Rocket className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Ücretsiz Dene
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-10 h-14 rounded-2xl">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Demo Talep Et
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
