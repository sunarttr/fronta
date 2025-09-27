import { motion } from "framer-motion";
import { Command, MessageSquare, Settings, Zap, ShoppingBag, BarChart3, Layers, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20"
      >
        {/* Background */}
        <div 
          className="absolute inset-0 -z-10 bg-gradient-to-br from-green-50 to-blue-50"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full glass"
        >
          <span className="text-sm font-medium text-primary">
            <Command className="w-4 h-4 inline-block mr-2" />
            KVKK uyumlu · Resmi WhatsApp & Instagram Business API
          </span>
        </motion.div>
        
        <div className="max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-normal mb-4 tracking-tight text-left">
            <span className="text-gray-600">
              <TextGenerateEffect words="WhatsApp ve Instagram'da" />
            </span>
            <br />
            <span className="text-foreground font-medium">
              <TextGenerateEffect words="müşteri deneyimini otomatikleştir" />
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl text-left"
          >
            Asisteye ile 12 hazır akış, anında politika eğitimi ve Shopify & İkas uyumluluğu.{" "}
            <span className="text-foreground font-medium">CX'i uçtan uca otomatikleştir, müşterinin yaşam boyu değerini artır.</span>
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative mx-auto max-w-5xl mt-20"
        >
          <div className="glass rounded-xl overflow-hidden">
            <img
              src="/lovable-uploads/c32c6788-5e4a-4fee-afee-604b03113c7f.png"
              alt="WhatsApp AI Asistan Dashboard"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <div id="features" className="bg-background">
        <FeaturesSection />
      </div>

      {/* How It Works Section */}
      <section className="container px-4 py-20 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nasıl Çalışır</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            3 basit adımda WhatsApp ve Instagram'da müşteri deneyimi otomasyonunu başlatın
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              step: "1",
              title: "Hesabını Bağla",
              description: "Shopify veya İkas hesabını bağla",
              icon: <Layers className="w-8 h-8" />
            },
            {
              step: "2", 
              title: "Politikaları Yükle",
              description: "İade, kargo, gizlilik politikalarını yükle",
              icon: <Settings className="w-8 h-8" />
            },
            {
              step: "3",
              title: "Akışları Aktif Et",
              description: "WhatsApp & Instagram'da 12 flow'u aktif et → AI müşterilere anında yanıt versin",
              icon: <CheckCircle className="w-8 h-8" />
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="glass rounded-xl p-6 hover:glass-hover transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {item.icon}
                </div>
                <div className="w-8 h-8 mx-auto mb-4 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Value Add Section */}
      <section className="container px-4 py-20 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Katma Değer</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Müşteri deneyimini artıran özellikler
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "CX Otomasyonu",
              description: "Tek bir AI asistan tüm müşteri sorularına yanıt verir",
              icon: <MessageSquare className="w-8 h-8" />
            },
            {
              title: "Gelir Artışı", 
              description: "Abandoned cart ve winback akışlarıyla LTV yükselir",
              icon: <BarChart3 className="w-8 h-8" />
            },
            {
              title: "Omni-channel Uyum",
              description: "WhatsApp ve Instagram birlikte çalışır",
              icon: <Zap className="w-8 h-8" />
            },
            {
              title: "Tam Entegrasyon",
              description: "Shopify, İkas ve CRM verileriyle senkron",
              icon: <ShoppingBag className="w-8 h-8" />
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass rounded-xl p-6 hover:glass-hover transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <div className="bg-background">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
