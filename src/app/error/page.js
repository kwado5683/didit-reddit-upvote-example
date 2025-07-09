'use client';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function ErrorPage() {
  const params = useSearchParams();
  const message = params.get('message') || 'An unexpected error occurred.';

  return (
    <div className="max-w-screen-md mx-auto mt-20 text-center text-red-500">
      <h1 className="text-2xl font-bold">Error</h1>
      <p className="mt-4">{message}</p>
      <Link href="/" className="underline text-blue-500">
        ← Back to Home
      </Link>
    </div>
  );
}
