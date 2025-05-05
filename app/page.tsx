import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">Better-Auth with Nextjs Demo</h1>
      <Link href="/login">
        <Button>Get Started</Button>
      </Link>
    </div>
  );
}
