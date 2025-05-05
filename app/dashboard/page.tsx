import SignOutButton from "@/components/auth/SignOutButton";
import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/login");
  }

  const userName = session.user.name;
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Hello {userName}!</h1>
      <p className="text-lg text-gray-600">Welcome to your dashboard.</p>
      <SignOutButton />
    </div>
  );
}
