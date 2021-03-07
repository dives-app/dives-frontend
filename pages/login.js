import React from "react";
import Head from "next/head";
import Input from "../components/Input";
import Link from "next/link";
import { GreenLink } from "../components/GreenLink";
import {
  InputGroup,
  LogoA,
  QuestionBottom,
  Title,
} from "../layouts/AuthLayout";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { Button } from "@chakra-ui/react";

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
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Head>
        <title>Zaloguj się – Dives</title>
      </Head>
      <Link href="/" passHref>
        <LogoA>
          <Image
            width="169"
            height="77"
            src="/logo-horizontal.svg"
            alt="Dives Logo"
            draggable={false}
          />
        </LogoA>
      </Link>
      <Title>Zaloguj się</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Input
            name="email"
            label="Adres e-mail"
            inputRef={register}
            errors={errors.email}
          />
          <Input
            name="password"
            label="Hasło"
            type="password"
            inputRef={register}
            errors={errors.password}
          />
        </InputGroup>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          width="100%"
          mt="3.3rem"
          mb="1rem"
        >
          Zaloguj się
        </Button>
      </form>
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
      <QuestionBottom>
        Nie masz konta? <GreenLink href="signup">Zarejestruj się</GreenLink>
      </QuestionBottom>
    </>
  );
}
