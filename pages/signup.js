import React from "react";
import Head from "next/head";
import { Button } from "../components/Button";
import Input from "../components/Input";
import Link from "next/link";
import { Checkbox } from "../components/Checkbox";
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
  const onSubmit = (data) => console.log(data);

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Input
            name="name"
            label="Imię"
            inputRef={register}
            errors={errors.name}
          />
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
        <Checkbox
          name="tos"
          style={{ marginTop: "2rem" }}
          inputRef={register}
          errors={errors.tos}
        >
          Zapoznałem się i akceptuję <GreenLink href="tos">Regulamin</GreenLink>{" "}
          oraz <GreenLink href="privacy">Politykę prywatności</GreenLink>
        </Checkbox>
        <Button
          type="submit"
          appearance="primary"
          size="lg"
          style={{ marginTop: "2rem", marginBottom: "1rem" }}
          fullWidth
        >
          Zarejestruj się
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
        Masz już konto? <GreenLink href="login">Zaloguj się</GreenLink>
      </QuestionBottom>
    </>
  );
}
