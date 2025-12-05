import React from 'react';
import PageNavigation from '../components/PageNavigation';

const Leave = () => {
  return (
    <div className="prose max-w-none">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="text-left mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-6">
            Pengajuan Cuti
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed max-w-3xl">
            Kelola keseimbangan kerja dan kehidupan pribadi Anda. Ajukan cuti tahunan, izin sakit, atau keperluan lainnya dengan proses yang transparan.
          </p>
        </div>

        {/* Content Card (Text) */}
        <div className="bg-surface p-8 rounded-2xl border border-yellow-500/20 shadow-[0_0_30px_-10px_rgba(234,179,8,0.1)] mb-16">
          <h3 className="mt-0 text-yellow-400 font-semibold text-xl mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-yellow-500 rounded-full"></span>
            Panduan Pengajuan
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-medium text-text-primary mb-2">1. Cek Kuota Cuti</h4>
              <p className="text-text-secondary m-0">
                Pantau sisa <strong>Cuti Tahunan</strong> Anda di bagian atas layar (contoh: 12 Hari) sebelum mengajukan permohonan baru.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium text-text-primary mb-2">2. Isi Formulir</h4>
              <p className="text-text-secondary mb-3">
                Lengkapi detail pengajuan pada tab <strong>Form Cuti</strong>:
              </p>
              <ul className="text-text-secondary space-y-1 text-sm">
                <li>• <strong>Tanggal:</strong> Tentukan durasi cuti.</li>
                <li>• <strong>Jenis:</strong> Pilih kategori yang sesuai.</li>
                <li>• <strong>Alasan:</strong> Berikan keterangan jelas.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-text-primary mb-2">3. Pantau Status</h4>
              <p className="text-text-secondary m-0">
                Beralih ke tab <strong>Riwayat</strong> untuk melihat status persetujuan dari atasan (Approved, Pending, atau Rejected).
              </p>
            </div>
          </div>

          <div className="mt-8 bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
            <p className="m-0 text-yellow-600 text-sm">
              <strong>Tips:</strong> Ajukan cuti minimal 3 hari sebelum tanggal efektif untuk memastikan proses persetujuan berjalan lancar.
            </p>
          </div>
        </div>

        {/* Images Section (Side by Side) */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20">
          
          {/* Mockup 1: Form Cuti */}
          <div className="flex flex-col items-center">
            <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-surface shadow-2xl bg-black w-[280px] aspect-[9/19.5]">
              <div className="absolute top-0 left-0 right-0 h-8 bg-black z-10 flex justify-between px-6 items-center">
                <span className="text-[10px] text-white font-medium">09:41</span>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                  <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <img src="/images/leave.png" alt="Form Pengajuan Cuti" className="w-full h-full object-cover"/>
            </div>
            <p className="text-sm text-text-secondary mt-6 font-medium uppercase tracking-wider">Form Pengajuan</p>
          </div>

          {/* Mockup 2: Riwayat Cuti */}
          <div className="flex flex-col items-center">
            <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-surface shadow-2xl bg-black w-[280px] aspect-[9/19.5]">
              <div className="absolute top-0 left-0 right-0 h-8 bg-black z-10 flex justify-between px-6 items-center">
                <span className="text-[10px] text-white font-medium">09:42</span>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                  <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <img src="/images/leave_history.png" alt="Riwayat Cuti" className="w-full h-full object-cover"/>
            </div>
            <p className="text-sm text-text-secondary mt-6 font-medium uppercase tracking-wider">Riwayat & Status</p>
          </div>

        </div>

      </div>
      <PageNavigation 
        prev={{ path: '/history', label: 'Riwayat Absensi' }}
        next={{ path: '/request', label: 'Request Absensi' }} 
      />
    </div>
  );
};

export default Leave;
