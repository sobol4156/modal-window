<template>
  <div v-if="true" class="modal-layout" @click.self="modalClose">
    <div class="modal">
      <div v-for="(folder, index) in folders" :key="folder.id" class="folder">
        {{ folder.name }}
        <div v-if="folder.children.length">
          <div v-for="(child, index) in folder.children" :key="child.id" class="children">
            {{ child.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";
import { useModalStore } from "@/stores/modals/modals.ts";
import type { Folder } from "@/types/Folders.ts";

defineProps<{ folders: Folder[] }>();

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
.folder {
  margin-left: 20px;
}
.children {
  margin-left: 20px;
}
</style>
