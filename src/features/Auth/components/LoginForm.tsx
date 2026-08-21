import {
  EmailOutlined,
  LockOutlined,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from '@mui/icons-material';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAuth } from '../../../context/AuthContext';
import { loginSchema, type LoginFormValues } from '../schemas/login.schema';

const textFieldSx = (theme: Theme) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,

    '& fieldset': {
      borderColor: theme.palette.divider,
    },

    '&:hover fieldset': {
      borderColor: theme.palette.text.secondary,
    },

    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
      borderWidth: '1px',
    },
  },

  '& .MuiInputLabel-root': {
    color: theme.palette.text.secondary,
  },

  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.palette.primary.main,
  },

  '& .MuiFormHelperText-root': {
    marginLeft: 0,
  },

  '& .MuiInputBase-input': {
    paddingTop: '14px',
    paddingBottom: '14px',
    color: theme.palette.text.primary,
  },
});

export default function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const handleLogin = (values: LoginFormValues) => {
    const isLoggedIn = login(values.email, values.password);

    if (!isLoggedIn) {
      toast.error('Invalid email or password');
      return;
    }

    toast.success('Welcome back!');
    navigate('/', { replace: true });
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)} autoComplete='off'>
      <div className='flex flex-col gap-5'>
        {/* Email */}
        <Controller
          name='email'
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label='Email address'
              type='email'
              fullWidth
              autoComplete='off'
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
              sx={textFieldSx}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position='start'>
                      <EmailOutlined
                        sx={(theme) => ({
                          fontSize: 20,
                          color: theme.palette.text.secondary,
                        })}
                      />
                    </InputAdornment>
                  ),
                },
              }}
            />
          )}
        />

        {/* Password */}
        <Controller
          name='password'
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label='Password'
              type={showPassword ? 'text' : 'password'}
              fullWidth
              autoComplete='new-password'
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
              sx={textFieldSx}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position='start'>
                      <LockOutlined
                        sx={(theme) => ({
                          fontSize: 20,
                          color: theme.palette.text.secondary,
                        })}
                      />
                    </InputAdornment>
                  ),

                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={() => setShowPassword((previous) => !previous)}
                        aria-label={
                          showPassword ? 'Hide password' : 'Show password'
                        }
                        sx={(theme) => ({
                          color: theme.palette.text.secondary,

                          '&:hover': {
                            color: theme.palette.text.primary,
                          },
                        })}
                      >
                        {showPassword ? (
                          <VisibilityOffOutlined fontSize='small' />
                        ) : (
                          <VisibilityOutlined fontSize='small' />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          )}
        />

        {/* Submit */}
        <div className='pt-2'>
          <Button
            type='submit'
            variant='contained'
            disabled={!isValid}
            fullWidth
            sx={{
              height: '48px',
              borderRadius: '12px',
              fontSize: '15px',
              fontWeight: 600,
              textTransform: 'none',
              background: 'linear-gradient(90deg, #6961ff 0%, #a678e8 100%)',

              '&:hover': {
                background: 'linear-gradient(90deg, #6961ff 0%, #a678e8 100%)',
              },
            }}
          >
            Sign in
          </Button>
        </div>
      </div>
    </form>
  );
}
