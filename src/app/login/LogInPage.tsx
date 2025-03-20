'use client';

import Link from 'next/link';
import Image from 'next/image';

interface InputProps {
  label: string;
  type: string;
  id: string;
  autoComplete?: string;
}

const InputField: React.FC<InputProps> = ({ label, type, id, autoComplete }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-white">
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={id}
          type={type}
          required
          autoComplete={autoComplete}
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-300 placeholder-gray-400 focus:outline-indigo-600 focus:ring-2"
        />
      </div>
    </div>
  );
};

const SignInForm: React.FC = () => {
  return (
    <form action="#" method="POST" className="space-y-6">
      <InputField label="Email address" type="email" id="email" autoComplete="email" />
      <InputField label="Password" type="password" id="password" autoComplete="current-password" />
      <div className="flex justify-between items-center">
        <label className="block text-sm font-medium text-white">Password</label>
        <Link href="/forgot-password" legacyBehavior>
          <a className="text-sm font-semibold text-indigo-200 hover:text-indigo-100">
            Forgot password?
          </a>
        </Link>
      </div>
      <button
        type="submit"
        className="flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-indigo-500 shadow hover:bg-indigo-500 focus:outline-indigo-600 focus:ring-2"
      >
        Sign in
      </button>
    </form>
  );
};

const LogInPage: React.FC = () => {
  return (
    <div
      className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8"
      style={{
        background: 'linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)',
        color: '#fff',
      }}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          alt="Your Company"
          src="/logo.png"
          width={40}
          height={40}
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-white">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <SignInForm />
        <p className="mt-10 text-center text-sm text-indigo-200">
          Not a member?{' '}
          <Link href="/signup" legacyBehavior>
            <a className="font-semibold text-white hover:text-indigo-100">
              Start a 14-day free trial
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogInPage;