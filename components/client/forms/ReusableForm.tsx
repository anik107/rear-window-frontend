"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  useForm,
  FormProvider,
  UseFormReturn,
  FieldValues,
  DefaultValues,
  SubmitHandler,
} from "react-hook-form";
import type { ZodType } from "zod";
import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

interface ReusableFormProps<
  TFormValues extends FieldValues,
  TSchema extends ZodType<TFormValues, any, any>
> {
  schema: TSchema;
  defaultValues: DefaultValues<TFormValues>;
  onSubmit: (data: TFormValues) => Promise<void> | void;
  children: (form: UseFormReturn<TFormValues, unknown, TFormValues>) => ReactNode;
  className?: string;
  mode?: "onBlur" | "onChange" | "onSubmit" | "all";
}

export default function ReusableForm<
  TFormValues extends FieldValues,
  TSchema extends ZodType<TFormValues, any, any>
>({
  schema,
  defaultValues,
  onSubmit,
  children,
  className,
  mode = "onBlur",
}: ReusableFormProps<TFormValues, TSchema>) {
  const [serverError, setServerError] = useState<string | null>(null);

  const form = useForm<TFormValues, unknown, TFormValues>({
    resolver: zodResolver(schema as ZodType<TFormValues, any, any>),
    defaultValues,
    mode,
  });

  const handleSubmit: SubmitHandler<TFormValues> = async (data) => {
    setServerError(null);
    try {
      await onSubmit(data);
    } catch (error) {
      setServerError(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
    }
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={cn("space-y-4", className)}
      >
        {serverError && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600 text-center">
            {serverError}
          </div>
        )}
        {children(form)}
      </form>
    </FormProvider>
  );
}