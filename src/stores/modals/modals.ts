import { defineStore } from "pinia"
import { ref } from "vue"

export const useModalStore = defineStore('modalStore', () => {
  const modal = ref({
    isOpen: false,
    title: '',
  })

  const openModal = (name: string) => {
    modal.value.title = name
    modal.value.isOpen = true
  }
  const closeModal = () => {
    modal.value.isOpen = false
  }
  return { openModal, modal, closeModal }
})