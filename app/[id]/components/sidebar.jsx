"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import facebook from "react-useanimations/lib/facebook";
import twitter from "react-useanimations/lib/twitter";
import { getUserInfo } from "@/server/user";

export default function Sidebar({id}) {
  useEffect(() => {
    async function get() {
      const q = await getUserInfo(id);
      console.log(q);
    }
    get();
  }, []);
  return (
    <div className="flex flex-col pt-12 pb-2 items-end justify-between h-full">
      <div
        className="border-b border-black flex flex-col rotate-90 w-[180px] translate-y-3 -translate-x-[92px] pt-4 select-none
       pb-4 cursor-pointer hover:bg-[#2E405B] hover:border-[#2E405B] duration-1000 hover:pl-4 hover:text-white"
      >
        <h2>DevBlog #{id}</h2>
        <b className="text-lg">Carolo Khoa</b>
      </div>

      <div className="flex flex-col items-start gap-1 w-full">
        <Link
          href={"/"}
          className="font-bold hover:text-white hover:no-underline underline px-1 duration-500 hover:bg-[#2E405B] underline-offset-2"
        >
          Posts
        </Link>
        <Link
          href={"/"}
          className="font-bold hover:text-white hover:no-underline underline px-1 duration-500 hover:bg-[#2E405B] underline-offset-2"
        >
          Archive
        </Link>
        <Link
          href={"/"}
          className="font-bold hover:text-white hover:no-underline underline px-1 duration-500 hover:bg-[#2E405B] underline-offset-2"
        >
          Categories
        </Link>
        <Link
          href={"/"}
          className="font-bold hover:text-white hover:no-underline underline px-1 duration-500 hover:bg-[#2E405B] underline-offset-2"
        >
          About
        </Link>
        <div className="flex justify-start w-full gap-2">
          <a
            href="https://github.com/CRLLNKhoa"
            target="_blank"
          >
            <UseAnimations
              animation={github}
              size={22}
              loop={true}
              className="cursor-pointer"
            />
          </a>
          <a
            href="https://www.facebook.com/lnkhoa1205/"
            target="_blank"
          >
            <UseAnimations
              animation={facebook}
              size={22}
              loop={true}
              className="cursor-pointer"
            />
          </a>
          <a
            href="https://www.facebook.com/lnkhoa1205/"
            target="_blank"
          >
            <UseAnimations
              animation={twitter}
              autoPlay={true}
              loop={true}
              size={22}
              className="cursor-pointer"
            />
          </a>
        </div>
      </div>
      <div className="flex gap-2 justify-start w-full text-xs">
        <p>@2024</p>
        <a
          href="https://luongkhoa.io.vn/"
          target="_blank"
          className="font-bold hover:text-white hover:no-underline underline px-1 duration-500 hover:bg-[#2E405B] underline-offset-2"
        >
          Carolo Khoa
        </a>
      </div>
    </div>
  );
}
