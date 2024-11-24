<template>
  <div class="folder">
    {{ folder.name }}
    <div v-if="folder.children.length">
      <folder-component v-for="child in folder.children" :key="child.id" :folder="child" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type { Folder } from "@/types/Folder.ts";

defineProps<{ folder: Folder[] }>();
</script>
