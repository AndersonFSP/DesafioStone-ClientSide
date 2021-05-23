<template>
  <nav class="menu">
    <ul class="menu__lista">
      <li class="menu__item">
        <router-link to="/select" class="menu__link">Marvel Content</router-link>
      </li> 
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
      this.$swal.fire({
          title: 'Successfully logged out',
          position: 'top-end',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
        });
      const vm = this;
      setTimeout(function(){ 
        vm.$router.push({name: "Login"});
      }, 2000);
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

      &:hover {
        color: red;
      }
    }
  }
  li a.router-link-active {
    color: red;
    font-weight: bold;
  }
  
   li a {
    color: #333;
  }
</style>