import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Custom404() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen hero-gradient text-white flex items-center justify-center">
      <div className={`text-center px-4 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-9xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          404
        </h1>
        <p className="text-2xl text-gray-300 mb-2">Page not found</p>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/#home"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/#contact"
            className="bg-gray-700 text-white px-8 py-3 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}