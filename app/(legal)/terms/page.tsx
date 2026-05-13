import PolicyLayout from "@/components/legal/PolicyLayout";
import { termsData } from "@/lib/legal-data";

export const metadata = {
  title: "Terms & Conditions | Rear Window",
  description: "Understand the terms that govern your use of the platform.",
};

export default function TermsPage() {
  return <PolicyLayout data={termsData} />;
}