import create from 'zustand'

type ISidebarStore = {
  sidbarOpened: boolean
  toggleSidebar(): void
}

export const useSidebarStore = create<ISidebarStore>((set) => ({
  sidbarOpened: false,
  toggleSidebar: () => set((state) => ({ sidbarOpened: !state.sidbarOpened })),
}))
