import React from 'react';
import PageNavigation from '../components/PageNavigation';

const Login = () => {
  return (
    <div className="prose prose-invert max-w-none">
      <div className="flex flex-col xl:flex-row gap-12 items-start">
        <div className="flex-1">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-6">
            Login Aplikasi
          </h1>
          <p className="lead text-text-secondary text-lg mb-8">
            Akses aman ke portal <span className="text-yellow-400 font-semibold">Koperasi Surya Malika Sejahtera</span>. 
            Kelola absensi dan data kepegawaian Anda dalam satu genggaman.
          </p>
          
          <div className="bg-surface p-8 rounded-2xl border border-yellow-500/20 shadow-[0_0_30px_-10px_rgba(234,179,8,0.1)] mb-8">
            <h3 className="mt-0 text-yellow-400 font-semibold text-xl mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-yellow-500 rounded-full"></span>
              Panduan Masuk
            </h3>
            <ol className="space-y-4 text-text-secondary">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center font-bold border border-yellow-500/20">1</span>
                <span>Buka aplikasi <strong>MalikaGo</strong> di smartphone Anda.</span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center font-bold border border-yellow-500/20">2</span>
                <span>Masukkan <strong>Email</strong> atau <strong>Nomor HP</strong> yang terdaftar.</span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center font-bold border border-yellow-500/20">3</span>
                <span>Masukkan <strong>Password</strong> akun Anda.</span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center font-bold border border-yellow-500/20">4</span>
                <span>Ketuk tombol <strong className="text-white">Log In</strong> untuk melanjutkan.</span>
              </li>
            </ol>
          </div>

          <div className="not-prose p-6 bg-gradient-to-br from-surface to-background rounded-xl border border-border flex gap-4 items-start">
            <div className="p-3 bg-yellow-500/10 rounded-lg text-yellow-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
            <div>
              <h4 className="text-text-primary font-semibold mb-1">Lupa Password?</h4>
              <p className="text-sm text-text-secondary m-0">
                Jika Anda mengalami kendala saat login atau lupa kata sandi, segera hubungi 
                <span className="text-yellow-400 cursor-pointer hover:underline ml-1">Admin HRD</span> untuk reset akun.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Mockup Section */}
        <div className="w-full xl:w-[320px] flex-shrink-0 mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-surface shadow-2xl bg-black aspect-[9/19.5]">
            {/* Status Bar Mockup */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-black z-10 flex justify-between px-6 items-center">
              <span className="text-[10px] text-white font-medium">9:41</span>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            
            {/* App Screen Image */}
            <img 
              src="/images/login-screen.png" 
              alt="Tampilan Login MalikaGo" 
              className="w-full h-full object-cover"
            />

            {/* Reflection/Glare Effect */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
          </div>
          <p className="text-center text-xs text-text-secondary mt-6 uppercase tracking-widest">Tampilan Aplikasi v1.0</p>
        </div>
      </div>
      <PageNavigation 
        next={{ path: '/home', label: 'Home' }} 
      />
    </div>
  );
};

export default Login;
