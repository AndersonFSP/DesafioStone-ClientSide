<template>
  <div class="container">
    <form @submit.prevent="submit" class="form">
      <FormBox title="Cadastrar Usuário">
        <FormGroup 
          label="Nome *"
          :hasError="campos_invalidos.name"
          menssagemErro="nome não informado"
        >
          <CustomInput 
            v-model="form.name"
            placeholder="Digite o nome" 
          />  
        </FormGroup>
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
      form: {
        name: "",
        email: "",
        password: ""
      }
    }
  },
  methods: {
    ...mapActions(['createUser']),
    
    async submit() {
      if(!this.validarSubmit()) 
        return ;

      try {
        await this.createUser(this.form);
        this.$swal.fire({
          title: 'Usuario criado com sucesso',
          position: 'top-end',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
        });
      const vm = this;
      setTimeout(function(){ 
        vm.$router.push({name: "Login"});
      }, 2000);
      }catch {
        this.$swal.fire({
          title: 'Ocorreu um erro na criação do usuário',
          position: 'top-end',
          icon: 'error',
          showConfirmButton: false,
          confirmButtonColor: '#e00f00',
          timer: 1500,
      });
      }
    },
    
    validacoes() {
      let { name, email, password } = this.form;
      this.campos_invalidos = {
        name: !name,
        email: !email,
        password: !password
      };
      let validacoes = [
        { invalido: this.campos_invalidos.name },
        { invalido: this.campos_invalidos.email },
        { invalido: this.campos_invalidos.password },
      ];

      return validacoes;
    }
  },
}
</script>

<style lang="scss">
  .form__submit {
    display: flex;
    justify-content: center;
    margin: 1rem 0 2rem 0;
  }
</style>