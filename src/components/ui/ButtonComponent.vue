<template>
  <button class="dark-button">
    <slot />
  </button>
</template>

<style scoped>
.dark-button {
  background-color: #1a1a1a; 
  color: #ffffff; 
  border: 1px solid #444; 
  border-radius: 6px;
  padding: 10px 20px; 
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px; 
  font-weight: 500; 
  cursor: pointer; 
  transition: background-color 0.3s ease, transform 0.2s ease; 
  line-height: 16px;
}

.dark-button:hover {
  background-color: #2a2a2a; 
}

.dark-button:active {
  transform: scale(0.98); 
}
</style>