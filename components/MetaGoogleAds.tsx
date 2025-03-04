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
              <div className="w-full relative">
                <svg className="w-full h-auto" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.path
                    d="M40 150C40 89.2487 89.2487 40 150 40H250C310.751 40 360 89.2487 360 150V150C360 210.751 310.751 260 250 260H150C89.2487 260 40 210.751 40 150V150Z"
                    stroke="#11fb96"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                  />
                  <motion.circle
                    cx="200"
                    cy="150"
                    r="50"
                    stroke="#11fb96"
                    strokeWidth="2"
                    fill="none"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                  />
                  <motion.path
                    d="M175 150L195 170L225 130"
                    stroke="#11fb96"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, repeat: Infinity, repeatType: "loop", delay: 0.5 }}
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4 mt-6">
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
              <div className="w-full relative">
                <svg className="w-full h-auto" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.rect
                    x="40"
                    y="80"
                    width="320"
                    height="50"
                    rx="25"
                    stroke="#11fb96"
                    strokeWidth="2"
                    fill="none"
                    initial={{ width: 0 }}
                    animate={{ width: 320 }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                  />
                  <motion.circle
                    cx="340"
                    cy="105"
                    r="15"
                    stroke="#11fb96"
                    strokeWidth="2"
                    fill="none"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", delay: 1 }}
                  />
                  <motion.path
                    d="M60 170L120 170M150 170L320 170"
                    stroke="#11fb96"
                    strokeWidth="2"
                    strokeDasharray="30 10"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "loop", delay: 0.5 }}
                  />
                  <motion.path
                    d="M60 210L340 210"
                    stroke="#11fb96"
                    strokeWidth="2"
                    strokeDasharray="20 20"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "loop", delay: 1 }}
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-4 mt-6">
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