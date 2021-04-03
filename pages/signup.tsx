import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';
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
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRegisterMutation, useUserQuery } from '../src/generated/graphql';
import AuthLayout, { QuestionBottom } from '../src/layouts/AuthLayout';
import DivesLink from '../src/components/DivesLink';
import connectionErrorToast from '../src/toast';
import { NextPageWithLayout } from '../src/types';
import { emailRegex } from '../src/regexes';

interface RegisterOptions {
  email: string;
  name: string;
  password: string;
}

type RegisterFormFields = RegisterOptions & { tos: boolean };

const Signup: NextPageWithLayout = () => {
  const { t } = useTranslation('signup');
  const router = useRouter();
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<RegisterFormFields>();

  useUserQuery({
    onCompleted: () => router.push('/dashboard'),
  });

  const [registerUser] = useRegisterMutation({
    onCompleted: () => router.push('/dashboard'),
    onError: error => {
      setIsSigningIn(false);
      if (error.graphQLErrors.length) {
        const errorCode = error.graphQLErrors[0].extensions?.code;
        if (errorCode === 'EMAIL_ALREADY_IN_USE') {
          setError('email', { message: t`emailWrong` });
        } else if (errorCode === 'INVALID_PASSWORD') {
          setError('password', {
            message: t`passwordWrong`,
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
    setIsSigningIn(true);
    await registerUser({
      variables: {
        options: {
          name: submittedData.name,
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
        {t`common:signup`}
      </Heading>
      <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing="6">
        <VStack width="100%" spacing="4">
          <FormControl id="name" isInvalid={!!errors.name} isRequired>
            <FormLabel>{t`name`}</FormLabel>
            <Input
              placeholder={t`namePlaceholder`}
              autoComplete="given-name"
              variant="flushed"
              {...register('name', { required: t`nameRequired` })}
            />
            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
          </FormControl>
          <FormControl id="email" isInvalid={!!errors.email} isRequired>
            <FormLabel>{t`auth:email`}</FormLabel>
            <Input
              type="email"
              placeholder={t`auth:emailPlaceholder`}
              autoComplete="email"
              variant="flushed"
              {...register('email', {
                required: t`auth:emailRequired`,
                pattern: {
                  value: emailRegex,
                  message: t`auth:emailInvalid`,
                },
              })}
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
          <FormControl id="password" isInvalid={!!errors.password} isRequired>
            <FormLabel>{t`auth:password`}</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                autoComplete="new-password"
                variant="flushed"
                {...register('password', {
                  required: t`auth:passwordRequired`,
                })}
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
        <FormControl id="tos" isInvalid={!!errors.tos} isRequired>
          <Checkbox isInvalid={!!errors.tos} {...register('tos', { required: t`tosRequired` })}>
            <Trans
              i18nKey="signup:tosCheckbox"
              components={{
                termsLink: <DivesLink href="/terms" openInNewTab />,
                privacyLink: <DivesLink href="/privacy" openInNewTab />,
              }}
            />
          </Checkbox>
          <FormErrorMessage>{errors.tos?.message}</FormErrorMessage>
        </FormControl>
        <VStack width="100%" spacing="3">
          <Button type="submit" variant="primary" size="lg" width="100%" isLoading={isSigningIn}>
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
    </>
  );
};

Signup.layout = page => <AuthLayout>{page}</AuthLayout>;

// getStaticProps is needed on pages with Layout because of this bug:
// https://github.com/vinissimus/next-translate/issues/486
export const getStaticProps: GetStaticProps = async () => ({
  props: {},
});

export default Signup;
