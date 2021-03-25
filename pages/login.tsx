import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AuthLayout, { QuestionBottom } from '../src/layouts/AuthLayout';
import DivesLink from '../src/components/DivesLink';
import { useLoginLazyQuery, useUserQuery } from '../src/generated/graphql';
import connectionErrorToast from '../src/toast';
import { NextPageWithLayout } from '../src/types';

interface LoginFields {
  email: string;
  password: string;
}

const Login: NextPageWithLayout = () => {
  const { t } = useTranslation('login');
  const router = useRouter();
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);

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
      <NextSeo title={t`title`} />
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
            <InputGroup>
              <Input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="********"
                ref={register}
                variant="flushed"
              />
              <InputRightElement width="3rem">
                <IconButton
                  aria-label="Show password"
                  aria-pressed={showPassword}
                  variant="inputButton"
                  isRound
                  onClick={() => setShowPassword(show => !show)}
                  icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                />
              </InputRightElement>
            </InputGroup>
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

// getStaticProps is needed on pages with Layout because of this bug:
// https://github.com/vinissimus/next-translate/issues/486
export const getStaticProps: GetStaticProps = async () => ({
  props: {},
});

export default Login;
