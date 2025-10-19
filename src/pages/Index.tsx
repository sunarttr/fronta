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
    <div className="min-h-screen bg-background text-foreground font-sans overflow-hidden relative">
      <Navigation />
      
      {/* Futuristic Mesh Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ background: 'var(--gradient-mesh)' }} />
      
      {/* Animated Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-[600px] h-[600px] bg-primary/30 blob blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-[700px] h-[700px] bg-accent/25 blob blur-[140px]" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-highlight/20 blob blur-[100px]" style={{ animationDelay: '6s' }} />
      </div>
      
      {/* Hero Section - Futuristic */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <div className="container relative px-4 pt-32 pb-20 md:pt-48 md:pb-32 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 mb-8 px-6 py-3 glass rounded-full neon-border cursor-default"
              >
                <Sparkles className="h-5 w-5 text-accent" />
                <span className="text-accent font-bold text-sm tracking-wider uppercase">AI-Powered Flow Automation</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.9] tracking-tighter"
              >
                Müşteri
                <br />
                <span className="text-gradient shimmer inline-block">Kaybetme</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="text-2xl md:text-3xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed font-light"
              >
                AI flow kampanyaları ile her müşteri{" "}
                <span className="text-accent font-semibold">otomatik geri kazanılır</span>.
                <br className="hidden md:block" />
                %45 daha az iş, %28 daha fazla gelir.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
              >
                <Button 
                  size="lg" 
                  className="button-gradient text-white px-16 py-10 text-2xl font-black group rounded-2xl relative z-10"
                  onClick={() => window.open('https://calendly.com/dayyillc/30min', '_blank')}
                >
                  <span className="relative z-10">Başla</span>
                  <ArrowRight className="ml-3 h-7 w-7 group-hover:translate-x-2 transition-transform relative z-10" />
                </Button>
                <Button 
                  size="lg" 
                  className="glass glass-hover px-16 py-10 text-2xl font-bold rounded-2xl border-2 border-primary/30 text-foreground"
                  onClick={() => window.open('https://calendly.com/dayyillc/30min', '_blank')}
                >
                  Demo İzle
                </Button>
              </motion.div>
            </div>

            {/* Bento Grid Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
              {[
                { value: "12+", label: "Hazır Flow Şablonu", icon: Zap },
                { value: "%25", label: "LTV Artışı", icon: TrendingUp },
                { value: "24/7", label: "Otomatik Çalışır", icon: Activity }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                  className="glass glass-hover rounded-3xl p-8 text-center group cursor-default card-3d"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-6 group-hover:scale-110 transition-transform">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-5xl font-black text-gradient mb-3">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Flow Kampanyaları - Bento Grid */}
      <section className="py-32 relative z-10">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 glass rounded-full">
              <Target className="h-4 w-4 text-accent" />
              <span className="text-accent font-bold text-xs uppercase tracking-widest">Flow Otomasyonu</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
              Akıllı{" "}
              <span className="text-gradient">Kampanyalar</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
              Her müşteri davranışı için özel flow. Sepet terki, winback, özel günler - 
              <span className="text-accent font-semibold"> hepsi tamamen otomatik</span>.
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                icon: Target,
                title: "Sepet Kurtarma",
                desc: "Sepeti terk eden müşteriye otomatik hatırlatma ve özel indirim.",
                metric: "%35",
                label: "Geri Dönüş",
                color: "from-red-500 to-orange-500",
                size: "normal"
              },
              {
                icon: Repeat,
                title: "Winback",
                desc: "Uzun süredir alışveriş yapmayan müşterileri akıllı kampanyalarla geri kazan.",
                metric: "%28",
                label: "Aktivasyon",
                color: "from-blue-500 to-cyan-500",
                size: "normal"
              },
              {
                icon: Gift,
                title: "Özel Günler",
                desc: "Doğum günü, yıldönümü - hiçbirini kaçırma.",
                metric: "%42",
                label: "Dönüşüm",
                color: "from-purple-500 to-pink-500",
                size: "normal"
              },
              {
                icon: TrendingUp,
                title: "Cross-Sell",
                desc: "Alınan ürüne özel akıllı öneriler.",
                metric: "%31",
                label: "Sipariş +",
                color: "from-green-500 to-emerald-500",
                size: "normal"
              },
              {
                icon: Heart,
                title: "Sadakat",
                desc: "VIP müşterilere özel ilgi ve avantajlar.",
                metric: "%30",
                label: "LTV Artışı",
                color: "from-rose-500 to-red-500",
                size: "normal"
              },
              {
                icon: Star,
                title: "İlk Alışveriş",
                desc: "Yeni müşteriye hoşgeldin kampanyası.",
                metric: "%38",
                label: "Tekrar",
                color: "from-yellow-500 to-amber-500",
                size: "normal"
              }
            ].map((flow, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                className="glass glass-hover rounded-3xl p-10 group cursor-pointer relative overflow-hidden card-3d"
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${flow.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-3xl`} />
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className={`inline-flex w-20 h-20 rounded-2xl bg-gradient-to-br ${flow.color} items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <flow.icon className="h-10 w-10 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-3xl font-black mb-4 group-hover:text-accent transition-colors">{flow.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-lg">{flow.desc}</p>
                  
                  {/* Metric Badge */}
                  <div className="inline-flex items-center gap-3 px-5 py-3 bg-secondary/50 rounded-2xl border border-primary/20">
                    <div className="text-3xl font-black text-gradient">{flow.metric}</div>
                    <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{flow.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center mt-16"
          >
            <Button 
              size="lg" 
              className="button-gradient text-white px-14 py-8 text-xl font-black group rounded-2xl"
              onClick={() => window.open('https://calendly.com/dayyillc/30min', '_blank')}
            >
              <span className="relative z-10">Tüm Flow'ları Keşfet</span>
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform relative z-10" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Platform Özellikleri - Modern Cards */}
      <section className="py-32 relative z-10">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
              Güçlü <span className="text-gradient">Platform</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
              Tüm kanallar, tek panel. AI ile otomatik.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Phone,
                image: aiCallImage,
                title: "AI Çağrı",
                desc: "Gelen ve giden aramaları AI yönetir. 7/24 aktif.",
                metrics: [
                  { label: "Yanıt", value: "2sn", icon: Clock },
                  { label: "Başarı", value: "%94", icon: CheckCircle2 }
                ]
              },
              {
                icon: MessageSquare,
                image: whatsappImage,
                title: "WhatsApp + IG",
                desc: "İki kanal tek yerden. Otomatik mesajlaşma.",
                metrics: [
                  { label: "Açılma", value: "%98", icon: Activity },
                  { label: "Yanıt", value: "Anında", icon: Zap }
                ]
              },
              {
                icon: Users,
                image: crmImage,
                title: "Akıllı CRM",
                desc: "Davranış analizi ve otomatik segmentasyon.",
                metrics: [
                  { label: "Segment", value: "∞", icon: Target },
                  { label: "Otomasyon", value: "%100", icon: TrendingUp }
                ]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                className="glass glass-hover rounded-3xl overflow-hidden group cursor-pointer card-3d"
              >
                {/* Image with Gradient Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-transparent to-accent/50 mix-blend-overlay z-10" />
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute top-6 left-6 z-20 p-4 glass rounded-2xl group-hover:scale-110 transition-transform neon-border">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-3xl font-black mb-4 group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-8 text-lg">{item.desc}</p>
                  
                  {/* Metrics */}
                  <div className="flex gap-4">
                    {item.metrics.map((metric, i) => (
                      <div key={i} className="flex-1 glass rounded-2xl px-4 py-4 border border-primary/10 group-hover:border-primary/30 transition-colors">
                        <div className="flex items-center gap-2 mb-2">
                          <metric.icon className="h-4 w-4 text-accent" />
                          <div className="text-xs text-muted-foreground uppercase tracking-wider">{metric.label}</div>
                        </div>
                        <div className="text-2xl font-black text-gradient">{metric.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sektörel Çözümler - Ultra Modern */}
      <section className="py-32 relative">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
              Sektörüne <span className="text-gradient">Özel</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
              Her sektöre optimize flow kampanyaları
            </p>
          </motion.div>

          <div className="space-y-8 max-w-7xl mx-auto">
            {/* Hotels - Horizontal Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass glass-hover rounded-3xl overflow-hidden group"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-96 md:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-transparent to-accent/40 mix-blend-overlay z-10" />
                  <img 
                    src={hotelImage} 
                    alt="Oteller"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute top-8 left-8 z-20 glass px-8 py-4 rounded-2xl neon-border">
                    <div className="flex items-center gap-4">
                      <Hotel className="h-10 w-10 text-primary" />
                      <span className="font-black text-3xl">Oteller</span>
                    </div>
                  </div>
                </div>
                <div className="p-12 md:p-16">
                  <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                    Doluluk oranı <span className="text-gradient">%25 artar</span>
                  </h3>
                  <p className="text-muted-foreground text-xl mb-10 leading-relaxed">
                    Rezervasyon flow'ları, check-in hatırlatmaları ve misafir geri kazanma 
                    tamamen AI tarafından yönetilir.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {[
                      { icon: Activity, text: "Rezervasyon Flow", badge: "Otomatik", color: "primary" },
                      { icon: Clock, text: "7/24 AI Destek", badge: "Aktif", color: "accent" },
                      { icon: TrendingUp, text: "Doluluk +%32", badge: "Kanıtlanmış", color: "highlight" },
                      { icon: CheckCircle2, text: "Geri Kazanma", badge: "%28", color: "primary" }
                    ].map((item, i) => (
                      <div key={i} className="glass rounded-2xl p-5 hover:scale-105 transition-all cursor-pointer border border-primary/10 hover:border-primary/30">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-primary/20 rounded-xl">
                            <item.icon className="h-5 w-5 text-primary" />
                          </div>
                          <span className="font-bold text-lg">{item.text}</span>
                        </div>
                        <span className="inline-block text-xs text-accent font-bold uppercase tracking-wider px-3 py-1 bg-accent/10 rounded-full">{item.badge}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="button-gradient text-white font-black group rounded-2xl"
                    size="lg"
                    onClick={() => window.open('https://calendly.com/dayyillc/30min', '_blank')}
                  >
                    <span className="relative z-10">Otel Flow'larını İncele</span>
                    <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform relative z-10" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* E-commerce - Reversed */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass glass-hover rounded-3xl overflow-hidden group"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-12 md:p-16 order-2 md:order-1">
                  <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                    Müşteri değeri <span className="text-gradient">%28 artar</span>
                  </h3>
                  <p className="text-muted-foreground text-xl mb-10 leading-relaxed">
                    Sepet kurtarma, winback, cross-sell - her flow otomatik çalışır, 
                    sürekli artan gelir sağlar.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {[
                      { icon: Target, text: "Sepet Kurtarma", badge: "%35", color: "primary" },
                      { icon: Repeat, text: "Winback Flow", badge: "%28", color: "accent" },
                      { icon: TrendingUp, text: "LTV Artışı", badge: "%30", color: "highlight" },
                      { icon: Gift, text: "Cross-Sell", badge: "+%31", color: "primary" }
                    ].map((item, i) => (
                      <div key={i} className="glass rounded-2xl p-5 hover:scale-105 transition-all cursor-pointer border border-primary/10 hover:border-primary/30">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-accent/20 rounded-xl">
                            <item.icon className="h-5 w-5 text-accent" />
                          </div>
                          <span className="font-bold text-lg">{item.text}</span>
                        </div>
                        <span className="inline-block text-xs text-accent font-bold uppercase tracking-wider px-3 py-1 bg-accent/10 rounded-full">{item.badge}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="button-gradient text-white font-black group rounded-2xl"
                    size="lg"
                    onClick={() => window.open('https://calendly.com/dayyillc/30min', '_blank')}
                  >
                    <span className="relative z-10">E-Ticaret Flow'ları</span>
                    <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform relative z-10" />
                  </Button>
                </div>
                <div className="relative h-96 md:h-auto overflow-hidden order-1 md:order-2">
                  <div className="absolute inset-0 bg-gradient-to-bl from-accent/60 via-transparent to-primary/40 mix-blend-overlay z-10" />
                  <img 
                    src={ecommerceImage} 
                    alt="E-ticaret"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute top-8 right-8 z-20 glass px-8 py-4 rounded-2xl neon-border">
                    <div className="flex items-center gap-4">
                      <ShoppingBag className="h-10 w-10 text-accent" />
                      <span className="font-black text-3xl">E-Ticaret</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Beauty Salons */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass glass-hover rounded-3xl overflow-hidden group"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-96 md:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-highlight/60 via-transparent to-primary/40 mix-blend-overlay z-10" />
                  <img 
                    src={beautySalonImage} 
                    alt="Güzellik Salonları"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute top-8 left-8 z-20 glass px-8 py-4 rounded-2xl neon-border">
                    <div className="flex items-center gap-4">
                      <Sparkles className="h-10 w-10 text-highlight" />
                      <span className="font-black text-3xl">Güzellik</span>
                    </div>
                  </div>
                </div>
                <div className="p-12 md:p-16">
                  <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                    Doluluk <span className="text-gradient">%38 artar</span>
                  </h3>
                  <p className="text-muted-foreground text-xl mb-10 leading-relaxed">
                    Randevu flow'ları ile boş slot kalmaz. Hatırlatmalar ve dönüş kampanyaları 
                    tamamen otomatik.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {[
                      { icon: Activity, text: "Otomatik Randevu", badge: "AI", color: "primary" },
                      { icon: Clock, text: "Hatırlatma Flow", badge: "%92", color: "accent" },
                      { icon: TrendingUp, text: "Doluluk +%38", badge: "Artış", color: "highlight" },
                      { icon: Heart, text: "Dönüş Oranı", badge: "%42", color: "primary" }
                    ].map((item, i) => (
                      <div key={i} className="glass rounded-2xl p-5 hover:scale-105 transition-all cursor-pointer border border-primary/10 hover:border-primary/30">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-highlight/20 rounded-xl">
                            <item.icon className="h-5 w-5 text-highlight" />
                          </div>
                          <span className="font-bold text-lg">{item.text}</span>
                        </div>
                        <span className="inline-block text-xs text-accent font-bold uppercase tracking-wider px-3 py-1 bg-accent/10 rounded-full">{item.badge}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="button-gradient text-white font-black group rounded-2xl"
                    size="lg"
                    onClick={() => window.open('https://calendly.com/dayyillc/30min', '_blank')}
                  >
                    <span className="relative z-10">Güzellik Flow'ları</span>
                    <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform relative z-10" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof - Modern Stats */}
      <section className="py-32 relative">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto glass rounded-3xl p-16 md:p-24 relative overflow-hidden neon-border">
            <div className="absolute inset-0 animated-gradient opacity-5" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20 relative z-10"
            >
              <h2 className="text-4xl md:text-6xl font-black mb-6">100+ İşletme Flow'larla Büyüyor</h2>
              <p className="text-2xl text-muted-foreground font-light">
                Kayıp müşteri yok, sürekli artan gelir var
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
              {[
                {
                  metric: "%45",
                  label: "Daha Az İş",
                  desc: "Flow'lar otomatik",
                  icon: Zap
                },
                {
                  metric: "%28",
                  label: "Değer Artışı",
                  desc: "Müşteri geri kazanma",
                  icon: TrendingUp
                },
                {
                  metric: "0",
                  label: "Kayıp Müşteri",
                  desc: "AI ile hepsi aktif",
                  icon: Target
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="text-center group cursor-default"
                >
                  <div className="inline-flex p-6 glass rounded-2xl mb-6 group-hover:scale-110 transition-transform neon-border">
                    <item.icon className="h-14 w-14 text-primary" />
                  </div>
                  <div className="text-7xl md:text-8xl font-black text-gradient mb-6 group-hover:scale-105 transition-transform">
                    {item.metric}
                  </div>
                  <h3 className="text-2xl font-black mb-3">{item.label}</h3>
                  <p className="text-muted-foreground text-lg">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Ultra Futuristic */}
      <section className="py-40 relative">
        <div className="container relative px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto text-center glass rounded-3xl p-16 md:p-28 glow relative overflow-hidden neon-border"
          >
            <div className="absolute inset-0 animated-gradient opacity-5" />
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 mb-8 px-6 py-3 glass rounded-full neon-border"
              >
                <Sparkles className="h-5 w-5 text-accent" />
                <span className="text-accent font-bold text-sm uppercase tracking-widest">Geleceğe Hazır Ol</span>
              </motion.div>
              
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
                Kayıp Müşteri Dönemi{" "}
                <span className="text-gradient shimmer">Bitti</span>
              </h2>
              <p className="text-2xl md:text-3xl text-muted-foreground mb-16 font-light max-w-4xl mx-auto leading-relaxed">
                AI flow kampanyaları ile her müşteri otomatik geri kazanılır.
                <br className="hidden md:block" />
                <span className="text-accent font-semibold">Kurulum 5 dakika, sonuç aynı gün</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  className="button-gradient text-white px-20 py-10 text-2xl font-black group rounded-2xl hover:scale-105 transition-all shadow-2xl"
                  onClick={() => window.open('https://calendly.com/dayyillc/30min', '_blank')}
                >
                  <span className="relative z-10">Başla</span>
                  <ArrowRight className="ml-3 h-8 w-8 group-hover:translate-x-2 transition-transform relative z-10" />
                </Button>
                <Button 
                  size="lg" 
                  className="glass glass-hover px-20 py-10 text-2xl font-bold rounded-2xl border-2 border-primary/30 text-foreground hover:scale-105 transition-all"
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
