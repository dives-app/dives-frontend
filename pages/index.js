import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Button } from "../components/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>🚧 Dives</title>
      </Head>

      <main className={styles.main}>
        <img src="/logo.svg" alt="Dives Logo" className={styles.logo} />
        <p className={styles.wipText}>work in progress</p>
        <Button label="Sample Button" primary={true} />
        <p>🚧 🚧 🚧</p>
      </main>
    </div>
  );
}
