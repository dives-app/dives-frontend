import React from 'react';
import Head from 'next/head';
import {
  useToast,
  Button,
  Checkbox,
  FormControl,
  Input,
  FormErrorMessage,
  FormLabel,
  Heading,
  VStack,
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SchemaOf } from 'yup';
import { useRouter } from 'next/router';
import { useRegisterMutation, useUserQuery } from '../src/generated/graphql';
import AuthLayout, { QuestionBottom } from '../src/layouts/AuthLayout';
import DivesLink from '../src/components/DivesLink';
import connectionErrorToast from '../src/toast';

interface RegisterOptions {
  email: string;
  name: string;
  password: string;
  birthDate: string;
}

type RegisterFormFields = Omit<RegisterOptions & { tos: boolean }, 'birthDate'>;

const schema: SchemaOf<RegisterFormFields> = yup
  .object()
  .shape({
    name: yup.string().required('Imię jest wymagane'),
    email: yup.string().required('Adres e-mail jest wymagany').email('Nieprawidłowy adres e-mail'),
    password: yup.string().required('Hasło jest wymagane'),
    tos: yup.bool().oneOf([true], 'Musisz zaakceptować Regulamin i Politykę prywatności'),
  })
  .defined();

export default function Signup() {
  const { register: registerInput, handleSubmit, errors, setError } = useForm<RegisterFormFields>({
    resolver: yupResolver(schema),
  });

  const toast = useToast();
  const router = useRouter();
  useUserQuery({
    onCompleted: () => router.push('/dashboard'),
  });
  const [register, { loading }] = useRegisterMutation({
    onCompleted: () => router.push('/dashboard'),
    onError: error => {
      if (error.graphQLErrors.length) {
        const errorCode = error.graphQLErrors[0].extensions?.code;
        if (errorCode === 'EMAIL_ALREADY_IN_USE') {
          setError('email', { message: 'Podany e-mail jest zajęty' });
        } else if (errorCode === 'INVALID_PASSWORD') {
          setError('password', {
            message:
              'Hasło powinno mieć długość co najmniej 8 znaków i zawierać co najmniej jedną cyfrę, wielką literę, małą literę i znak specjalny.',
          });
        }
      }
      if (error.networkError) {
        console.error(error.message);
        toast(connectionErrorToast);
      }
    },
  });

  const onSubmit: SubmitHandler<RegisterFormFields> = async submittedData => {
    await register({
      variables: {
        options: {
          name: submittedData.name,
          email: submittedData.email,
          password: submittedData.password,
          birthDate: '2000-01-03',
        },
      },
    });
  };

  return (
    <>
      <Head>
        <title>Załóż konto w Dives</title>
      </Head>
      <AuthLayout>
        <Heading size="lg" fontWeight="normal" mb="4">
          Zarejestruj się
        </Heading>
        <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing="6">
          <VStack width="100%" spacing="4">
            <FormControl id="name" isInvalid={!!errors.name} isRequired>
              <FormLabel>Imię</FormLabel>
              <Input name="name" placeholder="Jan" ref={registerInput} variant="flushed" />
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            </FormControl>
            <FormControl id="email" isInvalid={!!errors.email} isRequired>
              <FormLabel>Adres e-mail</FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="jan.kowalski@example.com"
                ref={registerInput}
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
                ref={registerInput}
                variant="flushed"
              />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>
          </VStack>
          <Checkbox
            name="tos"
            ref={registerInput}
            errors={errors.tos}
            isInvalid={!!errors.tos}
            isRequired
          >
            Zapoznałem się i akceptuję <DivesLink href="/tos">Regulamin</DivesLink> oraz{' '}
            <DivesLink href="/privacy">Politykę prywatności</DivesLink>
          </Checkbox>
          <VStack width="100%" spacing="3">
            <Button type="submit" variant="primary" size="lg" width="100%" isLoading={loading}>
              Zarejestruj się
            </Button>
            <Button
              variant="secondaryOutlined"
              size="lg"
              leftIcon={<img src="google-icon.svg" alt="Google Icon" draggable={false} />}
              width="100%"
            >
              Zaloguj z Google
            </Button>
          </VStack>
        </VStack>
        <QuestionBottom>
          Masz już konto? <DivesLink href="/login">Zaloguj się</DivesLink>
        </QuestionBottom>
      </AuthLayout>
    </>
  );
}
