'use client'

import { motion } from 'framer-motion'

const MetaGoogleAds = () => {
  return (
    <section className="bg-[#050806] text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-teal-400 mb-4"
          >
            Meta & Google Ads Reklamları
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-16"
          >
            Hedef kitlenize ulaşın
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Sol Kart */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="rounded-2xl bg-[#061a1c] p-8 overflow-hidden"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              >
                <source src="videos/metainstagram.webm" type="video/webm" />
              </video>
              <h3 className="text-2xl font-light mb-4">
                Meta ve Instagram Reklamları
              </h3>
              <p className="text-gray-400">
                Sosyal medya platformlarında hedef kitlenize ulaşın ve satışlarınızı artırın
              </p>
            </motion.div>

            {/* Sağ Kart */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="rounded-2xl bg-[#0c2626] p-8 overflow-hidden"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              >
                <source src="videos/googleads.webm" type="video/webm" />
              </video>
              <h3 className="text-2xl font-light mb-4">
                Google Ads Reklamları
              </h3>
              <p className="text-gray-400">
                Arama sonuçlarında üst sıralarda yer alın ve potansiyel müşterilerinize ulaşın
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MetaGoogleAds 