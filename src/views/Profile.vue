<template>
  <div class="container">
    <Accounts :user="user"/>
  </div>
</template>

<script>
import Accounts from '../components/accounts/Accounts';
import { mapGetters } from 'vuex';

export default {
  components: {
    Accounts
  },
  computed: {
   ...mapGetters(['user'])
  }
}
</script>

