import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import EditProfile from "@/components/profile/EditProfile";
import { getUser, updateUser } from "@/lib/dbRequests";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {
  const session = await getServerSession(authOptions);
  const data = await getUser(session?.user?.id);
  const handleUpdate = async (profileData) => {
    "use server";
    await updateUser(profileData, session?.user?.id);
    redirect("/");
  };

  return (
    <div>
      <EditProfile data={data} handleUpdate={handleUpdate} />
    </div>
  );
}
