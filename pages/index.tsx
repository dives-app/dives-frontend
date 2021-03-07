import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Button } from "../components/Button";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

const Flex = styled.div`
  display: flex;
`;

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>🚧 Dives</title>
      </Head>

      <main className={styles.main}>
        <Image
          src="/logo.svg"
          draggable="false"
          alt="Dives Logo"
          width={100}
          height={128}
          className={styles.logo}
        />
        <p className={styles.wipText}>work in progress</p>
        <Flex>
          <Link href="login" passHref>
            <Button
              as="a"
              appearance="primary"
              style={{ marginRight: "0.5rem" }}
            >
              Log in
            </Button>
          </Link>
          <Link href="signup" passHref>
            <Button as="a" appearance="primary">
              Sign up
            </Button>
          </Link>
        </Flex>
        <p>🚧 🚧 🚧</p>
      </main>
    </div>
  );
}
