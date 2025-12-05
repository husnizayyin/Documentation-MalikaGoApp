import React from 'react';

const TableOfContents = () => {
  // Mock data for now, in a real app this would be derived from page content
  const links = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Key Features' },
    { id: 'usage', label: 'Usage Guide' },
    { id: 'troubleshooting', label: 'Troubleshooting' },
  ];

  return (
    <div className="hidden xl:block w-64 sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto pl-8 border-l border-border/50">
      <h4 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">On This Page</h4>
      <ul className="space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.id}>
            <a 
              href={`#${link.id}`} 
              className="text-text-secondary hover:text-text-primary transition-colors block border-l border-transparent hover:border-text-secondary pl-0 -ml-px"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      
      <div className="mt-8 pt-8 border-t border-border">
        <h4 className="text-sm font-semibold text-text-primary mb-4">More Resources</h4>
        <ul className="space-y-3 text-sm">
          <li>
            <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">
              API Reference
            </a>
          </li>
          <li>
            <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">
              Community Forum
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TableOfContents;
