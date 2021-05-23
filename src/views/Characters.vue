<template>
  <div>
    <h1 class="aqui">Listagem de Character</h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['getCharacters'])
  },
  mounted() {
    this.getCharacters();
  }
}
</script>

<style>

</style>