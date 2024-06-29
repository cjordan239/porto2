import React from 'react';
import ImageCarouselProps from '@interface/ImageCarousel';
import Image from 'next/image';

const CostumeImage = ({ src, alt, layout, objectfit, quality, width, height, className }: ImageCarouselProps) => {
  return (
    <Image 
      src={src}
      alt={alt}
      width={width}
      height={height}
      layout={layout}      
      objectFit={objectfit}
      quality={quality}
      className={className}
    />
  );
};

export default CostumeImage;
