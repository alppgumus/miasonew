'use client'

import { motion } from 'framer-motion'

const CustomerConnection = () => {
  return (
    <section className="bg-[#050806] text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
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
            Müşteri Deneyimi
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-16"
          >
            Müşterilerinizle bağ kurun
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Sol Video Kartı */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="rounded-2xl bg-[#061a1c] p-8 overflow-hidden"
            >
              <div className="w-full relative">
                <svg className="w-full h-auto" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.circle
                    cx="200"
                    cy="150"
                    r="80"
                    stroke="#11fb96"
                    strokeWidth="2"
                    fill="none"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                  />
                  <motion.path
                    d="M160 150C160 127.909 177.909 110 200 110C222.091 110 240 127.909 240 150C240 172.091 222.091 190 200 190"
                    stroke="#11fb96"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                  />
                  <motion.path
                    d="M180 150L220 150M200 130L200 170"
                    stroke="#11fb96"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, repeat: Infinity, repeatType: "loop", delay: 0.5 }}
                  />
                </svg>
              </div>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-2xl font-light mb-4 mt-6"
              >
                Daha düşük maliyetle müşteri kazanın
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-gray-400"
              >
                Entegre pazarlama araçları ve analitik çözümlerimizle yeni müşteriler kazanın ve onları sadık müşterilere dönüştürün.
              </motion.p>
            </motion.div>

            {/* Sağ Video Kartı */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="rounded-2xl bg-[#0c2626] p-8 overflow-hidden"
            >
              <div className="w-full relative">
                <svg className="w-full h-auto" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.rect
                    x="80"
                    y="60"
                    width="100"
                    height="180"
                    rx="10"
                    stroke="#11fb96"
                    strokeWidth="2"
                    fill="none"
                    initial={{ height: 0 }}
                    animate={{ height: 180 }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                  />
                  <motion.rect
                    x="220"
                    y="60"
                    width="100"
                    height="180"
                    rx="10"
                    stroke="#11fb96"
                    strokeWidth="2"
                    fill="none"
                    initial={{ height: 0 }}
                    animate={{ height: 180 }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", delay: 0.3 }}
                  />
                  <motion.path
                    d="M130 120L180 150L230 120"
                    stroke="#11fb96"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, repeat: Infinity, repeatType: "loop", delay: 1 }}
                  />
                </svg>
              </div>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-2xl font-light mb-4 mt-6"
              >
                B2B ile yeni fırsatlar yakalayın
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-gray-400"
              >
                Toptan satış yapan alıcılar için özel deneyimler oluşturun, esnek fiyatlandırma ve ödeme seçenekleri sunun.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CustomerConnection 