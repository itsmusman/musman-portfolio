import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/ui/OptimizedImage";
import type { ProjectImage } from "@/data/projectImages";

interface ProjectImageGalleryProps {
  images: ProjectImage[];
  projectTitle: string;
}

export default function ProjectImageGallery({ images, projectTitle }: ProjectImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (images.length === 0) {
    return (
      <div className="aspect-video rounded-lg overflow-hidden border border-white/10 bg-secondary/30 flex items-center justify-center">
        <span className="text-4xl">📸</span>
      </div>
    );
  }

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
    }
  };
  
  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <>
      {/* Main Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="aspect-video rounded-lg overflow-hidden border border-white/10 bg-secondary/30 cursor-pointer group"
        onClick={() => openLightbox(0)}
      >
        <OptimizedImage
          src={images[0].src}
          alt={images[0].alt}
          priority={true}
          loading="eager"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          skeletonClassName="rounded-lg"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-mono px-3 py-1.5 rounded bg-black/60 border border-white/20">
            View full gallery
          </span>
        </div>
      </motion.div>

      {/* Thumbnail Grid */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 mt-4">
          {images.slice(0, 8).map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`aspect-video rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                index === 0 ? "border-primary" : "border-transparent hover:border-primary/50"
              }`}
              onClick={() => openLightbox(index)}
            >
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover"
                skeletonClassName="rounded-lg"
              />
            </motion.div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
              onClick={closeLightbox}
            >
              <X size={24} />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
            >
              <ChevronLeft size={32} />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <ChevronRight size={32} />
            </Button>

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="max-w-[90vw] max-h-[85vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <OptimizedImage
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                priority={true}
                loading="eager"
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
                skeletonClassName="rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                <p className="text-white text-center">{images[selectedIndex].alt}</p>
                <p className="text-white/60 text-center text-sm mt-1">
                  {selectedIndex + 1} / {images.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
