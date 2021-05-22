<template>
  <div>
    <h2>{{ title }} </h2> 
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FormBox",
  props: {
    title: {
      type: String,
      default: "Title"      
    }
  }
}
</script>

<style lang="scss">
  .form {
    background-color:#fff;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    margin-top: 10rem;
    color: #333;
    
    @media screen and(min-width:0) {
      width: 100%;
    }

    @media screen and(min-width:768px) {
      width: 60%;
    }

    @media screen and(min-width:992px) {
      width: 40%;
    }

    h2 {
      padding: 1.5rem;
      text-align: center;
    }
  }
</style>