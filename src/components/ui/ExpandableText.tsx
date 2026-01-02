import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ExpandableTextProps {
  text: string;
  maxLength?: number;
  className?: string;
  buttonClassName?: string;
  mobileOnly?: boolean;
}

export default function ExpandableText({
  text,
  maxLength = 100,
  className,
  buttonClassName,
  mobileOnly = true,
}: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = text.length > maxLength;
  const displayText = isExpanded || !shouldTruncate ? text : `${text.slice(0, maxLength)}...`;

  if (!shouldTruncate) {
    return <p className={className}>{text}</p>;
  }

  return (
    <div className={cn("space-y-2", className)}>
      <p className={cn("text-muted-foreground leading-relaxed", mobileOnly && "md:block")}>
        {displayText}
      </p>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          "h-auto p-0 text-primary hover:text-primary/80 text-sm font-normal",
          mobileOnly && "md:hidden",
          buttonClassName
        )}
        aria-label={isExpanded ? "Show less" : "Show more"}
      >
        {isExpanded ? (
          <>
            Show less <ChevronUp className="ml-1 h-4 w-4" />
          </>
        ) : (
          <>
            Show more <ChevronDown className="ml-1 h-4 w-4" />
          </>
        )}
      </Button>
    </div>
  );
}

