import { MessageSquare, ShoppingCart, BarChart3, Shield } from "lucide-react";

export const features = [
  {
    title: "Akıllı Sepet Kurtarma",
    description: "Sepeti terk eden müşterilere kişiselleştirilmiş WhatsApp mesajları ile geri dönüş sağlayın.",
    icon: <ShoppingCart className="w-6 h-6" />,
    image: "/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png"
  },
  {
    title: "Otomasyon Akışları",
    description: "Sipariş takibi, iade politikaları ve müşteri desteği için önceden tasarlanmış akışlar.",
    icon: <MessageSquare className="w-6 h-6" />,
    image: "/lovable-uploads/7335619d-58a9-41ad-a233-f7826f56f3e9.png"
  },
  {
    title: "KVKK Uyumlu Güvenlik",
    description: "Türkiye KVKK standartlarına uygun veri güvenliği ve müşteri izni yönetimi.",
    icon: <Shield className="w-6 h-6" />,
    image: "/lovable-uploads/b6436838-5c1a-419a-9cdc-1f9867df073d.png"
  },
  {
    title: "Satış Analitiği",
    description: "Detaylı raporlar ile WhatsApp kanalınızdan gelen satışları ve müşteri davranışlarını takip edin.",
    icon: <BarChart3 className="w-6 h-6" />,
    image: "/lovable-uploads/79f2b901-8a4e-42a5-939f-fae0828e0aef.png"
  }
];