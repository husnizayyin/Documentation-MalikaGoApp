import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import html2pdf from 'html2pdf.js';
import FullDocumentation from './FullDocumentation';
import { 
  LogIn, 
  History, 
  CalendarDays, 
  FileText, 
  CheckSquare, 
  Users, 
  User, 
  Camera,
  Home,
  Download
} from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const navItems = [
    { path: '/login', label: 'Login', icon: LogIn },
    { path: '/home', label: 'Home', icon: Home },
    { path: '/attendance', label: 'Absensi (Camera)', icon: Camera },
    { path: '/history', label: 'Riwayat Absensi', icon: History },
    { path: '/leave', label: 'Pengajuan Cuti', icon: CalendarDays },
    { path: '/request', label: 'Request Absensi', icon: FileText },
    { path: '/approval', label: 'Approval', icon: CheckSquare },
    { path: '/employee', label: 'Employee', icon: Users },
    { path: '/personal', label: 'Personal', icon: User },
  ];

  const handleDownloadPDF = async () => {
    setIsGenerating(true);
    
    // Create a temporary container
    const container = document.createElement('div');
    document.body.appendChild(container);
    
    // Render the FullDocumentation component into the container
    const root = createRoot(container);
    root.render(
      <div className="light-mode-pdf prose max-w-none">
        <FullDocumentation />
      </div>
    );

    // Wait for a moment to ensure rendering is complete
    await new Promise(resolve => setTimeout(resolve, 1000));

    const element = container;
    const opt = {
      margin:       [10, 10],
      filename:     'Dokumentasi-MalikaGo.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true, logging: true },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    try {
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error('PDF Generation failed:', error);
      alert('Gagal mengunduh PDF. Silakan coba lagi.');
    } finally {
      // Cleanup
      root.unmount();
      document.body.removeChild(container);
      setIsGenerating(false);
    }
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside className={`
        fixed md:sticky top-0 md:top-16 left-0 z-50 h-screen md:h-[calc(100vh-4rem)] 
        w-64 bg-background border-r border-border/50 
        transition-transform duration-200 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        py-6 pl-6 flex flex-col justify-between
      `}>
        <div>
          <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-2">
            Fitur
          </h3>
          <nav>
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={() => onClose && onClose()}
                    className={({ isActive }) =>
                      `block py-1.5 text-sm transition-colors border-l pl-4 -ml-px ${
                        isActive
                          ? 'text-text-primary border-text-primary font-medium'
                          : 'text-text-secondary border-transparent hover:text-text-primary hover:border-text-secondary'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="pr-6 mt-8">
          <button
            onClick={handleDownloadPDF}
            disabled={isGenerating}
            className="w-full flex items-center justify-center gap-2 bg-surface border border-border hover:border-accent hover:text-accent text-text-secondary transition-all py-2 px-4 rounded-lg text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGenerating ? (
              <>
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                Generating...
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                Download PDF
              </>
            )}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
