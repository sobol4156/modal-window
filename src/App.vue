<template>
  <modal-window />
  <main class="">
    <button-component @click="openModal()">123</button-component>
  </main>
</template>

<script setup lang="ts">
import ButtonComponent from "@/components/ui/ButtonComponent.vue";
import ModalWindow from "@/components/ui/modals/ModalWindow.vue";
import { useModalStore } from "@/stores/modals/modals.ts";

const modalStore = useModalStore();

const openModal = () => {
  modalStore.openModal();
};
</script>

<style scoped>
main{
  
}
</style>
