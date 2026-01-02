import { cn } from "@/lib/utils";
import { Skeleton } from "./skeleton";

interface ImageSkeletonProps {
  className?: string;
  aspectRatio?: "square" | "video" | "auto";
}

export default function ImageSkeleton({ className, aspectRatio = "auto" }: ImageSkeletonProps) {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    auto: "",
  };

  return (
    <Skeleton
      className={cn(
        "w-full h-full bg-gradient-to-br from-muted via-muted/50 to-muted",
        aspectClasses[aspectRatio],
        className
      )}
    />
  );
}

