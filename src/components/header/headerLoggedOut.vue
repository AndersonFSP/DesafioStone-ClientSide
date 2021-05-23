<template>
  <nav class="menu">
    <ul class="menu__lista">
      <li class="menu__item">
        <router-link to="/login" class="menu__link">Login</router-link>
      </li> 
      <li class="menu__item">
        <router-link to="/create" class="menu__link">Sign in</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "HeaderLoggedOut"

}
</script>

<style lang="scss">
  .menu__lista {
    display: flex;

    .menu__link {
      transition: all ease-in-out 0.2s;
      text-decoration: none;
      margin-right: 1.25rem;
      
      &:hover {
        color: red;
      }
    }
  }
</style>