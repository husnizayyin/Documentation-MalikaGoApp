import React from 'react';
import PageNavigation from '../components/PageNavigation';

const Request = () => {
  return (
    <div className="prose max-w-none">
      <div className="flex flex-col xl:flex-row gap-12 items-start">
        <div className="flex-1">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-6">
            Pengajuan Absensi
          </h1>
          <p className="lead text-text-secondary text-lg mb-8">
            Solusi untuk koreksi data kehadiran. Ajukan permohonan absensi manual jika Anda lupa absen, terkendala sistem, atau sedang dinas luar.
          </p>

          <div className="bg-surface p-8 rounded-2xl border border-yellow-500/20 shadow-[0_0_30px_-10px_rgba(234,179,8,0.1)] mb-8">
            <h3 className="mt-0 text-yellow-400 font-semibold text-xl mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-yellow-500 rounded-full"></span>
              Prosedur Pengajuan
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-text-primary mb-2">1. Pilih Jenis Absensi</h4>
                <p className="text-text-secondary m-0">
                  Tentukan apakah Anda ingin mengajukan koreksi untuk <strong>Check In</strong> (Masuk) atau <strong>Check Out</strong> (Pulang).
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-text-primary mb-2">2. Detail Waktu</h4>
                <p className="text-text-secondary mb-3">
                  Masukkan data waktu yang sesuai dengan kehadiran aktual Anda:
                </p>
                <ul className="text-text-secondary space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0"></span>
                    <span><strong>Tanggal:</strong> Hari kehadiran.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0"></span>
                    <span><strong>Jam:</strong> Waktu spesifik (Jam & Menit).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0"></span>
                    <span><strong>Alasan:</strong> Penjelasan singkat.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium text-text-primary mb-2">3. Menunggu Persetujuan</h4>
                <p className="text-text-secondary m-0">
                  Pengajuan Anda akan masuk ke daftar <em>Approval</em> atasan. Notifikasi akan muncul setelah status diperbarui.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
            <p className="m-0 text-red-200 text-sm">
              <strong>Perhatian:</strong> Gunakan fitur ini secara bijak. Terlalu sering melakukan request manual dapat mempengaruhi penilaian kedisiplinan Anda.
            </p>
          </div>
        </div>

        {/* Mobile Mockup Section */}
        <div className="w-full xl:w-[320px] flex-shrink-0 mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-surface shadow-2xl bg-black aspect-[9/19.5]">
            {/* Status Bar Mockup */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-black z-10 flex justify-between px-6 items-center">
              <span className="text-[10px] text-white font-medium">10:15</span>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            
            {/* App Screen Image */}
            <img 
              src="/images/request.png" 
              alt="Tampilan Request Absensi" 
              className="w-full h-full object-cover"
            />

            {/* Reflection/Glare Effect */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
          </div>
          <p className="text-center text-xs text-text-secondary mt-6 uppercase tracking-widest">Tampilan Form Request</p>
        </div>
      </div>
      <PageNavigation 
        prev={{ path: '/leave', label: 'Pengajuan Cuti' }}
        next={{ path: '/approval', label: 'Approval' }} 
      />
    </div>
  );
};

export default Request;
