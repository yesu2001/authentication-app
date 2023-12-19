"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Header from "./Header";

export default function Profile({ data }) {
  // const { data: session } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect("/api/auth/signin?callbackUrl=/login");
  //   },
  // });
  console.log(data);
  // const user = session?.user;

  return (
    <div className="flex">
      <div>
        <div className="text-center my-5">
          <p className="text-lg">Personal Info</p>
          <p className="text-xs text-[#BDBDBD]">
            Basic Info like name, age,etc.
          </p>
        </div>
        <div className="flex items-center">
          <div className="mx-4 sm:w-[70%] md:w-full border border-[#BDBDBD] rounded-md">
            <div className="p-4 flex justify-between">
              <div className="">
                <p>Profile</p>
                <p className="text-[#828282] text-xs">
                  Some info may be visible to other people
                </p>
              </div>
              <button className="border border-[#828282] text-[#828282] px-2 py-1 w-[70px] rounded-lg">
                <Link href="/profile/edit">Edit</Link>
              </button>
            </div>
            <hr />
            <div className="flex items-center p-4">
              <p className="flex-[0.3] text-[#BDBDBD]">Photo</p>
              <div className="flex-[0.7] ">
                <img
                  src={data?.image}
                  alt="image"
                  className="w-[80px] h-[80px] rounded-md"
                />
              </div>
            </div>
            <hr />
            <div className="flex items-center p-4">
              <p className="flex-[0.3] text-[#BDBDBD]">Name</p>
              <p className="flex-[0.7]">{data?.name}</p>
            </div>
            <hr />
            <div className="flex items-center p-4">
              <p className="flex-[0.3] text-[#BDBDBD]">Bio</p>
              <p className="flex-[0.7]">
                I am a software developer and a big fan of devchallenges...
              </p>
            </div>
            <hr />
            <div className="flex items-center p-4">
              <p className="flex-[0.3] text-[#BDBDBD]">Phone</p>
              <p className="flex-[0.7]">908249274292</p>
            </div>
            <hr />
            <div className="flex items-center p-4">
              <p className="flex-[0.3] text-[#BDBDBD]">Email</p>
              <p className="flex-[0.7]">xanthe.neal@gmail.com</p>
            </div>
            <hr />
            <div className="flex items-center p-4">
              <p className="flex-[0.3] text-[#BDBDBD]">Password</p>
              <p className="flex-[0.7]">************</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
