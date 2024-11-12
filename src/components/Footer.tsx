import React from 'react';
import { Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white/80 dark:bg-[#0e1622]/80 backdrop-blur-lg border-t border-slate-200 dark:border-[#2a3544]">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <span className="text-slate-900 dark:text-white">© 2024 Tales Inc. Todos os direitos reservados.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}