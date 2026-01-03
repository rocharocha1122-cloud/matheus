
import React from 'react';

const BRANDS = [
  { name: 'Netflix', color: 'text-red-600' },
  { name: 'Prime Video', color: 'text-blue-400' },
  { name: 'Globoplay', color: 'text-white' },
  { name: 'Premiere', color: 'text-green-500' },
  { name: 'SporTV', color: 'text-blue-600' },
  { name: 'ESPN', color: 'text-red-500' },
  { name: 'Disney+', color: 'text-blue-300' },
  { name: 'HBO Max', color: 'text-purple-500' }
];

const BrandShowcase: React.FC = () => {
  return (
    <section className="py-16 bg-black border-y border-white/5">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-500 font-bold uppercase tracking-[0.2em] text-xs mb-10">
          TUDO EM UM SÓ LUGAR
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-70 hover:opacity-100 transition-opacity">
          {BRANDS.map((brand) => (
            <div key={brand.name} className="flex justify-center">
              <span className={`text-xl md:text-2xl font-black italic tracking-tighter ${brand.color}`}>
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
