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
import { Trans, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRegisterMutation, useUserQuery } from '../src/generated/graphql';
import AuthLayout, { QuestionBottom } from '../src/layouts/AuthLayout';
import DivesLink from '../src/components/DivesLink';
import connectionErrorToast from '../src/toast';

const ns = ['signup', 'auth', 'common'];

interface RegisterOptions {
  email: string;
  name: string;
  password: string;
  birthDate: string;
}

type RegisterFormFields = Omit<RegisterOptions & { tos: boolean }, 'birthDate'>;

export default function Signup() {
  const { t } = useTranslation(ns);
  const router = useRouter();
  const toast = useToast();

  const schema: SchemaOf<RegisterFormFields> = yup
    .object()
    .shape({
      name: yup.string().required(t`nameRequired`),
      email: yup
        .string()
        .required(t`auth:emailRequired`)
        .email(t`auth:emailInvalid`),
      password: yup.string().required(t`auth:passwordRequired`),
      tos: yup.bool().oneOf([true], t`tosRequired`),
    })
    .defined();

  const { register: registerInput, handleSubmit, errors, setError } = useForm<RegisterFormFields>({
    resolver: yupResolver(schema),
  });

  useUserQuery({
    onCompleted: () => router.push('/dashboard'),
  });

  const [register, { loading }] = useRegisterMutation({
    onCompleted: () => router.push('/dashboard'),
    onError: error => {
      if (error.graphQLErrors.length) {
        const errorCode = error.graphQLErrors[0].extensions?.code;
        if (errorCode === 'EMAIL_ALREADY_IN_USE') {
          setError('email', { message: t`wrongEmail` });
        } else if (errorCode === 'INVALID_PASSWORD') {
          setError('password', {
            message: t`wrongPassword`,
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
        <title>{t`title`}</title>
      </Head>
      <AuthLayout>
        <Heading size="lg" fontWeight="normal" mb="4">
          {t`common:signup`}
        </Heading>
        <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing="6">
          <VStack width="100%" spacing="4">
            <FormControl id="name" isInvalid={!!errors.name} isRequired>
              <FormLabel>{t`name`}</FormLabel>
              <Input
                name="name"
                placeholder={t`namePlaceholder`}
                ref={registerInput}
                variant="flushed"
              />
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            </FormControl>
            <FormControl id="email" isInvalid={!!errors.email} isRequired>
              <FormLabel>{t`auth:email`}</FormLabel>
              <Input
                type="email"
                name="email"
                placeholder={t`auth:emailPlaceholder`}
                ref={registerInput}
                variant="flushed"
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
            <FormControl id="password" isInvalid={!!errors.password} isRequired>
              <FormLabel>{t`auth:password`}</FormLabel>
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
            <Trans i18nKey="tosCheckbox" t={t}>
              Zapoznałem się i akceptuję <DivesLink href="/tos">Regulamin</DivesLink> oraz
              <DivesLink href="/privacy">Politykę prywatności</DivesLink>
            </Trans>
          </Checkbox>
          <VStack width="100%" spacing="3">
            <Button type="submit" variant="primary" size="lg" width="100%" isLoading={loading}>
              {t`common:signup`}
            </Button>
            <Button
              variant="secondaryOutlined"
              size="lg"
              leftIcon={<img src="google-icon.svg" alt="Google Icon" draggable={false} />}
              width="100%"
            >
              {t`auth:loginWithGoogle`}
            </Button>
          </VStack>
        </VStack>
        <QuestionBottom>
          {t`accountQuestion`} <DivesLink href="/login">{t`common:login`}</DivesLink>
        </QuestionBottom>
      </AuthLayout>
    </>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ns)),
  },
});
