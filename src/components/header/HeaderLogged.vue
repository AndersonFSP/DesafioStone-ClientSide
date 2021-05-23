<template>
  <nav class="menu">
    <ul class="menu__lista">
      <li class="menu__item">
        <router-link to="#" class="menu__link">{{ user.name }}</router-link>
      </li> 
      <li class="menu__item">
        <router-link to="#" class="menu__link" @click.native="logout">Logout</router-link>
      </li> 
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "HeaderLoggedOut",
  methods: {
    logout() {
      this.$store.commit('logout');
      this.$router.push({ name: "Login"})
    },
  },
  computed: {
    ...mapGetters(['user'])
  }

}
</script>

<style lang="scss">
  .menu__lista {
    display: flex;

    .menu__link {
      text-decoration: none;
      margin-right: 1.25rem;
      color: #333;

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>