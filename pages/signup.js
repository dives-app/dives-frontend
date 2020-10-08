import Head from "next/head";
import { Button } from "../components/Button";
import styled from "styled-components";
import { Input } from "../components/Input";
import Link from "next/link";
import React from "react";
import { Checkbox } from "../components/Checkbox";

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: minmax(500px, max-content) auto;
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

export default function Signup() {
  return (
    <>
      <Head>
        <title>Załóż konto w Dives</title>
      </Head>
      <Wrapper>
        <BoxWhite>
          <Link href="/">
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
          <Checkbox
            label="Zapoznałem się i akceptuję Regulamin oraz Politykę prywatności"
            style={{ margin: "2rem 0" }}
          />
          <Button
            label="Zarejestruj się"
            appearance="primary"
            size="lg"
            style={{ width: "100%", marginBottom: "1rem" }}
          />
          <Button
            label="Zaloguj z Google"
            appearance="secondaryOutlined"
            size="lg"
            iconLeft={
              <img src="google-icon.svg" alt="Google Icon" draggable={false} />
            }
            style={{ width: "100%" }}
          />
          <p>Masz już konto? Zaloguj się</p>
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
