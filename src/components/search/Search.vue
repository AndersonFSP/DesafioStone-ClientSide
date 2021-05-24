<template>
  <form class="form-search" @submit.prevent="searchContent">
    <CustomInput v-model="search" :placeholder="placeholder"/>
    <SearchBtn/>
  </form>
</template>

<script>
import CustomInput from '../buttons/CustomInput';
import SearchBtn from '../buttons/SearchBtn';

export default {
  name: "search",
  components: {
    CustomInput,
    SearchBtn
  },
  props: {
    searching: String
  },
  data() {

    return {
      search: ""
    }
  },
  computed: {
    placeholder() {
      return `Search ${this.searching}..`
    }
  },
  methods: {
    searchContent() {
      this.$emit("search", this.search)
    }
  },
}
</script>

<style lang="scss">
  .form-search {
    display: flex;
    justify-content: center;
    padding: 3rem;

    @media screen and(min-width:0) {
      flex-direction: row;
    }
    @media screen and(min-width: 552px) {
      flex-direction: row;
    }
  }
</style>