<template>
  <nav class="menu">
    <ul class="menu__lista">
      <li class="menu__item">
        <router-link to="/login" class="menu__link ativo">Login</router-link>
      </li> 
      <li class="menu__item">
        <router-link to="/create" class="menu__link">Cadastre-se</router-link>
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
      text-decoration: none;
      margin-right: 1.25rem;
      color: #333;

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>