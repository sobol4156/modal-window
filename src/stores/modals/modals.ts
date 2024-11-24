import { defineStore } from "pinia"
import { ref } from "vue"

export const useModalStore = defineStore('modalStore', () => {
  const modal = ref({
    isOpen: false,
  })

  const openModal = () => {
    modal.value.isOpen = true
  }
  const closeModal = () => {
    modal.value.isOpen = false
  }
  return { openModal, modal, closeModal }
})