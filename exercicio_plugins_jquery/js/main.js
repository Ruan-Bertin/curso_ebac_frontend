$(document).ready(function(){
  $('#cpf').mask('000.000.000-00')
  $('#cep').mask('00000-000')

  $('form').validate({
    rules:{
      nome: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      telefone: {
        required: true
      },
      cpf: {
        required: true
      },
      endereco: {
        required: true
      },
      cep: {
        required: false
      }
    },
    messages: {
      nome: 'Por favor insira o nome completo',
      email: 'Por favor insira seu E-mail',
      telefone: 'Por favor insira seu telefone',
      cpf: 'por favor insira seu CPF',
      endereco: 'Por favor insira o endereço completo'
    }
  })
})