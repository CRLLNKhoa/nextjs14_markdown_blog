"use client";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";

export default function Listpost() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-between gap-4">
        <div className="flex bg-muted border items-center p-2 rounded-md w-2/3">
          <IoSearch className="w-4 h-4 text-muted-foreground" />
          <input
            className="px-2 outline-none text-sm bg-transparent w-full"
            type="text"
            placeholder="Search..."
          />
        </div>
        <div className="flex bg-muted border items-center p-2 rounded-md flex-1 text-sm justify-between cursor-pointer">
          <p>All tag</p>
          <FaCaretDown />
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <CardBlog />
        <CardBlog />
        <CardBlog />
      </div>
    </div>
  );
}

import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import AddBlog from "./addblog";

function CardBlog() {
  const [checked, setChecked] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  if (!isLoading) {
    return (
      <div onClick={() => setIsLoading(!isLoading)} className="bg-sky-600/50 cursor-progress px-2 flex justify-center py-1 text-sm rounded-md text-white font-bold animate-pulse duration-1000">
        Đang cập nhật ...
      </div>
    );
  }
  return (
    <div className="flex justify-between items-center gap-2">
      <h1 className="text-xs">ID.A001</h1>
      <h2
        title={"phụ"}
        className="leading-none font-semibold cursor-pointer text-sm line-clamp-1 w-1/2"
      >
        Bài viết số 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dicta nulla blanditiis possimus nostrum commodi cumque pariatur quas
        rerum ab. Consectetur a ducimus nobis incidunt necessitatibus nisi,
        praesentium nihil corporis molestias.
      </h2>
      <p className="text-xs text-muted-foreground line-clamp-1 mr-auto">
        Tạo ngày 22/04/2024
      </p>
      <div className="flex gap-2">
        {checked ? (
          <button
            onClick={() => setChecked(!checked)}
            className="bg-green-500 h-6 w-6 flex items-center justify-center rounded-md text-white active:scale-125 duration-500"
          >
            <IoEye className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={() => setChecked(!checked)}
            className="bg-blue-500 h-6 w-6 flex items-center justify-center rounded-md text-white active:scale-125 duration-500"
          >
            <IoEyeOff className="w-4 h-4" />
          </button>
        )}
        <button className="bg-red-500 h-6 w-6 flex items-center justify-center rounded-md text-white active:scale-125 duration-500">
          <FaTrash className="w-3 h-3" />
        </button>
        <button className="bg-orange-500 h-6 w-6 flex items-center justify-center rounded-md text-white active:scale-125 duration-500">
          <MdModeEditOutline className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
