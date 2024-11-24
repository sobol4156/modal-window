<template>
  <div v-if="isOpen" class="modal-layout" @click.self="modalClose">
    <div class="modal">
        <folder-component v-for="folder in mockFolders" :key="folder.id" :folder="folder" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";
import { useModalStore } from "@/stores/modals/modals.ts";
import FolderComponent from '@/components/ui/FolderComponent.vue'
import type { Folder } from "@/types/Folders.ts";

defineProps<{ mockFolders: Folder[] }>();

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
  background: rgba(18, 19, 25, 0.5);
  backdrop-filter: blur(10px);
  z-index: 100;
}
.modal {
  width: 90%;
  max-width: 600px; 
  height: 80%;
  max-height: 800px; 
  background: #16171d;
  color: white;
  padding: 20px;
  border-radius: 10px;
  overflow-y: auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}
</style>
