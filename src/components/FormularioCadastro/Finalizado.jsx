import React from 'react';
import { Container, Box, Typography } from '@mui/material';


function Finalizado() {
    return (
        <Container fixed maxWidth="sm" fontFamily="Luxurious Roman">
            <Box sx={{ p: 2, border: '1px solid grey', borderRadius: '15px 10px 15px 10px', mt: '6rem'}} >
                <Typography variant="h4" align="center" color="green" >Cadastro efetivado com sucesso!</Typography>
            </Box>
        </Container>
    );
}

export default Finalizado;