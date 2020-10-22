import React from "react";
import Head from "next/head";
import { Button } from "../components/Button";
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
          <img
            width="169"
            height="77"
            src={require("public/logo-horizontal.svg")}
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
          appearance="primary"
          size="lg"
          style={{ marginTop: "3.3rem", marginBottom: "1rem" }}
          fullWidth
        >
          Zaloguj się
        </Button>
      </form>
      <Button
        appearance="secondaryOutlined"
        size="lg"
        leftIcon={
          <img src="google-icon.svg" alt="Google Icon" draggable={false} />
        }
        fullWidth
      >
        Zaloguj z Google
      </Button>
      <QuestionBottom>
        Nie masz konta? <GreenLink href="signup">Zarejestruj się</GreenLink>
      </QuestionBottom>
    </>
  );
}
