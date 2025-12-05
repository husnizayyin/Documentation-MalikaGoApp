import React from 'react';
import PageNavigation from '../components/PageNavigation';

const Employee = () => {
  return (
    <div className="prose max-w-none">
      <div className="flex flex-col xl:flex-row gap-12 items-start">
        <div className="flex-1">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-6">
            Employee Directory
          </h1>
          <p className="lead text-text-secondary text-lg mb-8">
            Akses mudah ke direktori seluruh karyawan Koperasi Surya Malika. Temukan kontak rekan kerja dan lihat struktur organisasi dalam satu genggaman.
          </p>

          <div className="bg-surface p-8 rounded-2xl border border-yellow-500/20 shadow-[0_0_30px_-10px_rgba(234,179,8,0.1)] mb-8">
            <h3 className="mt-0 text-yellow-400 font-semibold text-xl mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-yellow-500 rounded-full"></span>
              Fitur Utama
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-text-primary mb-2">1. Pencarian Pintar</h4>
                <p className="text-text-secondary m-0">
                  Gunakan kolom pencarian di bagian atas untuk menemukan karyawan berdasarkan nama (min. 3 karakter).
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-text-primary mb-2">2. Informasi Lengkap</h4>
                <p className="text-text-secondary mb-3">
                  Setiap kartu karyawan menampilkan detail penting:
                </p>
                <ul className="text-text-secondary space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0"></span>
                    <span><strong>Nama Lengkap:</strong> Identitas karyawan.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0"></span>
                    <span><strong>Lokasi Kantor:</strong> Penempatan kerja (Pusat/Cabang).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0"></span>
                    <span><strong>Jabatan:</strong> Posisi dalam struktur organisasi.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
            <p className="m-0 text-yellow-200 text-sm">
              <strong>Tips:</strong> Gunakan fitur ini untuk memverifikasi data rekan kerja atau mencari kontak saat dibutuhkan.
            </p>
          </div>
        </div>

        {/* Mobile Mockup Section */}
        <div className="w-full xl:w-[320px] flex-shrink-0 mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-surface shadow-2xl bg-black aspect-[9/19.5]">
            {/* Status Bar Mockup */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-black z-10 flex justify-between px-6 items-center">
              <span className="text-[10px] text-white font-medium">15:09</span>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            
            {/* App Screen Image */}
            <img 
              src="/images/employee.png" 
              alt="Tampilan Direktori Karyawan" 
              className="w-full h-full object-cover"
            />

            {/* Reflection/Glare Effect */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
          </div>
          <p className="text-center text-xs text-text-secondary mt-6 uppercase tracking-widest">Tampilan Daftar Karyawan</p>
        </div>
      </div>
      <PageNavigation 
        prev={{ path: '/approval', label: 'Approval' }}
        next={{ path: '/personal', label: 'Personal' }} 
      />
    </div>
  );
};

export default Employee;
