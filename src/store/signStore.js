import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useSignStore = create()(
  persist(
    (set, get) => ({
      password: '',
      setPassword: (key) => {
        set((state) => ({ password: state.password + key }));
      },
      resetPassword: () => {
        set({ password: '' });
      }
    }),
    {
      name: 'signStore',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useSignStore;