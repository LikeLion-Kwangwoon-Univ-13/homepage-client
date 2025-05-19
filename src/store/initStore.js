import { create } from "zustand";
const useInitStore = create((set) => ({
	init: false,
	setInit: (init) => set({ init }),
}))

export default useInitStore
 