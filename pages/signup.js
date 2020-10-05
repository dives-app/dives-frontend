import Head from "next/head";
import { Button } from "../components/Button";
import styled from "styled-components";
import { Input } from "../components/Input";

const Wrapper = styled.main`
  display: flex;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
`;

const BoxWhite = styled.section`
  flex: 1 0;
  background-color: ${({ theme }) => theme.colors.white};
  box-sizing: border-box;
  overflow: auto;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    flex: 2 0;
  }
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex: 3 0;
  }
`;

const LogoContainer = styled.div`
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

const RegisterForm = styled.div`
  margin: 70px 85px;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 40px 35px;
  }
`;

const BoxGreen = styled.div`
  flex: 2 0;
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
          <RegisterForm>
            <LogoContainer>
              <img src="/logo-horizontal.svg" alt="Dives Logo" />
            </LogoContainer>
            <Title>Zarejestruj się</Title>
            <InputGroup>
              <Input id="name" label="Imię" />
              <Input id="email" label="Adres e-mail" />
              <Input id="password" label="Hasło" type="password" />
            </InputGroup>
            <p>tu bedzie checkbox</p>
            <Button label="Zarejestruj się" primary style={{ width: "100%" }} />
            <p>Zaloguj z Google</p>
            <p>Masz już konto? Zaloguj się</p>
          </RegisterForm>
        </BoxWhite>
        <BoxGreen />
      </Wrapper>
    </>
  );
}
