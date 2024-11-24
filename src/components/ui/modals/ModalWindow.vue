<template>
  <div class="modal-layout">
    <div class="modal">
    modalwindow
  </div>
  </div>

</template>

<style scoped>
.modal-layout{
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
.modal{
  width: 400px;
  height: 600px;
  background: #16171D;
  color: white;
  padding: 20px;
}
</style>