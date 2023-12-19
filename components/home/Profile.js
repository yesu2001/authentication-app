"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

export default function Profile() {
  const user = "null";
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!user) {
      router.push("/auth");
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full space-y-5">
      <div className="flex gap-2 items-center justify-end p-2 relative">
        <IoMdPerson style={{ fontSize: 30 }} />
        {open ? (
          <FaCaretUp onClick={() => setOpen(false)} />
        ) : (
          <FaCaretDown onClick={() => setOpen(true)} />
        )}
        <div
          className={`my-4 space-y-2 absolute top-8 right-3 p-2 px-4 rounded-md ${
            open ? "block opacity-100 bg-slate-500" : "hidden opacity-0"
          }`}
        >
          <p className="cursor-pointer">Profile</p>
          <p className="text-red-300 cursor-pointer">Logout</p>
        </div>
      </div>
      <div>
        <div className="text-center my-5">
          <p className="text-lg">Personal Info</p>
          <p className="text-xs text-[#BDBDBD]">
            Basic Info like name, age,etc.
          </p>
        </div>
        <div className="flex items-center justify-center ">
          <div className="mx-4 sm:w-[70%] md:w-[60%] border border-[#BDBDBD] rounded-md">
            <div className="p-4 flex justify-between">
              <div className="">
                <p>Profile</p>
                <p className="text-[#828282] text-xs">
                  Some info may be visible to other people
                </p>
              </div>
              <button className="border border-[#828282] text-[#828282] px-2 py-1 w-[70px] rounded-lg">
                <Link href="/edit">Edit</Link>
              </button>
            </div>
            <hr />
            <div className="flex items-center p-4">
              <p className="flex-[0.3] text-[#BDBDBD]">Photo</p>
              <img src="" alt="image" className="flex-[0.7]" />
            </div>
            <hr />
            <div className="flex items-center p-4">
              <p className="flex-[0.3] text-[#BDBDBD]">Name</p>
              <p className="flex-[0.7]">Xanthe Neal</p>
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
