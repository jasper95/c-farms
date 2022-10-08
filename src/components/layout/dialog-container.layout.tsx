import { useDialogStore } from '@/lib/stores/dialog'
import { createElement } from 'react'

export default function DialogContainer() {
  const dialog = useDialogStore((state) => state.dialog)
  if (!dialog) {
    return null
  }

  const Component = dialog.component
  return createElement(Component, { ...dialog.props })
}
