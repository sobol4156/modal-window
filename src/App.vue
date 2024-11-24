<template>
  <modal-window :mockFolders="mockFolders" />
  <main>
    <button-component @click="openModal()">Открыть</button-component>
  </main>
</template>

<script setup lang="ts">
import ButtonComponent from "@/components/ui/ButtonComponent.vue";
import ModalWindow from "@/components/ui/modals/ModalWindow.vue";
import { useModalStore } from "@/stores/modals/modals.ts";
import type { Folder } from "@/types/Folders.ts";

const modalStore = useModalStore();

const openModal = () => {
  modalStore.openModal();
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
</script>

<style scoped></style>
