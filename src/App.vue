<template>
    <Header />
    <main class="container">
      <router-view />
    </main>
    <Add_to_desktop />
    <Sqlite />
</template>

<script>
import Header from './components/Header.vue';
import Add_to_desktop from './components/Add_to_desktop.vue';
import Sqlite from './components/Sqlite.vue';
export default {
  components: { Header, Add_to_desktop, Sqlite }
}
</script>




