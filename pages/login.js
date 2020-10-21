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
import { useForm, Controller } from "react-hook-form";

export default function Login() {
  const { handleSubmit, control, errors } = useForm();
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
          <Controller
            as={<Input name="email" label="Adres e-mail" />}
            name="email"
            defaultValue=""
            rules={{
              required: "Adres e-mail jest wymagany",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Nieprawidłowy adres e-mail",
              },
            }}
            control={control}
          />
          {errors.email && <span>{errors.email.message}</span>}
          <Controller
            name="password"
            as={<Input name="password" label="Hasło" />}
            type="password"
            defaultValue=""
            rules={{ required: true }}
            control={control}
          />
          {errors.password && <span>This field is required</span>}
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
