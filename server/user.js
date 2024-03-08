"use server";
import { auth, clerkClient } from "@clerk/nextjs";

export const getUser = async () => {
  try {
    const { userId } = auth();
    if (!userId) {
      console.log("Chưa đăng nhập!");
    }
    return userId;
    // return user;
  } catch (error) {
    console.log("Lấy thông tin bị lỗi!", error);
  }
};

export const getUserInfo = async (uid) => {
  try {
    const user = await clerkClient.users.getUser(uid);
    if (!user) {
      console.log("Chưa đăng nhập!");
    }
    return user;
    // return user;
  } catch (error) {
    console.log("Lấy thông tin bị lỗi!", error);
  }
};
