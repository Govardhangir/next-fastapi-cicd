'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function HomePage() {
  const router = useRouter();
  
  useEffect(() => {
    // Automatically redirect to the first available page
    const timer = setTimeout(() => {
      router.push('/page-1');
    }, 100);
    
    return () => clearTimeout(timer);
  }, [router]);
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome to Your Application
        </h1>
        <p className="text-gray-600 mb-6">
          Redirecting you to the main page...
        </p>
        
        <div className="space-y-3">
          <p className="text-sm text-gray-500">
            If you're not redirected automatically, choose a page:
          </p>
          <div className="flex flex-col space-y-2">
            
            <Link
              href="/page-1"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200 font-medium"
            >
              Page 1
            </Link>
            <Link
              href="/page-2"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200 font-medium"
            >
              Page 2
            </Link>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-400">
            Available pages: 2
          </p>
        </div>
      </div>
    </div>
  );
}