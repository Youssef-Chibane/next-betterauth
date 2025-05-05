import SignOutButton from "@/components/auth/SignOutButton";

export default function Page() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Hello From Dashboard Page</h1>
      <SignOutButton />
    </div>
  );
}
