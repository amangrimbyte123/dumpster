'use client';

import Image from 'next/image';
import { useState } from 'react';

interface HeroImageProps {
  imageUrl: string | null;
  name: string;
  description: string;
}

export default function HeroImage({ imageUrl, name, description }: HeroImageProps) {
  const [imgSrc, setImgSrc] = useState(imageUrl || '/images/default-location.jpg');

  return (
    <div className="relative h-[300px] w-full">
      <Image
        src={imgSrc}
        alt={name}
        fill
        className="object-cover"
        priority
        sizes="100vw"
        onError={() => setImgSrc('/images/default-location.jpg')}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 flex items-center justify-center">
        <div className="text-center text-white max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">{name}</h1>
          <p className="text-lg md:text-xl text-gray-100">{description}</p>
        </div>
      </div>
    </div>
  );
} 