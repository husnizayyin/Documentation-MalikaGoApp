import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LogIn, 
  History, 
  CalendarDays, 
  FileText, 
  CheckSquare, 
  Users, 
  User, 
  Camera,
  Home
} from 'lucide-react';

const Sidebar = () => {
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

  return (
    <aside className="w-64 bg-background h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto border-r border-border/50 py-6 pl-6">
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
    </aside>
  );
};

export default Sidebar;
