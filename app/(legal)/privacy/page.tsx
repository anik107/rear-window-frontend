import PolicyLayout from "@/components/legal/PolicyLayout";
import { privacyData } from "@/lib/legal-data";

export const metadata = {
  title: "Privacy Policy | Rear Window",
  description: "Understand what data we collect, how it's used, and how we keep it secure.",
};

export default function PrivacyPage() {
  return <PolicyLayout data={privacyData} />;
}