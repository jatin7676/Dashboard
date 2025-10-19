import AcmeLogo from '@/app/ui/acme-logo';
import SignupForm from '@/app/ui/signup-form';
import { Suspense } from 'react';

export default function SignupPage() {
  return (
    <main className="flex min-h-screen">
      {/* Left side - Image/Visual */}
      <div className="relative hidden w-1/2 flex-col items-center justify-center bg-gradient-to-br from-green-600 via-green-700 to-emerald-900 p-12 lg:flex">
        <div className="absolute inset-0 bg-[url('/dashboard-preview.svg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center">
          <div className="mb-8">
            <AcmeLogo />
          </div>
          <h2 className="mb-4 text-4xl font-bold text-white">
            Create Your Account
          </h2>
          <p className="text-xl text-green-100">
            Join thousands of users managing their finances with our powerful dashboard
          </p>
          <div className="mt-12 grid grid-cols-3 gap-8">
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-white">Free</div>
              <div className="text-sm text-green-100">Forever</div>
            </div>
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-white">Secure</div>
              <div className="text-sm text-green-100">Encrypted</div>
            </div>
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-white">Fast</div>
              <div className="text-sm text-green-100">Setup</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Signup Form */}
      <div className="flex w-full items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-8 lg:w-1/2">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center lg:hidden">
            <div className="mb-4">
              <AcmeLogo />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Create Account
            </h2>
          </div>
          <Suspense>
            <SignupForm />
          </Suspense>
        </div>
      </div>
    </main>
  );
}

