<template>
  <ul class="folder-tree">
    <li
      v-for="folder in folders"
      :key="folder.id"
      :class="{ selected: folder.id === selectedFolderId }"
    >
      <div @click="toggleFolder(folder)">
        <span
          v-if="folder.children.length"
          class="folder-toggle"
          @click.stop="toggleFolder(folder)"
        >
          {{ isOpen(folder.id) ? "▼" : "►" }}
        </span>
        <span class="folder-name" @click.stop="selectFolder(folder.id)">
          {{ folder.name }}
        </span>
      </div>
      <folder-component
        v-if="isOpen(folder.id)"
        :folders="folder.children"
        :selected-folder-id="selectedFolderId"
        @folder-selected="selectFolder"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";
import FolderComponent from "@/components/ui/FolderComponent.vue";
import type { Folder } from "@/types/Folders";

defineProps<{
  folders: Folder[];
  selectedFolderId: number | null;
}>();

const emit = defineEmits(["folder-selected"]);

const openFolders = ref<Set<number>>(new Set());

const toggleFolder = (folder: Folder) => {
  if (openFolders.value.has(folder.id)) {
    openFolders.value.delete(folder.id);
  } else {
    openFolders.value.add(folder.id);
  }
};

const isOpen = (folderId: number) => openFolders.value.has(folderId);

const selectFolder = (folderId: number) => {
  emit("folder-selected", folderId);
};
</script>

<style scoped>
.folder-tree {
  list-style-type: none;
  padding-left: 20px;
}

.folder-tree .folder-toggle {
  margin-right: 5px;
  cursor: pointer;
}

.folder-tree .folder-name {
  cursor: pointer;
  font-weight: normal;
}

.selected .folder-name {
  font-weight: bold;
  color: #4caf50;
}
</style>
