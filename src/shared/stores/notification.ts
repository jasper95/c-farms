import { nanoid } from 'nanoid'
import create from 'zustand'

export type Notification = {
  id: string
  type: 'info' | 'warning' | 'success' | 'error'
  message: string
}

type NotificationsStore = {
  notifications: Notification[]
  addNotification: (notification: Omit<Notification, 'id'>) => void
  dismissNotification: (id: string) => void
  notifySuccess: (message: string) => void
}

export const useNotificationStore = create<NotificationsStore>((set) => ({
  notifications: [],
  addNotification: (notification) =>
    set((state) => ({
      notifications: [
        ...state.notifications,
        { id: nanoid(), ...notification },
      ],
    })),
  notifySuccess: (message: string) =>
    set((state) => ({
      notifications: [
        ...state.notifications,
        { id: nanoid(), message, type: 'success' },
      ],
    })),
  dismissNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter(
        (notification) => notification.id !== id
      ),
    })),
}))
