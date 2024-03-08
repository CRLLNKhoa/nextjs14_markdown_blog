"use client";
import React, { useEffect } from "react";
import Dashboard from "./components/dashboard";
import Header from "./components/header";
import GotoLink from "./components/gotoLink";
import Listpost from "./components/listpost";
import AddBlog from "./components/addblog";
import { getUser } from "@/server/user";
import { useUserStore } from "@/stores/userStore";
import Loading from "./components/loading";

export default function Page() {
  const setUid = useUserStore((state) => state.setUid);
  const uid = useUserStore((state) => state.uid);
  useEffect(() => {
    async function get() {
      const q = await getUser();
      setUid(q);
    }
    get();
  }, []);
  if(!uid){
    return <Loading />
  }
  return (
    <main className="flex flex-col h-screen w-full">
      <div className="container max-w-screen-lg min-h-screen flex flex-col">
        <Header />
        <div className="grid grid-cols-3 flex-1 gap-4 bg-white p-4 rounded-md">
        <div className="col-span-3 lg:col-span-1 flex flex-col lg:border-r border-double lg:pr-4 mb-4 lg:mb-0">
            <h1 className="font-bold uppercase">Thống kê</h1>
            <Dashboard />
            <h1 className="font-bold uppercase line-clamp-1">
              Liên kết đến trang của bạn
            </h1>
            <GotoLink id={uid} />
          </div>
          <div className="col-span-3 lg:col-span-2 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h1 className="font-bold uppercase">Danh sách bài viết</h1>
              <AddBlog />
            </div>
            <>
              <Listpost />
            </>
          </div>
          
        </div>
      </div>
    </main>
  );
}
