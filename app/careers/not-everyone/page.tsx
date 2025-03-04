'use client'

import Link from 'next/link';

export default function NotEveryone() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-black pt-32" style={{
      background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,20,0,1) 100%)'
    }}>
      <div className="max-w-4xl w-full mx-4">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-mono text-white whitespace-nowrap">
            # Sen <span className="text-[#00ed64]">{'{'} herkes {'}'}</span> değilsin
          </h1>
          
          <div className="space-y-6">
            <p className="text-[#00ed64] text-xl font-mono">
              Senin kapatma tuşun yok. Teknolojiye takıntılısın.
            </p>
            
            <p className="text-gray-400 text-xl font-mono leading-relaxed">
              Varsayılan modun daha önce hiç yapılmamış olanı yapmak, ve eğer bir oyunu değiştirmiyorsan o oyunun oynanmaya değmeyeceğini düşünüyorsun.
            </p>
            
            <p className="text-gray-400 text-xl font-mono leading-relaxed">
              Özgeçmişi boşver. Olağanüstü olduğunu göstermek için bir listeye ihtiyacın yok – bunu kanıtlayacak başarıların var. İşin zaten dünyada yankı uyandırıyor ve sen bir sonraki teknolojik sınırı zorlamaya hazırsın.
            </p>
          </div>

          <div className="flex gap-4 mt-8">
            <Link
              href="/careers"
              className="px-8 py-3 bg-transparent border border-white text-white rounded hover:bg-white hover:bg-opacity-10 transition-colors font-mono"
            >
              Geri Dön
            </Link>
            <Link
              href="/prove-it"
              className="px-8 py-3 bg-[#00ed64] text-black rounded hover:bg-[#00c853] transition-colors font-mono font-bold"
            >
              Kanıtla
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full bg-black bg-opacity-50 mt-32 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="border-t-2 border-[#00ed64] mb-6"></div>
              <h2 className="text-2xl font-mono text-white">
                Ne <span className="text-[#00ed64]">{'{'} yapıyoruz {'}'}</span>
              </h2>
              <p className="text-gray-400 font-mono leading-relaxed">
                Dijital dünyada markaların büyümesine öncülük ediyoruz. Yaratıcı çözümler ve yenilikçi teknolojilerle, işletmelerin dijital varlıklarını güçlendiriyoruz.
              </p>
            </div>

            <div className="space-y-4">
              <div className="border-t-2 border-[#00ed64] mb-6"></div>
              <h2 className="text-2xl font-mono text-white">
                Nerede <span className="text-[#00ed64]">{'{'} çalışıyoruz {'}'}</span>
              </h2>
              <p className="text-gray-400 font-mono leading-relaxed">
                Fiziksel sınırları aşıyoruz. Uzaktan çalışma modeliyle, en iyi yetenekleri bir araya getiriyor ve gerçek dünyada etkileşime geçerek projeleri hayata geçiriyoruz.
              </p>
            </div>

            <div className="space-y-4">
              <div className="border-t-2 border-[#00ed64] mb-6"></div>
              <h2 className="text-2xl font-mono text-white">
                Nasıl <span className="text-[#00ed64]">{'{'} işe alıyoruz {'}'}</span>
              </h2>
              <p className="text-gray-400 font-mono leading-relaxed">
                Burada birçok 'sıradan olmayan' insan var. Miaso, olağanüstü teknik yeteneklere sahip bireylerle çalışır. Dünya standartlarında yetenekler, en zorlu problemleri en iyilerle birlikte çözüyor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 