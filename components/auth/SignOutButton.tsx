"use client";

import { useRouter } from "next/navigation";
import { Icons } from "../icons";
import { signOut } from "@/lib/auth/auth-client";
import { Button } from "../ui/button";

export default function SignOutButton() {
  const router = useRouter();
  const handleClick = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login"); // redirect to login page
        },
      },
    });
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center justify-between w-18 cursor-pointer"
    >
      <Button>Signout</Button>
    </div>
  );
}
