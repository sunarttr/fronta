import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Phone, MessageSquare, Users, Hotel, ShoppingBag, Sparkles, CheckCircle2, ArrowRight, Zap, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import hotelImage from "@/assets/hotel-reception.jpg";
import ecommerceImage from "@/assets/ecommerce-workspace.jpg";
import beautySalonImage from "@/assets/beauty-salon.jpg";
import aiCallImage from "@/assets/ai-call-center.jpg";
import whatsappImage from "@/assets/whatsapp-automation.jpg";
import crmImage from "@/assets/crm-dashboard.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background text-card-foreground font-poppins overflow-hidden">
      <Navigation />
      
      {/* Floating Blobs Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 blob blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 blob blur-3xl" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 blob blur-3xl" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="container relative px-4 pt-32 pb-20 md:pt-44 md:pb-28 z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-6 px-6 py-2 glass rounded-full"
            >
              <span className="text-accent font-semibold text-sm tracking-wide">✨ AI-Powered Communication</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight"
            >
              Müşteri iletişimini{" "}
              <span className="text-gradient">AI ile otomatikleştir</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            >
              7/24 çalışan AI asistan ile personel yükünü %70 azalt, 
              dönüşüm oranını %25 artır.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                size="lg" 
                className="button-gradient text-white px-10 py-7 text-lg font-semibold group"
                onClick={() => window.open('https://calendly.com/dayyillc/30min', '_blank')}
              >
                Demo İzle
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                className="glass glass-hover px-10 py-7 text-lg font-semibold"
                onClick={() => window.open('https://calendly.com/dayyillc/30min', '_blank')}
              >
                İletişime Geç
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Core Features - 3 Cards */}
      <section className="py-24 relative z-10">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Asisteye ne yapar?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Tam otomatik müşteri iletişim platformu
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                icon: Phone,
                image: aiCallImage,
                title: "AI Çağrı Merkezi",
                desc: "Gelen ve giden aramaları otomatik yönet. 7/24 müşteri desteği."
              },
              {
                icon: MessageSquare,
                image: whatsappImage,
                title: "WhatsApp Otomasyonu",
                desc: "Mesajlar otomatik gönderilir ve yanıtlanır. Sıfır manuel iş."
              },
              {
                icon: Users,
                image: crmImage,
                title: "Akıllı CRM",
                desc: "Müşteri davranışlarını analiz et, segmentler oluştur."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="glass glass-hover rounded-3xl overflow-hidden group cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-primary/30 mix-blend-overlay z-10" />
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 z-20 p-3 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg">
                    <item.icon className="h-7 w-7 text-accent" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions - Modern Cards */}
      <section className="py-24 relative">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Sektörüne özel çözümler</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              İhtiyacına göre tasarlanmış AI otomasyonu
            </p>
          </motion.div>

          <div className="space-y-8 max-w-7xl mx-auto">
            {/* Hotels */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="glass glass-hover rounded-3xl overflow-hidden"
            >
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 relative h-64 md:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/40 to-transparent z-10" />
                  <img 
                    src={hotelImage} 
                    alt="Oteller"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 z-20 flex items-center gap-3 px-5 py-3 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl">
                    <Hotel className="h-6 w-6 text-accent" />
                    <span className="font-bold text-lg">Oteller</span>
                  </div>
                </div>
                <div className="md:col-span-3 p-8 md:p-12">
                  <h3 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
                    Misafir deneyimini 7/24 <span className="text-gradient">canlı tut</span>
                  </h3>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    Rezervasyon teyitleri, check-in hatırlatmaları ve promosyonlar tamamen otomatik.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      { icon: Zap, text: "Anında rezervasyon" },
                      { icon: Clock, text: "7/24 yanıt" },
                      { icon: TrendingUp, text: "Doluluk artışı" },
                      { icon: CheckCircle2, text: "Otomatik hatırlatma" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-xl">
                        <item.icon className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-sm font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="button-gradient text-white font-semibold group"
                    onClick={() => window.open('https://calendly.com/dayyillc/30min', '_blank')}
                  >
                    Demo İzle
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* E-commerce */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="glass glass-hover rounded-3xl overflow-hidden"
            >
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-3 p-8 md:p-12 order-2 md:order-1">
                  <h3 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
                    Satış sonrası <span className="text-gradient">tam otomatik</span>
                  </h3>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    Sipariş teyidi, kargo takibi ve sepet kurtarma kampanyaları yapay zeka ile yönetilir.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      { icon: Zap, text: "Sepet kurtarma" },
                      { icon: Clock, text: "Anında bildirim" },
                      { icon: TrendingUp, text: "%40 LTV artışı" },
                      { icon: CheckCircle2, text: "Otomatik takip" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-xl">
                        <item.icon className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-sm font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="button-gradient text-white font-semibold group"
                    onClick={() => window.open('https://calendly.com/dayyillc/30min', '_blank')}
                  >
                    Demo İzle
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                <div className="md:col-span-2 relative h-64 md:h-auto overflow-hidden order-1 md:order-2">
                  <div className="absolute inset-0 bg-gradient-to-bl from-accent/40 to-transparent z-10" />
                  <img 
                    src={ecommerceImage} 
                    alt="E-ticaret"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 right-6 z-20 flex items-center gap-3 px-5 py-3 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl">
                    <ShoppingBag className="h-6 w-6 text-accent" />
                    <span className="font-bold text-lg">E-Ticaret</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Beauty Salons */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="glass glass-hover rounded-3xl overflow-hidden"
            >
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 relative h-64 md:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/40 to-transparent z-10" />
                  <img 
                    src={beautySalonImage} 
                    alt="Güzellik Salonları"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 z-20 flex items-center gap-3 px-5 py-3 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl">
                    <Sparkles className="h-6 w-6 text-accent" />
                    <span className="font-bold text-lg">Güzellik</span>
                  </div>
                </div>
                <div className="md:col-span-3 p-8 md:p-12">
                  <h3 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
                    Randevuları AI'ya bırak, <span className="text-gradient">müşteriye odaklan</span>
                  </h3>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    Randevu alma, hatırlatma ve iptal işlemleri tamamen otomatik. Hiç manuel iş yok.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      { icon: Zap, text: "Otomatik randevu" },
                      { icon: Clock, text: "Akıllı hatırlatma" },
                      { icon: TrendingUp, text: "Daha fazla doluluk" },
                      { icon: CheckCircle2, text: "Kolay yönetim" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-xl">
                        <item.icon className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-sm font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="button-gradient text-white font-semibold group"
                    onClick={() => window.open('https://calendly.com/dayyillc/30min', '_blank')}
                  >
                    Demo İzle
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto glass rounded-3xl p-12 md:p-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">100+ işletme Asisteye kullanıyor</h2>
              <p className="text-xl text-muted-foreground font-light">
                Sen de bu büyümeye ortak ol
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  metric: "%70",
                  label: "Daha az iş yükü",
                  desc: "Manuel işleri AI otomatik halleder"
                },
                {
                  metric: "%25",
                  label: "Daha fazla satış",
                  desc: "Otomatik takip ile kayıp müşteri yok"
                },
                {
                  metric: "7/24",
                  label: "Kesintisiz hizmet",
                  desc: "Her zaman ulaşılabilir destek"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-6xl md:text-7xl font-bold text-gradient mb-4">
                    {item.metric}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.label}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative">
        <div className="absolute inset-0 animated-gradient opacity-5" />
        <div className="container relative px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center glass rounded-3xl p-12 md:p-16 glow"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Hemen başla, <span className="text-gradient">farkı gör</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 font-light">
              Kurulum 5 dakika. İlk sonuçları aynı gün görmeye başla.
            </p>
            <Button 
              size="lg" 
              className="button-gradient text-white px-12 py-8 text-xl font-bold group"
              onClick={() => window.open('https://calendly.com/dayyillc/30min', '_blank')}
            >
              Demo İzle
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
