"use client";

import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SubmitButtonProps {
  children: React.ReactNode;
  className?: string;
  loadingText?: string;
}

export function SubmitButton({
  children,
  className,
  loadingText = "Loading...",
}: SubmitButtonProps) {
  const { formState } = useFormContext();
  const { isSubmitting } = formState;

  return (
    <Button
      type="submit"
      disabled={isSubmitting}
      className={cn(
        "w-full h-11 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
    >
      {isSubmitting ? loadingText : children}
    </Button>
  );
}