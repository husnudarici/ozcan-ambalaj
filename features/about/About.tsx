import React from 'react';
import Image from 'next/image';
import Section from '@/components/Section';
import { TIMELINE } from '@/constants';

const About: React.FC = () => {
  return (
    <>
      {/* Hero */}
      <div className="w-full bg-secondary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Hakkımızda</span>
           <h1 className="text-4xl md:text-5xl font-black mb-6">Değer Katan Ambalajlar</h1>
           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
             1995'ten bugüne uzanan yolculuğumuzda, kalite ve müşteri memnuniyetini her zaman ön planda tuttuk.
           </p>
        </div>
      </div>

      {/* Mission Vision */}
      <Section className="bg-white">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden h-[450px] shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
               <Image
                 src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1000&auto=format&fit=crop"
                 alt="Texture"
                 fill
                 sizes="(max-width: 768px) 100vw, 50vw"
                 className="object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <div>
                    <p className="font-bold text-xl text-white mb-2">Doğaya Saygı</p>
                    <p className="text-gray-300 text-sm">Üretimimizin her aşamasında çevresel etkimizi minimize ediyoruz.</p>
                  </div>
               </div>
            </div>
            
            <div className="flex flex-col gap-8">
              {[
                { title: 'Misyonumuz', icon: 'flag', text: 'Müşterilerimizin ürünlerini en güvenli, estetik ve ekonomik şekilde paketleyerek değer katmak; bunu yaparken sürdürülebilir üretim teknikleriyle gezegenimizi korumaktır.' },
                { title: 'Vizyonumuz', icon: 'visibility', text: 'Yenilikçi teknolojiler ve yaratıcı tasarımlarla ambalaj sektöründe Türkiye\'nin lider, Avrupa\'nın ise en çok tercih edilen iş ortaklarından biri olmak.' },
                { title: 'Değerlerimiz', icon: 'diamond', text: 'Dürüstlük, şeffaflık, kalite odaklılık ve sürekli gelişim. Müşterilerimiz iş ortağımız, çalışanlarımız ailemizdir.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
         </div>
      </Section>

      {/* Timeline */}
      <Section className="bg-surface-light">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Tarihçemiz</span>
          <h2 className="text-3xl font-bold mt-2 text-secondary">Başarılarla Dolu Bir Yolculuk</h2>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gray-200 -translate-x-1/2"></div>
          
          <div className="flex flex-col gap-8 md:gap-0">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className={`relative flex items-center justify-between md:justify-normal w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                 {/* Timeline Dot */}
                 <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-white shadow-md z-10"></div>
                 
                 {/* Empty Space for Desktop Alignment */}
                 <div className="hidden md:block w-1/2"></div>
                 
                 {/* Content Box */}
                 <div className={`w-[calc(100%-3rem)] ml-12 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className={`bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative ${idx % 2 === 0 ? 'md:ml-auto' : ''}`}>
                       <span className="text-primary font-bold text-2xl block mb-1">{item.year}</span>
                       <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">{item.tag}</span>
                       <h4 className="font-bold text-lg text-secondary mb-2">{item.title}</h4>
                       <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                       
                       {/* Arrow for Desktop */}
                       <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 size-4 bg-white border-b border-l border-gray-100 rotate-45 ${idx % 2 === 0 ? '-right-2 border-l-0 border-r border-t border-b-0' : '-left-2'}`}></div>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;