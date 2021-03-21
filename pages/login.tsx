import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import AuthLayout, { QuestionBottom } from '../src/layouts/AuthLayout';
import DivesLink from '../src/components/DivesLink';
import { useLoginLazyQuery, useUserQuery } from '../src/generated/graphql';
import connectionErrorToast from '../src/toast';
import { LayoutProperty } from '../src/types';

const ns = ['login', 'auth', 'common'];

interface LoginFields {
  email: string;
  password: string;
}

const Login: NextPage & LayoutProperty = () => {
  const { t } = useTranslation(ns);
  const router = useRouter();
  const toast = useToast();

  const schema = yup.object().shape({
    email: yup
      .string()
      .required(t`auth:emailRequired`)
      .email(t`auth:emailInvalid`),
    password: yup.string().required(t`auth:passwordRequired`),
  });

  const { register, handleSubmit, errors, setError } = useForm<LoginFields>({
    resolver: yupResolver(schema),
  });

  useUserQuery({
    onCompleted: () => router.push('/dashboard'),
  });

  const [login, { loading }] = useLoginLazyQuery({
    onCompleted: () => router.push('/dashboard'),
    onError: error => {
      if (error.graphQLErrors.length) {
        const errorMessage = error.message;
        if (errorMessage === 'No account with provided email') {
          setError('email', {
            message: t`emailWrong`,
          });
        } else if (errorMessage === 'Invalid credentials') {
          setError('password', {
            message: t`passwordWrong`,
          });
        } else {
          console.error('Unreachable');
        }
      }
      if (error.networkError) {
        toast(connectionErrorToast);
        console.error(error.message);
      }
    },
  });

  const onSubmit: SubmitHandler<LoginFields> = async submittedData => {
    login({
      variables: {
        options: {
          email: submittedData.email,
          password: submittedData.password,
        },
      },
    });
  };

  return (
    <>
      <Head>
        <title>{t`title`}</title>
      </Head>
      <Heading size="lg" fontWeight="normal" mb="4">
        {t`common:login`}
      </Heading>
      <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing="6">
        <VStack width="100%" spacing="4">
          <FormControl id="email" isInvalid={!!errors.email} isRequired>
            <FormLabel>{t`auth:email`}</FormLabel>
            <Input
              type="email"
              name="email"
              placeholder={t`auth:emailPlaceholder`}
              ref={register}
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
              ref={register}
              variant="flushed"
            />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>
        </VStack>
        <VStack width="100%" spacing="3">
          <Button type="submit" variant="primary" size="lg" width="100%" isLoading={loading}>
            {t`common:login`}
          </Button>
          <Button
            variant="secondaryOutlined"
            size="lg"
            width="100%"
            leftIcon={<img src="google-icon.svg" alt="Google Icon" draggable={false} />}
          >
            {t`auth:loginWithGoogle`}
          </Button>
        </VStack>
      </VStack>
      <QuestionBottom>
        {t`accountQuestion`} <DivesLink href="/signup">{t`common:signup`}</DivesLink>
      </QuestionBottom>
    </>
  );
};

Login.layout = page => <AuthLayout>{page}</AuthLayout>;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  if (!locale) throw new Error('GetStaticProps: missing locale for i18n in getStaticProps');
  return {
    props: {
      ...(await serverSideTranslations(locale, ns)),
    },
  };
};

export default Login;
