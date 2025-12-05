import React from 'react';
import PageNavigation from '../components/PageNavigation';

const Home = () => {
  return (
    <div className="prose prose-invert max-w-none">
      <div className="flex flex-col xl:flex-row gap-12 items-start">
        <div className="flex-1">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-6">
            Home Overview
          </h1>
          <p className="lead text-text-secondary text-lg mb-8">
            Halaman utama aplikasi <span className="text-yellow-400 font-semibold">MalikaGo</span> yang memberikan ringkasan cepat dan akses mudah ke fitur-fitur penting.
          </p>

          <div className="bg-surface p-8 rounded-2xl border border-yellow-500/20 shadow-[0_0_30px_-10px_rgba(234,179,8,0.1)] mb-8">
            <h3 className="mt-0 text-yellow-400 font-semibold text-xl mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-yellow-500 rounded-full"></span>
              Fitur Utama
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-text-primary mb-2">1. Profil Pengguna</h4>
                <p className="text-text-secondary m-0">
                  Menampilkan sapaan "Hello", nama lengkap pengguna, nama koperasi, dan lokasi kantor. Foto profil pengguna juga ditampilkan di sudut kanan atas.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-text-primary mb-2">2. Menu Cepat (Quick Actions)</h4>
                <p className="text-text-secondary mb-3">
                  Akses langsung ke fitur yang sering digunakan melalui ikon-ikon intuitif:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-text-secondary">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span><strong>Riwayat Absensi:</strong> Cek log kehadiran.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    <span><strong>Pengajuan Cuti:</strong> Form izin/cuti.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                    <span><strong>Pengajuan Visit:</strong> Form kunjungan dinas.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                    <span><strong>Pengajuan Absensi:</strong> Koreksi absen.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    <span><strong>Approval:</strong> Persetujuan pengajuan (untuk atasan).</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium text-text-primary mb-2">3. Pengumuman (Announcement)</h4>
                <p className="text-text-secondary m-0">
                  Bagian ini menampilkan informasi penting dari perusahaan, seperti jadwal libur nasional atau berita internal (contoh: Libur Hari Raya 2025, RAT 2026).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Mockup Section */}
        <div className="w-full xl:w-[320px] flex-shrink-0 mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-surface shadow-2xl bg-black aspect-[9/19.5]">
            {/* Status Bar Mockup */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-black z-10 flex justify-between px-6 items-center">
              <span className="text-[10px] text-white font-medium">12:53</span>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            
            {/* App Screen Image */}
            <img 
              src="/images/home.png" 
              alt="Tampilan Home MalikaGo" 
              className="w-full h-full object-cover"
            />

            {/* Reflection/Glare Effect */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
          </div>
          <p className="text-center text-xs text-text-secondary mt-6 uppercase tracking-widest">Tampilan Home</p>
        </div>
      </div>
      <PageNavigation 
        prev={{ path: '/login', label: 'Login' }}
        next={{ path: '/attendance', label: 'Absensi (Camera)' }} 
      />
    </div>
  );
};

export default Home;
