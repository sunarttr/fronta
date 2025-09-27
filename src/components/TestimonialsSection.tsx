"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Ahmet Kaya",
    role: "E-ticaret Müdürü, Fashion Store",
    image: "https://avatars.githubusercontent.com/u/1234567?v=4",
    content: "WhatsApp AI sayesinde sepet terk etme oranımız %18 azaldı. Müşteri memnuniyeti de ciddi şekilde arttı. Gerçekten oyun değiştirici bir platform."
  },
  {
    name: "Zeynep Demir",
    role: "Pazarlama Müdürü, BeautyMart",
    image: "https://avatars.githubusercontent.com/u/2345678?v=4",
    content: "Shopify entegrasyonu harika çalışıyor. Müşteriler WhatsApp'tan sipariş takibi yapabiliyor, biz de otomatik cevaplarla zaman kazanıyoruz."
  },
  {
    name: "Murat Özkan",
    role: "Kurucu, TechShop",
    image: "https://avatars.githubusercontent.com/u/3456789?v=4",
    content: "KVKK uyumlu altyapısı sayesinde güvenle kullanıyoruz. Müşteri desteği de çok hızlı ve etkili. Kesinlikle tavsiye ederim."
  },
  {
    name: "Selin Yılmaz",
    role: "E-ticaret Uzmanı, HomeDecor",
    image: "https://avatars.githubusercontent.com/u/4567890?v=4",
    content: "Otomasyon akışları sayesinde satış sonrası süreçlerimiz tamamen otomatikleşti. Müşteri değerlendirmeleri %35 arttı."
  },
  {
    name: "Can Arslan",
    role: "Operasyon Müdürü, SportStore",
    image: "https://avatars.githubusercontent.com/u/5678901?v=4",
    content: "Segment bazlı kampanyalar gerçekten işe yarıyor. VIP müşterilerimize özel teklifler gönderiyoruz ve dönüşüm oranı harika."
  },
  {
    name: "Elif Tok",
    role: "Müşteri Hizmetleri, KidsWorld",
    image: "https://avatars.githubusercontent.com/u/6789012?v=4",
    content: "Kurulum sadece 10 dakika sürdü. Şimdi müşteri sorularının %80'i otomatik yanıtlanıyor. Ekibimiz daha stratejik işlere odaklanabiliyor."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-normal mb-4">Müşterilerimizin Yorumları</h2>
          <p className="text-muted-foreground text-lg">
            100+ e-ticaret mağazasının tercihi WhatsApp AI
          </p>
        </motion.div>

        <div className="relative flex flex-col antialiased">
          <div className="relative flex overflow-hidden py-4">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-1`} className="w-[400px] shrink-0 glass hover:glass-hover transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-2`} className="w-[400px] shrink-0 glass hover:glass-hover transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;