import React from 'react';
import { Globe } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#0e1622]/80 backdrop-blur-lg border-b border-slate-200 dark:border-[#2a3544]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Globe className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="text-2xl font-bold text-slate-900 dark:text-white">Tales Inc.</span>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}