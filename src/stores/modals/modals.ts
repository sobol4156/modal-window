import { defineStore } from "pinia"
import { ref } from "vue"

export const useModalStore = defineStore('modalStore', () => {
  const modal = ref({
    isOpen: false,
  })

  const openModal = () => {
    modal.value.isOpen = true
  }

  return { openModal, modal }
})