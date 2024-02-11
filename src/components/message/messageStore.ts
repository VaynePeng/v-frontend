import { ref } from 'vue'

interface Message {
  id: number
  content: string
}
const messageList = ref<Array<Message>>([])

const useMessage = (time = 3000) => {
  const pushMessage = (message: string) => {
    const id = new Date().getTime()
    messageList.value.push({
      id,
      content: message
    })
    autoRemoveMessage()
  }

  const autoRemoveMessage = () => {
    if (messageList.value.length) {
      setTimeout(() => {
        messageList.value.shift()
      }, time)
    }
  }

  return {
    pushMessage,
    messageList: messageList.value
  }
}

export default useMessage
