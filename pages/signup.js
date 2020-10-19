import React from "react";
import Head from "next/head";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import Link from "next/link";
import { Checkbox } from "../components/Checkbox";
import { GreenLink } from "../components/GreenLink";
import {
  InputGroup,
  LogoA,
  QuestionBottom,
  Title,
} from "../layouts/AuthLayout";

export default function Signup() {
  return (
    <>
      <Head>
        <title>Załóż konto w Dives</title>
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
      <Title>Zarejestruj się</Title>
      <InputGroup>
        <Input id="name" label="Imię" />
        <Input id="email" label="Adres e-mail" />
        <Input id="password" label="Hasło" type="password" />
      </InputGroup>
      <Checkbox id="tos" style={{ marginTop: "2rem" }}>
        Zapoznałem się i akceptuję <GreenLink href="tos">Regulamin</GreenLink>{" "}
        oraz <GreenLink href="privacy">Politykę prywatności</GreenLink>
      </Checkbox>
      <Button
        appearance="primary"
        size="lg"
        style={{ marginTop: "2rem", marginBottom: "1rem" }}
        fullWidth
      >
        Zarejestruj się
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
        Masz już konto? <GreenLink href="login">Zaloguj się</GreenLink>
      </QuestionBottom>
    </>
  );
}
