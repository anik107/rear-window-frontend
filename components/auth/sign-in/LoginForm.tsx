"use client";

import { useRouter } from "next/navigation";
import { LoginFormData, loginSchema } from "@/lib/zod-schemas";
import { loginUser } from "@/lib/api-client";
import ReusableForm from "@/components/client/forms/ReusableForm";
import { FormField } from "@/components/client/forms/FormField";
import { SubmitButton } from "@/components/client/forms/SubmitButton";

export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = async (data: LoginFormData) => {
    console.log(data);
    
    const result = await loginUser(data);

    if (!result.success) {
      throw new Error(result.message || "Failed to sign in");
    }

    router.push("/log-in?registered=true");
  };

  return (
    <ReusableForm
      schema={loginSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      className="space-y-3"
    >
      {() => (
        <>
          <FormField<LoginFormData>
            name="email"
            type="email"
            placeholder="Email Address"
          />
          
          <FormField<LoginFormData>
            name="password"
            type="password"
            placeholder="Password"
          />
          
          <div className="pt-2">
            <SubmitButton
              loadingText="Signing in..."
              className="w-28 mx-auto h-9 rounded-md text-sm"
            >
              Sign in
            </SubmitButton>
          </div>
        </>
      )}
    </ReusableForm>
  );
}