import React from "react";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { ImFilePicture } from "react-icons/im";

export default function EditProfile() {
  return (
    <div className="flex flex-col lg:mx-[300px] space-y-8">
      <Link href="/profile" className="flex items-center">
        <IoIosArrowBack />
        <p>Back</p>
      </Link>
      <div className="flex items-center w-full">
        <div className="flex items-center w-full">
          <div className="mx-4 w-full border border-[#BDBDBD] rounded-md">
            <div className="p-4 flex justify-between">
              <div className="">
                <p>Change Info</p>
                <p className="text-[#828282] text-xs">
                  Changes will be reflected to every services
                </p>
              </div>
            </div>
            <hr />
            <div className="flex items-center p-4">
              <p className="flex-[0.3] text-[#BDBDBD]">Photo</p>
              <div className="flex-[0.7] flex items-center">
                <label
                  htmlFor="doc"
                  class="flex items-center p-2 gap-3 rounded-lg  bg-gray-50 cursor-pointer"
                >
                  <div class="flex items-center gap-2">
                    <ImFilePicture style={{ color: "#252329" }} />
                    <h4 class="text-md font-semibold text-gray-700">
                      Upload a pic
                    </h4>
                  </div>
                  <input
                    type="file"
                    id="doc"
                    name="doc"
                    accept="png, jpg"
                    hidden
                  />
                </label>
              </div>
            </div>
            <hr />
            <div className="flex items-center p-4">
              <p className="flex-[0.3] text-[#BDBDBD]">Name</p>
              <input
                type="text"
                placeholder=""
                value={"Xanthe Neal"}
                className="flex-[0.7] bg-[#bdbdbd] text-slate-950 outline-none rounded-md px-2 py-1"
              />
            </div>
            <hr />
            <div className="flex items-center p-4">
              <p className="flex-[0.3] text-[#BDBDBD]">Bio</p>
              <input
                type="text"
                placeholder=""
                value={
                  "I am a software developer and a big fan of devchallenges..."
                }
                className="flex-[0.7] bg-[#bdbdbd] text-slate-950 outline-none rounded-md px-2 py-1"
              />
            </div>
            <hr />
            <div className="flex items-center p-4">
              <p className="flex-[0.3] text-[#BDBDBD]">Phone</p>
              <input
                type="text"
                placeholder=""
                value={"908249274292"}
                className="flex-[0.7] bg-[#bdbdbd] text-slate-950 outline-none rounded-md px-2 py-1"
              />
            </div>
            <hr />
            <div className="flex items-center p-4">
              <p className="flex-[0.3] text-[#BDBDBD]">Email</p>
              <input
                type="text"
                placeholder=""
                value={"xanthe.neal@gmail.com"}
                className="flex-[0.7] bg-[#bdbdbd] text-slate-950 outline-none rounded-md px-2 py-1"
              />
            </div>
            <hr />
            <div className="flex items-center p-4">
              <p className="flex-[0.3] text-[#BDBDBD]">Password</p>
              <input
                type="password"
                placeholder=""
                value={"************"}
                className="flex-[0.7] bg-[#bdbdbd] text-slate-950 outline-none rounded-md px-2 py-1"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end mx-4">
        <button className="w-[80px] bg-[#2F80ED] px-3 rounded-md py-1 ">
          Save
        </button>
      </div>
    </div>
  );
}
