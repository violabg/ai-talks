import * as React from "react"
import { cn } from "@/lib/utils"

interface SeparatorProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: "horizontal" | "vertical"
  decorative?: boolean
}

const Separator = React.forwardRef<HTMLHRElement, SeparatorProps>(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
    <hr
      ref={ref}
      aria-hidden={decorative}
      className={cn(
        "shrink-0 border-[--border]",
        orientation === "horizontal" ? "h-px w-full border-t" : "h-full w-px border-l",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = "Separator"

export { Separator }
