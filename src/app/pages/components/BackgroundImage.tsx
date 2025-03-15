import React from 'react';
import Image from 'next/image';

interface BackgroundImageProps {
  src: string;
  alt: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ src, alt }) => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full">
      <Image
        alt={alt}
        src={src}
        fill
        style={{ objectFit: 'cover', objectPosition: 'right center' }}
        className="md:object-center"
      />
    </div>
  );
};

export default BackgroundImage;