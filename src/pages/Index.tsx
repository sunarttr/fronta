import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
const Index = () => {
  return <div className="min-h-screen bg-white text-gray-900 font-poppins">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5
    }} className="container px-4 pt-40 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
            <span className="text-gray-600">
              <TextGenerateEffect words="WhatsApp ve Instagram'da" />
            </span>
            <br />
            <span className="text-gray-900 font-medium">
              <TextGenerateEffect words="müşteri deneyimini otomatikleştir" />
            </span>
          </h1>
          
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4
        }} className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Asisteye ile 12 hazır akış, anında politika eğitimi ve Shopify & İkas uyumluluğu.{" "}
            <span className="text-gray-900 font-medium">CX'i uçtan uca otomatikleştir, müşterinin yaşam boyu değerini artır.</span>
          </motion.p>
        </div>
      </motion.section>

      {/* Product Benefits Section */}
      <section className="container px-4 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-900">
              Neden Asisteye?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              E-ticaret işletmeniz için WhatsApp ve Instagram'da müşteri deneyimini otomatikleştiren tek platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.1,
            duration: 0.5
          }} className="bg-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-green-500 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                %40'a Kadar LTV Artışı
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sepet hatırlatma, winback ve cross-sell akışlarıyla müşteri yaşam boyu değerini artırın
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2,
            duration: 0.5
          }} className="bg-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                7/24 Otomatik Destek
              </h3>
              <p className="text-gray-600 leading-relaxed">
                AI asistan müşteri sorularına anında yanıt verir, destek ekibinizin yükünü hafifletir
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3,
            duration: 0.5
          }} className="bg-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Dakikalar İçinde Kurulum
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Shopify/İkas entegrasyonu ve 12 hazır akışla hemen kullanmaya başlayın
              </p>
            </motion.div>
          </div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.5
        }} className="mt-12 bg-white rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  Omni-Channel Müşteri Deneyimi
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  WhatsApp ve Instagram'ı tek panelden yönetin. Müşterileriniz hangi kanalda olursa olsun, 
                  tutarlı ve kişiselleştirilmiş deneyim yaşasınlar.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-gray-600">Tek dashboard'tan her iki kanal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-gray-600">Müşteri geçmişini koruyarak senkron yanıtlar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-gray-600">Kişiselleştirilmiş mesajlaşma deneyimi</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="bg-gray-100 rounded-xl p-8 text-center">
                  <div className="text-4xl font-light text-gray-900 mb-2">12</div>
                  <div className="text-lg font-medium text-gray-700 mb-4">Hazır Otomasyon Akışı</div>
                  <div className="text-sm text-gray-600">
                    Sepet hatırlatmadan winback'e, review request'ten cross-sell'e kadar 
                    tüm e-ticaret ihtiyaçlarınız için hazır akışlar
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900">Özellikler</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 12 Hazır Flow */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.1,
            duration: 0.5
          }} className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">12 Hazır Flow</h3>
              <div className="space-y-4">
                {[{
                title: "Sepet Hatırlatma",
                desc: "Sepetinde ürün bırakan müşteriyi geri çağırır"
              }, {
                title: "Post-Purchase",
                desc: "Sipariş sonrası teşekkür & ek satış"
              }, {
                title: "Winback",
                desc: "Uzun süredir alışveriş yapmayanları geri kazanır"
              }, {
                title: "Back-in-Stock",
                desc: "Ürün stoğa gelince bildirim"
              }, {
                title: "Review Request",
                desc: "Teslimat sonrası yorum daveti"
              }, {
                title: "Shipped",
                desc: "Sipariş kargoya verilince bilgilendirme"
              }, {
                title: "Cross-Sell",
                desc: "Alınan ürüne uygun ek ürün önerisi"
              }, {
                title: "Price Drop",
                desc: "Ürünün fiyatı düştüğünde bilgi"
              }, {
                title: "Low Stock",
                desc: "Ürün tükenmek üzereyken uyarı"
              }, {
                title: "LTV Reminder",
                desc: "Düzenli alışveriş hatırlatması"
              }, {
                title: "Event Reminder",
                desc: "Etkinlik yaklaşırken hatırlatma"
              }, {
                title: "Onboarding",
                desc: "İlk sipariş sonrası yönlendirme & destek"
              }].map((flow, index) => <div key={index} className="border-l-3 border-green-500 pl-4">
                    <h4 className="font-medium text-gray-900">{flow.title}</h4>
                    <p className="text-sm text-gray-600">{flow.desc}</p>
                  </div>)}
              </div>
            </motion.div>

            {/* Other Features */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2,
            duration: 0.5
          }} className="space-y-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Politikalarla Anında Eğitim</h3>
                <p className="text-gray-600 leading-relaxed">
                  İade, kargo, gizlilik gibi politikalar yüklenir; AI bunları anında öğrenir.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Shopify & İkas Uyumlu</h3>
                <p className="text-gray-600 leading-relaxed">
                  Sipariş, müşteri ve ürün verileri sorunsuz senkronize olur.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">WhatsApp + Instagram CX Otomasyonu</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tek panelden her iki kanalda da otomatik müşteri iletişimi.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      

      {/* Added Value Section */}
      <section className="container px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900">Katma Değer</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[{
            title: "CX Otomasyonu",
            description: "Tek bir AI asistan tüm mesajları yönetir"
          }, {
            title: "LTV Artışı",
            description: "Sepet kurtarma + winback → müşteri değeri yükselir"
          }, {
            title: "Omni-channel Uyum",
            description: "WhatsApp & Instagram tek panelden yönetilir"
          }, {
            title: "Kolay Kurulum",
            description: "Dakikalar içinde aktif"
          }].map((item, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1,
            duration: 0.5
          }} className="bg-gray-50 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>
    </div>;
};
export default Index;