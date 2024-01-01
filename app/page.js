import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getUser } from "@/lib/dbRequests";
import "./globals.css";
import Profile from "@/components/profile/Profile";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  const data = await getUser(session?.user?.id);

  return (
    <main className="flex items-center justify-center">
      <Profile data={data} />
    </main>
  );
}
