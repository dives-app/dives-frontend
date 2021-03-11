import React from "react";
import Head from "next/head";
import {
  Button,
  Checkbox,
  FormControl,
  Input,
  FormErrorMessage,
  FormLabel,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { GreenLink } from "../src/components/GreenLink";
import AuthLayout, { QuestionBottom } from "../src/layouts/AuthLayout";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchemaOf } from "yup";
import { useRegisterMutation } from "../src/generated/graphql";
import { useRouter } from "next/router";

interface RegisterOptions {
  email: string;
  name: string;
  password: string;
  birthDate: string;
}

type RegisterFormFields = Omit<RegisterOptions & { tos: boolean }, "birthDate">;

const schema: SchemaOf<RegisterFormFields> = yup
  .object()
  .shape({
    name: yup.string().required("Imię jest wymagane"),
    email: yup
      .string()
      .required("Adres e-mail jest wymagany")
      .email("Nieprawidłowy adres e-mail"),
    password: yup.string().required("Hasło jest wymagane"),
    tos: yup
      .bool()
      .oneOf([true], "Musisz zaakceptować Regulamin i Politykę prywatności"),
  })
  .defined();

export default function Signup() {
  const {
    register: registerInput,
    handleSubmit,
    errors,
    setError,
    formState: { isSubmitting },
  } = useForm<RegisterFormFields>({
    resolver: yupResolver(schema),
  });

  const [, register] = useRegisterMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<RegisterFormFields> = async (data) => {
    const response = await register({
      options: {
        name: data.name,
        email: data.email,
        password: data.password,
        birthDate: "2000-01-03",
      },
    });
    if (response.error) {
      const errorCode = response.error.graphQLErrors[0].extensions?.code;
      switch (errorCode) {
        case "EMAIL_ALREADY_IN_USE":
          setError("email", { message: "Podany e-mail jest zajęty" });
          break;
        case "INVALID_PASSWORD":
          setError("password", {
            message:
              "Poprawne hasło powinno zawierać conajmniej jedną cyfrę, małą literę, wielką literę i znak specjalny oraz powinno być długości conajmniej 8 znaków.",
          });
          break;
      }
    }
    if (response.data) {
      router.push("/login");
    }
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
              <Input
                name="name"
                placeholder="Jan"
                ref={registerInput}
                variant="flushed"
              />
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
            Zapoznałem się i akceptuję{" "}
            <GreenLink href="/tos">Regulamin</GreenLink> oraz{" "}
            <GreenLink href="/privacy">Politykę prywatności</GreenLink>
          </Checkbox>
          <VStack width="100%" spacing="3">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              width="100%"
              isLoading={isSubmitting}
            >
              Zarejestruj się
            </Button>
            <Button
              variant="secondaryOutlined"
              size="lg"
              leftIcon={
                <img
                  src="google-icon.svg"
                  alt="Google Icon"
                  draggable={false}
                />
              }
              width="100%"
            >
              Zaloguj z Google
            </Button>
          </VStack>
        </VStack>
        <QuestionBottom>
          Masz już konto? <GreenLink href="/login">Zaloguj się</GreenLink>
        </QuestionBottom>
      </AuthLayout>
    </>
  );
}
