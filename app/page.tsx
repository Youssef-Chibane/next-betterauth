import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";
import Link from "next/link";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">Better-Auth with Nextjs Demo</h1>

      {session ? (
        <Link href="/login">
          <Button>Dashboard</Button>
        </Link>
      ) : (
        <Link href="/login">
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
}
