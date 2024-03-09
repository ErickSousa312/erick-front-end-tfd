import Head from 'next/head';
import SideBar from './SideBar';

import styles from '@/styles/default_layout/MainContainer.module.css';

export default function MainView({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>TFD</title>
        <meta name="keywords" content="Sistema TFD"></meta>
        <meta name="description" content="Sistema TFD Marabá"></meta>
      </Head>

      <main className={styles.main}>
        <SideBar />
        <div className={styles.container}>{children}</div>
      </main>
    </>
  );
}
