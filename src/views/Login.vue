<template>
  <div class="container">
    <form class="formcontent">
      <h2>login</h2>
      <FormGroup label="Nome *">
        <CustomInput placeholder="Informe o nome" v-model="form.nome"/>  
      </FormGroup>
      <FormGroup label="E-mail *">
        <CustomInput placeholder="Informe o e-mail" v-model="form.nome"/>  
      </FormGroup>
    </form>
  </div>
</template>

<script>
import FormGroup from '../components/buttons/FormGroup';
import CustomInput from '../components/buttons/CustomInput';

export default {
  components: {
    FormGroup,
    CustomInput
  },
  
  data() {
    return { 
      form: {
        nome: ""
      }
    }
  }
}
</script>

<style lang="scss">
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .formcontent {
    background-color: grey;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    margin-top: 10rem;
    width: 40%;

    h2 {
      padding: 1.5rem;
      text-align: center;
    }
  }
 
</style>