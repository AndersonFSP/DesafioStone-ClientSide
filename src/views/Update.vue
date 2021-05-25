<template>
  <div class="container">
    <form @submit.prevent="submit" class="form">
      <FormBox title="Update Account">
        <FormGroup 
          label="Name *"
          :hasError="campos_invalidos.name"
          menssagemErro="Name is required."
        >
          <CustomInput 
            v-model="form.name"
            placeholder="Name" 
          />  
        </FormGroup>
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
import { mapActions, mapGetters } from 'vuex';
import store from '../store/modules/auth';

export default {
  extends: {
    ...Formulario
  },
  data(vm) {
    const name = store.state.user.name;
    const email = store.state.user.email;
    return { 
      form: {
        name,
        email,
        password: ""
      }
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['update']),
 
    async submit() {
      if(!this.validarSubmit()) 
        return ;

      try {
        await this.update(this.form); 
        this.$swal.fire({
          title: 'Update successfully',
          position: 'top-end',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
       });
       const vm = this;
       setTimeout(function() { 
         vm.$router.push({name: "Login"});
       }, 2000);
      }catch {
        this.$swal.fire({
          title: 'There was an error updating the user',
          position: 'top-end',
          icon: 'error',
          showConfirmButton: false,
          confirmButtonColor: '#e00f00',
          timer: 1500,
       });
      }
    },
    
    validacoes() {
      let { email, password, name } = this.form;
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