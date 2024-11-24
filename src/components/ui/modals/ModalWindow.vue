<template>
  <div v-if="isOpen" class="modal-layout" @click.self="closeModal">
    <div class="modal">
      <header class="modal-header">
        <h3 class="modal-header__title">
          {{
            title !== null ? `ID Выбранной папки №${title}` : "Выберите папку"
          }}
        </h3>
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
import {
  defineProps,
  watch,
  ref,
  computed,
  nextTick,
  onUpdated,
  onMounted,
} from "vue";
import FolderComponent from "@/components/ui/FolderComponent.vue";
import ButtonComponent from "@/components/ui/ButtonComponent.vue";
import type { Folder } from "@/types/Folders.ts";
import gsap from "gsap";

const props = defineProps<{
  isOpen: boolean;
  title: number | null;
  mockFolders: Folder[];
}>();

const emits = defineEmits(["close", "select"]);

const selectedFolderId = ref<number | null>(null);

const closeModal = async (): Promise<void> => {
  if (props.isOpen) {
    gsap.fromTo(".modal-layout", { opacity: 1 }, { opacity: 0, duration: 0.4 });
    await gsap
      .fromTo(".modal", { opacity: 1 }, { opacity: 0, y: -30, duration: 0.4 })
      .then(() => {
        emits("close");
      });
  }
};

const selectFolder = (folderId: number): void => {
  selectedFolderId.value = folderId;
};

onMounted(async () => {
  if (props.isOpen) {
    // Убедимся, что элементы есть в DOM
    await nextTick();
    gsap.fromTo(".modal-layout", { opacity: 0 }, { opacity: 1, duration: 0.4 });
    gsap.fromTo(
      ".modal",
      { opacity: 0.8, y: 30 },
      { opacity: 1, y: 0, duration: 0.4 }
    );
  }
});

const handleOk = (): void => {
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
  background: rgba(0, 0, 0, 0.3);
  will-change: opacity;
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
  display: flex;
  z-index: 100;
  flex-direction: column;
  will-change: transform;
}

.modal-header__title{
  font-size: 26px;
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
