import React, { Component } from 'react';
import FormularioCadastro from "./componentes/formularioCadastro/FormularioCadastro";

import { Container, Typography, ScopedCssBaseline } from '@mui/material';

class App extends Component {
  render() {
    return (
      <ScopedCssBaseline>
        <Container component="article" max-width="sm">
            <Typography variant="h2" align="center" color="lightblue">Formulário de cadastro</Typography>
            <FormularioCadastro aoEnviar={aoEnviarForm} verificarCpf={aoEnviarCpf} />      
        </Container>
      </ScopedCssBaseline>
    );
  } 
}


//recebe dados

function aoEnviarForm(dados) {
  console.log(dados);
  alert('Cadastro efetivado com sucesso.')
}


//verifica numero

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}


//valida cpf

function aoEnviarCpf(cpf) {
  if (cpf.length !== 11) {
    return {cpf: {valido: false, texto: "CPF deve ter 11 dígitos."}};
  } else if (!isNumber(cpf)) {
    return {cpf: {valido: false, texto: "CPF inválido."}};
    }  else {
        return {cpf: {valido: true, texto: ""}};
      }
}

export default App;
