"use client";

import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { forwardRef, InputHTMLAttributes } from "react";

export interface SearchBarProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  placeholder?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "filled" | "bordered";
  iconPosition?: "left" | "right";
  showIcon?: boolean;
  containerClassName?: string;
  onSearch?: (value: string) => void;
}

const sizeClasses = {
  sm: {
    container: "h-9",
    input: "pl-9 pr-3 text-sm",
    icon: "left-3 h-4 w-4",
  },
  md: {
    container: "h-11",
    input: "pl-12 pr-4 text-sm",
    icon: "left-4 h-5 w-5",
  },
  lg: {
    container: "h-14",
    input: "pl-14 pr-5 text-base",
    icon: "left-5 h-5 w-5",
  },
};

const variantClasses = {
  default: "bg-gray-100 border-transparent focus:bg-white focus:border-blue-500",
  filled: "bg-gray-100 border-transparent focus:ring-2 focus:ring-blue-500/20",
  bordered: "bg-white border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
};

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      placeholder = "Search...",
      size = "md",
      variant = "default",
      iconPosition = "left",
      showIcon = true,
      containerClassName,
      className,
      onSearch,
      onChange,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    const sizes = sizeClasses[size];
    const variants = variantClasses[variant];

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && onSearch) {
        onSearch(e.currentTarget.value);
      }
      onKeyDown?.(e);
    };

    return (
      <div className={cn("relative w-full", containerClassName)}>
        {showIcon && iconPosition === "left" && (
          <Search
            className={cn(
              "absolute top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none",
              sizes.icon
            )}
          />
        )}
        
        <input
          ref={ref}
          type="text"
          placeholder={placeholder}
          className={cn(
            "w-full rounded-lg border transition-all duration-200",
            "placeholder:text-gray-500",
            "focus:outline-none",
            sizes.container,
            sizes.input,
            variants,
            className
          )}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          {...props}
        />

        {showIcon && iconPosition === "right" && (
          <Search
            className={cn(
              "absolute top-1/2 -translate-y-1/2 right-4 text-gray-400 pointer-events-none",
              sizes.icon
            )}
          />
        )}
      </div>
    );
  }
);

SearchBar.displayName = "SearchBar";

export { SearchBar };