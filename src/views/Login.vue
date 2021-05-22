<template>
  <div class="container">
    <form @submit.prevent="submit" class="form">
      <FormBox title="Login">
        <FormGroup label="E-mail *">
          <CustomInput 
            v-model="form.email"
            placeholder="Informe o nome" 
          />  
        </FormGroup>
        <FormGroup label="Senha *">
          <CustomInput 
            v-model="form.password" 
            placeholder="Informe o e-mail" 
            type="password"
          />  
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
import { mapActions } from 'vuex';

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
  },
  methods: {
    ...mapActions(['login']),
    submit() {
      this.login(this.form);
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