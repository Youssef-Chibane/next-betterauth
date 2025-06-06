import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <Button className="fixed top-5 left-2" variant={"outline"} asChild>
        <Link href={"/"}>
          <Icons.arrowLeft className="h-2 w-2" />
          Back
        </Link>
      </Button>
      {children}
      <Toaster />
    </section>
  );
}
