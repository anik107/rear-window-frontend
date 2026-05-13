"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { otpSchema, OtpFormData } from "@/lib/zod-schemas";
import { SubmitButton } from "@/components/client/forms/SubmitButton";
import { Input } from "@/components/ui/input";

const OTP_SECONDS = 5 * 60;
const OTP_LENGTH = 6;

export default function OtpForm() {
  const router = useRouter();
  const [secondsLeft, setSecondsLeft] = useState(OTP_SECONDS);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<OtpFormData>({
    resolver: zodResolver(otpSchema),
    defaultValues: { code: "" },
    mode: "onBlur",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeLabel = useMemo(() => {
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }, [secondsLeft]);

  const handleSubmitForm = async (data: OtpFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("OTP submitted", data.code);
    router.push("/log-in?verified=true");
  };

  const countdownText =
    secondsLeft > 0
      ? `Code expires in ${timeLabel}`
      : "Code expired. Request a new code.";

  const codeValue = watch("code") ?? "";
  const codeChars = Array.from(
    { length: OTP_LENGTH },
    (_, index) => codeValue[index] ?? ""
  );
  const hasError = !!errors.code;

  const focusIndex = (index: number) => {
    inputRefs.current[index]?.focus();
  };

  const setCodeAt = (index: number, value: string) => {
    const next = [...codeChars];
    next[index] = value;
    setValue("code", next.join(""), {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const handleChange = (value: string, index: number) => {
    const digits = value.replace(/\D/g, "");
    if (digits.length === 0) {
      setCodeAt(index, "");
      return;
    }

    const next = [...codeChars];
    let cursor = index;
    for (const digit of digits) {
      if (cursor >= OTP_LENGTH) break;
      next[cursor] = digit;
      cursor += 1;
    }

    setValue("code", next.join(""), {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });

    if (cursor < OTP_LENGTH) {
      focusIndex(cursor);
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.key === "Backspace") {
      event.preventDefault();

      if (codeChars[index]) {
        setCodeAt(index, "");
        return;
      }

      if (index > 0) {
        focusIndex(index - 1);
        setCodeAt(index - 1, "");
      }
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      focusIndex(Math.max(index - 1, 0));
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      focusIndex(Math.min(index + 1, OTP_LENGTH - 1));
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className="space-y-3">
      <div className="space-y-2">
        <div className="flex items-center justify-center gap-2">
          {codeChars.map((char, index) => (
            <Input
              key={`otp-${index}`}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              value={char}
              onChange={(event) => handleChange(event.target.value, index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              onFocus={(event) => event.currentTarget.select()}
              inputMode="numeric"
              pattern="[0-9]*"
              autoComplete={index === 0 ? "one-time-code" : "off"}
              maxLength={1}
              aria-label={`Digit ${index + 1}`}
              disabled={isSubmitting}
              className={
                "h-11 w-11 rounded-lg text-center text-lg font-semibold " +
                (hasError
                  ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                  : "border-gray-200 focus:border-blue-500 focus:ring-blue-500/20")
              }
            />
          ))}
        </div>
        {errors.code?.message && (
          <p className="text-xs text-red-500 text-center">
            {String(errors.code.message)}
          </p>
        )}
      </div>

      <p className="text-xs text-slate-500 text-center">{countdownText}</p>

      <div className="pt-2">
        <SubmitButton
          onclick={() => handleSubmit(handleSubmitForm)}
          isSubmitting={isSubmitting}
          loadingText="Verifying..."
          className="w-28 mx-auto h-9 rounded-md text-sm"
        >
          Verify
        </SubmitButton>
      </div>
    </form>
  );
}
