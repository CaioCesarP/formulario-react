import React, { useState } from 'react';
import { Container, Button  , Switch, TextField, FormGroup, FormControlLabel   } from '@mui/material';


function FormularioCadastro({aoEnviar, verificarCpf}) {

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(false);
    const [novidades, setNovidades] = useState(false);

    const [error, setError] = useState({cpf:{valido:true, texto:""}});

    return (
        <React.Fragment>
            <form 
            onSubmit={ (event) => 
            {   
                event.preventDefault(); 
                aoEnviar ({
                    nome,
                    sobrenome,
                    cpf,
                    promocoes,
                    novidades
                });
            } 
            }>
                <Container fixed maxWidth="sm">         
                    <TextField
                    value={nome} 
                    onChange={ (event) =>     
                    { 
                        setNome(event.target.value);
                    }} 
                    margin="normal" fullWidth variant="standard"
                    id="nome" label="nome" 
                    />
                    <TextField 
                    value={sobrenome}
                    onChange={ (event) => 
                    {
                        setSobrenome(event.target.value);
                    }}
                    margin="normal" fullWidth variant="standard" 
                    label="sobrenome" 
                    />
                    <TextField 
                    value={cpf}
                    onChange={ (event) => 
                    {
                        setCpf(event.target.value);
                    }}
                    onBlur={ (event) => {
                        const ehValido = verificarCpf(cpf);
                        setError(ehValido);   
                    }}
                    error={!error.cpf.valido}
                    helperText={error.cpf.texto}
                    margin="normal" fullWidth variant="standard" 
                    label="cpf" 
                    />
                    <FormGroup>
                        <FormControlLabel 
                        label="Promoções"
                        control={<Switch 
                        onChange={ (event) => {
                            setPromocoes(event.target.checked);
                        }}
                        checked={promocoes} name="promocoes" color="info" />} 
                        />
                        <FormControlLabel 
                        label="Novidades"
                        control={<Switch 
                        onChange={ (event) => {
                            setNovidades(event.target.checked);
                        }}
                        checked={novidades} name="novidades" size="large" color="info" />} />
                    </FormGroup>
                    <Button type="submit" variant="contained" size="large" color="primary">Cadastrar</Button>               
                </Container>
            </form>
        </React.Fragment>
    );
}
 
export default FormularioCadastro;

/*

- Entender o por que da função não funcionar;

- Resolver a função, implementando logo em seguida todas as validações necessárias;

- Melhorar/adicionar uma funcionalidade do sistema para deixar mais responsivo;

*/