import React from "react";
import Head from "next/head";
import { GreenLink } from "../src/components/GreenLink";
import { QuestionBottom } from "../src/layouts/AuthLayout";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
  Heading,
} from "@chakra-ui/react";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Adres e-mail jest wymagany")
    .email("Nieprawidłowy adres e-mail"),
  password: yup.string().required("Hasło jest wymagane"),
});

export default function Login() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <Head>
        <title>Zaloguj się do Dives</title>
      </Head>
      <Heading size="lg" fontWeight="normal" mb="4">
        Zaloguj się
      </Heading>
      <VStack as={"form"} onSubmit={handleSubmit(onSubmit)} spacing="6">
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
          <Button type="submit" variant="primary" size="lg" width="100%">
            Zaloguj się
          </Button>
          <Button
            variant="secondaryOutlined"
            size="lg"
            width="100%"
            leftIcon={
              <img src="google-icon.svg" alt="Google Icon" draggable={false} />
            }
          >
            Zaloguj z Google
          </Button>
        </VStack>
      </VStack>
      <QuestionBottom>
        Nie masz konta? <GreenLink href="/signup">Zarejestruj się</GreenLink>
      </QuestionBottom>
    </>
  );
}
