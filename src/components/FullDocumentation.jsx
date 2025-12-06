import React from 'react';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Attendance from '../pages/Attendance';
import History from '../pages/History';
import Leave from '../pages/Leave';
import Request from '../pages/Request';
import Approval from '../pages/Approval';
import Employee from '../pages/Employee';
import Personal from '../pages/Personal';

const FullDocumentation = () => {
  return (
    <div className="pdf-container bg-background text-text-primary p-8">
      {/* Cover Page */}
      <div className="min-h-[1100px] flex flex-col justify-center items-center text-center border-b border-border mb-8 page-break">
        <div className="w-24 h-24 bg-accent text-white rounded-full flex items-center justify-center font-bold text-4xl mb-6">
          M
        </div>
        <h1 className="text-5xl font-bold mb-4 text-text-primary">MalikaGo</h1>
        <h2 className="text-2xl text-text-secondary font-medium">Dokumentasi Pengguna Lengkap</h2>
        <p className="mt-8 text-text-secondary">Generated on {new Date().toLocaleDateString()}</p>
      </div>

      {/* Table of Contents */}
      <div className="min-h-[1100px] mb-8 page-break">
        <h2 className="text-3xl font-bold mb-8 text-text-primary border-b border-border pb-4">Daftar Isi</h2>
        <ul className="space-y-4 text-lg">
          <li>1. Login Aplikasi</li>
          <li>2. Home Overview</li>
          <li>3. Absensi (Camera)</li>
          <li>4. Riwayat Absensi</li>
          <li>5. Pengajuan Cuti</li>
          <li>6. Request Absensi</li>
          <li>7. Approval</li>
          <li>8. Employee</li>
          <li>9. Personal</li>
        </ul>
      </div>

      {/* Content Pages */}
      <div className="space-y-12">
        <section className="page-break pt-8">
          <div className="text-sm text-accent font-bold uppercase tracking-wider mb-2">Bab 1</div>
          <Login />
        </section>
        
        <section className="page-break pt-8">
          <div className="text-sm text-accent font-bold uppercase tracking-wider mb-2">Bab 2</div>
          <Home />
        </section>

        <section className="page-break pt-8">
          <div className="text-sm text-accent font-bold uppercase tracking-wider mb-2">Bab 3</div>
          <Attendance />
        </section>

        <section className="page-break pt-8">
          <div className="text-sm text-accent font-bold uppercase tracking-wider mb-2">Bab 4</div>
          <History />
        </section>

        <section className="page-break pt-8">
          <div className="text-sm text-accent font-bold uppercase tracking-wider mb-2">Bab 5</div>
          <Leave />
        </section>

        <section className="page-break pt-8">
          <div className="text-sm text-accent font-bold uppercase tracking-wider mb-2">Bab 6</div>
          <Request />
        </section>

        <section className="page-break pt-8">
          <div className="text-sm text-accent font-bold uppercase tracking-wider mb-2">Bab 7</div>
          <Approval />
        </section>

        <section className="page-break pt-8">
          <div className="text-sm text-accent font-bold uppercase tracking-wider mb-2">Bab 8</div>
          <Employee />
        </section>

        <section className="page-break pt-8">
          <div className="text-sm text-accent font-bold uppercase tracking-wider mb-2">Bab 9</div>
          <Personal />
        </section>
      </div>
    </div>
  );
};

export default FullDocumentation;
