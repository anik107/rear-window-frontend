"use client";

import { useRouter } from "next/navigation";
import { signUpSchema, SignUpFormData } from "@/lib/zod-schemas";
import { registerUser } from "@/lib/api-client";
import ReusableForm from "@/components/client/forms/ReusableForm";
import { FormField } from "@/components/client/forms/FormField";
import { SubmitButton } from "@/components/client/forms/SubmitButton";

export default function SignUpForm() {
  const router = useRouter();

  const handleSubmit = async (data: SignUpFormData) => {
    const result = await registerUser(data);

    if (!result.success) {
      throw new Error(result.message || "Failed to create account");
    }

    router.push("/log-in?registered=true");
  };

  return (
    <ReusableForm
      schema={signUpSchema}
      defaultValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
      className="space-y-3"
    >
      {() => (
        <>
          <FormField<SignUpFormData>
            name="name"
            placeholder="Name"
          />
          
          <FormField<SignUpFormData>
            name="email"
            type="email"
            placeholder="Email Address"
          />
          
          <FormField<SignUpFormData>
            name="password"
            type="password"
            placeholder="Password"
          />
          
          <div className="pt-2">
            <SubmitButton
              loadingText="Creating account..."
              className="w-28 mx-auto h-9 rounded-md text-sm"
            >
              Sign up
            </SubmitButton>
          </div>
        </>
      )}
    </ReusableForm>
  );
}