import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PageNavigation = ({ prev, next }) => {
  return (
    <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between gap-4 print:hidden">
      {prev ? (
        <Link 
          to={prev.path}
          className="group flex flex-col gap-1 p-4 rounded-lg border border-border hover:border-accent hover:bg-surface transition-all text-left sm:w-1/2"
        >
          <span className="text-xs text-text-secondary font-medium uppercase tracking-wider flex items-center gap-1 group-hover:text-accent">
            <ChevronLeft className="w-3 h-3" /> Previous
          </span>
          <span className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors">
            {prev.label}
          </span>
        </Link>
      ) : (
        <div className="hidden sm:block sm:w-1/2"></div>
      )}

      {next ? (
        <Link 
          to={next.path}
          className="group flex flex-col gap-1 p-4 rounded-lg border border-border hover:border-accent hover:bg-surface transition-all text-right sm:w-1/2 items-end"
        >
          <span className="text-xs text-text-secondary font-medium uppercase tracking-wider flex items-center gap-1 group-hover:text-accent">
            Next <ChevronRight className="w-3 h-3" />
          </span>
          <span className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors">
            {next.label}
          </span>
        </Link>
      ) : (
        <div className="hidden sm:block sm:w-1/2"></div>
      )}
    </div>
  );
};

export default PageNavigation;
