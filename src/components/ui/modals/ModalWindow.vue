<template>
  <div v-if="true" class="modal-layout" @click.self="modalClose">
    <div class="modal">modalwindow</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useModalStore } from "@/stores/modals/modals.ts";

const modalStore = useModalStore();

const isOpen = computed(() => {
  return modalStore.modal.isOpen;
});

const modalClose = () => {
  if (isOpen) {
    modalStore.closeModal();
  }
};
</script>

<style scoped>
.modal-layout {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: opacity(#121319, 0.5);
  backdrop-filter: blur(10px);
  z-index: 100;
}
.modal {
  width: 400px;
  height: 600px;
  background: #16171d;
  color: white;
  padding: 20px;
}
</style>
