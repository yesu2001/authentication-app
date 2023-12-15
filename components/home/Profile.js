"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const user = "null";
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/auth");
    }
  }, []);

  return <div className="">Profile</div>;
}
