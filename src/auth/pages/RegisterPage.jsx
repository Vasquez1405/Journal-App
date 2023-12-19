import { Link as RouterLink} from 'react-router-dom'
import { Google } from '@mui/icons-material'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks'

const formData = {
    email: '',
    password:'',
    displayName: '',
}

const formValidations = {
    email: [(value)=> value.includes('@'), "El correo debe tener un @"],
    password: [(value)=> value.length >= 6, "la contraseña debe tener mas de 6 caracteres"],
    displayName: [(value)=> value.length >= 1, "El nombre es obligatorio"],
}

export const RegisterPage = () => {

    const dispatch = useDispatch()

    const [formSubmitted, setFormSubmitted] = useState(false)

    const {status, errorMessage} = useSelector(state => state.auth);

    const isCheckingAuthentication = useMemo(() => status === 'checking', [status])

    const {formState, displayName, email, password, onInputChange, isFormValid, emailValid, passwordValid,displayNameValid} = useForm(formData, formValidations);

    console.log(displayNameValid)

    const onSubmit = (event) =>{
        event.preventDefault()
        setFormSubmitted(true)

        if(!isFormValid) return;

        dispatch(startCreatingUserWithEmailPassword(formState))
    }

    return (
        <AuthLayout title='Crear Cuenta'>
            <h1>{!isFormValid ? 'Formulario Invalido' : ' '}</h1>
            <form onSubmit={onSubmit}>

                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField name='displayName' value={displayName} onChange={onInputChange} error={!!displayNameValid && formSubmitted} helperText={displayNameValid} label='Nombre completo' type='texto' fullWidth />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField name='email' value={email} onChange={onInputChange} error={!!emailValid && formSubmitted} helperText={emailValid} label='Correo' type='email' fullWidth />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField name='password' value={password} onChange={onInputChange} error={!!passwordValid && formSubmitted} helperText={passwordValid} label='Contraseña' type='password' fullWidth />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={6} display={!!errorMessage ? '' : 'none'}>
                            <Alert severity='error'>{errorMessage}</Alert>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Button disabled={isCheckingAuthentication} type='submit' variant='contained' fullWidth >
                                Crear cuenta
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container direction='row' justifyContent='end'>
                    <Link component={RouterLink} color='inherit' to='/auth/login' >
                        Ya tienes cuenta?
                    </Link>
                </Grid>

            </form>
        </AuthLayout>
    )
}
