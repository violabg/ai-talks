import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[--radius-md] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--ring] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[--primary] text-[--primary-foreground] hover:bg-[--primary]/90",
        outline:
          "border border-[--border] bg-transparent hover:bg-[--accent] hover:text-[--accent-foreground]",
        secondary:
          "bg-[--secondary] text-[--secondary-foreground] hover:bg-[--secondary]/80",
        ghost:
          "hover:bg-[--accent] hover:text-[--accent-foreground]",
        link: "text-[--primary] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-[--radius-sm] px-3 text-xs",
        lg: "h-11 rounded-[--radius-lg] px-8 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    if (asChild) {
      const child = React.Children.only(props.children) as React.ReactElement<
        React.HTMLAttributes<HTMLElement> & { ref?: React.Ref<HTMLElement> }
      >
      return React.cloneElement(child, {
        ...child.props,
        className: cn(buttonVariants({ variant, size }), child.props.className, className),
        ref,
      })
    }
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
