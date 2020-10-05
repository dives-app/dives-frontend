import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Button } from "../components/Button";
import Link from "next/link";
import styled from "styled-components";

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
        <img src="/logo.svg" alt="Dives Logo" className={styles.logo} />
        <p className={styles.wipText}>work in progress</p>
        <Flex>
          <Link href="login">
            <Button
              label="Log in"
              primary={true}
              style={{ marginRight: "0.5rem" }}
            />
          </Link>
          <Link href="signup">
            <Button label="Sign up" primary={true} />
          </Link>
        </Flex>
        <p>🚧 🚧 🚧</p>
      </main>
    </div>
  );
}
