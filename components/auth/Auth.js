"use client";

import React, { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";

export default function Auth() {
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      callbackUrl: `${window.location.origin}/profile`,
    });
    console.log(res);
  };

  const handleGithubAuth = () => {
    signIn("github");
  };
  const handleGoogleAuth = () => {
    signIn("google");
  };

  return (
    <div className="p-8 rounded-lg border border-[#BDBDBD] xs:w-[90%] md:w-[350px]">
      {login ? (
        <p>Login</p>
      ) : (
        <>
          <p className="font-bold text-[#E0E0E0] w-[80%]">
            Join thousands of learners from around the world
          </p>
          <p className="text-xs text-[#E0E0E0] w-[85%] my-2">
            Master web development by making real-life projects. There are
            multiple paths for you to choose
          </p>
        </>
      )}
      <form className="my-5 flex flex-col space-y-4" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-[#BDBDBD] bg-transparent p-2 rounded-md text-white outline-none"
        />
        <input
          type="Password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-[#BDBDBD] bg-transparent p-2 rounded-md text-white outline-none"
        />
        <input
          type="submit"
          value={login ? "Login" : "Start Now"}
          className="p-2 bg-[#2F80ED] text-white rounded-md text-md mt-4"
        />
      </form>
      <p className="text-xs text-[#828282] text-center">
        or continue with these social profile
      </p>
      <div className="my-3 flex gap-2 items-center justify-center">
        <button
          className="border  border-[#BDBDBD] rounded-full p-2"
          onClick={handleGoogleAuth}
        >
          <FaGoogle style={{ color: "#BDBDBD" }} />
        </button>
        <button
          className="border  border-[#BDBDBD] rounded-full p-2"
          onClick={handleGithubAuth}
        >
          <FaGithub style={{ color: "#BDBDBD" }} />
        </button>
      </div>
      <p className="text-xs text-[#828282] text-center">
        {login ? "Don't have an account yet?" : "Already a member?"}{" "}
        <span
          className="text-[#2D9CDB] cursor-pointer"
          onClick={() => setLogin(!login)}
        >
          {login ? "Register" : " Login"}
        </span>
      </p>
    </div>
  );
}
