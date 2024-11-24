<template>
  <div v-if="isOpen" class="modal-layout" @click.self="closeModal">
    <div class="modal">
      <header class="modal-header">
        <h3>{{ title }}</h3>
      </header>

      <main class="modal-body">
        <FolderComponent
          :folders="mockFolders"
          :selected-folder-id="selectedFolderId"
          @folder-selected="selectFolder"
        />
      </main>

      <footer class="modal-footer">
        <ButtonComponent @click="handleOk()">Ок</ButtonComponent>
        <ButtonComponent @click="closeModal()">Закрыть</ButtonComponent>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, ref } from "vue";
import FolderComponent from "@/components/ui/FolderComponent.vue";
import ButtonComponent from "@/components/ui/ButtonComponent.vue";
import type { Folder } from "@/types/Folders.ts";

defineProps<{ isOpen: boolean; title: number | null; mockFolders: Folder[] }>();

const emits = defineEmits(["close", "select"]);

const selectedFolderId = ref<number | null>(null);

const closeModal = () => emits("close");

const selectFolder = (folderId: number) => {
  selectedFolderId.value = folderId;
};

const handleOk = () => {
  emits("select", selectedFolderId.value);
  closeModal();
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
  display: flex;
  flex-direction: column;
}

.modal-body {
  flex-grow: 1;
  overflow-y: auto;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;

  * {
    cursor: pointer;
  }
}
</style>
