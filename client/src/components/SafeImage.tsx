import { useState } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  style?: React.CSSProperties;
}

export default function SafeImage({
  src,
  alt,
  className,
  fallbackLabel,
  style,
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#171A1F] to-[#0E1012] text-[#F8FAFC]",
          className
        )}
        style={style}
        aria-label={alt}
        role="img"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#A3E635]/15 text-[#A3E635]">
          <ImageOff size={22} />
        </div>
        <span className="px-4 text-center text-sm font-medium text-[#A1A1AA]">
          {fallbackLabel ?? alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
