import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import { Suspense } from 'react';
 
export default function LoginPage() {
  return (
    <main className="flex min-h-screen">
      {/* Left side - Image/Visual */}
      <div className="relative hidden w-1/2 flex-col items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 p-12 lg:flex">
        <div className="absolute inset-0 bg-[url('/dashboard-preview.svg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center">
          <div className="mb-8">
            <AcmeLogo />
          </div>
          <h2 className="mb-4 text-4xl font-bold text-white">
            Welcome to Your Financial Dashboard
          </h2>
          <p className="text-xl text-blue-100">
            Manage your invoices, track revenue, and gain insights into your business performance
          </p>
          <div className="mt-12 grid grid-cols-3 gap-8">
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-white">99%</div>
              <div className="text-sm text-blue-100">Uptime</div>
            </div>
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-white">10K+</div>
              <div className="text-sm text-blue-100">Users</div>
            </div>
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-blue-100">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="flex w-full items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-8 lg:w-1/2">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center lg:hidden">
            <div className="mb-4">
              <AcmeLogo />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Welcome Back
            </h2>
          </div>
          <Suspense>
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </main>
  );
}