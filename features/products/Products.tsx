import React, { useState } from 'react';
import Section from '../../components/Section';
import { PRODUCTS } from '../../constants';
import { Product } from '../../types';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Tümü');
  
  // Extract unique categories
  const categories = ['Tümü', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];
  
  const filteredProducts = activeCategory === 'Tümü' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <>
      <div className="bg-secondary py-16 text-white text-center">
         <h1 className="text-4xl font-bold mb-4">Ürünlerimiz</h1>
         <p className="text-gray-400">Her sektöre uygun kaliteli ambalaj çözümleri</p>
      </div>

      <div className="sticky top-20 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto pb-2 -mb-2 scrollbar-hide">
          <div className="flex gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 h-10 px-6 rounded-full text-sm font-semibold transition-all shadow-sm ${
                  activeCategory === cat 
                    ? 'bg-primary text-white shadow-primary/20' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <Section className="bg-surface-light min-h-[600px]">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-secondary">{activeCategory} Ürünler</h2>
          <span className="text-sm text-gray-500"><strong>{filteredProducts.length}</strong> ürün listeleniyor</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product: Product) => (
            <div key={product.id} className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                {product.tag && (
                  <div className={`absolute top-3 left-3 bg-${product.tagColor}-100 text-${product.tagColor}-700 text-xs font-bold px-2 py-1 rounded shadow-sm`}>
                    {product.tag}
                  </div>
                )}
              </div>
              <div className="p-5 flex flex-col h-[200px]">
                <div className="flex-grow">
                   <h3 className="text-lg font-bold text-secondary mb-2 group-hover:text-primary transition-colors">{product.title}</h3>
                   <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed">{product.description}</p>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-4">
                  <span className="text-xs font-semibold text-gray-400">{product.minOrder ? `Min. ${product.minOrder}` : 'Stokta'}</span>
                  <button className="text-sm font-bold text-primary hover:text-primary-dark flex items-center gap-1">
                    İncele <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
           <div className="text-center py-20 text-gray-500">
             Bu kategoride henüz ürün bulunmamaktadır.
           </div>
        )}
      </Section>
    </>
  );
};

export default Products;