import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardSpotlight } from "./CardSpotlight";

const PricingTier = ({
  name,
  price,
  description,
  features,
  isPopular,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}) => (
  <CardSpotlight className={`h-full ${isPopular ? "border-primary" : "border-white/10"} border-2`}>
    <div className="relative h-full p-6 flex flex-col">
      {isPopular && (
        <span className="text-xs font-medium bg-primary/10 text-primary rounded-full px-3 py-1 w-fit mb-4">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-medium mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">{price}</span>
        {price !== "Özel" && <span className="text-muted-foreground">/ay</span>}
      </div>
      <p className="text-muted-foreground mb-6">{description}</p>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="button-gradient w-full">
        Hemen Başla
      </Button>
    </div>
  </CardSpotlight>
);

export const PricingSection = () => {
  return (
    <section className="container px-4 py-24">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-normal mb-6"
        >
          WhatsApp Satış{" "}
          <span className="text-gradient font-medium">Planları</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg text-muted-foreground"
        >
          Size uygun planı seçin ve WhatsApp'ta satışlarınızı otomatikleştirin
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <PricingTier
          name="Başlangıç"
          price="₺0"
          description="WhatsApp otomasyonuna ilk adım"
          features={[
            "Aylık 1.000 mesaj",
            "Temel sepet hatırlatma",
            "Sipariş durumu sorguları",
            "E-posta desteği"
          ]}
        />
        <PricingTier
          name="Büyüme"
          price="₺299"
          description="Gelişmiş özelliklerle satışları artırın"
          features={[
            "Aylık 10.000 mesaj",
            "Gelişmiş otomasyon akışları",
            "Segment bazlı kampanyalar",
            "Analitik raporları",
            "WhatsApp desteği"
          ]}
          isPopular
        />
        <PricingTier
          name="Kurumsal"
          price="Özel"
          description="Büyük e-ticaret siteleri için çözüm"
          features={[
            "Sınırsız mesaj",
            "Özel entegrasyonlar",
            "Özel müşteri temsilcisi",
            "SLA garantisi",
            "7/24 telefon desteği",
            "KVKK danışmanlığı"
          ]}
        />
      </div>
    </section>
  );
};