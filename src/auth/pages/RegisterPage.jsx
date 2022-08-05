import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLoayout";

export const RegisterPage = ()=> {
    return (
        <AuthLayout tittle='Crear Cuenta'>
             <form>
                    <Grid container>

                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField label="Nombre" type="text" placeholder="Nombre Completo" fullWidth />
                        </Grid>

                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField label="Email" type="email" placeholder="correo@prueba.com" fullWidth />
                        </Grid>

                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField label="Password" type="password" placeholder="Password" fullWidth />
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

                        <Grid item xs={12} >
                            <Button variant="contained" fullWidth>Crear Cuenta</Button>
                        </Grid>

                        

                        <Grid container direction="row" justifyContent="end">
                            <Typography sx={{mr : 1}}>Ya tienes cuenta?</Typography>
                            <Link component={RouterLink} color="inherit" to="/auth/login">
                            Ingresar
                            </Link>
                            
                        </Grid>

                    </Grid>
                </form>
        </AuthLayout>
    )
}