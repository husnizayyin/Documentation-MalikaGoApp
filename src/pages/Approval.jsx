import React from 'react';
import PageNavigation from '../components/PageNavigation';

const Approval = () => {
  return (
    <div className="prose prose-invert max-w-none">
      <div className="flex flex-col xl:flex-row gap-12 items-start">
        <div className="flex-1">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-6">
            Approval
          </h1>
          <p className="lead text-text-secondary text-lg mb-8">
            Pusat kendali untuk Atasan. Tinjau, setujui, atau tolak pengajuan absensi dan cuti dari anggota tim Anda dengan mudah dan cepat.
          </p>

          <div className="bg-surface p-8 rounded-2xl border border-yellow-500/20 shadow-[0_0_30px_-10px_rgba(234,179,8,0.1)] mb-8">
            <h3 className="mt-0 text-yellow-400 font-semibold text-xl mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-yellow-500 rounded-full"></span>
              Kategori Pengajuan
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-text-primary mb-2">1. Request Kehadiran</h4>
                <p className="text-text-secondary m-0">
                  Daftar pengajuan koreksi absensi manual (Clock In/Out) yang diajukan oleh karyawan karena lupa absen atau kendala teknis.
                </p>
                <ul className="mt-2 text-text-secondary text-sm list-disc list-inside">
                  <li>Periksa alasan dan waktu yang diajukan.</li>
                  <li>Pastikan bukti pendukung (jika ada) valid.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium text-text-primary mb-2">2. Request Time Off (Cuti)</h4>
                <p className="text-text-secondary mb-3">
                  Permohonan cuti tahunan, izin sakit, atau izin khusus lainnya.
                </p>
                <ul className="text-text-secondary space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0"></span>
                    <span><strong>Review:</strong> Cek detail tanggal, sisa kuota cuti, dan alasan.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0"></span>
                    <span><strong>Action:</strong> Klik item untuk melihat pop-up detail dan memberikan keputusan (Approve/Reject).</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <p className="m-0 text-blue-200 text-sm">
              <strong>Info:</strong> Keputusan yang Anda buat bersifat final. Notifikasi akan langsung dikirim ke karyawan yang bersangkutan.
            </p>
          </div>
        </div>

        {/* Mobile Mockup Section - Overlapping Images */}
        <div className="w-full xl:w-[320px] flex-shrink-0 mx-auto relative h-[700px]">
          {/* Back Image (List) */}
          <div className="absolute top-0 left-0 right-0 transform scale-95 opacity-60 translate-y-4 z-0">
             <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-surface shadow-2xl bg-black aspect-[9/19.5]">
                <img src="/images/approval.png" alt="Daftar Approval" className="w-full h-full object-cover"/>
             </div>
          </div>
          
          {/* Front Image (Popup) */}
          <div className="absolute top-8 left-0 right-0 z-10 hover:-translate-y-2 transition-transform duration-300">
            <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-surface shadow-2xl bg-black aspect-[9/19.5]">
              {/* Status Bar Mockup */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-black z-10 flex justify-between px-6 items-center">
                <span className="text-[10px] text-white font-medium">15:35</span>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                  <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              
              <img src="/images/approval_popup.png" alt="Detail Approval" className="w-full h-full object-cover"/>
              
              {/* Reflection/Glare Effect */}
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
            </div>
            <p className="text-center text-xs text-text-secondary mt-6 uppercase tracking-widest">Tampilan Detail Approval</p>
          </div>
        </div>
      </div>
      <PageNavigation 
        prev={{ path: '/request', label: 'Request Absensi' }}
        next={{ path: '/employee', label: 'Employee' }} 
      />
    </div>
  );
};

export default Approval;
