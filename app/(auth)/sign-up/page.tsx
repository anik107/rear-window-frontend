import { Metadata } from "next";
import SignUpForm from "@/components/auth/sign-up/SignUpForm";
import AuthLayout from "@/components/auth/AuthLayout";

export const metadata: Metadata = {
  title: "Sign Up | Rear Window",
  description: "Create your account",
};

export default function SignUpPage() {
  return (
    <AuthLayout
      title="Sign up to your account"
      subtitle="Already have an account?"
      subtitleLink={{ text: "Log in", href: "/log-in" }}
    >
      <SignUpForm />
    </AuthLayout>
  );
}