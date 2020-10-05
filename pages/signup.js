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
`;

const Title = styled.h1`
  margin-top: 6rem;
  margin-bottom: 4.3rem;
  font-size: 3.2rem;
`;

const InputGroup = styled.div`
  & > *:not(:first-child) {
    margin-top: 4.3rem;
  }
`;

const RegisterForm = styled.div`
  margin: 70px 85px;
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
            <img src="/logo-horizontal.svg" alt="Dives Logo" />
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
