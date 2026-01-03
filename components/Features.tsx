
import React from 'react';
import { FEATURES } from '../constants';
import { Icon } from './Icons';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">Vantagens Exclusivas</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white">Por que escolher o Elite Flix?</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div key={index} className="bg-[#111111] p-8 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-all group">
              <div className="bg-blue-600/10 p-3 rounded-lg w-fit mb-6 group-hover:bg-blue-600 transition-colors">
                <Icon name={feature.icon} className="text-blue-500 group-hover:text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
