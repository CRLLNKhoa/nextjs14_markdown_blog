import React from "react";
import { IoMdAdd } from "react-icons/io";
export default function AddBlog() {
  return (
    <>
      <button className="bg-sky-500 px-2 py-1 text-sm font-bold flex items-center justify-center rounded-md text-white active:scale-125 duration-500">
      <IoMdAdd className="w-5 h-5" /> Thêm bài mới
      </button>
    </>
  );
}
