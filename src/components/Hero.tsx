import React from 'react';

export function Hero() {
  return (
    <div className="relative bg-white dark:bg-[#131c2a]">
      <div className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Junte-se à Nossa Missão
        </h1>
        <p className="text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
          Molde o futuro da infraestrutura de games na Tales Inc., onde inovação encontra paixão.
        </p>
      </div>
    </div>
  );
}