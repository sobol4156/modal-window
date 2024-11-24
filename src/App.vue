<template>
  <modal-window  />
  <main>
    <button-component @click="openModal()">Открыть</button-component>
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

<style scoped></style>
