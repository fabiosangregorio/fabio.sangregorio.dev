import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/en/');
  }, [router]);

  return null;
}
