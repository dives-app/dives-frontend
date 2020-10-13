import Head from "next/head";
import { Button } from "../components/Button";
import styled from "styled-components";
import { Input } from "../components/Input";
import Link from "next/link";
import React from "react";
import { Checkbox } from "../components/Checkbox";
import { GreenLink } from "../components/GreenLink";

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: minmax(500px, min-content) auto;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: auto;
  }
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
`;

const BoxWhite = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  box-sizing: border-box;
  overflow: auto;

  padding: 70px 85px;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 40px 35px;
  }
`;

const LogoA = styled.a`
  display: flex;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  margin-top: 6rem;
  margin-bottom: 4.3rem;
  font-size: 3.2rem;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

const InputGroup = styled.div`
  & > *:not(:first-child) {
    margin-top: 4.3rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    & > *:first-child {
      margin-top: 5rem;
    }
  }
`;

const BoxGreen = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  overflow: hidden;
  background: linear-gradient(90deg, #93d9b6 0%, #70cc9e 100%), #ffffff;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const QuestionBottom = styled.p`
  text-align: center;
  margin: 1.2rem 0;
  font-size: 1.4rem;
`;

export default function Signup() {
  return (
    <>
      <Head>
        <title>Załóż konto w Dives</title>
      </Head>
      <Wrapper>
        <BoxWhite>
          <Link href="/" passHref>
            <LogoA>
              <img
                src="/logo-horizontal.svg"
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
          <Checkbox id="tos" style={{ margin: "2rem 0" }}>
            Zapoznałem się i akceptuję{" "}
            <GreenLink href="tos">Regulamin</GreenLink> oraz{" "}
            <GreenLink href="privacy">Politykę prywatności</GreenLink>
          </Checkbox>
          <Button
            appearance="primary"
            size="lg"
            style={{ marginBottom: "1rem" }}
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
        </BoxWhite>
        <BoxGreen>
          <img
            src="/calc-and-calendar.svg"
            alt="Calc and calendar"
            draggable={false}
          />
        </BoxGreen>
      </Wrapper>
    </>
  );
}
