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
      form: {},
      campos_invalidos: {}
    }
  },
  methods: {
    validarSubmit() {
      let validacoes = this.validacoes();
      let erros = validacoes.filter(campo => campo.invalido);
      this.tryFailed = false
      return erros.length == 0;
    },
  }
}
</script>