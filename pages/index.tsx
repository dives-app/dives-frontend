import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Link, Flex } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";

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
          <NextLink href="login" passHref>
            <Link mr="1rem" color="white">
              Log in
            </Link>
          </NextLink>
          <NextLink href="login" passHref>
            <Link color="white">Sign up</Link>
          </NextLink>
        </Flex>
        <p>🚧 🚧 🚧</p>
      </main>
    </div>
  );
}
