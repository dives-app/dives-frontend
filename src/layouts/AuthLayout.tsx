import styled from "styled-components";
import React from "react";
import Image from "next/image";
import { Text } from "@chakra-ui/react";

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

export const LogoA = styled.a`
  display: flex;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    justify-content: center;
  }
`;

export const Title = styled.h1`
  margin-top: 6rem;
  margin-bottom: 4.3rem;
  font-family: ${({ theme }) => theme.fonts.work};
  font-size: 3.2rem;
  color: ${({ theme }) => theme.colors.brightBlack};

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const InputGroup = styled.div`
  & > *:not(:first-child) {
    margin-top: 4.3rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    & > *:first-child {
      margin-top: 5rem;
    }
  }
`;

export const QuestionBottom = ({ children }: React.PropsWithChildren<{}>) => (
  <Text textAlign="center" my="1.2rem" fontSize="1.4rem">
    {children}
  </Text>
);

export default function AuthLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Wrapper>
        <BoxWhite>{children}</BoxWhite>
        <BoxGreen>
          <Image
            src="/calc-and-calendar.svg"
            alt="Calc and calendar"
            width="500"
            height="500"
            draggable={false}
          />
        </BoxGreen>
      </Wrapper>
    </>
  );
}
