import React from 'react';
import PageNavigation from '../components/PageNavigation';

const Attendance = () => {
  return (
    <div className="prose max-w-none">
      <div className="flex flex-col xl:flex-row gap-12 items-start">
        <div className="flex-1">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-6">
            Absensi (Camera)
          </h1>
          <p className="lead text-text-secondary text-lg mb-8">
            Lakukan presensi harian dengan mudah menggunakan fitur pengenalan wajah dan lokasi.
          </p>

          <div className="bg-surface p-8 rounded-2xl border border-yellow-500/20 shadow-[0_0_30px_-10px_rgba(234,179,8,0.1)] mb-8">
            <h3 className="mt-0 text-yellow-400 font-semibold text-xl mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-yellow-500 rounded-full"></span>
              Proses Absensi
            </h3>
            <ol className="space-y-4 text-text-secondary">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center font-bold border border-yellow-500/20">1</span>
                <span>Buka menu <strong>Absensi</strong> dan izinkan akses kamera & lokasi.</span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center font-bold border border-yellow-500/20">2</span>
                <span>Ambil foto wajah Anda (Selfie). Sistem akan memvalidasi wajah dan lokasi Anda.</span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center font-bold border border-yellow-500/20">3</span>
                <span>Setelah foto berhasil diambil (seperti gambar di samping), detail lokasi dan waktu akan muncul.</span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center font-bold border border-yellow-500/20">4</span>
                <span>Tekan tombol <strong className="text-white">Clock In</strong> (Masuk) atau <strong className="text-white">Clock Out</strong> (Pulang) untuk menyimpan absensi.</span>
              </li>
            </ol>
          </div>

          <div className="bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
            <p className="m-0 text-red-200 text-sm">
              <strong>Catatan:</strong> Tombol Clock In/Out hanya akan aktif jika Anda berada di dalam radius kantor (Geofencing).
            </p>
          </div>
        </div>

        {/* Mobile Mockup Section */}
        <div className="w-full xl:w-[320px] flex-shrink-0 mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-surface shadow-2xl bg-black aspect-[9/19.5]">
            {/* Status Bar Mockup */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-black z-10 flex justify-between px-6 items-center">
              <span className="text-[10px] text-white font-medium">07:30</span>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            
            {/* App Screen Image */}
            <img 
              src="/images/absen.png" 
              alt="Tampilan Konfirmasi Absensi" 
              className="w-full h-full object-cover"
            />

            {/* Reflection/Glare Effect */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
          </div>
          <p className="text-center text-xs text-text-secondary mt-6 uppercase tracking-widest">Tampilan Konfirmasi Absensi</p>
        </div>
      </div>
      <PageNavigation 
        prev={{ path: '/home', label: 'Home' }}
        next={{ path: '/history', label: 'Riwayat Absensi' }} 
      />
    </div>
  );
};

export default Attendance;
