"use client";

import React, { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import { PRODUCT_CATALOG } from "@/data/products";

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Tümü");

  const tagStyles: Record<string, string> = {
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
    orange: "bg-orange-100 text-orange-700",
    red: "bg-red-100 text-red-700",
    purple: "bg-purple-100 text-purple-700",
    yellow: "bg-yellow-100 text-yellow-700",
    gray: "bg-gray-100 text-gray-700",
  };

  const categories = [
    "Tümü",
    ...Array.from(new Set(PRODUCT_CATALOG.map((product) => product.category))),
  ];

  const filteredProducts =
    activeCategory === "Tümü"
      ? PRODUCT_CATALOG
      : PRODUCT_CATALOG.filter((product) => product.category === activeCategory);

  return (
    <>
      <div className="bg-secondary py-16 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Ürünlerimiz</h1>
        <p className="text-gray-400">Her sektöre uygun kaliteli ambalaj çözümleri</p>
      </div>

      <div className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto pb-2 -mb-2 scrollbar-hide">
          <div className="flex gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 h-10 px-6 rounded-full text-sm font-semibold transition-all shadow-sm ${
                  activeCategory === category
                    ? "bg-primary text-white shadow-primary/20"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <Section className="bg-surface-light min-h-[600px]">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-secondary">
            {activeCategory} Ürünler
          </h2>
          <span className="text-sm text-gray-500">
            <strong>{filteredProducts.length}</strong> ürün listeleniyor
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link
              key={product.slug}
              href={`/urunler/${product.slug}`}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.tag && (
                  <div
                    className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded shadow-sm ${
                      tagStyles[product.tagColor || "blue"]
                    }`}
                  >
                    {product.tag}
                  </div>
                )}
              </div>
              <div className="p-5 flex flex-col h-[200px]">
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed">
                    {product.summary}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-4">
                  <span className="text-xs font-semibold text-gray-400">
                    {product.minOrder ? `Min. ${product.minOrder}` : "Stokta"}
                  </span>
                  <span className="text-sm font-bold text-primary group-hover:text-primary-dark flex items-center gap-1">
                    İncele{" "}
                    <span className="material-symbols-outlined text-base">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </div>
            </Link>
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
