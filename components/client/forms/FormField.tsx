"use client";

import { Controller, useFormContext, FieldPath, FieldValues } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { FormControl, FormItem, FormMessage, FormLabel } from "@/components/ui/form";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type InputType = "text" | "email" | "password" | "number" | "tel" | "url" | "search";

interface FormFieldProps<TFieldValues extends FieldValues> {
  name: FieldPath<TFieldValues>;
  label?: string;
  placeholder?: string;
  type?: InputType;
  disabled?: boolean;
  className?: string;
  icon?: ReactNode;
}

export function FormField<TFieldValues extends FieldValues>({
  name,
  label,
  placeholder,
  type = "text",
  disabled,
  className,
  icon,
}: FormFieldProps<TFieldValues>) {
  const { control, formState } = useFormContext<TFieldValues>();
  const isSubmitting = formState.isSubmitting;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem className={className}>
          {label && <FormLabel className="text-sm font-medium text-gray-700">{label}</FormLabel>}
          <FormControl>
            <div className="relative">
              {icon && (
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  {icon}
                </div>
              )}
              <Input
                {...field}
                type={type}
                placeholder={placeholder}
                disabled={disabled || isSubmitting}
                className={cn(
                  "h-10 text-sm transition-all",
                  icon ? "pl-10" : "",
                  fieldState.error
                    ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                    : "border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
                )}
              />
            </div>
          </FormControl>
          <FormMessage className="text-xs text-red-500" />
        </FormItem>
      )}
    />
  );
}