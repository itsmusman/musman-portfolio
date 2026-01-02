import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  className = "",
  buttonClassName = "",
  mobileOnly = true,
}: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = text.length > maxLength;
  
  if (!shouldTruncate) {
    return <p className={`text-muted-foreground leading-relaxed ${className}`}>{text}</p>;
  }

  const displayText = isExpanded ? text : `${text.slice(0, maxLength)}...`;

  return (
    <div>
      <p className={`text-muted-foreground leading-relaxed ${className}`}>
        {displayText}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`mt-3 p-0 h-auto text-primary hover:text-primary/80 text-sm font-normal bg-transparent border-none cursor-pointer flex items-center gap-1 justify-center mx-auto ${mobileOnly ? "md:hidden" : ""} ${buttonClassName}`}
      >
        {isExpanded ? (
          <>
            Show less <ChevronUp size={16} />
          </>
        ) : (
          <>
            Show more <ChevronDown size={16} />
          </>
        )}
      </button>
    </div>
  );
}

