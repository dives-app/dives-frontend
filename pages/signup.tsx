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
import { QuestionBottom } from "../src/layouts/AuthLayout";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().required("Imię jest wymagane"),
  email: yup
    .string()
    .required("Adres e-mail jest wymagany")
    .email("Nieprawidłowy adres e-mail"),
  password: yup.string().required("Hasło jest wymagane"),
  tos: yup
    .bool()
    .oneOf([true], "Musisz zaakceptować Regulamin i Politykę prywatności"),
});

export default function Signup() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <Head>
        <title>Załóż konto w Dives</title>
      </Head>
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
              ref={register}
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
        <Checkbox
          name="tos"
          ref={register}
          errors={errors.tos}
          isInvalid={!!errors.tos}
          isRequired
        >
          Zapoznałem się i akceptuję{" "}
          <GreenLink href="/tos">Regulamin</GreenLink> oraz{" "}
          <GreenLink href="/privacy">Politykę prywatności</GreenLink>
        </Checkbox>
        <VStack width="100%" spacing="3">
          <Button type="submit" variant="primary" size="lg" width="100%">
            Zarejestruj się
          </Button>
          <Button
            variant="secondaryOutlined"
            size="lg"
            leftIcon={
              <img src="google-icon.svg" alt="Google Icon" draggable={false} />
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
    </>
  );
}
