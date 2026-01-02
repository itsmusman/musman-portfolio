import { useState, useRef, ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import ImageSkeleton from "./ImageSkeleton";

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "loading"> {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  priority?: boolean;
  skeletonClassName?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export default function OptimizedImage({
  src,
  alt,
  className,
  loading = "lazy",
  priority = false,
  skeletonClassName,
  onLoad,
  onError,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  return (
    <div className="relative w-full h-full">
      {/* Skeleton/Placeholder */}
      {!isLoaded && !hasError && (
        <ImageSkeleton className={cn("absolute inset-0 z-0", skeletonClassName)} />
      )}

      {/* Error Fallback */}
      {hasError && (
        <div className={cn("absolute inset-0 z-0 flex items-center justify-center bg-muted", skeletonClassName)}>
          <span className="text-4xl">🖼️</span>
        </div>
      )}

      {/* Actual Image */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={priority ? "eager" : loading}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          "relative z-10 w-full h-full transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        {...props}
      />

      {/* Preload hint for priority images */}
      {priority && (
        <link rel="preload" as="image" href={src} />
      )}
    </div>
  );
}

