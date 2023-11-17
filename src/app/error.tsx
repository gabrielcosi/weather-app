'use client';
import { useRouter } from 'next/navigation';

export default function Error() {
  const { back } = useRouter();

  return (
    <div className='flex flex-col min-h-screen items-center justify-center flex-1'>
      <h2 className='text-3xl'>Something went wrong!</h2>
      <button onClick={back}>Go back</button>
    </div>
  );
}
