import { create } from 'zustand'

export const useUserStore = create((set) => ({
  uid: undefined,
  setUid: (id) => set((state) => ({ uid: id })),
  removeAllBears: () => set({ bears: 0 }),
}))