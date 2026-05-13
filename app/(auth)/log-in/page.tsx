import { Metadata } from "next";
import LoginForm from "@/components/auth/sign-in/LoginForm";
import AuthLayout from "@/components/auth/AuthLayout";

export const metadata: Metadata = {
  title: "Sign In | Rear Window",
  description: "Sign in to your account",
};

export default function LogInPage() {
  return (
    <AuthLayout
      title="Sign in to your account"
      subtitle="Don't have an account?"
      subtitleLink={{ text: "Sign up", href: "/sign-up" }}
    >
      <LoginForm />
    </AuthLayout>
  );
}