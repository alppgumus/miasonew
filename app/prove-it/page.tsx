'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProveIt() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    role: '',
    explanation: '',
    proofLink: '',
    agreeNDA: false,
    agreePrivacy: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Başvurunuz başarıyla gönderildi!');
        setFormData({
          name: '',
          email: '',
          location: '',
          role: '',
          explanation: '',
          proofLink: '',
          agreeNDA: false,
          agreePrivacy: false
        });
        router.push('/');
      } else {
        alert('Bir hata oluştu. Lütfen tekrar deneyin.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-black" style={{
      background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,20,0,1) 100%)'
    }}>
      <div className="max-w-4xl mx-auto px-4 pt-32 pb-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-mono text-white mb-16 whitespace-nowrap">
          # Sen <span className="text-[#00ed64]">{'{'} olağanüstüsün {'}'}</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-mono text-white mb-8">Başvuru</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-white font-mono mb-2">
                  İsim <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-black border border-gray-800 text-white font-mono p-3 rounded focus:border-[#00ed64] focus:outline-none"
                  onChange={handleChange}
                  value={formData.name}
                />
              </div>

              <div>
                <label className="block text-white font-mono mb-2">
                  E-posta <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-black border border-gray-800 text-white font-mono p-3 rounded focus:border-[#00ed64] focus:outline-none"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>

              <div>
                <label className="block text-white font-mono mb-2">Lokasyon</label>
                <input
                  type="text"
                  name="location"
                  className="w-full bg-black border border-gray-800 text-white font-mono p-3 rounded focus:border-[#00ed64] focus:outline-none"
                  placeholder="Şehir, Ülke"
                  onChange={handleChange}
                  value={formData.location}
                />
              </div>

              <div>
                <label className="block text-white font-mono mb-2">
                  Seni en iyi tanımlayan seçeneği seç
                </label>
                <select
                  name="role"
                  className="w-full bg-black border border-gray-800 text-white font-mono p-3 rounded focus:border-[#00ed64] focus:outline-none"
                  onChange={handleChange}
                  value={formData.role}
                >
                  <option value="">Seçiniz...</option>
                  <option value="developer">Yazılım Geliştirici</option>
                  <option value="designer">Tasarımcı</option>
                  <option value="manager">Proje Yöneticisi</option>
                  <option value="marketer">Pazarlama Uzmanı</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-mono mb-2">
                  Seçimini birkaç cümleyle açıkla <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="explanation"
                  required
                  rows={4}
                  className="w-full bg-black border border-gray-800 text-white font-mono p-3 rounded focus:border-[#00ed64] focus:outline-none"
                  onChange={handleChange}
                  value={formData.explanation}
                />
              </div>

              <div>
                <label className="block text-white font-mono mb-2">
                  Kanıtlamak için bir link paylaş <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  name="proofLink"
                  required
                  className="w-full bg-black border border-gray-800 text-white font-mono p-3 rounded focus:border-[#00ed64] focus:outline-none"
                  placeholder="Örn. Kişisel site, GitHub profili, Portfolio"
                  onChange={handleChange}
                  value={formData.proofLink}
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="agreeNDA"
                    required
                    className="border-gray-800 rounded text-[#00ed64] focus:ring-[#00ed64]"
                    onChange={handleChange}
                    checked={formData.agreeNDA}
                  />
                  <label className="text-white font-mono">
                    Gizlilik sözleşmesini okudum ve kabul ediyorum
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="agreePrivacy"
                    required
                    className="border-gray-800 rounded text-[#00ed64] focus:ring-[#00ed64]"
                    onChange={handleChange}
                    checked={formData.agreePrivacy}
                  />
                  <label className="text-white font-mono">
                    KVKK metnini okudum ve kabul ediyorum
                  </label>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="px-8 py-3 bg-[#00ed64] text-black rounded hover:bg-[#00c853] transition-colors font-mono font-bold"
          >
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
} 