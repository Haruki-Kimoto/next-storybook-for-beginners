'use client';

import { getFormProps, getInputProps, useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useFormState } from 'react-dom';

import { loginAction } from 'lib/actions/auth';
import { validation } from 'lib/validations/auth';

export default function Login({ onSubmit }: { onSubmit: typeof loginAction }) {
  const [lastResult, action] = useFormState(onSubmit, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: validation });
    },
    shouldValidate: 'onBlur',
  });
  return (
    <Container component="main" maxWidth="xs">
      <Box className="mt-16 flex flex-col items-center">
        <Typography component="h1" variant="h5" color="primary">
          業務管理システム
        </Typography>
        <Box component="form" action={action} {...getFormProps(form)} className="mt-2">
          <TextField
            margin="normal"
            required
            fullWidth
            label="メールアドレス"
            autoComplete="email"
            autoFocus
            {...getInputProps(fields.email, { type: 'email' })}
            key={fields.email.key}
            error={!!fields.email.errors}
            helperText={fields.email.errors}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="パスワード"
            autoComplete="current-password"
            {...getInputProps(fields.password, { type: 'password' })}
            key={fields.password.key}
            error={!!fields.password.errors}
            helperText={fields.password.errors}
          />
          <Typography>パスワードを忘れた方は管理者にご連絡ください</Typography>
          {form.errors && <div className="text-center text-red-600">{form.errors}</div>}
          <Button type="submit" fullWidth variant="contained" className="mb-4 mt-6">
            ログイン
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
