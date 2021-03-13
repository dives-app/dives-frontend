import React from 'react';
import Head from 'next/head';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
  Heading,
  useToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import AuthLayout, { QuestionBottom } from '../src/layouts/AuthLayout';
import DivesLink from '../src/components/DivesLink';
import client from '../src/urqlClient';
import { LoginDocument } from '../src/generated/graphql';
import connectionErrorToast from '../src/toast';

interface LoginFields {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().required('Adres e-mail jest wymagany').email('Nieprawidłowy adres e-mail'),
  password: yup.string().required('Hasło jest wymagane'),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    errors,
    setError,
    formState: { isSubmitting },
  } = useForm<LoginFields>({
    resolver: yupResolver(schema),
  });

  const router = useRouter();
  const toast = useToast();

  const onSubmit: SubmitHandler<LoginFields> = async data => {
    const response = await client
      .query(LoginDocument, {
        options: {
          email: data.email,
          password: data.password,
        },
      })
      .toPromise();
    if (response.error?.networkError) {
      console.error(response.error.message);
      toast(connectionErrorToast);
    }
    if (response.error?.graphQLErrors?.length) {
      const errorMessage = response.error.graphQLErrors[0].message;
      if (errorMessage === 'No account with provided email') {
        setError('email', {
          message: 'Konto o podanym adresie e-mail nie istnieje',
        });
      } else if (errorMessage === 'Invalid credentials') {
        setError('password', {
          message: 'Nieprawidłowe hasło',
        });
      } else {
        console.error('Unreachable');
      }
    }
    if (response.data) {
      router.push('/dashboard');
    }
  };

  return (
    <>
      <Head>
        <title>Zaloguj się do Dives</title>
      </Head>
      <AuthLayout>
        <Heading size="lg" fontWeight="normal" mb="4">
          Zaloguj się
        </Heading>
        <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing="6">
          <VStack width="100%" spacing="4">
            <FormControl id="email" isInvalid={!!errors.email} isRequired>
              <FormLabel>Adres e-mail</FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="jan.kowalski@example.com"
                ref={register}
                variant="flushed"
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
            <FormControl id="password" isInvalid={!!errors.password} isRequired>
              <FormLabel>Hasło</FormLabel>
              <Input
                type="password"
                name="password"
                placeholder="********"
                ref={register}
                variant="flushed"
              />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>
          </VStack>
          <VStack width="100%" spacing="3">
            <Button type="submit" variant="primary" size="lg" width="100%" isLoading={isSubmitting}>
              Zaloguj się
            </Button>
            <Button
              variant="secondaryOutlined"
              size="lg"
              width="100%"
              leftIcon={<img src="google-icon.svg" alt="Google Icon" draggable={false} />}
            >
              Zaloguj z Google
            </Button>
          </VStack>
        </VStack>
        <QuestionBottom>
          Nie masz konta? <DivesLink href="/signup">Zarejestruj się</DivesLink>
        </QuestionBottom>
      </AuthLayout>
    </>
  );
}
