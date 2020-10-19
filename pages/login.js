import React from "react";
import Head from "next/head";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import Link from "next/link";
import { GreenLink } from "../components/GreenLink";
import {
  InputGroup,
  LogoA,
  QuestionBottom,
  Title,
} from "../layouts/AuthLayout";

export default function Login() {
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
      <InputGroup>
        <Input id="email" label="Adres e-mail" />
        <Input id="password" label="Hasło" type="password" />
      </InputGroup>
      <Button
        appearance="primary"
        size="lg"
        style={{ marginTop: "3.3rem", marginBottom: "1rem" }}
        fullWidth
      >
        Zaloguj się
      </Button>
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
