<template>
  <ModalWindow
    v-if="isModalOpen"
    :isOpen="isModalOpen"
    :title="selectedTitle"
    :mockFolders="mockFolders"
    @select="handleSelect"
    @close="closeModal"
  />
  <main>
    <button-component @click="openModal()">Открыть</button-component>
  </main>
</template>

<script setup lang="ts">
import ButtonComponent from "@/components/ui/ButtonComponent.vue";
import ModalWindow from "@/components/ui/modals/ModalWindow.vue";
import { ref } from "vue";
import type { Folder } from "@/types/Folders.ts";

const isModalOpen = ref(false);
const selectedTitle = ref<null | number>(null);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const mockFolders: Folder[] = [
  {
    id: 1,
    name: "Папка 1",
    children: [
      { id: 2, name: "Папка 1.1", children: [] },
      {
        id: 3,
        name: "Папка 1.2",
        children: [{ id: 4, name: "Папка 1.2.1", children: [] }],
      },
    ],
  },
  { id: 5, name: "Папка 2", children: [] },
];

const handleSelect = (folderId: number | null) => {
  selectedTitle.value = `Выбрана папка №${folderId}`;
};
</script>

<style scoped></style>
