import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

type BrandMarkProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function BrandMark({ size = 16, className, ...props }: BrandMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("text-primary shrink-0", className)}
      {...props}
    >
      <line
        x1="3"
        y1="13"
        x2="8"
        y2="3"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <line
        x1="8"
        y1="3"
        x2="13"
        y2="13"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <line
        x1="3"
        y1="13"
        x2="13"
        y2="13"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="8" cy="3" r="1.75" fill="currentColor" />
      <circle cx="3" cy="13" r="1.75" fill="currentColor" />
      <circle cx="13" cy="13" r="1.75" fill="currentColor" />
    </svg>
  );
}
