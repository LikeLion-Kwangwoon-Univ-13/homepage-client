import { create } from 'zustand'

export const useAdminStore = create((set) => ({
  isOpenSidebar: false,
  setIsOpenSidebar: (isOpen) => set({ isOpenSidebar: isOpen }),
  toggleSidebar: () => set((state) => ({ isOpenSidebar: !state.isOpenSidebar })),
}))
