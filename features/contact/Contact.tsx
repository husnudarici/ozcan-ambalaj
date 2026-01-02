"use client";

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Section from '@/components/Section';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;

    // 1. Form verilerini state güncellemesinden ÖNCE alıyoruz.
    // Çünkü setIsSubmitting(true) olduğunda inputlar 'disabled' olur ve veri gönderilmez.
    const formData = new FormData(form.current);
    
    const templateParams = {
        user_name: formData.get('user_name'),
        user_email: formData.get('user_email'),
        user_phone: formData.get('user_phone'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        reply_to: formData.get('user_email'), // EmailJS'de yanıtla özelliği için
    };

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Güvenli değişken alma fonksiyonu
    const getEnvVar = (key: string, fallback: string) => {
      try {
        // @ts-ignore
        if (typeof process !== 'undefined' && process.env && process.env[key]) {
          // @ts-ignore
          return process.env[key];
        }
        return fallback;
      } catch (e) {
        return fallback;
      }
    };

    const SERVICE_ID = getEnvVar('NEXT_PUBLIC_EMAILJS_SERVICE_ID', 'service_u7on7jd');
    const TEMPLATE_ID = getEnvVar('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID', 'template_hvvgprn');
    const PUBLIC_KEY = getEnvVar('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY', '-CiBTixg541TfiRaG');

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error('EmailJS konfigürasyonları bulunamadı.');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    // sendForm yerine send kullanıyoruz, böylece veriyi manuel olarak garanti altına alıyoruz
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
        () => {
          setSubmitStatus('success');
          if (form.current) form.current.reset();
          setTimeout(() => setSubmitStatus('idle'), 5000);
        },
        (error) => {
          console.error('FAILED...', error.text);
          setSubmitStatus('error');
        },
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <Section className="bg-white min-h-screen">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-secondary mb-4">Bizimle İletişime Geçin</h1>
          <p className="text-gray-500 text-lg">
            Ambalaj çözümleri için sorularınızı yanıtlamaktan memnuniyet duyarız. Fabrikamızı ziyaret edebilir veya formu doldurarak bize ulaşabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Side */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {[
              { title: 'Adres', content: 'Organize Sanayi Bölgesi, 4. Cadde, No: 12, İstanbul', icon: 'location_on' },
              { title: 'Telefon', content: '+90 212 555 0123', icon: 'call' },
              { title: 'E-posta', content: 'info@ozcanambalaj.com', icon: 'mail' }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-6 rounded-xl bg-surface-light border border-gray-100 shadow-sm">
                <div className="shrink-0 size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                   <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div>
                   <h3 className="font-bold text-secondary mb-1">{item.title}</h3>
                   <p className="text-gray-600 text-sm">{item.content}</p>
                </div>
              </div>
            ))}
            
            {/* Map Placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden relative border border-gray-200 mt-4 group">
               <div 
                 className="absolute inset-0 bg-cover bg-center" 
                 style={{ backgroundImage: `url('https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1000&auto=format&fit=crop')` }}
               ></div>
               <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white text-secondary px-4 py-2 rounded-lg font-bold shadow-lg flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">map</span>
                    Haritada Gör
                  </button>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-surface-light p-8 rounded-2xl border border-gray-100 shadow-lg relative overflow-hidden">
               <h2 className="text-2xl font-bold text-secondary mb-6">İletişim Formu</h2>
               
               <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
                  <label className="flex flex-col gap-2">
                     <span className="text-sm font-bold text-gray-700">Adınız Soyadınız</span>
                     <input type="text" name="user_name" required placeholder="Adınızı giriniz" className="w-full rounded-lg border-gray-300 bg-white px-4 py-3 focus:border-primary focus:ring-primary disabled:opacity-50" disabled={isSubmitting} />
                  </label>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <label className="flex flex-col gap-2">
                       <span className="text-sm font-bold text-gray-700">E-posta Adresiniz</span>
                       <input type="email" name="user_email" required placeholder="ornek@sirket.com" className="w-full rounded-lg border-gray-300 bg-white px-4 py-3 focus:border-primary focus:ring-primary disabled:opacity-50" disabled={isSubmitting} />
                    </label>
                    <label className="flex flex-col gap-2">
                       <span className="text-sm font-bold text-gray-700">Telefon Numaranız</span>
                       <input type="tel" name="user_phone" placeholder="+90 5XX XXX XX XX" className="w-full rounded-lg border-gray-300 bg-white px-4 py-3 focus:border-primary focus:ring-primary disabled:opacity-50" disabled={isSubmitting} />
                    </label>
                  </div>

                  <label className="flex flex-col gap-2">
                     <span className="text-sm font-bold text-gray-700">Konu</span>
                     <select name="subject" className="w-full rounded-lg border-gray-300 bg-white px-4 py-3 focus:border-primary focus:ring-primary disabled:opacity-50" disabled={isSubmitting}>
                        <option value="Teklif">Fiyat Teklifi Almak İstiyorum</option>
                        <option value="Bilgi">Ürünler Hakkında Bilgi</option>
                        <option value="Diğer">Diğer</option>
                     </select>
                  </label>

                  <label className="flex flex-col gap-2">
                     <span className="text-sm font-bold text-gray-700">Mesajınız</span>
                     <textarea name="message" required rows={5} placeholder="Mesajınızı buraya yazınız..." className="w-full rounded-lg border-gray-300 bg-white px-4 py-3 focus:border-primary focus:ring-primary disabled:opacity-50" disabled={isSubmitting}></textarea>
                  </label>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`mt-2 w-full font-bold py-4 px-6 rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 group ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed text-gray-100' 
                        : 'bg-primary hover:bg-primary-dark text-white shadow-blue-500/20'
                    }`}
                  >
                     {isSubmitting ? (
                       <>
                         <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                         <span>Gönderiliyor...</span>
                       </>
                     ) : (
                       <>
                         <span>Gönder</span>
                         <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
                       </>
                     )}
                  </button>

                  {/* Feedback Messages */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-100 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2 animate-pulse">
                      <span className="material-symbols-outlined">check_circle</span>
                      <p>Mesajınız başarıyla iletildi. En kısa sürede size dönüş yapacağız.</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-100 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2">
                      <span className="material-symbols-outlined">error</span>
                      <p>Bir hata oluştu. Lütfen bilgilerinizi kontrol edip tekrar deneyin.</p>
                    </div>
                  )}
               </form>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;