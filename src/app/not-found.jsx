import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
      <div className="min-h-screen   flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-[120px] font-extrabold text-primary leading-none">
            404
          </h1>

          <h2 className=" text-black text-4xl font-bold mt-4">
            Oops! Path Not Found
          </h2>

          <p className="mt-4 text-gray-600 max-w-lg mx-auto">
            The page you are looking for might have been removed, renamed, or is
            temporarily unavailable.
          </p>

          <Link
            href="/"
            className="inline-block mt-8 bg-primary text-primary-foreground   px-8 py-3 rounded-xl font-medium hover:bg-primary/80   transition"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
};

export default NotFound;