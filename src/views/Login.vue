<template>
  <div class="container">
    <form @submit.prevent="submit" class="form">
      <FormBox title="Login">
        <FormGroup 
          label="E-mail *"
          :hasError="campos_invalidos.email"
          menssagemErro="E-mail is required."
        >
          <CustomInput 
            v-model="form.email"
            placeholder="E-mail" 
          />  
        </FormGroup>
        <FormGroup 
          label="Password *"
          :hasError="campos_invalidos.password"
          menssagemErro="Password is required."
        >
          <CustomInput 
            v-model="form.password" 
            placeholder="Password" 
            type="password"
          />  
        </FormGroup>
        <div class="form__submit-area">
          <Btn text="submit"/>
        </div>
      </FormBox>
    </form>
  </div>
</template>

<script>
import Formulario from '../HighOrderComponents/Formulario';
import { mapActions } from 'vuex';

export default {
  extends: {
    ...Formulario
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

    async submit() {
      if(!this.validarSubmit()) 
        return ;

      try {
        await this.login(this.form); 
        this.$swal.fire({
          title: 'Login successfully',
          position: 'top-end',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
       });
       const vm = this;
       setTimeout(function() { 
         vm.$router.push({name: "Select"});
       }, 2000);
      }catch {
        this.$swal.fire({
          title: 'Wrong email or password',
          position: 'top-end',
          icon: 'error',
          showConfirmButton: false,
          confirmButtonColor: '#e00f00',
          timer: 1500,
       });
      }
    },
    
    validacoes() {
      let { email, password } = this.form;
      this.campos_invalidos = {
        email: !email,
        password: !password
      };
      let validacoes = [
        { invalido: this.campos_invalidos.email },
        { invalido: this.campos_invalidos.password },
      ];

      return validacoes;
    }
  },
}
</script>

<style lang="scss">
  .form__submit-area {
    display: flex;
    justify-content: center;
    margin: 1rem 0 2rem 0;
  }

  .failed {
    text-align: center;
    color: tomato;
  }
 
</style>