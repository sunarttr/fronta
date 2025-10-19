import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Phone, MessageSquare, Users, Hotel, ShoppingBag, Sparkles, CheckCircle2, ArrowRight, Zap, TrendingUp, Clock, Target, Repeat, Gift, Heart, Star, Activity } from "lucide-react";
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
      
      {/* Enhanced Floating Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-accent/20 blob blur-3xl" />
        <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-primary/15 blob blur-3xl" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-accent/15 blob blur-3xl" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-primary/10 blob blur-3xl" style={{ animationDelay: '6s' }} />
      </div>
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="container relative px-4 pt-32 pb-16 md:pt-44 md:pb-24 z-10">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-8 px-8 py-3 glass rounded-full hover:scale-105 transition-transform cursor-default"
            >
              <span className="text-accent font-bold text-base tracking-wide">✨ Flow Otomasyonu ile Müşteri Değeri +%40</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold mb-8 leading-[1.05] tracking-tighter"
            >
              Her müşterini{" "}
              <span className="text-gradient inline-block hover:scale-105 transition-transform">
                geri kazanan
              </span>
              <br />
              AI asistan
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Flow kampanyaları ile kayıp müşteri kalmaz. Her temas noktasında otomatik akıllı mesaj, 
              <span className="text-accent font-semibold"> %70 daha az iş yükü, %40 daha fazla gelir</span>.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-5 justify-center"
            >
              <Button 
                size="lg" 
                className="button-gradient text-white px-12 py-8 text-xl font-bold group hover:scale-105 transition-all"
                onClick={() => window.open('https://calendly.com/dayyillc/30min', '_blank')}
              >
                Flow'ları Keşfet
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                className="glass glass-hover px-12 py-8 text-xl font-bold border-2 border-accent/20"
                onClick={() => window.open('https://calendly.com/dayyillc/30min', '_blank')}
              >
                Demo İzle
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
            >
              {[
                { value: "12+", label: "Hazır Flow" },
                { value: "%40", label: "LTV Artışı" },
                { value: "24/7", label: "Otomatik" }
              ].map((stat, i) => (
                <div key={i} className="glass rounded-2xl p-5 hover:scale-105 transition-transform cursor-default">
                  <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Flow Kampanyaları Section - NEW */}
      <section className="py-24 relative z-10">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4 px-6 py-2 bg-accent/10 rounded-full">
              <span className="text-accent font-bold text-sm">🎯 AKILLI KAMPANYA YÖNETİMİ</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tighter">
              Flow'lar ile <span className="text-gradient">hiç müşteri kaybetme</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Her müşteri davranışına özel otomatik kampanya. Sepeti terk eden, uzun süredir alışveriş yapmayan, 
              doğum günü yaklaşan - hepsine doğru zamanda doğru mesaj.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                icon: Target,
                title: "Sepet Kurtarma",
                desc: "Sepeti terk eden müşteriye otomatik hatırlatma. %35 geri dönüş oranı.",
                color: "from-red-500 to-orange-500"
              },
              {
                icon: Repeat,
                title: "Winback",
                desc: "Uzun süredir alışveriş yapmayan müşterileri geri kazan. %28 aktivasyon.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Gift,
                title: "Özel Günler",
                desc: "Doğum günü, yıldönümü kampanyaları otomatik. %42 dönüşüm artışı.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: TrendingUp,
                title: "Cross-Sell",
                desc: "Alınan ürüne uygun öneriler otomatik gider. Sipariş değeri %31 artar.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Heart,
                title: "Sadakat",
                desc: "VIP müşterilere özel ilgi ve teklifler. LTV %45 artar.",
                color: "from-rose-500 to-red-500"
              },
              {
                icon: Star,
                title: "İlk Alışveriş",
                desc: "Yeni müşteriye hoşgeldin mesajı ve özel indirim. %38 tekrar alışveriş.",
                color: "from-yellow-500 to-amber-500"
              }
            ].map((flow, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass glass-hover rounded-3xl p-8 group cursor-pointer relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${flow.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${flow.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <flow.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{flow.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{flow.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Button 
              size="lg" 
              className="button-gradient text-white px-10 py-7 text-lg font-bold group"
              onClick={() => window.open('https://calendly.com/dayyillc/30min', '_blank')}
            >
              Tüm Flow'ları Gör
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Core Features - Enhanced */}
      <section className="py-24 relative z-10 bg-secondary/30">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tighter">Platform özellikleri</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Müşteri iletişiminin tüm ihtiyaçları tek yerde
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                icon: Phone,
                image: aiCallImage,
                title: "AI Çağrı Asistanı",
                desc: "Gelen ve giden aramaları otomatik yönet. Hiç kaçan müşteri kalmasın.",
                metrics: [
                  { label: "Yanıt süresi", value: "2sn" },
                  { label: "Başarı oranı", value: "%94" }
                ]
              },
              {
                icon: MessageSquare,
                image: whatsappImage,
                title: "WhatsApp + Instagram",
                desc: "İki kanalı tek panelden yönet. Mesajlar otomatik gönderilir ve yanıtlanır.",
                metrics: [
                  { label: "Açılma oranı", value: "%98" },
                  { label: "Yanıt süresi", value: "Anında" }
                ]
              },
              {
                icon: Users,
                image: crmImage,
                title: "Akıllı CRM & Segmentasyon",
                desc: "Müşteri davranışlarını analiz et, özel kampanyalar oluştur.",
                metrics: [
                  { label: "Segment sayısı", value: "Sınırsız" },
                  { label: "Otomasyon", value: "%100" }
                ]
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
                  <div className="absolute bottom-4 left-4 z-20 p-3 bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <item.icon className="h-7 w-7 text-accent" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{item.desc}</p>
                  <div className="flex gap-4">
                    {item.metrics.map((metric, i) => (
                      <div key={i} className="bg-secondary/50 rounded-xl px-4 py-2">
                        <div className="text-xs text-muted-foreground mb-1">{metric.label}</div>
                        <div className="text-sm font-bold text-accent">{metric.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions - Enhanced */}
      <section className="py-24 relative">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tighter">Sektörüne özel çözümler</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Her sektörün ihtiyacına göre optimize edilmiş flow kampanyaları
            </p>
          </motion.div>

          <div className="space-y-8 max-w-7xl mx-auto">
            {/* Hotels */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="glass glass-hover rounded-3xl overflow-hidden group"
            >
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 relative h-72 md:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/50 to-transparent z-10" />
                  <img 
                    src={hotelImage} 
                    alt="Oteller"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 z-20 flex items-center gap-3 px-6 py-3 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl">
                    <Hotel className="h-7 w-7 text-accent" />
                    <span className="font-bold text-xl">Oteller</span>
                  </div>
                </div>
                <div className="md:col-span-3 p-10 md:p-14">
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                    Misafir deneyimini <span className="text-gradient">%40 geliştir</span>
                  </h3>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    Rezervasyon flow'ları ile kayıp rezervasyon kalmaz. Check-in hatırlatmaları, 
                    promosyon kampanyaları ve misafir geri kazanma tamamen otomatik.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      { icon: Activity, text: "Rezervasyon flow", badge: "Otomatik" },
                      { icon: Clock, text: "7/24 destek", badge: "AI" },
                      { icon: TrendingUp, text: "Doluluk +%32", badge: "Kanıtlanmış" },
                      { icon: CheckCircle2, text: "Geri kazanma", badge: "%28 başarı" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-secondary/50 rounded-2xl hover:bg-secondary/70 transition-colors">
                        <div className="p-2 bg-accent/10 rounded-xl">
                          <item.icon className="h-5 w-5 text-accent" />
                        </div>
                        <div className="flex-1">
                          <span className="font-semibold block mb-1">{item.text}</span>
                          <span className="text-xs text-accent font-medium">{item.badge}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="button-gradient text-white font-bold group"
                    size="lg"
                    onClick={() => window.open('https://calendly.com/dayyillc/30min', '_blank')}
                  >
                    Otel Flow'larını İncele
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
              className="glass glass-hover rounded-3xl overflow-hidden group"
            >
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-3 p-10 md:p-14 order-2 md:order-1">
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                    Müşteri değerini <span className="text-gradient">%45 artır</span>
                  </h3>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    Sepet kurtarma, winback, cross-sell flow'ları ile kayıp müşteri kalmaz. 
                    Her müşteri davranışına özel otomatik kampanya, sürekli artan gelir.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      { icon: Target, text: "Sepet kurtarma", badge: "%35 dönüş" },
                      { icon: Repeat, text: "Winback flow", badge: "%28 aktif" },
                      { icon: TrendingUp, text: "LTV artışı", badge: "%45" },
                      { icon: Gift, text: "Cross-sell", badge: "+%31 sipariş" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-secondary/50 rounded-2xl hover:bg-secondary/70 transition-colors">
                        <div className="p-2 bg-accent/10 rounded-xl">
                          <item.icon className="h-5 w-5 text-accent" />
                        </div>
                        <div className="flex-1">
                          <span className="font-semibold block mb-1">{item.text}</span>
                          <span className="text-xs text-accent font-medium">{item.badge}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="button-gradient text-white font-bold group"
                    size="lg"
                    onClick={() => window.open('https://calendly.com/dayyillc/30min', '_blank')}
                  >
                    E-Ticaret Flow'larını İncele
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                <div className="md:col-span-2 relative h-72 md:h-auto overflow-hidden order-1 md:order-2">
                  <div className="absolute inset-0 bg-gradient-to-bl from-accent/50 to-transparent z-10" />
                  <img 
                    src={ecommerceImage} 
                    alt="E-ticaret"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 right-6 z-20 flex items-center gap-3 px-6 py-3 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl">
                    <ShoppingBag className="h-7 w-7 text-accent" />
                    <span className="font-bold text-xl">E-Ticaret</span>
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
              className="glass glass-hover rounded-3xl overflow-hidden group"
            >
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 relative h-72 md:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/50 to-transparent z-10" />
                  <img 
                    src={beautySalonImage} 
                    alt="Güzellik Salonları"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 z-20 flex items-center gap-3 px-6 py-3 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl">
                    <Sparkles className="h-7 w-7 text-accent" />
                    <span className="font-bold text-xl">Güzellik</span>
                  </div>
                </div>
                <div className="md:col-span-3 p-10 md:p-14">
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                    Randevu doluluk <span className="text-gradient">%38 artar</span>
                  </h3>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    Randevu flow'ları ile hiç boş slot kalmaz. Hatırlatmalar, müşteri dönüş kampanyaları 
                    ve özel gün mesajları tamamen otomatik. Manuel iş sıfır.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      { icon: Activity, text: "Otomatik randevu", badge: "AI yapıyor" },
                      { icon: Clock, text: "Hatırlatma flow", badge: "%92 gelme" },
                      { icon: TrendingUp, text: "Doluluk +%38", badge: "Daha fazla" },
                      { icon: Heart, text: "Müşteri dönüşü", badge: "%42 tekrar" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-secondary/50 rounded-2xl hover:bg-secondary/70 transition-colors">
                        <div className="p-2 bg-accent/10 rounded-xl">
                          <item.icon className="h-5 w-5 text-accent" />
                        </div>
                        <div className="flex-1">
                          <span className="font-semibold block mb-1">{item.text}</span>
                          <span className="text-xs text-accent font-medium">{item.badge}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="button-gradient text-white font-bold group"
                    size="lg"
                    onClick={() => window.open('https://calendly.com/dayyillc/30min', '_blank')}
                  >
                    Güzellik Flow'larını İncele
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof - Enhanced */}
      <section className="py-24 relative bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto glass rounded-3xl p-12 md:p-20 relative overflow-hidden">
            <div className="absolute inset-0 animated-gradient opacity-5" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 relative z-10"
            >
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6">100+ işletme flow'larla büyüyor</h2>
              <p className="text-xl text-muted-foreground font-light">
                Kayıp müşteri yok, sürekli artan gelir
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {[
                {
                  metric: "%70",
                  label: "Daha Az İş Yükü",
                  desc: "Flow'lar otomatik çalışır",
                  icon: Zap
                },
                {
                  metric: "%45",
                  label: "Müşteri Değeri Artışı",
                  desc: "Her flow müşteriyi geri kazanır",
                  icon: TrendingUp
                },
                {
                  metric: "0",
                  label: "Kayıp Müşteri",
                  desc: "Akıllı flow'larla hepsi aktif",
                  icon: Target
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center group cursor-default"
                >
                  <div className="inline-block p-4 bg-accent/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="h-10 w-10 text-accent" />
                  </div>
                  <div className="text-6xl md:text-7xl font-extrabold text-gradient mb-4 group-hover:scale-105 transition-transform">
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

      {/* Final CTA - Enhanced */}
      <section className="py-32 relative">
        <div className="container relative px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl mx-auto text-center glass rounded-3xl p-14 md:p-20 glow relative overflow-hidden"
          >
            <div className="absolute inset-0 animated-gradient opacity-5" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tighter">
                Kayıp müşteri dönemi <span className="text-gradient">sona erdi</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light max-w-3xl mx-auto">
                Flow kampanyaları ile her müşteri geri kazanılır. Kurulum 5 dakika, ilk sonuçları aynı gün gör.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Button 
                  size="lg" 
                  className="button-gradient text-white px-14 py-8 text-xl font-extrabold group hover:scale-105 transition-all shadow-2xl"
                  onClick={() => window.open('https://calendly.com/dayyillc/30min', '_blank')}
                >
                  Flow'ları Keşfet
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  className="glass glass-hover px-14 py-8 text-xl font-bold border-2 border-accent/30 hover:scale-105 transition-all"
                  onClick={() => window.open('https://calendly.com/dayyillc/30min', '_blank')}
                >
                  Demo İzle
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
