import { Link as RouterLink } from 'react-router-dom'
import { Google } from '@mui/icons-material'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth/thunks'
import { useMemo } from 'react'

const formData = {
    email: '',
    password: ''
}


export const LoginPage = () => {

    const { status, errorMessage } = useSelector(state => state.auth);

    const dispatch = useDispatch()


    const { email, password, onInputChange } = useForm(formData);

    const isAuthenticating = useMemo(() => status === 'checking', [status])

    const onSubmit = (event) => {
        event.preventDefault();

        console.log({ email, password });

        dispatch(startLoginWithEmailPassword({ email, password }))
    }

    const onGoogleSignIn = (event) => {

        console.log('googleSingIn')
        dispatch(startGoogleSignIn())
    }

    return (
        <AuthLayout title='Login'>
            <form onSubmit={onSubmit}>

                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField name='email' value={email} onChange={onInputChange} label='Correo' type='email' fullWidth />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField name='password' value={password} onChange={onInputChange} label='Contraseña' type='password' fullWidth />
                    </Grid>

                    <Grid container display={!!errorMessage ? '' : 'none'} sx={{ mt: 2 }}>
                        <Grid item xs={12} >
                            <Alert severity='error'>{errorMessage}</Alert>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={6}>
                            <Button disabled={isAuthenticating} type="submit" variant='contained' fullWidth >
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button disabled={isAuthenticating} onClick={onGoogleSignIn} variant='contained' fullWidth >
                                <Google />
                                <Typography sx={{ ml: 1 }} >Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container direction='row' justifyContent='end'>
                    <Link component={RouterLink} color='inherit' to='/auth/register' >
                        Crear una cuenta
                    </Link>
                </Grid>

            </form>
        </AuthLayout>
    )
}
