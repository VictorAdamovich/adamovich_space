import Link from 'next/link';
import { memo } from 'react';

const Home = () => {
  return (
    <main className="flex min-h-screen max-w-2xl flex-col items-center p-24">
      <Link href="/">Home</Link>
      <Link href="cv">CV</Link>
    </main>
  );
};

export default memo(Home);
