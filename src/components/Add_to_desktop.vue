<script setup>
  import { inject } from 'vue';
  const log = inject('log')
  log.info("...from add.");
  </script>

<template>
<div class="add_to_desktop">
    <h3>PWA Control</h3>
  <button id="install_pwa">Install PWA</button>
  <button id="refresh_pwa">Refresh PWA</button>
</div>
</template>

<style>
  .add_to_desktop {
   border: 1px solid #eee;
  }
  .add_to_desktop button {margin: 5px;}
</style>

