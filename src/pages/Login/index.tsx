import React, { useState } from 'react';

import FormInput from '../../components/FormInput';
import CustomButton from '../../components/CustomButton';
import { signInWithGoogle } from '../../firebase/firebase-utils';

import { Container, SignInForm, Buttons } from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Save the changes on "email" and "password" and save to setState
  function handleChanges(event: React.FormEvent<HTMLElement>) {
    const { value, name } = event.target as HTMLTextAreaElement;

    name === 'email' ? setEmail(value) : setPassword(value);
  }

  // Save data to firebase
  function handleSubmit(event: React.FormEvent<HTMLElement>) {
    event.preventDefault();

    console.log('Handle submit!');
  }

  return (
    <Container>
      <SignInForm>
        <form onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            label='email'
            value={email}
            handleChange={handleChanges}
            required
          />

          <FormInput
            name='password'
            type='password'
            label='password'
            value={password}
            handleChange={handleChanges}
            required
          />
        </form>

        <Buttons>
          <CustomButton type='submit'>Logar com seu email</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Logar com o Google
          </CustomButton>
        </Buttons>
      </SignInForm>
    </Container>
  );
};

export default Login;
