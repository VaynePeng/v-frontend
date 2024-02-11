import { createApp } from 'vue'
import messageStore from './messageStore'
import VMessage from './index.vue'

const V_MESSAGE_ROOT = 'v-message-root'
const messageRoot = (): HTMLElement | null => document.getElementById(V_MESSAGE_ROOT)
const { pushMessage } = messageStore()

const hasMessageRoot = (): boolean => {
  return Boolean(messageRoot())
}

const initMessage = (): void => {
  if (hasMessageRoot()) return
  const messageRoot = document.createElement('div')
  messageRoot.id = V_MESSAGE_ROOT
  document.body.appendChild(messageRoot)
  const messageApp = createApp(VMessage)
  messageApp.mount(`#${V_MESSAGE_ROOT}`)
}

const success = (message: string): void => {
  pushMessage(message)
}

initMessage()

export default {
  success
}
