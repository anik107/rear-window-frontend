import PolicyLayout from "@/components/legal/PolicyLayout";
import { refundData } from "@/lib/legal-data";

export const metadata = {
  title: "Refund Policy | Rear Window",
  description: "Understand how payments, cancellations, and refunds are handled.",
};

export default function RefundPage() {
  return <PolicyLayout data={refundData} />;
}