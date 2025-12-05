import React from 'react';
import { Search, Github, ExternalLink } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-16 bg-background border-b border-border fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm">
            M
          </div>
          <span className="text-text-primary font-bold text-lg">MalikaGo</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-text-secondary">
          <a href="#" className="text-accent font-semibold">Docs</a>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search docs..." 
            className="bg-surface border border-border rounded-full py-1.5 pl-9 pr-4 text-sm text-text-primary focus:outline-none focus:border-accent w-64 transition-colors placeholder:text-text-secondary"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
