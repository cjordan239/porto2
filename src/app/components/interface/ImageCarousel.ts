import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default interface ImageCarouselProps {
  src: string | StaticImport;
  alt: string;
  layout?: 'fixed' | 'intrinsic' | 'responsive' | 'fill';
  objectfit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  quality?: number;
  width?: number;
  height?: number;
  className?: string;
}
