'use client';

import { useState, useEffect } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';

export default function Demo() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className='bg-black min-h-screen font-sans text-white'>
      <ScrollExpandMedia
        mediaType='video'
        mediaSrc='https://me7aitdbxq.ufs.sh/f/2wsMIGDMQRdYuZ5R8ahEEZ4aQK56LizRdfBSqeDMsmUIrJN1'
        posterSrc='https://images.pexels.com/videos/5752729/space-earth-universe-cosmos-5752729.jpeg'
        bgImageSrc='https://me7aitdbxq.ufs.sh/f/2wsMIGDMQRdYMNjMlBUYHaeYpxduXPVNwf8mnFA61L7rkcoS'
        title='BEYOND REALITY'
        date='2025'
        scrollToExpand='SCROLL'
        textBlend={true}
      >
        <div className='flex flex-col gap-10 mt-10 md:mt-20'>
          <h2 className='text-3xl md:text-5xl font-bold'>The Beginning</h2>
          <p className='text-lg md:text-xl text-gray-300 max-w-2xl'>
            This is a demonstration of the ScrollExpandMedia component. As you
            scroll down, the media expands to fill the screen, and the title
            separates to reveal the content below.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-10'>
            <div className='bg-gray-900 p-8 rounded-xl'>
              <h3 className='text-2xl font-semibold mb-4'>Section 1</h3>
              <p className='text-gray-400'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className='bg-gray-900 p-8 rounded-xl'>
              <h3 className='text-2xl font-semibold mb-4'>Section 2</h3>
              <p className='text-gray-400'>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className='h-96' /> {/* Spacer for scrolling */}
        </div>
      </ScrollExpandMedia>
    </div>
  );
}
