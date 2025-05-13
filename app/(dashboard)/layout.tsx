import { cookies } from "next/headers";
import { ClientRoot } from "../client-root";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return <ClientRoot defaultOpen={defaultOpen}>{children}</ClientRoot>;
}
