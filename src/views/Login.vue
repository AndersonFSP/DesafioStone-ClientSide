<template>
  <div class="container">
    <form @submit.prevent="submit" class="form">
      <FormBox title="Login">
        <FormGroup 
          label="E-mail *"
          :hasError="campos_invalidos.email"
          menssagemErro="e-mail não informado"
        >
          <CustomInput 
            v-model="form.email"
            placeholder="Digite o e-mail" 
          />  
        </FormGroup>
        <FormGroup 
          label="Senha *"
          :hasError="campos_invalidos.password"
          menssagemErro="e-mail não informado"
        >
          <CustomInput 
            v-model="form.password" 
            placeholder="Digite o e-mail" 
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
import Formulario from '../HighOrderComponents/Formulario';
import { mapActions } from 'vuex';

export default {
  extends: {
    ...Formulario
  },
  data() {
    return { 
      tryFailed: false,
      form: {
        email: "",
        password: ""
      }
    }
  },
  computed: {
    failed() {
      return this.tryFailed 
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
          title: 'Login realizado com sucesso',
          position: 'top-end',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
       });
       const vm = this;
       setTimeout(function(){ 
         vm.$router.push({name: "Home"});
       }, 2000);
      }catch {
        this.$swal.fire({
          title: 'Email ou senha incorretos',
          position: 'top-end',
          icon: 'error',
          showConfirmButton: false,
          confirmButtonColor: '#e00f00',
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

  .failed {
    text-align: center;
    color: tomato;
  }
 
</style>