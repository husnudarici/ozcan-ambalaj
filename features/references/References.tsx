import React from 'react';
import Section from '@/components/Section';
import { TESTIMONIALS } from '@/constants';

const References: React.FC = () => {
  return (
    <>
      <div className="bg-secondary py-16 text-white text-center">
         <h1 className="text-4xl font-bold mb-4">Referanslar</h1>
         <p className="text-gray-400">Bize güvenen iş ortaklarımız</p>
      </div>

      <Section className="bg-surface-light">
        <div className="text-center mb-12">
           <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-8">Güvenle Çalıştığımız Markalar</p>
           <div className="flex flex-wrap justify-center gap-12 lg:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {[
               { icon: 'local_shipping', name: 'LojistikPro' },
               { icon: 'restaurant', name: 'GurmeGıda' },
               { icon: 'checkroom', name: 'ModaTekstil' },
               { icon: 'precision_manufacturing', name: 'TeknoParça' },
               { icon: 'shopping_cart', name: 'HızlıMarket' }
             ].map((brand, idx) => (
               <div key={idx} className="flex items-center gap-2">
                 <span className="material-symbols-outlined text-4xl">{brand.icon}</span>
                 <span className="text-xl font-bold">{brand.name}</span>
               </div>
             ))}
           </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 text-secondary">Müşterilerimiz Ne Diyor?</h2>
          <p className="text-gray-500">İş ortaklarımızın memnuniyeti, kalitemizin en büyük kanıtıdır.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-surface-light p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full hover:shadow-lg transition-shadow">
               <div className="flex text-yellow-400 mb-4">
                 {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined filled text-xl">
                      {i < Math.floor(t.rating) ? 'star' : (i < t.rating ? 'star_half' : 'star_border')}
                    </span>
                 ))}
               </div>
               <p className="text-gray-700 italic mb-6 leading-relaxed flex-grow">"{t.content}"</p>
               <div className="flex items-center gap-4 mt-auto">
                  <div className="size-10 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-secondary text-sm">{t.author}</p>
                    <p className="text-xs text-gray-500">{t.role}, {t.company}</p>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default References;