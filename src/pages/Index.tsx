import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Phone, MessageSquare, Users, Hotel, ShoppingBag, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hotelImage from "@/assets/hotel-reception.jpg";
import ecommerceImage from "@/assets/ecommerce-workspace.jpg";
import beautySalonImage from "@/assets/beauty-salon.jpg";
import aiCallImage from "@/assets/ai-call-center.jpg";
import whatsappImage from "@/assets/whatsapp-automation.jpg";
import crmImage from "@/assets/crm-dashboard.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-card-foreground font-poppins">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary opacity-5" />
        
        <div className="container relative px-4 pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full"
            >
              <span className="text-accent font-medium text-sm">Yapay Zekâ Destekli İletişim Platformu</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Asisteye — İşletmenizin{" "}
              <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
                AI Müşteri İletişim Asistanı
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Çağrılar, WhatsApp mesajları ve rezervasyonlar artık otomatik. Müşteri deneyimini 7/24 canlı tutun, personel yükünü %70 azaltın.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.open('https://calendly.com/dayyillc/30min', '_blank')}
              >
                Demoyu İzle
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg rounded-xl transition-all"
                onClick={() => window.open('https://calendly.com/dayyillc/30min', '_blank')}
              >
                İletişime Geç
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* What Asisteye Does - 3 Icons */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Asisteye Ne Yapar?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              İşletmenizin müşteri iletişimini yapay zekâ ile otomatikleştiren kapsamlı çözüm
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Phone,
                image: aiCallImage,
                title: "AI Çağrı Merkezi",
                desc: "Giden ve gelen çağrıları otomatik yönetir. Rezervasyon, sipariş teyidi ve müşteri destek çağrılarını 7/24 karşılar."
              },
              {
                icon: MessageSquare,
                image: whatsappImage,
                title: "WhatsApp & Mesaj Otomasyonu",
                desc: "Sipariş onayı, randevu hatırlatması, kampanya duyurusu gibi tüm mesajları otomatik gönderir ve yanıtlar."
              },
              {
                icon: Users,
                image: crmImage,
                title: "CRM & Flow Yönetimi",
                desc: "Müşteri geçmişini analiz eder, segmentler oluşturur ve özel akışlarla dönüşüm oranlarını artırır."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectoral Solutions */}
      <section className="py-20">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Sektörel Çözümler</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Her sektöre özel, ihtiyaca göre tasarlanmış yapay zekâ çözümleri
            </p>
          </motion.div>

          <div className="space-y-12 max-w-7xl mx-auto">
            {/* Hotels */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-8 items-center bg-card rounded-3xl overflow-hidden shadow-lg"
            >
              <div className="order-2 md:order-1 p-8 md:p-12">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-accent/10 rounded-full">
                  <Hotel className="h-5 w-5 text-accent" />
                  <span className="text-accent font-semibold">Oteller İçin</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">AI Rezervasyon ve Misafir Deneyimi Asistanı</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Otomatik rezervasyon aramaları, check-in hatırlatmaları ve WhatsApp üzerinden promosyon mesajları. 
                  PMS sistemleri ile tam entegre, 7/24 müşteri yanıtı.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "HotelRunner, ElektraWeb, Cloudbeds entegrasyonu",
                    "Türkçe, İngilizce, Arapça dil desteği",
                    "Otomatik rezervasyon teyit ve hatırlatmaları",
                    "Misafir memnuniyeti anketleri"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90"
                  onClick={() => window.open('https://calendly.com/dayyillc/30min', '_blank')}
                >
                  Oteller İçin Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="order-1 md:order-2 h-full min-h-[300px]">
                <img 
                  src={hotelImage} 
                  alt="Otel Çözümü"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* E-commerce */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-8 items-center bg-card rounded-3xl overflow-hidden shadow-lg"
            >
              <div className="h-full min-h-[300px]">
                <img 
                  src={ecommerceImage} 
                  alt="E-ticaret Çözümü"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-accent/10 rounded-full">
                  <ShoppingBag className="h-5 w-5 text-accent" />
                  <span className="text-accent font-semibold">E-Ticaret İçin</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">AI ile Satış Sonrası İletişimi Otomatikleştir</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  WhatsApp, SMS ve AI çağrılarla sipariş teyidi, kargo bilgilendirmesi ve satış sonrası destek. 
                  Sepette bırakma ve tekrar satın alma kampanyaları otomatik.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Shopify, Ikas, WooCommerce entegrasyonları",
                    "Abandoned cart geri kazanma kampanyaları",
                    "Otomatik sipariş ve kargo bildirimleri",
                    "Cross-sell ve upsell mesaj akışları"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90"
                  onClick={() => window.open('https://calendly.com/dayyillc/30min', '_blank')}
                >
                  E-Ticaret İçin Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>

            {/* Beauty Salons */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-8 items-center bg-card rounded-3xl overflow-hidden shadow-lg"
            >
              <div className="order-2 md:order-1 p-8 md:p-12">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-accent/10 rounded-full">
                  <Sparkles className="h-5 w-5 text-accent" />
                  <span className="text-accent font-semibold">Güzellik Salonları İçin</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">Randevularını Asisteye'ye Bırak, Müşterine Zaman Ayır</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Randevu aramaları, hatırlatmalar, iptal ve teyit işlemlerini AI otomatik yapar. 
                  WhatsApp'tan otomatik randevu hatırlatma ve müşteri dönüşü.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Otomatik randevu alma ve teyit aramaları",
                    "WhatsApp ile randevu hatırlatmaları",
                    "İptal ve erteleme işlemlerini otomatik yönetim",
                    "Müşteri dönüş kampanyaları ve özel günler"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90"
                  onClick={() => window.open('https://calendly.com/dayyillc/30min', '_blank')}
                >
                  Güzellik Salonları İçin Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="order-1 md:order-2 h-full min-h-[300px]">
                <img 
                  src={beautySalonImage} 
                  alt="Güzellik Salonu Çözümü"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & Metrics Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">100+ İşletme Asisteye'ye Güveniyor</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Yapay zekâ ile müşteri deneyimini yükselten işletmelere katılın
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                metric: "%70",
                label: "Personel Yükü Azalması",
                desc: "AI asistan rutin işleri otomatik halleder"
              },
              {
                metric: "%25",
                label: "Dönüşüm Artışı",
                desc: "Otomatik takip ve hatırlatmalarla daha fazla satış"
              },
              {
                metric: "7/24",
                label: "Kesintisiz Hizmet",
                desc: "Müşterileriniz her zaman yanıt alır"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-card rounded-2xl p-8 text-center shadow-lg"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent mb-3">
                  {item.metric}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.label}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary opacity-10" />
        <div className="container relative px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              İşletmenizi AI ile Güçlendirin
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Asisteye ile müşteri iletişimini otomatikleştirin, personel yükünü azaltın ve dönüşüm oranlarını artırın.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-12 py-6 text-lg rounded-xl shadow-2xl hover:shadow-3xl transition-all"
              onClick={() => window.open('https://calendly.com/dayyillc/30min', '_blank')}
            >
              Hemen Deneyin
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
