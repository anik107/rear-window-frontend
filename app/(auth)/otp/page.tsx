import { Metadata } from "next";
import AuthLayout from "@/components/auth/AuthLayout";
import OtpForm from "@/components/auth/otp/OtpForm";

export const metadata: Metadata = {
  title: "Verify Code | Rear Window",
  description: "Enter the 6-digit code to continue",
};

export default function OtpPage() {
  return (
    <AuthLayout
      title="Verify your account"
      subtitle="Already have an account?"
      subtitleLink={{ text: "Log in", href: "/log-in" }}
    >
      <OtpForm />
    </AuthLayout>
  );
}
