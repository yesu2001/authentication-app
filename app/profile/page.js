import Profile from "@/components/profile/Profile";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function page() {
  const session = await getServerSession(authOptions);
  console.log("profile session", session);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/login");
  }
  return (
    <div className="flex w-full items-center justify-center">
      <Profile data={session?.user} />
    </div>
  );
}
