<template>
  <div class="container">
    <form class="form">
      <FormBox title="Login">
        <FormGroup label="E-mail *">
          <CustomInput placeholder="Informe o nome" v-model="form.email"/>  
        </FormGroup>
        <FormGroup label="Senha *">
          <CustomInput placeholder="Informe o e-mail" v-model="form.password"/>  
        </FormGroup>
        <div class="form__submit">
          <Btn text="submit"/>
        </div>
      </FormBox>
    </form>
  </div>
</template>

<script>
import FormGroup from '../components/buttons/FormGroup';
import CustomInput from '../components/buttons/CustomInput';
import Btn from '../components/buttons/Btn';
import FormBox from '../components/formbox/FormBox';

export default {
  components: {
    FormGroup,
    CustomInput,
    Btn,
    FormBox
  },
  
  data() {
    return { 
      form: {
        email: "",
        password: ""
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
 
    .form__submit {
      display: flex;
      justify-content: center;
      margin: 1rem 0 2rem 0;
    }
 
</style>